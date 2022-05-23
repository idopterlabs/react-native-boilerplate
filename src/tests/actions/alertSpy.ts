import { Alert, AlertButton } from 'react-native';

export interface MockAlertActions {
  pressAlertButton(text: string): Promise<void>;
}

export type MockedCall = Readonly<[string, string, ReadonlyArray<AlertButton>]>;

export const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => {});

export const onAlertActions = (): MockAlertActions => {
  let dismissedCalls: ReadonlyArray<MockedCall> = [];
  return {
    pressAlertButton: async (text: string): Promise<void> => {
      // @ts-ignore
      const unhandledCalls = Alert.alert.mock.calls.slice();
      dismissedCalls.forEach((call) => {
        const index = unhandledCalls.indexOf(call);
        dismissedCalls = dismissedCalls.filter((_, i) => i !== index);
      });

      if (unhandledCalls.length === 0) {
        throw new Error('No pending calls to alert');
      }

      const mostRecentCall = unhandledCalls[unhandledCalls.length - 1];

      const targetButton = mostRecentCall[2].find(
        (button: AlertButton) => button.text === text,
      );

      if (!targetButton) {
        throw new Error(`No button with text ${text}`);
      }

      if (targetButton.onPress) {
        await targetButton.onPress();
      }

      dismissedCalls = [...dismissedCalls, mostRecentCall];
    },
  };
};

export default {
  alertSpy,
  onAlertActions,
};
