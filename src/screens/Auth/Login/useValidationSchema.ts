import * as Yup from 'yup';

export interface FormInputs {
  phone: string;
  state: string;
}

export const useValidationSchema = () => {
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required('Telefone é obrigatório')
      .min(14, 'Telefone inválido'),
    state: Yup.string().required('Estado é obrigatório'),
  });

  return { validationSchema };
};
