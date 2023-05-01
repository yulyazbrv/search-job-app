import { getHelper } from '../helpers/apiHelper';

export const getVacancies = async (page, count) => {
  const response = await getHelper('vacancies', { 
    page,
    count,
  });
  
  return response;
};
