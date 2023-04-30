import { useQuery } from 'react-query';
import { getCatalogues } from '../../api/catalogues';

export const useCatalogues = () => {
  return useQuery('catalogues', async () => {
    const catalogues = await getCatalogues();
    return catalogues;
  });
};
