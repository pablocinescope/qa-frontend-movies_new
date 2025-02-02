import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Genre } from '../../../types';

export interface CreateGenreParams {
  name: string;
}

export type CreateGenreConfig = AxiosCustomRequestConfig<CreateGenreParams>;

export const createGenre = async ({ params, config }: CreateGenreConfig) => {
  const response = await MoviesClient.post<Genre>('/genres/', params, config);

  return response.data;
};
