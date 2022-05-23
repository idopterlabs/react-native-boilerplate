import { Alert } from 'react-native';

import { ErrorType, StatusHttpType } from '@typings/requests';
import { Callback } from '@typings/common';

const statusResponse = (obj: ErrorType, description: string): Error => {
  if (obj.response === undefined) {
    return new Error('Servidor indisponível, tente mais tarde');
  }

  const response = JSON.parse(JSON.stringify(obj.response));
  return !response
    ? new Error('Servidor indisponível, tente mais tarde')
    : verifyStatusResponse(response, description);
};

const verifyStatusResponse = (
  response: ErrorType['response'],
  description: string,
) => {
  const data = response.data;

  const statusHttp: StatusHttpType = {
    400: () => verifyErrorsData(data, description),
    422: () =>
      new Error(
        'Não foi possível processar as instruções presentes. Tente novamente mais tarde',
      ),
    401: () =>
      verifyErrorsData(
        data,
        'Você não está autenticado, por favor faça o login novamente',
      ),
    403: () => new Error('Não autorizado'),
    404: () => new Error('Item não encontrado'),
    500: () => new Error(description),
    503: () => new Error('Servidor indisponível. Tente novamente mais tarde'),
    default: () => new Error('Erro de verificação do status da requisição'),
  };

  return (statusHttp[response.status] || statusHttp.default)();
};

const verifyErrorsData = (
  data: ErrorType['response']['data'],
  description: string,
) => {
  if (typeof data === 'string') {
    return new Error(data);
  }

  if (typeof data?.errors === 'string') {
    return new Error(data.errors);
  }

  return new Error(description);
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

export { statusResponse, ErrorResponse };
