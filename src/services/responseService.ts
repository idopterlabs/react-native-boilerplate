import { Alert } from 'react-native';

import { AxiosError, AxiosResponse } from 'axios';

import {
  DefaultChangesetError,
  ResponseDataWithError,
} from '@typings/requests';
import { Callback } from '@typings/common';

import { uppercaseFirstLetter } from '@utils/normalization';

const GetErrorResponse = (
  error: AxiosError<any, any>,
  genericErrorDescription: string,
  callback?: Callback,
): ErrorResponse => {
  if (error.response === undefined) {
    return new ErrorResponse(
      'Servidor indisponível, tente mais tarde',
      callback,
      error,
    );
  }

  const responseJsonTest = JSON.parse(JSON.stringify(error.response));
  if (!responseJsonTest) {
    return new ErrorResponse(
      'Servidor indisponível, tente mais tarde',
      callback,
      error,
    );
  }

  return verifyStatusResponse(error, genericErrorDescription, callback);
};

const verifyStatusResponse = (
  error: AxiosError<any, any>,
  genericErrorDescription: string,
  callback?: Callback,
): ErrorResponse => {
  const response: AxiosResponse<ResponseDataWithError, any> =
    error.response as AxiosResponse<ResponseDataWithError, any>;

  switch (response.status) {
    case 400:
    case 422:
    case 401:
      return new ErrorResponse(
        verifyDataResponse(response) || genericErrorDescription,
        callback,
        error,
      );
    case 403:
      return new ErrorResponse('Não autorizado', callback, error);
    case 404:
      return new ErrorResponse('Item não encontrado', callback, error);
    case 500:
      return new ErrorResponse(
        `Houve um problema no servidor. ${genericErrorDescription}`,
        callback,
        error,
      );
    case 503:
      return new ErrorResponse(
        'Servidor indisponível. Tente novamente mais tarde',
        callback,
        error,
      );
    default:
      return new ErrorResponse(
        `Erro de verificação do status da requisição para código ${
          response?.status || '001'
        }`,
        callback,
        error,
      );
  }
};

const verifyDataResponse = (
  response: AxiosResponse<ResponseDataWithError, any>,
): string | undefined => {
  const data = response.data;
  if (data === undefined) {
    return undefined;
  }

  if (typeof data === 'string') {
    return data;
  }

  if (typeof data.errors === 'string') {
    return data.errors;
  }

  if (Array.isArray(data.errors)) {
    const errors = data.errors;
    if (errors.length === 1) {
      return errors[0];
    }

    if (errors.length > 1) {
      return errors.join('\n');
    }
  } else if (typeof data.errors === 'object') {
    return extractErrorOfChangeset(data.errors);
  }

  if (typeof data.message === 'object') {
    return extractErrorOfChangeset(data.message);
  }
};

const extractErrorOfChangeset = (
  error: DefaultChangesetError,
): string | undefined => {
  const keys = Object.keys(error);
  if (keys.length > 0) {
    const messages = error[keys[0]];
    if (messages.length > 0) {
      return `${uppercaseFirstLetter(keys[0])}: ${uppercaseFirstLetter(
        messages[0],
      )}`;
    }
  }
};

class ErrorResponse extends Error {
  constructor(
    public message: string,
    public callback?: Callback,
    public originalError?: unknown,
  ) {
    super(message);
    this.name = 'AxiosErrorResponse';
    this.message = message;
    if (callback) {
      this.callback = callback;
    }

    if (originalError) {
      this.originalError = originalError;
    }

    // eslint-disable-next-line prettier/prettier
    this.stack = (<any> new Error()).stack;

    Object.setPrototypeOf(this, ErrorResponse.prototype);
  }

  toString() {
    return this.name + ': ' + this.message;
  }

  alert(title: string) {
    if (this.callback) {
      Alert.alert(
        title,
        this.message,
        [
          {
            text: 'OK',
            onPress: this.callback,
          },
        ],
        {
          cancelable: false,
        },
      );
      return;
    }

    Alert.alert(title, this.message);
  }
}

export { GetErrorResponse, ErrorResponse };
