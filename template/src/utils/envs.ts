import { RN_ENV } from '@env';

const _envs = new Map();

_envs.set('ENV', RN_ENV);

const envs = {
  get(key: string) {
    const value = _envs.get(key);
    console.log(key, value);
    if (!value) {
      throw new Error(`Missing value for the ${key}!`);
    }
    return value;
  },
};

export default envs;
