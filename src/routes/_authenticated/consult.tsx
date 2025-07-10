import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/consult')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_authenticated/consult"!</div>;
}
