import { createFileRoute, useNavigate } from '@tanstack/react-router';
import HomePage from '@/components/landing';
import LoadingComponent from '@/components/loading-component';
import { useEffect } from 'react';
import { supabase } from '@/supabase/supabase-client';

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: DashboardGuard,
  pendingComponent: LoadingComponent,
});

function DashboardGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getUser();
      if (!data?.user) {
        navigate({ to: '/', replace: true });
      }
    }
    checkAuth();
  }, [navigate]);

  return (
    <div>
      <HomePage />
    </div>
  );
}
