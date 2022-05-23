import { AxiosResponse } from 'axios';
import { MockableFunction, mocked, MockedFunction } from 'jest-mock';

import { ErrorResponse } from '@services/responseService';

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
  const error = new Error(genericError);
  const callback = () => {};

  const mock = mocked(method).mockRejectedValue(
    new ErrorResponse(genericError, callback, error),
  );
  mock.mockClear();

  return {
    response,
    mock,
  };
};
