import AsyncStorage from '@react-native-async-storage/async-storage';
import { decode } from 'base-64';

const tokenKey = 'APP_AUTH_TOKEN';

export const getToken = () => {
  return AsyncStorage.getItem(tokenKey);
};

export const saveToken = (data) => {
  // data - string
  return AsyncStorage.setItem(tokenKey, data);
};

export const getDecodedTokenData = async () => {
  try {
    const token = await getToken();
    if (!token) {
      return null;
    }

    return JSON.parse(decode(token.split('.')[1]));
  } catch (error) {
    return null;
  }
};

export const isTokenExist = async () => {
  try {
    return (await getToken()) ? true : false;
  } catch (error) {
    return false;
  }
};

export const removeToken = () => {
  return AsyncStorage.removeItem(tokenKey);
};
