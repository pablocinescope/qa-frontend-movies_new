import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Movie } from '../../../types';

export interface DeleteMovieParams {
  id: number;
}

export type DeleteMovieConfig = AxiosCustomRequestConfig<DeleteMovieParams>;

export const deleteMovie = async ({ params, config }: DeleteMovieConfig) => {
  const response = await MoviesClient.delete<Movie>(`/movies/${params.id}`, config);

  return response.data;
};
