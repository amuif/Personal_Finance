import ConsultIndex from '@/components/consult/consult-index';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/consult')({
  component: ConsultIndex,
});
