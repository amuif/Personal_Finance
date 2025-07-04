import ComingSoon from '@/components/others/coming-soon';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/coming-soon')({
  component: ComingSoon,
});
