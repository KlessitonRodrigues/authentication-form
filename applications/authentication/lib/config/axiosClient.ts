import axios from 'axios';

import dotenv from '../constants/dotenv';

export const axiosClient = axios.create({ baseURL: dotenv.API_URL });

axiosClient.interceptors.request.use(config => {
  config.headers['lang'] = 'pt';
  return config;
});
