import { Button } from './ui/button';

const LandingHero = () => {
  return (
    <div className="flex flex-col items-center py-12 lg:py-24  justify-center ">
      <div className="flex flex-col  gap-4 ">
        <h3 className="font-extrabold text-3xl lg:text-7xl pt-6 lg:pt-8 text-center ">
          Crystal-clear control <br /> over your finances.
        </h3>
        <p className="w-full lg:w-[80%] mx-auto text-center text-sm px-5">
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
