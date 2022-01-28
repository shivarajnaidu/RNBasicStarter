import axios from 'axios';
import { getToken, removeToken } from '../token';
import { Subject } from 'rxjs';

export const authSubject = new Subject();

const onReqError = (error) => Promise.reject(error);
const onResError = (error) => {
  const res = error.response;
  if (res.status === 401) {
    removeToken();
    authSubject.next();
    // history.push('/login');
  }
  return Promise.reject(error);
};

export function init() {
  // Add a request interceptor
  axios.interceptors.request.use(async (config) => {
    // Do something before request is sent
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, onReqError);

  // Add a response interceptor
  axios.interceptors.response.use((response) => {
    // Do something with response data
    return response;
  }, onResError);

  return authSubject;
}
