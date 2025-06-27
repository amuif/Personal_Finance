import { supabase } from '@/supabase/supabase-client';
import { queryOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

export default async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    toast.error('Error getting user');
  }
  return data;
}

export const currentUser = queryOptions({
  queryKey: ['current-user'],
  queryFn: getCurrentUser,
  staleTime: Infinity,
});
