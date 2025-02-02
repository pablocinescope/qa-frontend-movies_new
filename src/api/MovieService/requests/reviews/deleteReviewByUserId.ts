import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Review } from '../../../types';

export interface DeleteReviewByUserIdParams {
  movieId: number;
  userId: string;
}

export type deleteReviewByUserIdConfig = AxiosCustomRequestConfig<DeleteReviewByUserIdParams>;

export const deleteReviewByUserId = async ({ params, config }: deleteReviewByUserIdConfig) => MoviesClient.delete<Review>(`/movies/${params.movieId}/reviews?userId=${params.userId}`, config);
