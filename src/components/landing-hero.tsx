import { Button } from './ui/button';
const LandingHero = () => {
  return (
    <div id="home" className="flex items-center justify-center h-dvh w-full ">
      <HeroSection />
    </div>
  );
};

export default LandingHero;

import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Wallet,
  BarChart3,
  TrendingDown,
  Coins,
  Target,
  Star,
} from 'lucide-react';

const floatingIcons = [
  {
    Icon: Wallet,
    bottom: '25%',
    left: '8%',
    delay: '0.5s',
    duration: '9s',
    size: 'w-5 h-5',
  },
  {
    Icon: BarChart3,
    bottom: '15%',
    right: '15%',
    delay: '1.5s',
    duration: '8s',
    size: 'w-6 h-6',
  },
  {
    Icon: TrendingDown,
    top: '60%',
    left: '12%',
    delay: '2.5s',
    duration: '7s',
    size: 'w-5 h-5',
  },
  {
    Icon: Coins,
    bottom: '35%',
    right: '8%',
    delay: '4s',
    duration: '6s',
    size: 'w-6 h-6',
  },
  {
    Icon: Target,
    bottom: '45%',
    left: '20%',
    delay: '3.5s',
    duration: '7s',
    size: 'w-6 h-6',
  },
  {
    Icon: Star,
    top: '55%',
    right: '30%',
    delay: '4.2s',
    duration: '7s',
    size: 'w-4 h-4',
  },
  {
    Icon: TrendingUp,
    top: '70%',
    left: '30%',
    delay: '3.2s',
    duration: '9s',
    size: 'w-6 h-6',
  },
];

export function HeroSection() {
  return (
    <div className="flex w-full pt-12 lg:pt-24 relative overflow-hidden">
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute hidden lg:block pointer-events-none"
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        >
          <div className="relative">
            <div
              className={`${item.size} text-[#194e3e] opacity-20 animate-bounce`}
              style={{
                animationDelay: item.delay,
                animationDuration: item.duration,
              }}
            >
              <item.Icon className="w-full h-full" />
            </div>
            <div
              className={`absolute inset-0 ${item.size} bg-[#194e3e] opacity-5 rounded-full blur-sm animate-pulse`}
              style={{
                animationDelay: `calc(${item.delay} + 1s)`,
                animationDuration: `calc(${item.duration} + 2s)`,
              }}
            />
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-8 items-center justify-center h-full max-w-5xl mx-auto px-4 z-10">
        <div className="relative text-center">
          <h1 className="font-bold text-4xl lg:text-7xl pt-6 lg:pt-8 text-center leading-tight">
            <span className="text-gray-900">Crystal-clear control</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#194e3e] via-[#2d7a5f] to-[#4a9d7a]">
              over your finances.
            </span>
          </h1>

          <div className="absolute top-4 -right-4 lg:-right-12">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#194e3e] to-[#2d7a5f] flex items-center justify-center text-white shadow-lg animate-bounce">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-[#194e3e] opacity-20 animate-ping" />
            </div>
          </div>

          <div className="absolute bottom-4 -left-4 lg:-left-12">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4a9d7a] to-[#67c095] flex items-center justify-center text-white shadow-lg animate-bounce">
                <Sparkles className="w-5 h-5" />
              </div>
              <div
                className="absolute inset-0 rounded-full border-2 border-[#4a9d7a] opacity-20 animate-ping"
                style={{ animationDelay: '0.5s' }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-gray-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2d7a5f] to-[#4a9d7a]" />
            <span>Real-time tracking</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-gray-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4a9d7a] to-[#67c095]" />
            <span>AI-powered insights</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="group relative px-8 py-6 bg-[#194e3e] text-white rounded-full font-semibold text-lg hover:bg-[#2d7a5f] transition-all duration-300 shadow-lg hover:shadow-xl">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#194e3e] to-[#4a9d7a] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>

          <Button
            variant="outline"
            className="px-8 py-6 border-2 border-[#194e3e] text-[#194e3e] hover:bg-[#194e3e] hover:text-white bg-transparent rounded-full font-semibold text-lg transition-all duration-300"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
