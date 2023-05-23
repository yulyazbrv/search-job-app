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
    showVacancy
  } = props;
  
  const [state, dispatch] = useReducer(favoritesReducer, {
    favoritesVacancies: getFavoriteVacancies(),
  });
  const getFavorite = (page, count) => {
    console.log("Внутри getFAvorite ", state.favoritesVacancies.slice(page * 4 - 1, page * 4 - 1 + count));
    return state.favoritesVacancies.slice(page * 4 - 1, page * 4 - 1 + count)
  }
  const currentFavoritesVacancies = getFavorite(
    favoriteActivePage,
    4
  );
  const currentVacancies = isFavorite ? currentFavoritesVacancies : vacancies;
  console.log("favoritesVacancies ", state.favoritesVacancies);
  console.log("currentFavoritesVacancies ",currentFavoritesVacancies );
  console.log("isFavorite ",isFavorite);
  console.log("currentVacancies ",currentVacancies);
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
