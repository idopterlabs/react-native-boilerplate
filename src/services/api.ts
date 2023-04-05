import axios, { AxiosResponse } from 'axios';

import { Platform } from 'react-native';

import { RN_BASE_URL_API } from '@env';

import { Callback } from '@typings/common';
import {
  AxiosErrorApplication,
  ParamsExampleMethodName,
  ResponseExampleMethodName,
} from '@typings/requests';

import { GetErrorResponse } from './responseService';

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

    const axiosError = error as AxiosErrorApplication;
    const callback: Callback | undefined = axiosError.callback;
    throw GetErrorResponse(axiosError, genericError, callback);
  }
};
