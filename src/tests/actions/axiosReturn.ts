import { AxiosError, AxiosResponse } from 'axios';
import { MockableFunction, mocked, MockedFunction } from 'jest-mock';

import { GetErrorResponse } from '@services/responseService';

export interface AxiosMock {
  response: AxiosResponse<any, any>;
  mock: MockedFunction<MockableFunction>;
}

export const createAxiosMock = (
  method: MockableFunction,
  response: AxiosResponse,
  isSuccess: boolean = true,
): AxiosMock => {
  if (isSuccess) {
    const mock = mocked(method).mockResolvedValue(response);
    mock.mockClear();

    return {
      response,
      mock,
    };
  }

  const genericError = 'Não foi possível obter dados';
  const error: AxiosError<any, any> = {
    name: '',
    message: '',
    response: {
      headers: {},
      config: {},
      statusText: '',
      status: 400,
      data: [],
    },
    config: {},
    code: '001',
    request: {},
    isAxiosError: true,
    toJSON: () => ({} as object),
  };
  const callback = () => {};

  const mock = mocked(method).mockRejectedValue(
    GetErrorResponse(error, genericError, callback),
  );
  mock.mockClear();

  return {
    response,
    mock,
  };
};
