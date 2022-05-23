import { Alert } from 'react-native';

import { cleanup } from '@testing-library/react-native';

import { ErrorResponse, statusResponse } from './responseService';

const alertSpy = jest
  .spyOn(Alert, 'alert')
  .mockImplementation((title, message, callbackOrButtons) => {
    if (callbackOrButtons && callbackOrButtons[0].onPress) {
      callbackOrButtons[0].onPress();
    }
  });

describe('Response Service', () => {
  beforeEach(cleanup);
  afterEach(() => {
    cleanup();
    alertSpy.mockClear();
  });

  it('should return the unavailable server error when response is undefined', async () => {
    const fakeApiReturn = {
      response: undefined,
    };
    const error = statusResponse(fakeApiReturn as any, '');

    expect(error.message).toBe('Servidor indisponível, tente mais tarde');
  });

  it('should return the unavailable server error when response is null', async () => {
    const fakeApiReturn = {
      response: false,
    };
    const error = statusResponse(fakeApiReturn as any, '');

    expect(error.message).toBe('Servidor indisponível, tente mais tarde');
  });

  it('should return the status check error when status is inexistent or unmapped', async () => {
    const fakeApiReturn = {
      response: {
        status: 700,
      },
    };
    const error = statusResponse(fakeApiReturn as any, '');

    expect(error.message).toBe('Erro de verificação do status da requisição');
  });

  it('should return the api specific error when a request return status 400', async () => {
    const fakeApiReturn = {
      response: {
        status: 400,
        data: 'Status 400 error message',
      },
    };
    const error = statusResponse(fakeApiReturn as any, '');

    expect(error.message).toBe('Status 400 error message');
  });

  it('should return the api specific error when data.errors is exist (variation 1)', async () => {
    const fakeApiReturn = {
      response: {
        status: 400,
        data: { errors: 'Status 400 message error' },
      },
    };
    const error = statusResponse(fakeApiReturn as any, '');

    expect(error.message).toBe('Status 400 message error');
  });

  it('should return the api specific error when data.errors is exist (status 401)', async () => {
    const fakeApiReturn = {
      response: {
        status: 401,
        data: 'Status 401 message error',
      },
    };
    const error = statusResponse(fakeApiReturn as any, '');

    expect(error.message).toBe('Status 401 message error');
  });

  it('should return the statusResponse specific error when data.errors is exist (status 422)', async () => {
    const fakeApiReturn = {
      response: {
        status: 422,
        data: 'Status 422 message error',
      },
    };
    const error = statusResponse(fakeApiReturn as any, '');

    expect(error.message).toBe(
      'Não foi possível processar as instruções presentes. Tente novamente mais tarde',
    );
  });

  it('should return the statusResponse default error when a request return status 400', async () => {
    const fakeApiReturn = {
      response: {
        status: 400,
        data: [],
      },
    };
    const error = statusResponse(fakeApiReturn as any, 'Default error');

    expect(error.message).toBe('Default error');
  });

  it('should return the statusResponse specific error when a request return status 403', async () => {
    const fakeApiReturn = {
      response: {
        status: 403,
        data: { detail: 'Status 403 message error' },
      },
    };
    const error = statusResponse(fakeApiReturn as any, '');

    expect(error.message).toBe('Não autorizado');
  });

  it('should return the statusResponse specific error when a request return status 404', async () => {
    const fakeApiReturn = {
      response: {
        status: 404,
        data: { detail: 'Status 404 message error' },
      },
    };
    const error = statusResponse(fakeApiReturn as any, '');

    expect(error.message).toBe('Item não encontrado');
  });

  it('should return the statusResponse specific error when a request return status 500', async () => {
    const fakeApiReturn = {
      response: {
        status: 500,
        data: { detail: 'Status 500 message error' },
      },
    };
    const error = statusResponse(
      fakeApiReturn as any,
      'Não foi possível realizar a consulta. Tente mais tarde',
    );

    expect(error.message).toBe(
      'Não foi possível realizar a consulta. Tente mais tarde',
    );
  });

  it('should return the statusResponse specific error when a request return status 503', async () => {
    const fakeApiReturn = {
      response: {
        status: 503,
        data: { detail: 'Status 503 message error' },
      },
    };
    const error = statusResponse(fakeApiReturn as any, '');

    expect(error.message).toBe(
      'Servidor indisponível. Tente novamente mais tarde',
    );
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
});
