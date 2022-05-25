import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AppStackRouter } from '@typings/routes';
import { ParamsExampleMethodName } from '@typings/requests';

import { states } from '@utils/statesList';

import { exampleMethodName } from '@services/api';

import { extractPhoneNumber } from '@utils/normalization';

import { FormInputs, useValidationSchema } from './useValidationSchema';

import {
  ContainerScroll,
  Input,
  Select,
  MaskedTextInput,
  ContainerView,
  BoxInputView,
  ContainerBottomView,
  LoginButton,
  Loading,
} from './styles';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackRouter>>();

  const [isLoading, setLoading] = useState<boolean>(false);

  const [form] = useState<FormInputs>({
    phone: '',
    state: '',
  });

  const { validationSchema } = useValidationSchema();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({ resolver: yupResolver(validationSchema) });

  const onSubmit: SubmitHandler<FormInputs> = async (payload) => {
    const params: ParamsExampleMethodName = {
      phone: extractPhoneNumber(payload.phone),
      state: payload.state,
    };

    setLoading(true);
    await exampleMethodName(params)
      .then(() => {
        navigation.navigate('ddd');
      })
      .catch((error) => {
        error.alert('Não foi possível realizar o login');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <ContainerView>
      <ContainerScroll>
        <BoxInputView>
          <Input
            testID="login:textInput:phone"
            name="phone"
            control={control}
            param={form.phone}
            label="Telefone"
            placeholder="Telefone"
            keyboardType="phone-pad"
            hasError={errors?.phone?.message ? true : false}
            errorMessage={errors?.phone?.message}
            render={(props) => (
              <MaskedTextInput
                onChangeText={
                  props.onChangeText as (text: string, rawText: string) => void
                }
                {...props}
                mask="(99) 99999-9999"
                maxLength={16}
              />
            )}
          />
        </BoxInputView>
        <BoxInputView>
          <Select
            name="state"
            control={control}
            param={form.state}
            data={states}
            placeholder="Estado"
            labelField="label"
            valueField="value"
            hasError={errors?.state?.message ? true : false}
            errorMessage={errors?.state?.message}
            label="Estado"
          />
        </BoxInputView>
        <ContainerBottomView>
          {isLoading && <Loading />}
          {!isLoading && (
            <LoginButton onPress={handleSubmit(onSubmit)}>Entrar</LoginButton>
          )}
        </ContainerBottomView>
      </ContainerScroll>
    </ContainerView>
  );
};

export default Login;
