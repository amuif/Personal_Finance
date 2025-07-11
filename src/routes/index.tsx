import LandingIndex from '@/components/landing/landing-index';
import LoadingComponent from '@/components/loading-component';
import NotFound from '@/components/others/not-found';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { supabase } from '@/supabase/supabase-client';

export const Route = createFileRoute('/')({
  component: LandingOrRedirect,
  pendingComponent: LoadingComponent,
  notFoundComponent: NotFound,
});

function LandingOrRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        navigate({ to: '/dashboard', replace: true });
      }
    }
    checkAuth();
  }, [navigate]);

  return <LandingIndex />;
}
