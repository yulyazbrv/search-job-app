import { useState } from 'react';
import { Flex } from '@mantine/core';
import { EmptyFavorites } from './components/emptyFavorites';
import { CardsWithPagination } from '../../components/cardsWithPagination';

const Favorites = () => {
  const [favoriteActivePage, setFavoritePage] = useState(1);

  return (
    <Flex justify="center" mt={24}>
      <CardsWithPagination
        favoriteActivePage={favoriteActivePage}
        setFavoritePage={setFavoritePage}
        isFavorite
        emptyComponent={<EmptyFavorites />}
      />
    </Flex>
  );
};

export { Favorites };
