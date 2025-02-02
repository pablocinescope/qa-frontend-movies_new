import { AxiosCustomRequestConfig, User } from '../../../types';
import AuthClient from '../../client';

type EditUserParams = Pick<User, 'id' | 'verified' | 'roles' | 'banned'>;

export type EditUserConfig = AxiosCustomRequestConfig<EditUserParams>;

export const editUser = async ({ params, config }: EditUserConfig) => {
  const response = await AuthClient.patch<User>(`/user/${params.id}`, params, config);

  return response.data;
};
