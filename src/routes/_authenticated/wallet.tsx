import LoadingComponent from '@/components/loading-component';
import WalletIndex from '@/components/wallet/wallet-index';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/wallet')({
  component: RouteComponent,
  pendingComponent: LoadingComponent,
});

function RouteComponent() {
  return (
    <div>
      <WalletIndex />
    </div>
  );
}
