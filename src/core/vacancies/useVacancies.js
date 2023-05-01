import { useQuery } from 'react-query';
import { getVacancies } from '../../api/vacancies';

export const useVacancies = (page, count) => {
  return useQuery(
    ['vacancies', page],
    async () => {
      const vacancies = await getVacancies(page, count);
      return vacancies;
    },
    { keepPreviousData: true }
  );
};
