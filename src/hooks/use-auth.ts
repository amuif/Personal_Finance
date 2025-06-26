import { useQuery } from '@tanstack/react-query';
import getCurrentUser from '@/api/user';

export const useAuthUser = () => {
  return useQuery({
    queryKey: ['get-user'],
    queryFn: getCurrentUser,
    staleTime: 1000 * 60 * 5,
  });
};
