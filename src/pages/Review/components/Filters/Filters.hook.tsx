import * as React from 'react';
import { useRef } from 'react';
import { Button, DateField, Field, TextInput } from '@admiral-ds/react-ui';
import { TFiltersReview } from '@pages/Review/api/review.types.ts';
import { columnList } from '@pages/Review/Review.columns.tsx';
import { ButtonWrapper, Wrapper } from '@pages/Review/components/Filters/Filters.styled.ts';

export const useFilters = () => {
  const [filters, setFilters] = React.useState<TFiltersReview>({});
  const [columns, setCols] = React.useState([...columnList]);
  const [numFilterActive, setNumFilterActive] = React.useState(false);
  const [dateFilterActive, setDateFilterActive] = React.useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dateRefFrom = useRef<string>('');
  const dateRefTo = useRef<string>('');

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  const handleSetFilter = (key: string, value?: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleClearFilter = (key: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: null,
    }));
  };

  const cols = React.useMemo(
    () =>
      columns.map((col) => {
        if (!col?.isFilter) {
          return col;
        }
        if (col.type === 'date') {
          return {
            ...col,
            isFilterActive: dateFilterActive,
            renderFilter: ({ closeMenu }) => (
              <Wrapper>
                <DateField
                  label="Выберите дату с:"
                  value={filters[`${col.name}-from`]}
                  onChange={(e) => {
                    dateRefFrom.current = (e.target as HTMLInputElement).value;
                  }}
                />
                <DateField
                  label="Выберите дату по:"
                  value={filters[`${col.name}-to`]}
                  onChange={(e) => {
                    dateRefTo.current = (e.target as HTMLInputElement).value;
                  }}
                />
                <ButtonWrapper>
                  <Button
                    dimension="m"
                    onClick={() => {
                      if (dateRefFrom.current?.includes('__.__.____')) return;
                      handleSetFilter(`${col.name}-from`, dateRefFrom.current);
                      if (dateRefTo.current.includes('__.__.____')) return;
                      handleSetFilter(`${col.name}-to`, dateRefTo.current);
                      closeMenu();
                    }}
                  >
                    Применить
                  </Button>
                  <Button
                    dimension="m"
                    onClick={() => {
                      closeMenu();
                      handleClearFilter(`${col.name}-from`);
                      handleClearFilter(`${col.name}-to`);
                      setDateFilterActive(false);
                    }}
                  >
                    Очистить
                  </Button>
                </ButtonWrapper>
              </Wrapper>
            ),
          };
        } else {
          return {
            ...col,
            isFilterActive: numFilterActive,
            renderFilter: ({ closeMenu }) => (
              <Wrapper>
                <Field>
                  <TextInput defaultValue={filters[col.name]} ref={inputRef} />
                </Field>
                <ButtonWrapper>
                  <Button
                    dimension="m"
                    onClick={() => {
                      handleSetFilter(col.name, inputRef?.current?.value);
                      closeMenu();
                      setNumFilterActive(true);
                    }}
                  >
                    Применить
                  </Button>
                  <Button
                    dimension="m"
                    onClick={() => {
                      closeMenu();
                      handleClearFilter(col.name);
                      setNumFilterActive(false);
                    }}
                  >
                    Очистить
                  </Button>
                </ButtonWrapper>
              </Wrapper>
            ),
          };
        }
      }),
    [numFilterActive, dateFilterActive, setFilters, filters],
  );

  return { filters, cols, handleResize };
};
