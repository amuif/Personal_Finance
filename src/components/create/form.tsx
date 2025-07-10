import { cn } from '@/lib/utils';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const Form = ({ className }: { className?: string }) => {
  return (
    <Card
      className={cn(
        'flex flex-col w-full text-black dark:text-white',
        className
      )}
    >
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-bold text-lg ">Add new expense</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col justify-between items-center lg:flex-row gap-5">
            <div className="flex gap-5 lg:gap-2 w-full">
              <Label>Name</Label>
              <Input placeholder="Expense name" className="" />
            </div>
            <div className="flex gap-2 w-full">
              <Label>Amount</Label>
              <Input placeholder="Enter amount" className="" />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center lg:flex-row gap-5">
            <div className="flex gap-5 lg:gap-2 w-full">
              <Label className="whitespace-nowrap">Type</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Expense type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="saving">Saving</SelectItem>
                    <SelectItem value="output">Output</SelectItem>
                    <SelectItem value="bill">Bill</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 w-full">
              <Label>Status</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="done">Done</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Details(optional)</Label>
          <Textarea placeholder="Enter details here" className="h-20" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Form;
