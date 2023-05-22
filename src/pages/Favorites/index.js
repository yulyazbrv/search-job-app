import { useState } from 'react';
import { Flex } from '@mantine/core';
import { EmptyFavorites } from './components/emptyFavorites';
import { CardsWithPagination } from '../../components/cardsWithPagination';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const [favoriteActivePage, setFavoritePage] = useState(1);
  const navigate = useNavigate();
  const showVacancy = (id) => {
    navigate(`/vacancy/${id}`);
  };
  return (
    <Flex justify="center" mt={24}>
      <CardsWithPagination
        favoriteActivePage={favoriteActivePage}
        setFavoritePage={setFavoritePage}
        isFavorite
        showVacancy={showVacancy}
        emptyComponent={<EmptyFavorites />}
      />
    </Flex>
  );
};

export { Favorites };
