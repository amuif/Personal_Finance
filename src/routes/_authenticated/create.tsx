import CreateForm from '@/components/create/create-form';
import { DataTable } from '@/components/data-table';
import LoadingComponent from '@/components/loading-component';
import { createFileRoute } from '@tanstack/react-router';
import data from '@/app/dashboard/data.json';
import { ChartPieLabel } from '@/components/create/pie-chart';

export const Route = createFileRoute('/_authenticated/create')({
  component: CreateComponent,
  pendingComponent: LoadingComponent,
});

function CreateComponent() {
  return (
    <div className="flex flex-col px-3 py-5 gap-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        <div>
          <CreateForm />
        </div>
        <div>
          <ChartPieLabel />
        </div>
      </div>
      <div>
        <DataTable data={data} />
      </div>
    </div>
  );
}
