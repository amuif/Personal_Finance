import { currentUser } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { toast } from 'sonner';

export const Route = createFileRoute('/_authenticated/profile')({
  component: Profile,
});
function Profile() {
  const { data, error } = useQuery(currentUser);

  if (error) {
    return toast.error('Error fetching user');
  }
  console.log(data);
  return <div>{data?.user?.email}</div>;
}
