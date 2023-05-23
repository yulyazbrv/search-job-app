export const getFavoriteVacancies = () => {
  const vacanciesFromLocalStorage = localStorage.getItem('vacancies');
  console.log("vacanciesFromLocalStorage", vacanciesFromLocalStorage);
  if (vacanciesFromLocalStorage) {
    return JSON.parse(vacanciesFromLocalStorage);
  } else {
    return [];
  }
};
