import { createFileRoute } from '@tanstack/react-router';
import HomePage from '@/components/landing';
import LoadingComponent from '@/components/loading-component';
export const Route = createFileRoute('/_authenticated/dashboard')({
  component: RouteComponent,
  pendingComponent: LoadingComponent,
});

function RouteComponent() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
