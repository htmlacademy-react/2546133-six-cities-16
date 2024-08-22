import axios from 'axios';
import { getToken } from './token';

const AXIOS_CONF = {
  baseURL: 'https://16.design.htmlacademy.pro',
  timeout: 5000
};


export const configureAxios = () => {
  const api = axios.create(AXIOS_CONF);

  api.interceptors.request.use(
    (config) => {

      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;

    },
  );
  api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );
  return api;
};


