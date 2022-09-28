import React, { useImperativeHandle, useState } from 'react';

import { Callback } from '@typings/common';

import { Snackbar } from './styles';

export interface Handle {
  show(data: Data): void;
}

export interface Data {
  title: string;
  callback: Callback;
}

export interface Props {
  currentPosition?: 'top' | 'bottom';
}

const SnackbarError: React.ForwardRefRenderFunction<Handle, Props> = (
  { currentPosition = 'top' },
  forwardedRef,
) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<Data>({
    title: '',
    /* istanbul ignore next */
    callback: () => {},
  });

  /* istanbul ignore next */
  const onDismissSnackbar = () => {
    setVisible(false);
  };

  const show = (newDate: Data) => {
    setData(newDate);
    setVisible(true);
  };

  const handleRefCallback = () => {
    return {
      show,
    };
  };

  useImperativeHandle(forwardedRef, handleRefCallback);

  return (
    <Snackbar
      visible={isVisible}
      onDismiss={onDismissSnackbar}
      currentPosition={currentPosition}
      action={{
        label: 'Ver causa',
        onPress: data.callback,
      }}>
      {data.title}
    </Snackbar>
  );
};

export default React.forwardRef(SnackbarError);
