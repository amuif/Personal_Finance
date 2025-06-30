import { currentUser } from '@/lib/api';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Landing } from './landing';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';

function HandleComponent() {
  const { user } = Route.useRouteContext();
  if (!user) {
    return <Landing />;
  }
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
