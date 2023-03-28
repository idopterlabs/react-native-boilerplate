import { AxiosResponse } from 'axios';

import { exampleMethodName } from '@services/api';
import { createAxiosMock } from '@tests/actions/axiosReturn';

import { ResponseExampleMethodName } from '@typings/requests';

export const withSuccess = () => {
  const response: AxiosResponse<ResponseExampleMethodName, any> = {
    data: {},
    status: 200,
    headers: {},
    config: {},
    statusText: 'OK',
  };

  return createAxiosMock(exampleMethodName, response);
};

export const withFailed = () => {
  const response: AxiosResponse<ResponseExampleMethodName, any> = {
    data: {},
    status: 500,
    headers: {},
    config: {},
    statusText: 'OK',
  };

  return createAxiosMock(exampleMethodName, response, false);
};

export default {
  withSuccess,
  withFailed,
};
