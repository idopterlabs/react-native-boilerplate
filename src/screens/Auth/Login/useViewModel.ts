import { useState } from 'react';

import { SubmitHandler } from 'react-hook-form';

import { useAuth } from '@contexts/AuthContext';
import { exampleMethodName as exampleService } from '@services/api';
import { ErrorResponse } from '@services/responseService';
import { ParamsExampleMethodName } from '@typings/requests';

import { FormInputs } from './components/Form/useValidationSchema';

export const useViewModel = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { saveUser } = useAuth();

  const handleSubmit: SubmitHandler<FormInputs> = async (payload) => {
    setLoading(true);

    const params: ParamsExampleMethodName = payload;

    await exampleService(params)
      .then(() => {
        // TODO: implement login method and call saveUser(...)
      })
      .catch((error: ErrorResponse) => {
        error.alert('Não foi possível realizar o login');
      })
      .finally(() => setLoading(false));

    // Example use saveUser():
    saveUser({
      accessToken: '4c0393ae35e1.4fb787d.564f2d02eba0e.3c3237aba0944c0',
      idToken: '924af6cd-3e53-40dc-a89d-054cd90307a3',
    });
  };

  return {
    handleSubmit,
    isLoading,
  };
};
