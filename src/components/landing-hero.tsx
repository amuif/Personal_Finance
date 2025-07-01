import { Button } from './ui/button';

const LandingHero = () => {
  return (
    <div className="flex items-center justify-center h-[80dvh]">
      <div className="flex flex-col  gap-4 items-center justify-center h-full">
        <h3 className="font-bold text-3xl lg:text-6xl text-primary pt-6 lg:pt-8 text-center ">
          Crystal-clear control <br /> over your finances.
        </h3>
        <p className="w-full lg:w-[80%] mx-auto text-center text-base px-5">
          Take charge of your financial future with Clarity, the ultimate tool
          for crystal-clear control over your finances, designed to simplify
          budgeting and track spending.{' '}
        </p>
        <div className=" flex items-center justify-center gap-2">
          <Button size="xl">Book a demo</Button>
          <Button size="xl">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
