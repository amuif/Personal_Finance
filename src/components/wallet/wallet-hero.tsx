import { ArrowDown, ArrowUp } from 'lucide-react';
import { Badge } from '../ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

interface WalletCardProps {
  id: number;
  title: string;
  amount: number;
  change: number;
}

const walletRecords: WalletCardProps[] = [
  {
    id: 1,
    title: 'total amount',
    amount: 1000,
    change: 10,
  },
  {
    id: 2,
    title: 'total expense',
    amount: 300,
    change: -10,
  },
  {
    id: 3,
    title: 'total Income',
    amount: 600,
    change: 20,
  },
];
const WalletHero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {walletRecords.map((record) => (
        <WalletCards
          id={record.id}
          title={record.title}
          amount={record.amount}
          change={record.change}
        />
      ))}
    </div>
  );
};

export default WalletHero;

export const WalletCards = ({ id, title, amount, change }: WalletCardProps) => {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-1 px-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs  @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card gap-3" key={id}>
        <CardHeader className="">
          <CardTitle className="capitalize font-bold text-lg">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex gap-3 items-center">
          <p className="font-extrabold text-xl lg:text-2xl">
            ${amount.toLocaleString()}
          </p>
        </CardContent>
        <CardFooter className="flex gap-3">
          <div className="flex gap-2">
            <Badge
              variant={change > 0 ? 'trendingUp' : 'trendingDown'}
              className="flex items-center justify-center !border-none"
            >
              <p className="flex ">
                {change > 0 ? (
                  <ArrowUp className="h-5 w-3" strokeWidth={3} />
                ) : (
                  <ArrowDown className="h-5 w-3" strokeWidth={3} />
                )}
                <span className="flex items-center justify-center">
                  {' '}
                  {change}{' '}
                </span>
              </p>{' '}
            </Badge>
            <p className="text-muted-foreground">compared to last month</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
