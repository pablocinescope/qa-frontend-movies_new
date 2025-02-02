import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Movie, Review } from '../../../types';

export interface GetMovieByIdParams {
  id: number;
}

export type GetMovieByIdConfig = AxiosCustomRequestConfig<GetMovieByIdParams>;

export const getMovieById = async ({ params, config }: GetMovieByIdConfig) => {
  const response = await MoviesClient.get<Movie & { reviews: Review[] }>(`/movies/${params.id}`, config);

  return response.data;
};
