import { createFileRoute } from '@tanstack/react-router';
import HomePage from '@/components/landing';

export const Route = createFileRoute('/_authenticated/')({
  component: Index,
});

function Index() {
  return <HomePage />;
}
