import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Review } from '../../../types';

export interface DeleteReviewParams {
  movieId: number;
}

export type DeleteReviewConfig = AxiosCustomRequestConfig<DeleteReviewParams>;

export const deleteReview = async ({ params, config }: DeleteReviewConfig) => MoviesClient.delete<Review>(`/movies/${params.movieId}/reviews`, config);
