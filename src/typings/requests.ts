import { HeadersDefaults } from 'axios';

import { Callback } from '@typings/common';

export type ErrorType = {
  message: string;
  response: {
    status: number;
    data:
      | string
      | {
          errors: string | [];
        };
  };
  callback?: Callback;
};

export interface StatusHttpType {
  [key: string | number]: () => Error;
}

export interface CommonHeader extends HeadersDefaults {
  Authorization: string;
}

export type ParamsExampleMethodName = {};

export type ResponseExampleMethodName = {};
