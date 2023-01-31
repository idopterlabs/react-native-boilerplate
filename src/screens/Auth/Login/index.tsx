import React, { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import featuresFlag from '@configs/featuresFlag';

import { ParamsExampleMethodName } from '@typings/requests';

import { states } from '@utils/lists';

import { exampleMethodName } from '@services/api';

import { extractPhoneNumber } from '@utils/normalization';

import { useAuth } from '@contexts/AuthContext';

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
  LoadingIndicator,
  TitleText,
  LogoSvg,
} from './styles';

const Login = () => {
  const { saveUser } = useAuth();
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
        // TODO: implement login method and call saveUser(...);
      })
      .catch((error) => {
        error.alert('Não foi possível realizar o login');
      })
      .finally(() => {
        setLoading(false);
      });

    // Example use saveUser():
    saveUser({
      accessToken: '4c0393ae35e1.4fb787d.564f2d02eba0e.3c3237aba0944c0',
      idToken: '924af6cd-3e53-40dc-a89d-054cd90307a3',
    });
  };

  return (
    <ContainerView>
      <ContainerScroll>
        <TitleText>Bem-vindo</TitleText>
        {featuresFlag.logo && <LogoSvg />}
        <BoxInputView>
          <Input
            testID="textInput:phoneNumber"
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
            testID="select:state"
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
          {isLoading && <LoadingIndicator />}
          {!isLoading && (
            <LoginButton onPress={handleSubmit(onSubmit)}>Entrar</LoginButton>
          )}
        </ContainerBottomView>
      </ContainerScroll>
    </ContainerView>
  );
};

export default Login;
