import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Movie } from '../../../types';

type EditMovieParams = Omit<Movie, 'reviews' | 'createdAt' | 'rating' | 'genre'>

export type EditMovieConfig = AxiosCustomRequestConfig<EditMovieParams>;

export const editMovie = async ({ params, config }: EditMovieConfig) => {
  const response = await MoviesClient.patch<Movie>(`/movies/${params.id}`, params, config);

  return response.data;
};
