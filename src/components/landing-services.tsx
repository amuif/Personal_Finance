const LandingServices = () => {
  return (
    <div className="px-3 py-12 flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h4 className="text-center text-primary font-bold">Features</h4>
        <p className="text-center text-3xl font-semibold w-full">
          Everything you need to run & <br />{' '}
          <span className="text-primary">grow your finance</span>
        </p>
      </div>
      <div>
        <BentoGrid />
      </div>
    </div>
  );
};

export default LandingServices;

interface FeaturesProps {
  id: number;
  name: string;
  description: string;
  image?: string;
}

export const Features: FeaturesProps[] = [
  {
    id: 1,
    name: 'Effortless Money Management',
    description:
      'Easily organize and control your income, expenses, and budgets in one place.',
    image: '',
  },
  {
    id: 2,
    name: 'Real-Time Expense Tracking',
    description:
      'Track your spending habits and cash flow in real time with visual insights.',
    image: '',
  },
  {
    id: 3,
    name: 'Smart Goal Setting',
    description:
      'Set financial goals and stay motivated as you work towards saving or investing.',
    image: '',
  },
  {
    id: 4,
    name: 'Automated Financial Reports',
    description:
      'Generate smart, automated reports that help you understand your financial health.',
    image: '',
  },
  {
    id: 5,
    name: 'Personalized Growth Score',
    description:
      'Get a personalized score to measure your financial progress and stability.',
    image: '',
  },
];

export function BentoGrid() {
  const firstRow = Features.slice(0, 3);
  const secondRow = Features.slice(3);
  return (
    <div className="min-h-screen p-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 p-4 gap-3 mb-6">
        {firstRow.map(({ id, name, description, image }) => (
          <div key={id} className="border p-5  rounded-2xl">
            <div className="text-black !pb-3 text-center text-xl lg:text-3xl">
              {name}
            </div>
            <div className="!px-3">
              <p className="text-muted-foreground">{description}</p>
              <img src={image} alt={`${name} photo`} />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {secondRow.map(({ id, name, description, image }) => (
          <div key={id} className="border p-5  rounded-2xl">
            <div className="text-black !pb-3 text-center text-xl lg:text-3xl">
              {name}
            </div>
            <div className="!px-3">
              <p className="text-muted-foreground">{description}</p>
              <img src={image} alt={`${name} photo`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
