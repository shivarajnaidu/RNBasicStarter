import axios from 'axios';
import { API_BASE_URI } from '../config';
import { isTokenExist, removeToken } from '../token';
import { authSubject } from './auth-interceptor';

const urls = {
  login: `${API_BASE_URI}/auth/login`,
  signup: `${API_BASE_URI}/auth/signup`,
  forgotPass: `${API_BASE_URI}/auth/forgot-password`,
};

export const login = (userName, password) => {
  return axios.post(urls.login, { userName, password });
};

export const forgotPass = (userName) => {
  return axios.post(urls.forgotPass, { userName });
};

export const isLoggedIn = () => {
  return isTokenExist();
};

export const logout = async () => {
  await removeToken();
  authSubject.next(false);
  // navigation?.navigate('Login');
};

export const signup = (data) => {
  return axios.post(urls.signup, data);
};
