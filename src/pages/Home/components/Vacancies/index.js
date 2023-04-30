import { Button, Flex, Input, LoadingOverlay } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import './index.css';
import { Card } from './components/card';
import { useVacancies } from '../../../../core/vacancies/useVacancies';

const Vacancies = (props) => {
  const { isLoading } = props;
  const { data: vacancies, isLoading: isVacanciesLoading } = useVacancies();

  return (
    <Flex direction={'column'} gap={16} miw={773} className="vacancies">
      <LoadingOverlay visible={isLoading || isVacanciesLoading} overlayBlur={2} />
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
      {vacancies
        ? vacancies.objects.map((item) => (
            <Card key={item.id} vacancy={item}></Card>
          ))
        : null}
    </Flex>
  );
};

export { Vacancies };
