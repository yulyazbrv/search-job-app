import { useQuery } from 'react-query';
import { getVacancy } from '../../api/vacancies';

export const useVacancy = (id) => {
  return useQuery(['vacancy', id], async () => {
    const vacancy = await getVacancy(id);

    return vacancy;
  });
};
