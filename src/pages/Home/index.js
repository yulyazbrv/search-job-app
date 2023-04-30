import { Flex } from '@mantine/core';
import { Filters } from './components/Filters';
import { Vacancies } from './components/Vacancies';
import { useAuth } from '../../core/auth/useAuth';

const Home = () => {
  const { isLoading } = useAuth();
  return (
    <Flex justify={'center'} gap={28}>
      <Filters />
      <Vacancies isLoading={isLoading} />
    </Flex>
  );
};

export { Home };
