import React from 'react';
import { TextInput as TextInputRN, TextInputProps } from 'react-native';

import { Control } from 'react-hook-form/dist/types';
import { RenderProps } from 'react-native-paper/lib/typescript/components/TextInput/types';

import { Callback } from '@typings/common';

import {
  FormController,
  ErrorMessageText,
  ContainerTextInput,
  getColorIcon,
  AlertText,
  LabelText,
} from './styles';

export interface Props extends Omit<TextInputProps, 'mode'> {
  inputRef?: React.RefObject<TextInputRN>;
  control?: Control<any>;
  name?: string;
  param?: string;
  errorMessage?: string;
  icon?: string;
  iconForceColor?: string;
  onPressIcon?: Callback;
  selectionColor?: string;
  isDisabled?: boolean;
  render?: (props: RenderProps) => React.ReactNode;
  hasError?: boolean;
  mode?: 'flat' | 'outlined' | undefined;
  label?: string;
  dense?: boolean;
  isPasswordInput?: boolean;
  isShowRequired?: boolean;
  onChangeCustom?: (text: string) => void;
}

const TextInput = ({
  inputRef,
  render,
  control,
  name,
  param,
  errorMessage,
  icon,
  iconForceColor,
  onPressIcon,
  isDisabled = false,
  hasError = false,
  isPasswordInput = false,
  isShowRequired = false,
  onChangeCustom,
  ...props
}: Props) => {
  const [isShowPassword, setPasswordShow] = React.useState<boolean>(
    !isPasswordInput,
  );
  const [isFocus, setIsFocus] = React.useState<boolean>(false);

  const RightIcon = (): JSX.Element | null => {
    if (isPasswordInput) {
      return (
        <ContainerTextInput.Icon
          name={isShowPassword ? 'eye-outline' : 'eye-off-outline'}
          onPress={() => setPasswordShow(!isShowPassword)}
          disabled={isDisabled}
          size={25}
        />
      );
    }

    return icon ? (
      <ContainerTextInput.Icon
        onPress={onPressIcon}
        name={icon}
        disabled={isDisabled}
        color={iconForceColor || getColorIcon(hasError, isDisabled)}
        size={25}
      />
    ) : null;
  };

  const textInputOptions: Props = { ...props };
  if (isPasswordInput) {
    textInputOptions.autoComplete = 'password';
    textInputOptions.spellCheck = false;
    textInputOptions.autoCorrect = false;
    textInputOptions.secureTextEntry = !isShowPassword;
    textInputOptions.autoCapitalize = undefined;
  } else if (
    !textInputOptions.autoCapitalize &&
    textInputOptions.autoCapitalize !== undefined
  ) {
    textInputOptions.autoCapitalize = 'words';
  }

  if (textInputOptions.label) {
    // @ts-ignore
    textInputOptions.label = (
      <LabelText
        isFocus={isFocus || !!textInputOptions.value}
        isDisabled={isDisabled}
        hasError={hasError}>
        {textInputOptions.label}
        {isShowRequired && <AlertText>*</AlertText>}
      </LabelText>
    );
  }

  return (
    <>
      {control && name ? (
        <>
          <FormController
            control={control}
            render={
              /* istanbul ignore next */ ({
                field: { onChange, onBlur, value },
              }) => {
                return inputRef ? (
                  <ContainerTextInput
                    ref={inputRef}
                    render={render}
                    value={value}
                    defaultValue={param}
                    onChangeText={(text) => {
                      onChange(text);
                      onChangeCustom && onChangeCustom(text);
                    }}
                    onBlur={() => {
                      setIsFocus(false);
                      onBlur();
                    }}
                    onFocus={() => {
                      setIsFocus(true);
                    }}
                    right={RightIcon()}
                    error={hasError}
                    disabled={isDisabled}
                    {...textInputOptions}
                  />
                ) : (
                  <ContainerTextInput
                    render={render}
                    value={value}
                    defaultValue={param}
                    onChangeText={(text) => {
                      onChange(text);
                      onChangeCustom && onChangeCustom(text);
                    }}
                    onBlur={() => {
                      setIsFocus(false);
                      onBlur();
                    }}
                    onFocus={() => {
                      setIsFocus(true);
                    }}
                    right={RightIcon()}
                    error={hasError}
                    disabled={isDisabled}
                    {...textInputOptions}
                  />
                );
              }
            }
            name={name}
            defaultValue={param}
          />
          {!!errorMessage && hasError && (
            <ErrorMessageText>{errorMessage}</ErrorMessageText>
          )}
        </>
      ) : (
        <>
          {inputRef ? (
            <ContainerTextInput
              render={render}
              onBlur={() => {
                setIsFocus(false);
              }}
              onFocus={() => {
                setIsFocus(true);
              }}
              right={RightIcon()}
              error={hasError}
              ref={inputRef}
              {...textInputOptions}
            />
          ) : (
            <ContainerTextInput
              render={render}
              onBlur={() => {
                setIsFocus(false);
              }}
              onFocus={() => {
                setIsFocus(true);
              }}
              right={RightIcon()}
              error={hasError}
              {...textInputOptions}
            />
          )}
          {!!errorMessage && hasError && (
            <ErrorMessageText>{errorMessage}</ErrorMessageText>
          )}
        </>
      )}
    </>
  );
};

export default TextInput;
