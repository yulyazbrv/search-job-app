import { useState } from 'react';
import { Button, Flex, Input, LoadingOverlay } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useVacancies } from '../../../../core/vacancies/useVacancies';
import { CardsWithPagination } from '../../../../components/cardsWithPagination';
import './index.css';

const Vacancies = (props) => {
  const { isLoading } = props;
  const [activePage, setPage] = useState(1);
  const { data: vacancies, isFetching: isVacanciesLoading } = useVacancies(
    activePage,
    4
  );
  const totalPages = vacancies ? Math.floor(vacancies.total / 4) : 100;

  return (
    <Flex direction={'column'} gap={16} miw={773} className="vacancies">
      <LoadingOverlay
        visible={isLoading || isVacanciesLoading}
        overlayBlur={2}
      />
      <Input
        icon={<IconSearch size="1rem" />}
        placeholder="Введите название вакансии"
        rightSection={
          <Button radius={8} styles={{ root: { height: 32, marginRight: 12 } }}>
            <p className="search">Поиск</p>
          </Button>
        }
        rightSectionWidth={83}
        styles={{
          input: { height: 48, borderColor: '#EAEBED', borderRadius: 8 },
        }}
      />
      {vacancies ? (
        <CardsWithPagination
          vacancies={vacancies.objects}
          activePage={activePage}
          setPage={setPage}
          totalPages={totalPages > 100 ? 100 : totalPages}
        />
      ) : null}
    </Flex>
  );
};

export { Vacancies };
