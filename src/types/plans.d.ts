export interface Goal {
  id: string;
  name: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: string;
  color: string;
  createdAt: string;
  status: 'active' | 'completed' | 'paused';
}

interface StatCard {
  title: string;
  value: string | number;
  description: string;
}
