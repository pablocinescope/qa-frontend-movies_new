import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, GetMoviesResponse } from '../../../types'; 

export interface GetMoviesParams {
  page?: number | string;
  pageSize?: number | string;
  genreId?: number | string;
  name?: string;
  createdAt?: string;
  published?: boolean | string;
}

export type GetMoviesConfig = AxiosCustomRequestConfig<GetMoviesParams>;

export const getMovies = async ({ params, config }: GetMoviesConfig) => {
  const response = await MoviesClient.get<GetMoviesResponse>('/movies', { params, ...config });

  return response.data;
};
