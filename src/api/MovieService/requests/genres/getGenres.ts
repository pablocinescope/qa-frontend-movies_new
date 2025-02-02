import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Genre } from '../../../types';

export type GetGenresConfig = AxiosCustomRequestConfig;

export const getGenres = async ({ config }: GetGenresConfig) => {
  const response = await MoviesClient.get<Genre[]>('/genres', config);

  return response.data;
};
