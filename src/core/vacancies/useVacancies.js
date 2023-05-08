import { useQuery } from 'react-query';
import { getVacancies } from '../../api/vacancies';

export const useVacancies = (
  page,
  count,
  catalog,
  payment_from,
  payment_to,
  keyword
) => {
  return useQuery(
    ['vacancies', page, catalog, payment_from, payment_to, keyword],
    async () => {
      const vacancies = await getVacancies(
        page,
        count,
        catalog,
        payment_from,
        payment_to,
        keyword
      );

      return vacancies;
    },
    { keepPreviousData: true }
  );
};
