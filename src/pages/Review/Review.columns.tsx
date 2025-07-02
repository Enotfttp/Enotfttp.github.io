import { type Column } from '@admiral-ds/react-ui';

export const columnList: (Column & { isFilter: boolean })[] = [
  {
    name: 'tariffBook',
    title: 'Тарифный сборник',
    width: 200,
    isFilter: true,
  },
  {
    name: 'sum',
    title: 'Сумма',
    width: 200,
    isFilter: true,
  },
  {
    name: 'calculationDate',
    title: 'Дата расчёта',
    type: 'date',
    width: 200,
    isFilter: true,
  },
  {
    name: 'documentNumber',
    title: 'Номер документа',
    width: 200,
    isFilter: true,
  },
  {
    name: 'currentAccount',
    title: 'Расчётный счёт',
    width: 200,
    isFilter: true,
  },
  {
    name: 'status',
    title: 'Статус отзыва',
    width: 200,
    isFilter: true,
  },
  {
    name: 'reviewDate',
    title: 'Дата отзыва',
    type: 'date',
    width: 200,
    isFilter: true,
  },
];
