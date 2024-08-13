import axios from 'axios';
import { store } from './store';

const AXIOS_CONF = {
  baseURL: 'https://16.design.htmlacademy.pro',
  timeout: 5000
};


export const configureAxios = () => {
  const api = axios.create(AXIOS_CONF);

  api.interceptors.request.use(
    (config) => {

      const token = store.getState().authorizationData?.token;

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;

    },
  );
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {

      }

      return Promise.reject(error);
    }
  );
  return api;
};


