import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Genre } from '../../../types';

export interface DeleteGenreParams {
  id: number;
}

export type DeleteGenreConfig = AxiosCustomRequestConfig<DeleteGenreParams>;

export const deleteGenre = async ({ params, config }: DeleteGenreConfig) => MoviesClient.delete<Genre>(`/genres/${params.id}`, config);
