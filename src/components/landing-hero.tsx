import { Button } from './ui/button';
import FadingGrid from './ui/grid.tsx';
const LandingHero = () => {
  return (
    <div className="flex items-center justify-center h-dvh relative">
      <FadingGrid width={70} height={70} />
      <div className="absolute flex flex-col  gap-4 items-center justify-center h-full">
        <h3 className="font-bold text-3xl lg:text-6xl  pt-6 lg:pt-8 text-center ">
          Crystal-clear control <br /> over your finances.
        </h3>
        <p className="w-full lg:w-[80%] mx-auto text-center text-base px-5">
          Take charge of your financial future with Clarity, the ultimate tool
          for crystal-clear control over your finances, designed to simplify
          budgeting and track spending.{' '}
        </p>
        <div className=" flex items-center justify-center gap-2">
          <Button size="xl">Get started</Button>
          <Button size="xl">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
