import { AxiosCustomRequestConfig, User } from '../../../types';
import AuthClient from '../../client';

export type GetUserInfoConfig = AxiosCustomRequestConfig;

export const getUserInfo = async ({ config }: GetUserInfoConfig) => {
  const response = await AuthClient.get<User>('/user/me', config);

  return response.data;
};
