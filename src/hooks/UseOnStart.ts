import { useEffect } from 'react';

import { useIsFocused } from '@react-navigation/native';

import { Callback } from '@typings/common';

const useOnStart = (onStartScreen: Callback) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      onStartScreen();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return isFocused;
};

export default useOnStart;
