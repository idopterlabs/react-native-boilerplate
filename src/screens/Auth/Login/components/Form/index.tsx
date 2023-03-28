import React, { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';

import { states } from '@utils/lists';

import { Input, LoginButton, FormView, Select } from './styles';
import { useValidationSchema, FormInputs } from './useValidationSchema';

interface Props {
  onSubmit: (data: FormInputs) => void;
}

export const Form = ({ onSubmit }: Props) => {
  const { validationSchema } = useValidationSchema();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({ resolver: yupResolver(validationSchema) });

  const [form] = useState<FormInputs>({
    handle: '',
    state: '',
  });

  return (
    <FormView>
      <Input
        testID="textInput:handle"
        name="handle"
        control={control}
        param={form.handle}
        label="Usuário"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
        hasError={errors?.handle?.message ? true : false}
        errorMessage={errors?.handle?.message}
      />
      <Select
        testID="selectInput:state"
        data={states}
        name="state"
        placeholder="Seu estado"
        labelField="label"
        valueField="value"
        control={control}
        param={form.state}
        hasError={errors?.state?.message ? true : false}
        errorMessage={errors?.state?.message}
      />

      <LoginButton icon={'login'} onPress={handleSubmit(onSubmit)}>
        Entrar
      </LoginButton>
    </FormView>
  );
};
