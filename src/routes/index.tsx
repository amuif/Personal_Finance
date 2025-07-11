import LandingIndex from '@/components/landing/landing-index';
import LoadingComponent from '@/components/loading-component';
import NotFound from '@/components/others/not-found';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: LandingIndex,
  pendingComponent: LoadingComponent,
  notFoundComponent: NotFound,
});
