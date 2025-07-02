import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { IReviewList, TFiltersReview } from '@pages/Review/api/review.types.ts';
import { reviewService } from '@pages/Review/api/review.service.ts';

export const useGetReviewList = (
  filters?: TFiltersReview,
  options?: Omit<UseQueryOptions<IReviewList[], Error, IReviewList[], QueryKey>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    queryKey: ['review-list', filters],
    queryFn: () => reviewService.getReviewList(filters),
    ...options,
  });
};
