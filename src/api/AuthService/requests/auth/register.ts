import { AxiosCustomRequestConfig, User } from '../../../types';
import AuthClient from '../../client';

type RegisterUser = {
  email: string;
  fullName: string;
  password: string;
  passwordRepeat: string;
};

export type RegisterUserConfig = AxiosCustomRequestConfig<RegisterUser>;

export const register = async ({ params, config }: RegisterUserConfig) => AuthClient.post<User>('/register', params, config);
