import * as React from 'react';
import { TableProps, Table, T, Button } from '@admiral-ds/react-ui';
import { useEffect } from 'react';
import { StyledBtn, StyledReviewPage } from './Review.styled';
import { useGetReviewList } from './api/review.hook';
import { IReviewList } from './api/review.types';
import { useFilters } from './components/Filters/Filters.hook';

const Review = (props: TableProps) => {
  const [rows, setRows] = React.useState<(IReviewList & { selected?: boolean })[]>([]);
  const { cols, filters, handleResize } = useFilters();
  const { data, isSuccess } = useGetReviewList(filters);

  const handleSelectionChange = (ids: Record<string, boolean>): void => {
    const updRows = rows?.map((row) => ({ ...row, selected: ids[row.id] }));
    setRows(updRows);
  };

  const handleBtnClick = () => {
    setRows((prevRows) => {
      return prevRows.map((elem) => {
        if (elem?.selected) {
          return { ...elem, status: 'Отозван' };
        }
        return elem;
      });
    });
  };

  useEffect(() => {
    if (isSuccess) setRows(data);
  }, [isSuccess]);

  return (
    <StyledReviewPage>
      <T font="Header/H1">Комиссии</T>
      <StyledBtn>
        <Button dimension="l" onClick={handleBtnClick}>
          Отозвать
        </Button>
      </StyledBtn>
      <Table
        {...props}
        headerLineClamp={2}
        displayRowSelectionColumn
        rowList={rows}
        columnList={cols}
        onColumnResize={handleResize}
        onRowSelectionChange={handleSelectionChange}
      />
    </StyledReviewPage>
  );
};

export default Review;
