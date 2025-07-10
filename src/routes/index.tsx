import LandingIndex from '@/components/landing/landing-index';
import LoadingComponent from '@/components/loading-component';
import NotFound from '@/components/others/not-found';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Landing,
  pendingComponent: LoadingComponent,
  notFoundComponent: NotFound,
});
export function Landing() {
  return <LandingIndex />;
}
