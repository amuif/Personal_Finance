import {
  createRootRouteWithContext,
  Outlet,
  useLocation,
  useNavigate,
} from '@tanstack/react-router';
import type { QueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { supabase } from '@/supabase/supabase-client';
import LoadingComponent from '@/components/loading-component';
import NotFound from '@/components/others/not-found';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: LoggedDisplay,
  pendingComponent: LoadingComponent,
  notFoundComponent: NotFound,
});

function LoggedDisplay() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setTimeout(() => {
          console.group();
          console.log('Auth change inside __root.tsx', event);
          console.log('Auth change session', session);
          console.groupEnd();
        }, 0);
      }
    );
    return () => {
      listener.subscription.unsubscribe();
    };
  }, [location.pathname, navigate]);

  useEffect(() => {
    async function checkAuthAndRedirect() {
      if (location.pathname === '/') {
        const { data } = await supabase.auth.getUser();
        if (data?.user) {
          navigate({ to: '/dashboard', replace: true });
        }
      }
    }
    checkAuthAndRedirect();
  }, [location.pathname, navigate]);

  return (
    <div className="font-roboto">
      <Outlet />
    </div>
  );
}
