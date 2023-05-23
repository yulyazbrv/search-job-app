import { Flex, Pagination } from '@mantine/core';
import { useEffect, useReducer } from 'react';
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
    showVacancy,
  } = props;

  const [state, dispatch] = useReducer(favoritesReducer, {
    favoritesVacancies: getFavoriteVacancies(),
  });

  const currentVacancies = isFavorite
    ? state.favoritesVacancies.slice(
        (activePage - 1) * 4,
        (activePage - 1) * 4 + 4
      )
    : vacancies;

  const currentTotalPages = isFavorite
    ? Math.ceil((state.favoritesVacancies.length) / 4)
    : totalPages;

  useEffect(() => {
    if (currentVacancies.length === 0 && activePage > 1 && isFavorite) {
      setPage(activePage - 1);
    }
  }, [activePage, currentVacancies.length, setPage, isFavorite]);

  return currentVacancies.length ? (

    <Flex direction="column" gap={16}>
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
          onCardClick={showVacancy}
        />
      ))}
      <Pagination
        total={currentTotalPages}
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
