import { useQuery } from '@tanstack/react-query';
import getCurrentUser from '@/lib/api';

export const useAuthUser = () => {
  return useQuery({
    queryKey: ['get-user'],
    queryFn: getCurrentUser,
    staleTime: 1000 * 60 * 5,
  });
};
