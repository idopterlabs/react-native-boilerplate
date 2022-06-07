import { cleanup } from '@testing-library/react-native';
import { AxiosError } from 'axios';

import { alertSpy } from '@tests/actions/alertSpy';

import { ErrorResponse, GetErrorResponse } from './responseService';

describe('Response Service', () => {
  beforeEach(() => {
    cleanup();
    alertSpy.mockClear();
  });

  afterEach(cleanup);

  it('should return the unavailable server error when response is undefined', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: undefined,
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, '');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError(
      'Servidor indisponível, tente mais tarde',
    );
  });

  it('should return the status check error when status is inexistent or unmapped', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 700,
        data: {},
      },
      config: {},
      code: '700',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError(
      'Erro de verificação do status da requisição',
    );
  });

  it('should return the api specific error when a request return status 400', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 400,
        data: 'Status 400 error message',
      },
      config: {},
      code: '400',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError('Status 400 error message');
  });

  it('should return the api specific error when data.errors is exist (variation 1)', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 400,
        data: { errors: 'Status 400 message error' },
      },
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError('Status 400 message error');
  });

  it('should return the api specific error when data.errors is exist (status 401)', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 401,
        data: 'Status 401 message error',
      },
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError('Status 401 message error');
  });

  it('should return the GetErrorResponse specific error when data.errors is exist (status 422)', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 422,
        data: 'Status 422 message error',
      },
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError(
      'Não foi possível processar as instruções presentes. Tente novamente mais tarde',
    );
  });

  it('should return the GetErrorResponse default error when a request return status 400', async () => {
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

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError('Default error');
  });

  it('should return the GetErrorResponse specific error when a request return status 403', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 403,
        data: { detail: 'Status 403 message error' },
      },
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError('Não autorizado');
  });

  it('should return the GetErrorResponse specific error when a request return status 404', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 404,
        data: { detail: 'Status 404 message error' },
      },
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError('Item não encontrado');
  });

  it('should return the GetErrorResponse specific error when a request return status 500', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 500,
        data: { detail: 'Status 500 message error' },
      },
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError(
      'Houve um problema no servidor. Default error',
    );
  });

  it('should return the GetErrorResponse specific error when a request return status 503', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 503,
        data: { detail: 'Status 503 message error' },
      },
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError(
      'Servidor indisponível. Tente novamente mais tarde',
    );
  });

  it('should return the specific error when a response is invalid', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      // @ts-ignore
      response: false,
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError(
      'Servidor indisponível, tente mais tarde',
    );
  });

  it('should return the generic error when a response is data is not exit', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 400,
        data: undefined,
      },
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError('Default error');
  });

  it('should return the error when a response has array with single error', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 400,
        data: {
          errors: ['test error 1'],
        },
      },
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError('test error 1');
  });

  it('should return the error when a response has array with errors', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 400,
        data: {
          errors: ['test error 1', 'test error 2', 'test error 3'],
        },
      },
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError(
      'test error 1\ntest error 2\ntest error 3',
    );
  });

  it('should return the error when a response has errors in object', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 400,
        data: {
          errors: {
            cpf: ['test error 1', 'test error 2'],
          },
        },
      },
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError('cpf: test error 1');
  });

  it('should return the error when a response has errors in object "message"', async () => {
    const error: AxiosError<any, any> = {
      name: '',
      message: '',
      response: {
        headers: {},
        config: {},
        statusText: '',
        status: 400,
        data: {
          message: {
            cpf: ['test error 1', 'test error 2'],
          },
        },
      },
      config: {},
      code: '001',
      request: {},
      isAxiosError: true,
      toJSON: () => ({} as object),
    };

    const errorFunction = () => {
      throw GetErrorResponse(error, 'Default error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError('cpf: test error 1');
  });

  it('should return the specific error (ErrorResponse) with the message', async () => {
    const errorFunction = () => {
      throw new ErrorResponse('Message error');
    };

    expect(errorFunction).toThrow(ErrorResponse);
    expect(errorFunction).toThrowError('Message error');
  });

  it('should return the specific error (ErrorResponse) with the alert message', async () => {
    const error = new ErrorResponse('Message error');
    error.alert('Title error');

    expect(alertSpy).toHaveBeenLastCalledWith('Title error', 'Message error');
  });

  it('should return the specific error (ErrorResponse) with the alert message and callback action', async () => {
    const callback = () => {};
    const error = new ErrorResponse('Message error', callback);
    error.alert('Title error');

    expect(alertSpy).toHaveBeenLastCalledWith(
      'Title error',
      'Message error',
      [{ onPress: callback, text: 'OK' }],
      { cancelable: false },
    );
  });

  it('should return the specific error (ErrorResponse) with the message used .toString()', async () => {
    const callback = () => {};
    const error = new ErrorResponse('Message error', callback);

    expect(error.toString()).toBe('AxiosErrorResponse: Message error');
  });
});
