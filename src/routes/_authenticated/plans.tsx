import PlansIndex from '@/components/plans/plans-index';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/plans')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <PlansIndex />
    </div>
  );
}
