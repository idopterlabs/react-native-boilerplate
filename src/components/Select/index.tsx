import React, { useState } from 'react';

import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types';

import ListEmptyLabel from './ListEmptyLabel';

import {
  ErrorMessage,
  Dropdown,
  LabelText,
  AlertText,
  ContainerView,
  FixLabelBackgroundView,
  LabelBackgroundView,
  PlaceholderText,
} from './styles';

interface Props {
  control?: Control<any>;
  label?: string;
  placeholder?: string;
  name?: string;
  rules?: {
    required?: boolean;
  };
  param?: string;
  defaultValue?: string;
  hasError?: boolean;
  onChangeText?: any;
  errorMessage?: string;
  icon?: string;
  data: Array<any>;
  labelField: string;
  valueField: string;
  keyItem?: string;
  onValueChange?: any;
  isDisabled?: boolean;
  maxHeight?: number;
  placeholderTextColor?: string;
  testID?: string;
  isShowRequired?: boolean;
}

export default ({
  control,
  name,
  rules,
  param,
  hasError,
  errorMessage,
  data,
  label,
  labelField,
  valueField,
  keyItem,
  onValueChange,
  isDisabled,
  testID,
  isShowRequired = false,
  ...rest
}: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [currentValue, setNewValue] = useState<string>('');

  if (rest.placeholder) {
    // @ts-ignore
    rest.placeholder = (
      <PlaceholderText>
        {rest.placeholder}
        {isShowRequired && <AlertText>*</AlertText>}
      </PlaceholderText>
    );
  }

  return (
    <ContainerView>
      {control && name ? (
        <>
          {label && (isFocus || currentValue !== '') && (
            <LabelBackgroundView>
              <FixLabelBackgroundView />
              <LabelText
                isFocus={isFocus ? true : false}
                isDisabled={isDisabled ? true : false}
                hasError={hasError ? true : false}>
                {label}
                {isShowRequired && <AlertText>*</AlertText>}
              </LabelText>
            </LabelBackgroundView>
          )}
          <Controller
            control={control}
            render={
              /* istanbul ignore next */ ({ field: { onChange, value } }) => {
                return (
                  <>
                    <Dropdown
                      {...rest}
                      itemTestIDField={'itemTestIDField'}
                      testID={testID}
                      flatListProps={{
                        ListEmptyComponent: ListEmptyLabel({ isSelect: true }),
                      }}
                      isDisabled={isDisabled ? true : false}
                      isFocus={isFocus}
                      hasError={hasError ? true : false}
                      data={data}
                      labelField={labelField}
                      valueField={valueField}
                      value={value}
                      onChange={
                        /* istanbul ignore next */ (option: {
                          [x: string]: any;
                          value: React.SetStateAction<string>;
                        }) => {
                          if (onValueChange) {
                            onValueChange(option);
                          }

                          setNewValue(keyItem ? option[keyItem] : option.value);
                          keyItem
                            ? onChange(option[keyItem])
                            : onChange(option.value);
                          setIsFocus(false);
                        }
                      }
                      onFocus={
                        /* istanbul ignore next */ () => setIsFocus(true)
                      }
                      onBlur={
                        /* istanbul ignore next */ () => setIsFocus(false)
                      }
                    />
                  </>
                );
              }
            }
            name={name}
            rules={rules}
            defaultValue={param}
          />
          {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </>
      ) : (
        <Dropdown
          {...rest}
          itemTestIDField={'itemTestIDField'}
          testID={testID}
          flatListProps={{
            ListEmptyComponent: ListEmptyLabel({ isSelect: true }),
          }}
          isDisabled={isDisabled ? true : false}
          isFocus={isFocus}
          hasError={hasError ? true : false}
          data={data}
          labelField={labelField}
          valueField={valueField}
          onChange={
            /* istanbul ignore next */ (option: {
              [x: string]: any;
              value: React.SetStateAction<string>;
            }) => {
              if (onValueChange) {
                onValueChange(option);
              }

              setNewValue(keyItem ? option[keyItem] : option.value);
              setIsFocus(false);
            }
          }
          onFocus={/* istanbul ignore next */ () => setIsFocus(true)}
          onBlur={/* istanbul ignore next */ () => setIsFocus(false)}
        />
      )}
    </ContainerView>
  );
};
