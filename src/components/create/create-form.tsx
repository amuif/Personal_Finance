import { cn } from '@/lib/utils';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import { Button } from '../ui/button';
import { ChevronDownIcon } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { useForm, useStore } from '@tanstack/react-form';

const CreateForm = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      amount: '',
      target: '',
      deadline: new Date(),
      status: '',
      type: '',
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
    validators: {
      onChange({ value }) {
        if (value.title === '' || value.title.length < 2) {
          return 'Title must at least have 2 characters';
        }
        if (value.type === '') {
          return 'Please choose an expense type';
        }
        if (value.amount === '') {
          return 'Enter a valid amount';
        }
        return undefined;
      },
    },
  });
  const formErrorMap = useStore(form.store, (state) => state.errorMap);
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card  *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
      <Card
        className={cn(
          'flex flex-col w-full text-black dark:text-white @container/card',
          className
        )}
      >
        <CardHeader className="items-center pb-0">
          <CardTitle className="font-bold text-lg ">
            Create new expense
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
          <form
            id="create-form"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="flex flex-col space-y-5"
          >
            <div className="flex flex-col justify-between items-center lg:flex-row gap-5">
              <form.Field name="title">
                {(field) => (
                  <div className="flex flex-col gap-5 lg:gap-2 w-full">
                    <Label htmlFor={field.name}>Title</Label>
                    <Input
                      placeholder="Expense title"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className=""
                      type="text"
                    />
                  </div>
                )}
              </form.Field>

              <form.Field name="type">
                {(field) => (
                  <div className="flex flex-col gap-5 lg:gap-2 w-full">
                    <Label htmlFor={field.name} className="whitespace-nowrap">
                      Type
                    </Label>
                    <Select
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
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
                )}
              </form.Field>
            </div>
            <div className="flex flex-col justify-between items-center lg:flex-row gap-5">
              <form.Field name="amount">
                {(field) => (
                  <div className="flex flex-col gap-2 w-full">
                    <Label htmlFor={field.name}>Amount</Label>
                    <Input
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Enter amount"
                      className=""
                      type="number"
                    />
                  </div>
                )}
              </form.Field>
              <form.Field name="target">
                {(field) => (
                  <div className="flex flex-col gap-2 w-full">
                    <Label htmlFor={field.name}>Target(optional)</Label>
                    <Input placeholder="Enter target amount" value={field.state.value} onChange={(e)=>field.handleChange(e.target.value)} className="" />
                  </div>
                )}
              </form.Field>
            </div>
            <div className="flex flex-col justify-between items-center lg:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full">
                <Label>Deadline(optional)</Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date"
                      className=" justify-between font-normal"
                    >
                      {date ? date.toLocaleDateString() : 'Select date'}
                      <ChevronDownIcon className="size-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        setDate(date);
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Label>Status(optional)</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Status stage" />
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
          </form>
          <div className="flex flex-col gap-2">
            <Label>Details(optional)</Label>
            <Textarea placeholder="Enter details here" className="h-20" />
          </div>
        </CardContent>
        <CardFooter>
          {formErrorMap.onChange ? (
            <div>
              <em>There was an error on the form: {formErrorMap.onChange}</em>
            </div>
          ) : null}
          <div className="flex items-center justify-end w-full gap-5">
            <form.Subscribe> 
                    <Button form="create-form" variant="outline">
              Discard
            </Button>

            </form.Subscribe>
           <form.Subscribe>
              {' '}
              <Button form="create-form">Save</Button>
            </form.Subscribe>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateForm;
