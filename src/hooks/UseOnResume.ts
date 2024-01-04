import { useEffect, useRef } from 'react';

import { AppState, AppStateStatus } from 'react-native';

import { Callback } from '@typings/common';

const useOnResume = (onResumeApp: Callback) => {
  const appState = useRef<AppStateStatus>(AppState.currentState);

  useEffect(
    () => {
      const subscription = AppState.addEventListener(
        'change',
        (nextAppState) => {
          if (
            appState.current.match(/inactive|background/) &&
            nextAppState === 'active'
          ) {
            onResumeApp();
          }

          appState.current = nextAppState;
        },
      );

      return () => {
        subscription.remove();
      };
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
};

export default useOnResume;
