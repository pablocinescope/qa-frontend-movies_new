import { AxiosCustomRequestConfig, User } from '../../../types';
import AuthClient from '../../client';

export interface CreateUserParams extends Omit<User, 'id' | 'roles' | 'createdAt'> {
  password: string;
}

export type CreateUserConfig = AxiosCustomRequestConfig<CreateUserParams>;

export const createUser = async ({ params, config }: CreateUserConfig) => {
  const response = await AuthClient.post<User>('/user', params, config);

  return response.data;
};
