import { AxiosError, HeadersDefaults } from 'axios';

import { ErrorResponse } from '@services/responseService';

import { Callback } from '@typings/common';

export interface AxiosErrorApplication extends AxiosError<any, any> {
  callback?: Callback;
}

export type DefaultChangesetError = { [key: string]: string[] };
export type ResponseDataWithError =
  | string
  | {
      errors?: never;
      message: DefaultChangesetError;
    }
  | {
      errors: string | string[] | DefaultChangesetError;
      message?: never;
    };

export interface StatusHttpType {
  [key: string | number]: () => ErrorResponse;
}

export interface CommonHeader extends HeadersDefaults {
  Authorization: string;
}

export type ParamsExampleMethodName = {};

export type ResponseExampleMethodName = {};
