import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Movie } from '../../../types';

type CreateMovieParams = Omit<Movie, 'id' | 'reviews' | 'createdAt' | 'rating' | 'genre'>

export type CreateMovieConfig = AxiosCustomRequestConfig<CreateMovieParams>;

export const createMovie = async ({ params, config }: CreateMovieConfig) => {
  const response = await MoviesClient.post<Movie>('/movies', params, config);

  return response.data;
};
