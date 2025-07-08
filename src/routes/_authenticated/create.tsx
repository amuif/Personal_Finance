import Form from '@/components/create/form';
import { TotalChart } from '@/components/create/pie-chart';
import LoadingComponent from '@/components/loading-component';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/create')({
  component: CreateComponent,
  pendingComponent: LoadingComponent,
});

function CreateComponent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-3 py-5">
      <div>
        <Form />
      </div>
      <div>
        <TotalChart />
      </div>
    </div>
  );
}
