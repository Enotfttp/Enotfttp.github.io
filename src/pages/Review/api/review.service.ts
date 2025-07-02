import { axiosInstance } from '@shared/index.ts';
import { IReviewList, TFiltersReview } from '@pages/Review/api/review.types.ts';

class ReviewService {
  async getReviewList(filters?: TFiltersReview): Promise<IReviewList[]> {
    const response = await axiosInstance.post('api/review-list', { filters: filters });
    return response.data;
  }
}

export const reviewService = new ReviewService();
