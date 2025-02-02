import MoviesClient from '../../client';
import { AxiosCustomRequestConfig, Review } from '../../../types';

export interface ShowReviewByUserIdParams {
  movieId: number;
  userId: string;
}

export type showReviewByUserIdConfig = AxiosCustomRequestConfig<ShowReviewByUserIdParams>;

export const showReviewByUserId = async ({ params, config }: showReviewByUserIdConfig) => MoviesClient.patch<Review>(`/movies/${params.movieId}/reviews/show/${params.userId}`, params, config);
