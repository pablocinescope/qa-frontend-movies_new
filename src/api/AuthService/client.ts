import axios from 'axios';
import { BACKEND_URL_AUTH } from '../const';
import inMemoryJWT from '../../utils/inMemoryJWT';

const AuthClient = axios.create({
  baseURL: BACKEND_URL_AUTH,
  withCredentials: true,
});

AuthClient.interceptors.request.use(
  (config) => {
    const accessToken = inMemoryJWT.getToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  async (error) => Promise.reject(error),
);

export default AuthClient;
