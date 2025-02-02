import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Review } from '../../../types';

export interface HideReviewByUserIdParams {
  movieId: number;
  userId: string;
}

export type hideReviewByUserIdConfig = AxiosCustomRequestConfig<HideReviewByUserIdParams>;

export const hideReviewByUserId = async ({ params, config }: hideReviewByUserIdConfig) => MoviesClient.patch<Review>(`/movies/${params.movieId}/reviews/hide/${params.userId}`, params, config);
