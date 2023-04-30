import { getHelper } from '../helpers/apiHelper';

export const getVacancies = async () => {
  const response = await getHelper('vacancies');
  return response;
};
