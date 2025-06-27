import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/landing')({
  component: Landing,
});

export function Landing() {
  return <div>Landing page</div>;
}
