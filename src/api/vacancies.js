import { getHelper } from '../helpers/apiHelper';

export const getVacancies = async (
  page,
  count,
  catalog,
  payment_from,
  payment_to,
  keyword
) => {
  const response = await getHelper('vacancies', {
    page,
    count,
    catalogues: catalog,
    payment_from,
    payment_to,
    keyword,
  });

  return response;
};

export const getVacancy = async (id) => {
  const response = await getHelper(`vacancies/${id}`);
  return response;
};
