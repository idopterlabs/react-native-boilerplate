import { Platform } from 'react-native';

import axios, { AxiosResponse } from 'axios';

import { RN_BASE_URL_API } from '@env';

import { Callback } from '@typings/common';
import {
  ErrorType,
  ParamsExampleMethodName,
  ResponseExampleMethodName,
} from '@typings/requests';

import { ErrorResponse, statusResponse } from './responseService';

export const URL_API: string = `${RN_BASE_URL_API}`;

const replaceURL = (url: string) => {
  if (url.match(/localhost/) && Platform.OS === 'android') {
    return url.replace(/localhost/, '10.0.2.2');
  }

  return url;
};

export const api = axios.create({
  baseURL: replaceURL(URL_API),
});

export const setAccessToken = async (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer Token token=${token}`;
};

export const setInterceptor = (signOutCallback: any) => {
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        return Promise.reject({
          ...error,
          callback: signOutCallback,
        });
      } else {
        return Promise.reject(error);
      }
    },
  );
};

export const exampleMethodName = async (
  params: ParamsExampleMethodName,
): Promise<AxiosResponse<ResponseExampleMethodName, any>> => {
  try {
    const path = '/path_url';
    return await api.post<ResponseExampleMethodName>(path, params);
  } catch (error) {
    const genericError = 'Não foi possível obter o dados, tente mais tarde';

    const { message } = statusResponse(error as ErrorType, genericError);
    const callback: Callback | undefined = (error as ErrorType).callback;

    throw new ErrorResponse(message, callback, error);
  }
};
