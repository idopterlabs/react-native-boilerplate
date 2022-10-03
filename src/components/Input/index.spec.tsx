import React, { useRef } from 'react';

import { useForm } from 'react-hook-form';

import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import theme from '@theme/index';

import { shadowTheme } from '@tests/actions/styledTheme';

import Input from './index';

jest.useFakeTimers('legacy');

describe('Input component', () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it('should render Input component correctly', () => {
    render(shadowTheme(<Input placeholder="Test placeholder" />));
    render(
      shadowTheme(
        <Input placeholder="Test placeholder" isPasswordInput={true} />,
      ),
    );
  });

  it('should render Input component correctly with control', () => {
    const Component = () => {
      const { control } = useForm<{
        test: string;
      }>();

      const testParam = '';

      return (
        <Input
          placeholder="Test placeholder"
          control={control}
          name="test"
          param={testParam}
        />
      );
    };

    render(shadowTheme(<Component />));
  });

  it('should render Input component correctly and use onFocus and onBlur', async () => {
    const Component = () => {
      return (
        <Input testID="Input:textInput:input" placeholder="Test placeholder" />
      );
    };

    const { getByTestId } = render(shadowTheme(<Component />));

    await waitFor(async () => {
      const InputTextField = getByTestId('Input:textInput:input');

      await fireEvent(InputTextField, 'onFocus');
      await fireEvent.changeText(InputTextField, 'test password');
      await fireEvent(InputTextField, 'onBlur');
    });
  });

  it('should render Input component correctly with control and use onFocus and onBlur', async () => {
    const Component = () => {
      const { control } = useForm<{
        test: string;
      }>();

      const testParam = '';

      return (
        <Input
          testID="Input:textInput:input"
          placeholder="Test placeholder"
          control={control}
          name="test"
          param={testParam}
        />
      );
    };

    const { getByTestId } = render(shadowTheme(<Component />));

    await waitFor(async () => {
      const InputTextField = getByTestId('Input:textInput:input');

      await fireEvent(InputTextField, 'onFocus');
      await fireEvent.changeText(InputTextField, 'test password');
      await fireEvent(InputTextField, 'onBlur');
    });
  });

  it('should render Input component correctly and use onFocus and onBlur with inputRef', async () => {
    const Component = () => {
      const inputRef = useRef(null);

      return (
        <Input
          testID="Input:textInput:input"
          placeholder="Test placeholder"
          inputRef={inputRef}
        />
      );
    };

    const { getByTestId } = render(shadowTheme(<Component />));

    await waitFor(async () => {
      const InputTextField = getByTestId('Input:textInput:input');

      await fireEvent(InputTextField, 'onFocus');
      await fireEvent.changeText(InputTextField, 'test password');
      await fireEvent(InputTextField, 'onBlur');
    });
  });

  it('should render Input component correctly with control and use onFocus and onBlur with InputRef', async () => {
    const Component = () => {
      const inputRef = useRef(null);

      const { control } = useForm<{
        test: string;
      }>();

      const testParam = '';

      return (
        <Input
          testID="Input:textInput:input"
          placeholder="Test placeholder"
          control={control}
          name="test"
          param={testParam}
          inputRef={inputRef}
        />
      );
    };

    const { getByTestId } = render(shadowTheme(<Component />));

    await waitFor(async () => {
      const InputTextField = getByTestId('Input:textInput:input');

      await fireEvent(InputTextField, 'onFocus');
      await fireEvent.changeText(InputTextField, 'test password');
      await fireEvent(InputTextField, 'onBlur');
    });
  });

  it('should render Input component with icon', () => {
    const { getByRole } = render(
      shadowTheme(
        <Input
          placeholder="Test placeholder"
          name={'input-test'}
          icon="home"
        />,
      ),
    );

    const IconComponent = getByRole('button');

    expect(IconComponent).not.toBeUndefined();
  });

  it('should render Input component with icon and errorMessage and attention color', () => {
    const { getByRole, getByText } = render(
      shadowTheme(
        <Input
          placeholder="Test placeholder"
          name={'input-test'}
          icon="home"
          errorMessage="Test error"
          hasError={true}
        />,
      ),
    );

    const IconComponent = getByRole('button').parent as any;
    const IconComponentColor =
      IconComponent!.children[0].props.children[0].props.children.props.color;

    getByText('Test error');
    expect(IconComponentColor).toEqual(theme.colors.light.attention);
  });

  it('should render Input component with disabled icon and with disabled color', () => {
    const { getByRole } = render(
      shadowTheme(
        <Input
          placeholder="Test placeholder"
          name={'input-test'}
          icon="home"
          isDisabled={true}
        />,
      ),
    );

    const IconComponent = getByRole('button') as any;

    expect(IconComponent).toBeDisabled();
    expect(IconComponent).not.toBeUndefined();
  });

  it('should render Input component with enabled icon', async () => {
    const { getByRole } = render(
      shadowTheme(
        <Input
          testID="Input:textInput:input"
          placeholder="Test placeholder"
          name={'input-test'}
          icon="home"
          isDisabled={false}
        />,
      ),
    );

    const IconComponent = getByRole('button') as any;

    const IconComponentColor =
      IconComponent.parent.children[0].props.children[0].props.children.props
        .color;

    expect(IconComponent).not.toBeDisabled();
    expect(IconComponent).not.toBeUndefined();
    expect(IconComponentColor).toEqual(theme.colors.light.primary);
  });

  it('should render Input component with password eye icon', async () => {
    const Component = () => {
      const inputRef = useRef(null);

      return (
        <Input
          testID="Input:textInput:input"
          placeholder="Test placeholder"
          name={'password'}
          isPasswordInput
          inputRef={inputRef}
        />
      );
    };

    const { getByTestId } = render(shadowTheme(<Component />));

    await act(async () => {
      const InputTextField = getByTestId('Input:textInput:input');

      await fireEvent.changeText(InputTextField, 'test password');
    });
    const InputTextField = getByTestId('Input:textInput:input');

    expect(InputTextField.props.secureTextEntry).toBeTruthy();
  });

  it('should render Input component with password eye icon and show password', async () => {
    const Component = () => {
      const inputRef = useRef(null);

      return (
        <Input
          testID="Input:textInput:input"
          placeholder="Test placeholder"
          name={'password'}
          isPasswordInput
          inputRef={inputRef}
        />
      );
    };
    const { getByRole, getByTestId } = render(shadowTheme(<Component />));

    await act(async () => {
      const IconComponent = getByRole('button') as any;

      await fireEvent.press(IconComponent);
    });
    const InputTextField = getByTestId('Input:textInput:input');

    expect(InputTextField.props.secureTextEntry).toBeFalsy();
  });

  it('should render Input component with label and * required', async () => {
    const Component = () => {
      const inputRef = useRef(null);

      return (
        <Input
          label="Label Test Required"
          placeholder="Test placeholder"
          name={'input-test'}
          icon="home"
          isDisabled={false}
          isShowRequired={true}
          inputRef={inputRef}
        />
      );
    };

    render(shadowTheme(<Component />));
  });

  it('should render Input component correctly with control and use onChangeCustom', async () => {
    let testCustomValue = '';

    const Component = () => {
      const inputRef = useRef(null);

      const { control } = useForm<{
        test: string;
      }>();

      const testParam = '';

      return (
        <Input
          testID="Input:textInput:input"
          placeholder="Test placeholder"
          control={control}
          name="test"
          param={testParam}
          inputRef={inputRef}
          onChangeCustom={(text) => {
            testCustomValue = text;
          }}
        />
      );
    };

    const { getByTestId } = render(shadowTheme(<Component />));

    await waitFor(async () => {
      const InputTextField = getByTestId('Input:textInput:input');
      await fireEvent.changeText(InputTextField, 'test password');
    });

    expect(testCustomValue).toBe('test password');
  });
});
