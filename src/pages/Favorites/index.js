import { Flex } from '@mantine/core';
import { EmptyFavorites } from './components/emptyFavorites';
import { CardsWithPagination } from '../../components/cardsWithPagination';

const Favorites = () => {
  return (
    <Flex justify="center" mt={24}>
      <CardsWithPagination isFavorite emptyComponent={<EmptyFavorites />} />
    </Flex>
  );
};

export { Favorites };
