import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import PlansTable from './plans-table';
import type { Goal, StatCard } from '@/types/plans';
function PlansIndex() {
  return (
    <div>
      <DashboardGoals />
    </div>
  );
}

export default PlansIndex;

export function DashboardGoals() {
  const [goals] = useState<Goal[]>([
    {
      id: '1',
      name: 'Emergency Fund',
      description: 'Build a 6-month emergency fund for financial security',
      targetAmount: 10000,
      currentAmount: 3500,
      deadline: '2024-12-31',
      category: 'savings',
      color: '#194e3e',
      createdAt: '2024-01-15',
      status: 'active',
    },
    {
      id: '2',
      name: 'Vacation to Europe',
      description:
        'Save for a 2-week trip to Europe including flights and accommodation',
      targetAmount: 5000,
      currentAmount: 1200,
      deadline: '2024-08-15',
      category: 'travel',
      color: '#2d7a5f',
      createdAt: '2024-02-01',
      status: 'active',
    },
    {
      id: '3',
      name: 'New Car Down Payment',
      description: 'Save for a down payment on a reliable used car',
      targetAmount: 8000,
      currentAmount: 8000,
      deadline: '2024-10-01',
      category: 'purchase',
      color: '#4a9d7a',
      createdAt: '2024-01-20',
      status: 'completed',
    },
  ]);
  // Calculate stats
  const totalGoals = goals.length;
  const activeGoals = goals.filter((goal) => goal.status === 'active').length;
  const completedGoals = goals.filter(
    (goal) => goal.status === 'completed'
  ).length;
  const totalTargetAmount = goals.reduce(
    (sum, goal) => sum + goal.targetAmount,
    0
  );
  const totalCurrentAmount = goals.reduce(
    (sum, goal) => sum + goal.currentAmount,
    0
  );

  const overallProgress =
    totalTargetAmount > 0 ? (totalCurrentAmount / totalTargetAmount) * 100 : 0;

  const statsCards: StatCard[] = [
    {
      title: 'Total Goals',
      value: totalGoals,
      description: `${activeGoals} active, ${completedGoals} completed`,
    },
    {
      title: 'Total Target',
      value: `$${totalTargetAmount.toLocaleString()}`,
      description: 'Across all goals',
    },
    {
      title: 'Total Saved',
      value: `$${totalCurrentAmount.toLocaleString()}`,
      description: `${overallProgress.toFixed(1)}% of target`,
    },
    {
      title: 'Overall Progress',
      value: `${overallProgress.toFixed(1)}%`,
      description: 'Progress indicator',
    },
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {statsCards.map((stat, index) => (
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs  @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            <Card className="text-black dark:text-white" key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="capitalize font-bold text-lg">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
                {stat.title === 'Overall Progress' && (
                  <Progress value={overallProgress} className="mt-2" />
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div>
        <PlansTable data={goals} />
      </div>
    </main>
  );
}
