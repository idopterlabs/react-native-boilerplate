// TODO: migrate to react-native-mmkv
import AsyncStorage from '@react-native-async-storage/async-storage';

const setString = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

const getString = async (key: string): Promise<string | null> => {
  return await AsyncStorage.getItem(key);
};

const setBoolean = async (key: string, value: boolean) => {
  await setString(key, value ? 'true' : 'false');
};

const getBoolean = async (key: string): Promise<boolean | null> => {
  const value = await getString(key);
  if (value === null) {
    return null;
  }

  return value === 'true';
};

const setNumber = async (key: string, value: number) => {
  await setString(key, value.toString());
};

const getNumber = async (key: string): Promise<number | null> => {
  const value = await getString(key);
  if (value === null) {
    return null;
  }

  return Number(value);
};

const setObject = async <T extends {}>(key: string, value: T) => {
  await setString(key, JSON.stringify(value));
};

const getObject = async <T extends {}>(key: string): Promise<T | null> => {
  const value = await getString(key);
  if (value === null) {
    return null;
  }

  return await JSON.parse(value);
};

const clear = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};

const clearAll = () => {
  AsyncStorage.clear();
};

export default {
  setString,
  getString,
  setBoolean,
  getBoolean,
  setNumber,
  getNumber,
  setObject,
  getObject,
  clear,
  clearAll,
};
