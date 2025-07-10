import { currentUser } from '@/lib/api';
import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { useEffect } from 'react';

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

function HandleComponent() {
  const { user } = Route.useRouteContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate({ to: '/' });
      return;
    }
  }, [user, navigate]);
  return (
    <div className="font-roboto">
      <SidebarProvider
        style={
          {
            '--sidebar-width': 'calc(var(--spacing) * 72)',
            '--header-height': 'calc(var(--spacing) * 12)',
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
      {/*      <TanStackRouterDevtools />*/}
    </div>
  );
}
