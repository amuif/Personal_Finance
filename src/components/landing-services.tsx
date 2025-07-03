import {
  LineChartIcon as ChartLine,
  Goal,
  Split,
  TrendingUp,
  FileText,
} from 'lucide-react';
const LandingFeatuers = () => {
  return (
    <div id="features" className="px-3 py-12 flex flex-col gap-5">
      <div className="text-center ">
        <h4 className="text-center text-primary font-bold border rounded-full px-4 shadow-xl py-2 w-fit mx-auto">
          Features
        </h4>
        <div className="text-center pt-3">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Everything you need to run & <br /> grow your finance
          </h2>
        </div>
      </div>

      <BentoGrid />
    </div>
  );
};

export default LandingFeatuers;

const Features = [
  {
    id: 1,
    name: 'Effortless Money Management',
    description:
      'Easily organize and control your income, expenses, and budgets in one place.',
    icon: Split,
  },
  {
    id: 2,
    name: 'Real-Time Expense Tracking',
    description:
      'Track your spending habits and cash flow in real time with visual insights.',
    icon: ChartLine,
  },
  {
    id: 3,
    name: 'Smart Goal Setting',
    description:
      'Set financial goals and stay motivated as you work towards saving or investing.',
    icon: Goal,
  },
  {
    id: 4,
    name: 'Automated Financial Reports',
    description:
      'Generate smart, automated reports that help you understand your financial health.',
    icon: FileText,
  },
  {
    id: 5,
    name: 'Personalized Growth Score',
    description:
      'Get a personalized score to measure your financial progress and stability.',
    icon: TrendingUp,
  },
];

export function BentoGrid() {
  const colors = [
    'from-[#194e3e] to-[#2d7a5f]',
    'from-[#2d7a5f] to-[#4a9d7a]',
    'from-[#4a9d7a] to-[#67c095]',
    'from-[#67c095] to-[#84e3b0]',
    'from-[#84e3b0] to-[#a1f0cb]',
  ];

  const firstRow = Features.slice(0, 3);
  const secondRow = Features.slice(3);

  return (
    <section className="w-full py-10 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {firstRow.map((feature, index) => (
            <div
              key={feature.id}
              className="relative group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#194e3e]/20"
            >
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${colors[index]} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-all duration-500 relative z-10`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>

                  <div className="absolute inset-0 rounded-full border-2 border-[#194e3e] opacity-20 animate-ping" />
                  <div
                    className="absolute inset-0 rounded-full border border-[#194e3e] opacity-30 animate-pulse"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />

                  <div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-[#194e3e] rounded-full opacity-60 animate-bounce"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  />
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full text-xs font-medium text-gray-600 mb-2">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors[index]}`}
                  />
                  CORE FEATURE
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  {feature.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {secondRow.map((feature, index) => (
            <div
              key={feature.id}
              className="relative group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#194e3e]/20"
            >
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${colors[index + 3]} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-all duration-500 relative z-10`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>

                  <div
                    className="absolute inset-0 rounded-full border border-[#194e3e] opacity-30 animate-pulse"
                    style={{ animationDelay: `${(index + 3) * 0.2}s` }}
                  />

                  <div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-[#194e3e] rounded-full opacity-60 animate-bounce"
                    style={{ animationDelay: `${(index + 3) * 0.3}s` }}
                  />
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full text-xs font-medium text-gray-600 mb-2">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors[index + 3]}`}
                  />
                  CORE FEATURE
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  {feature.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 text-gray-600">
              <span className="text-sm font-medium">
                All features are included in every plan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
