import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import type { QueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { supabase } from '@/supabase/supabase-client';

interface MyRouterContext {
  queryClient: QueryClient;
}
export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: LoggedDisplay,
});

function LoggedDisplay() {
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
  }, []);

  return (
    <div className="font-roboto">
      <Outlet />
    </div>
  );
}
