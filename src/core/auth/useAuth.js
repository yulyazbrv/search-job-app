import { useQuery } from 'react-query';
import { setAccessTokenToHeader } from '../../helpers/apiHelper';
import { auth } from '../../api/auth';

export const useAuth = () => {
  return useQuery(
    'auth',
    async () => {
      const accessToken = await auth();
      setAccessTokenToHeader(accessToken);
    },
    { retry: false }
  );
};
