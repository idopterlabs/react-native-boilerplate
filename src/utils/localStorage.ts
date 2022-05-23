import AsyncStorage from '@react-native-async-storage/async-storage';

export const writeItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    //TODO: add track event
  }
};

export const readItem = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    //TODO: add track event
  }
};

export const clear = async () => {
  await AsyncStorage.clear();
};
