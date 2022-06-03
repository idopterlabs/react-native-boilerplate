import React from 'react';
import { TextInputProps } from 'react-native';

import { Control } from 'react-hook-form/dist/types';
import { RenderProps } from 'react-native-paper/lib/typescript/components/TextInput/types';

import theme from '@theme/index';

import { FormController, ErrorMessageText, ContainerTextInput } from './styles';
interface Props extends Omit<TextInputProps, 'mode'> {
  control?: Control<any>;
  name?: string;
  param?: string;
  errorMessage?: string;
  icon?: string;
  onPressIcon?: () => void;
  selectionColor?: string;
  disabled?: boolean;
  render?: (props: RenderProps) => React.ReactNode;
  hasError?: boolean;
  mode?: 'flat' | 'outlined' | undefined;
  label?: string;
  dense?: boolean;
}

const TextInput = ({
  render,
  control,
  name,
  param,
  errorMessage,
  icon,
  onPressIcon,
  disabled,
  hasError,
  ...props
}: Props) => {
  const RightIcon = (): JSX.Element | null => {
    return icon ? (
      <ContainerTextInput.Icon
        onPress={onPressIcon}
        name={icon}
        disabled={disabled}
        // TODO: convert to styled
        color={
          errorMessage
            ? theme.colors.light.attention
            : disabled
            ? 'gray'
            : theme.colors.light.primary
        }
        size={25}
      />
    ) : null;
  };

  return (
    <>
      {control && name ? (
        <>
          <FormController
            control={control}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <ContainerTextInput
                  render={render}
                  value={value}
                  defaultValue={param}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  right={RightIcon()}
                  error={hasError}
                  {...props}
                />
              );
            }}
            name={name}
            defaultValue={param}
          />
          {!!errorMessage && hasError && (
            <ErrorMessageText>{errorMessage}</ErrorMessageText>
          )}
        </>
      ) : (
        <>
          <ContainerTextInput
            render={render}
            right={RightIcon()}
            error={hasError}
            {...props}
          />
          {!!errorMessage && hasError && (
            <ErrorMessageText>{errorMessage}</ErrorMessageText>
          )}
        </>
      )}
    </>
  );
};

export default TextInput;
