import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Review } from '../../../types';

export interface CreateReviewParams {
  movieId: number;
  text: string;
  rating: number;
}

export type CreateReviewConfig = AxiosCustomRequestConfig<CreateReviewParams>;

export const createReview = async ({ params, config }: CreateReviewConfig) => MoviesClient.post<Review>(`/movies/${params.movieId}/reviews`, params, config);
