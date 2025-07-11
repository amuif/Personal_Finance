import type { Goal } from '@/types/plans';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Edit, MoreHorizontal, Trash2 } from 'lucide-react';

interface PlansTableProps {
  data: Goal[];
}
const PlansTable = ({ data: goals }: PlansTableProps) => {
  const getProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Goals</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {goals.map((goal) => {
            const progress = getProgress(goal.currentAmount, goal.targetAmount);
            const daysRemaining = getDaysRemaining(goal.deadline);
            const isOverdue = daysRemaining < 0;

            return (
              <TableRow key={goal.id}>
                <TableCell>{goal.name}</TableCell>
                <TableCell>{goal.category}</TableCell>
                <TableCell>
                  <div className="w-full">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{progress.toFixed(1)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                </TableCell>
                <TableCell>{goal.currentAmount}</TableCell>
                <TableCell>
                  {' '}
                  <div className="text-sm">
                    <div>{new Date(goal.deadline).toLocaleDateString()}</div>
                    <div
                      className={`text-xs ${isOverdue ? 'text-red-600' : 'text-muted-foreground'}`}
                    >
                      {isOverdue
                        ? `${Math.abs(daysRemaining)} days overdue`
                        : `${daysRemaining} days left`}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {' '}
                  <Badge
                    variant={
                      goal.status === 'completed'
                        ? 'default'
                        : goal.status === 'active'
                          ? 'secondary'
                          : 'outline'
                    }
                    className="capitalize "
                  >
                    {goal.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {' '}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default PlansTable;
