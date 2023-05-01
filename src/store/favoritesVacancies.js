const getUpdatedFavorites = (favoritesVacancies, vacancy) => {
  const isAlreadyFavorite = favoritesVacancies.find(
    (item) => item.id === vacancy.id
  );
  if (isAlreadyFavorite) {
    const updatedFavoriteVacancies = favoritesVacancies.filter(
      (item) => item.id !== vacancy.id
    );

    localStorage.setItem('vacancies', JSON.stringify(updatedFavoriteVacancies));
    return updatedFavoriteVacancies;
  } else {
    const updatedFavoriteVacancies = [...favoritesVacancies, vacancy];
    localStorage.setItem('vacancies', JSON.stringify(updatedFavoriteVacancies));
    return updatedFavoriteVacancies;
  }
};

function favoritesReducer(state, action) {
  switch (action.type) {
    case 'updateFavorites':
      return {
        favoritesVacancies: getUpdatedFavorites(
          state.favoritesVacancies,
          action.payload
        ),
      };
    default:
      return state;
  }
}

export { favoritesReducer };