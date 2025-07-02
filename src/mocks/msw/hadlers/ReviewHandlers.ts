import { HttpResponse, http } from 'msw';
import { TFiltersBodyMSW } from '@mocks/msw/types/filters.types';
import { IReviewList } from '@pages/Review/api/review.types.ts';
import { isDateInRange } from '@shared/common/utils.ts';

const mockedReviewList: IReviewList[] = [
  {
    id: '1',
    tariffBook: '153304',
    sum: '1000',
    calculationDate: '24.03.2025',
    reviewDate: '25.03.2025',
    documentNumber: 'uh12jhj',
    status: 'Отменен',
    currentAccount: '40817810099910004312',
  },
  {
    id: '2',
    tariffBook: '152204',
    sum: '2000',
    calculationDate: '25.05.2025',
    reviewDate: '25.04.2025',
    documentNumber: 'uh12jhj',
    status: 'Отменен',
    currentAccount: '40817810090010004311',
  },
  {
    id: '3',
    tariffBook: '122204',
    sum: '3000',
    calculationDate: '27.03.2025',
    reviewDate: '01.04.2025',
    documentNumber: 'uh13jhj',
    status: 'Отменен',
    currentAccount: '40817810099910004314',
  },
  {
    id: '4',
    tariffBook: '153104',
    sum: '4000',
    calculationDate: '26.03.2025',
    reviewDate: '02.04.2025',
    documentNumber: 'uh12jhj',
    status: 'Отменен',
    currentAccount: '40817810099910004312',
  },
  {
    id: '5',
    tariffBook: '203304',
    sum: '5000',
    calculationDate: '27.03.2025',
    reviewDate: '04.04.2025',
    documentNumber: 'uh14jhj',
    status: 'Отменен',
    currentAccount: '40817810000910004312',
  },
  {
    id: '6',
    tariffBook: '153304',
    sum: '6000',
    calculationDate: '28.03.2025',
    reviewDate: '12.06.2025',
    documentNumber: 'uh12jhj',
    status: 'Отменен',
    currentAccount: '40817810099910004316',
  },
  {
    id: '7',
    tariffBook: '153304',
    sum: '7000',
    calculationDate: '24.03.2025',
    reviewDate: '10.06.2025',
    documentNumber: 'uh12jhj',
    status: 'Отменен',
    currentAccount: '40817810099910004317',
  },
  {
    id: '8',
    tariffBook: '153004',
    sum: '8000',
    calculationDate: '29.03.2025',
    reviewDate: '15.06.2025',
    documentNumber: 'uh12jhj',
    status: 'Отменен',
    currentAccount: '40817810099910004312',
  },
  {
    id: '9',
    tariffBook: '153104',
    sum: '1000',
    calculationDate: '01.06.2025',
    reviewDate: '21.06.2025',
    documentNumber: 'uh12jhj',
    status: 'Отменен',
    currentAccount: '40817810099910004312',
  },
];

export const reviewHandlers = [
  http.post('/api/review-list', async ({ request }) => {
    const body = (await request.json()) as TFiltersBodyMSW<IReviewList>;
    const filters = body?.filters || {};
    let filtered = mockedReviewList;

    Object.entries(filters).forEach(([key, value]) => {
      if (value?.length) {
        if (key.includes('-from')) {
          filtered = filtered.filter((item) => {
            const dateKey = key.split('-from')[0];

            return isDateInRange(item[dateKey], filters[`${dateKey}-from`], filters[`${dateKey}-to`]);
          });
        } else if (!key.includes('-to')) {
          filtered = filtered.filter((item) => value?.includes(item[key]));
        }
      }
    });

    return HttpResponse.json<IReviewList[]>(filtered);
  }),
];
