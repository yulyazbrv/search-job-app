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
    published: 1,
    no_agreement: payment_from >= 0 ? 1 : 0,
  });

  return response;
};

export const getVacancy = async (id) => {
  const response = await getHelper(`vacancies/${id}`);
  return response;
};
