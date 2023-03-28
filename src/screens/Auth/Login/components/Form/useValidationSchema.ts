import * as Yup from 'yup';

export interface FormInputs {
  handle: string;
  state: string;
}

export const useValidationSchema = () => {
  const validationSchema = Yup.object().shape({
    handle: Yup.string()
      .required('Usuário é obrigatório')
      .min(2, 'Usuário inválido'),
    state: Yup.string().required('Estado é obrigatório'),
  });

  return { validationSchema };
};
