import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Review } from '../../../types';

export interface EditReviewParams {
  movieId: number;
  text: string;
  rating: number;
}

export type EditReviewConfig = AxiosCustomRequestConfig<EditReviewParams>;

export const editReview = async ({ params, config }: EditReviewConfig) => MoviesClient.put<Review>(`/movies/${params.movieId}/reviews`, params, config);
