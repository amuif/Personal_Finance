import { Button } from '@/components/ui/button';
import { createFileRoute, Link } from '@tanstack/react-router';
export const Route = createFileRoute('/landing')({
  component: Landing,
});

export function Landing() {
  return (
    <div className="flex justify-between items-center">
      {' '}
      <p>Landing page</p>{' '}
      <Button asChild>
        <Link to="/login">Log in</Link>
      </Button>
    </div>
  );
}
