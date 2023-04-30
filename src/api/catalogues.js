import { getHelper } from '../helpers/apiHelper';

export const getCatalogues = async () => {
  const response = await getHelper('catalogues');
  return response;
};
