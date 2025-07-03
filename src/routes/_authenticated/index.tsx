import { createFileRoute } from '@tanstack/react-router';
import HomePage from '@/components/landing';
import LoadingComponent from '@/components/loading-component';

export const Route = createFileRoute('/_authenticated/')({
  component: Index,
  pendingComponent: LoadingComponent,
});

function Index() {
  return <HomePage />;
}
