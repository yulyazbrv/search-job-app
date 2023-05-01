import { Flex, Pagination } from '@mantine/core';
import { useReducer } from 'react';
import { Card } from '../card';
import { favoritesReducer } from '../../store/favoritesVacancies';
import { getFavoriteVacancies } from '../../helpers/favoriteVacanciesHelper';

const CardsWithPagination = (props) => {
  const {
    vacancies,
    isFavorite,
    emptyComponent,
    activePage,
    setPage,
    totalPages,
  } = props;

  const [state, dispatch] = useReducer(favoritesReducer, {
    favoritesVacancies: getFavoriteVacancies(),
  });

  const currentVacancies = isFavorite ? state.favoritesVacancies : vacancies;

  return currentVacancies.length ? (
    <Flex direction="column" gap={16} mt={24}>
      {currentVacancies.map((item) => (
        <Card
          key={item.id}
          vacancy={item}
          favoritesVacancies={state.favoritesVacancies}
          setFavorite={() =>
            dispatch({ type: 'updateFavorites', payload: item })
          }
          isFavorite={
            !!state.favoritesVacancies.find((vacancy) => vacancy.id === item.id)
          }
        />
      ))}
      <Pagination
        total={totalPages}
        position="center"
        value={activePage}
        onChange={setPage}
      />
    </Flex>
  ) : emptyComponent ? (
    emptyComponent
  ) : null;
};

export { CardsWithPagination };
