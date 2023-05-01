export const getFavoriteVacancies = () => {
  const vacanciesFromLocalStorage = localStorage.getItem('vacancies');
  if (vacanciesFromLocalStorage) {
    return JSON.parse(vacanciesFromLocalStorage);
  } else {
    return [];
  }
};
