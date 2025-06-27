import { currentUser } from '@/lib/api';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Landing } from './landing';

function HandleComponent() {
  const { user } = Route.useRouteContext();
  if (!user) {
    return <Landing />;
  }
  return <Outlet />;
}
export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context }) => {
    const queryClient = context.queryClient;
    try {
      const data = await queryClient.fetchQuery(currentUser);
      return data;
    } catch {
      return { user: null };
    }
  },
  component: HandleComponent,
});
