import LoadingComponent from '@/components/loading-component';
import PlansIndex from '@/components/plans/plans-index';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/plans')({
  component: PlansIndex,
  pendingComponent: LoadingComponent,
});
