import LoadingComponent from '@/components/loading-component';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
  pendingComponent: LoadingComponent,
});

function RouteComponent() {
  return <div>Hello "/about"!</div>;
}
