import { useQuery } from 'react-query';
import { getVacancies } from '../../api/vacancies';

export const useVacancies = () => {
  return useQuery('vacancies', async () => {
    const vacancies = await getVacancies();
    return vacancies;
  });
};
