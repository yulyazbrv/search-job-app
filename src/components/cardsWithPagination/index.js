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
    favoriteActivePage,
    setFavoritePage,
    showVacancy,
  } = props;

  const [state, dispatch] = useReducer(favoritesReducer, {
    favoritesVacancies: getFavoriteVacancies(),
  });

  const getFavorite = (page, count) => {
    const startIndex = (page - 1) * count;
    const endIndex = Math.min(startIndex + count, state.favoritesVacancies.length);
    return state.favoritesVacancies.slice(startIndex, endIndex);
  };
  const currentFavoritesVacancies = getFavorite(favoriteActivePage, 4);
  const currentVacancies = isFavorite ? currentFavoritesVacancies : vacancies;
  const favoriteTotalPages = state.favoritesVacancies.length / 4;

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
        total={isFavorite ? favoriteTotalPages : totalPages}
        position="center"
        value={isFavorite ? favoriteActivePage : activePage}
        onChange={isFavorite ? setFavoritePage : setPage}
      />
    </Flex>
  ) : emptyComponent ? (
    emptyComponent
  ) : null;
};

export { CardsWithPagination };
