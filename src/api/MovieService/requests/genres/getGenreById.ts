import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Genre } from '../../../types';

export interface GetGenreByIdParams {
  id: string;
}

export type GetGenreByIdConfig = AxiosCustomRequestConfig<GetGenreByIdParams>;

export const getGenreById = async ({ params, config }: GetGenreByIdConfig) => {
  const response = await MoviesClient.get<Genre>(`/genres/${params.id}`, config);

  return response.data;
};
