export interface IReviewList {
  id: string;
  sum: string;
  tariffBook: string;
  calculationDate: string;
  reviewDate: string;
  documentNumber: string;
  currentAccount: string;
  status: string;
}

/** TODO.FIX Расшириить для большего фильтрования */
export type TFiltersReview = {
  [K in keyof IReviewList]?: Array<IReviewList[K]> | IReviewList[K] | null;
};
