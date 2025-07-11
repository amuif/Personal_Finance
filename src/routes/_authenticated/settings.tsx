import SettingsIndex from '@/components/settings/settings-index';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/settings')({
  component: SettingsIndex,
});
