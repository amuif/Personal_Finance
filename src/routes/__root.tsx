import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import type { QueryClient } from '@tanstack/react-query';

interface MyRouterContext {
  queryClient: QueryClient;
}
export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: LoggedDisplay,
});

function LoggedDisplay() {
  return (
    <div className="font-roboto">
      <Outlet />
    </div>
  );
}
