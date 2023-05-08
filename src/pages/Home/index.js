import { Flex } from '@mantine/core';
import { Filters } from './components/Filters';
import { Vacancies } from './components/Vacancies';
import { useAuth } from '../../core/auth/useAuth';
import { useState } from 'react';

const Home = () => {
  const { isLoading } = useAuth();
  const [vacancySettings, setVacancySettings] = useState({
    catalog: '',
    payment_from: '',
    payment_to: '',
    keyword: '',
  });
  const setFilters = (catalog, payment_from, payment_to) => {
    setVacancySettings({
      ...vacancySettings,
      catalog: catalog,
      payment_from: payment_from,
      payment_to: payment_to,
    });
  };

  const setSearch = (keyword) => {
    setVacancySettings({...vacancySettings, keyword: keyword});
  };

  return (
    <Flex justify={'center'} gap={28} mt={24}>
      <Filters setFilters={setFilters} />
      <Vacancies vacancySettings={vacancySettings} setSearch={setSearch} isLoading={isLoading} />
    </Flex>
  );
};

export { Home };
