import { BACKEND_URL_PAYMENT } from '../const';
import inMemoryJWT from '../../utils/inMemoryJWT';
import axios from 'axios';

const PaymentClient = axios.create({
  baseURL: BACKEND_URL_PAYMENT,
});

PaymentClient.interceptors.request.use(
  (config) => {
    const accessToken = inMemoryJWT.getToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default PaymentClient;
