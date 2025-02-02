import { AxiosCustomRequestConfig } from '../../../types';
import AuthClient from '../../client';

export type LogoutUserConfig = AxiosCustomRequestConfig;

export const logout = async ({ config }: LogoutUserConfig) => AuthClient.get('/logout', config);
