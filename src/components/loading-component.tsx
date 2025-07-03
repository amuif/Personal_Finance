import { useEffect, useState } from 'react';
import {
  Sparkles,
  TrendingUp,
  DollarSign,
  BarChart3,
  Target,
  LoaderIcon,
} from 'lucide-react';

interface LoadingComponentProps {
  type?: 'default' | 'progress' | 'dots' | 'financial' | 'minimal';
  message?: string;
  progress?: number;
  showProgress?: boolean;
  size?: 'sm' | 'md' | 'lg';
  overlay?: boolean;
}

export default function LoadingComponent({
  type = 'default',
  message = 'Loading your financial data...',
  progress = 0,
  showProgress = false,
  size = 'md',
  overlay = false,
}: LoadingComponentProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [loadingMessages] = useState([
    'Initializing secure connection...',
    'Loading your financial data...',
    'Preparing your dashboard...',
    'Almost ready...',
    'Welcome to Clarity!',
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const icons = [Sparkles, TrendingUp, DollarSign, BarChart3, Target];
  const colors = [
    'from-[#194e3e] to-[#2d7a5f]',
    'from-[#2d7a5f] to-[#4a9d7a]',
    'from-[#4a9d7a] to-[#67c095]',
    'from-[#67c095] to-[#84e3b0]',
    'from-[#84e3b0] to-[#a1f0cb]',
  ];

  const sizeClasses = {
    sm: { container: 'w-16 h-16', icon: 'w-6 h-6', text: 'text-sm' },
    md: { container: 'w-24 h-24', icon: 'w-8 h-8', text: 'text-base' },
    lg: { container: 'w-32 h-32', icon: 'w-12 h-12', text: 'text-lg' },
  };

  useEffect(() => {
    if (showProgress) {
      const interval = setInterval(() => {
        setAnimatedProgress((prev) => {
          if (prev < progress) {
            return Math.min(prev + 1, progress);
          }
          return prev;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [progress, showProgress]);

  useEffect(() => {
    if (type === 'financial') {
      const interval = setInterval(() => {
        setCurrentIcon((prev) => (prev + 1) % icons.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [type, icons.length]);

  useEffect(() => {
    if (showProgress && progress > 0) {
      const messageIndex = Math.min(
        Math.floor(progress / 20),
        loadingMessages.length - 1
      );
      setCurrentMessageIndex(messageIndex);
    }
  }, [progress, showProgress, loadingMessages.length]);

  const renderLoader = () => {
    const sizeClass = sizeClasses[size];
    const currentMessage = showProgress
      ? loadingMessages[currentMessageIndex]
      : message;

    switch (type) {
      case 'progress':
        return (
          <div className="flex flex-col items-center space-y-8 justify-center w-full m-auto min-h-screen">
            {/* Main progress circle */}
            <div className="relative">
              <div
                className={`${sizeClass.container} rounded-full bg-gradient-to-br from-[#194e3e] to-[#2d7a5f] flex items-center justify-center  shadow-2xl`}
              >
                <span className="text-2xl font-bold">{animatedProgress}%</span>
              </div>

              {/* Progress ring */}
              <svg
                className="absolute inset-0 -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(25, 78, 62, 0.2)"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - animatedProgress / 100)}`}
                  className="transition-all duration-500 ease-out"
                />
                <defs>
                  <linearGradient
                    id="progressGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#194e3e" />
                    <stop offset="100%" stopColor="#4a9d7a" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating sparkles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#4a9d7a] rounded-full opacity-80 animate-bounce" />
              <div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#67c095] rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: '0.5s' }}
              />
            </div>

            <div className="text-center space-y-4">
              <p
                className={`${sizeClass.text} font-medium  transition-all duration-500`}
              >
                {currentMessage}
              </p>
              <div className="flex items-center justify-center gap-2 text-sm ">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#194e3e] to-[#4a9d7a] animate-pulse" />
                <span>Securing your financial data</span>
              </div>
            </div>
          </div>
        );

      case 'financial': {
        const CurrentIcon = icons[currentIcon];
        return (
          <div className="flex flex-col items-center space-y-8">
            <div className="relative">
              {/* Main circle with rotating icon */}
              <div
                className={`${sizeClass.container} rounded-full bg-gradient-to-br ${colors[currentIcon]} flex items-center justify-center  shadow-2xl transition-all duration-500`}
              >
                <CurrentIcon
                  className={`${sizeClass.icon} text-white transition-all duration-500`}
                />
              </div>

              {/* Multiple animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-[#194e3e] opacity-20 animate-ping" />
              <div
                className="absolute inset-0 rounded-full border border-[#4a9d7a] opacity-30 animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              <div
                className="absolute inset-0 rounded-full border border-[#67c095] opacity-20 animate-ping"
                style={{ animationDelay: '1s' }}
              />

              {/* Orbiting dots */}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-[#194e3e] rounded-full opacity-60"
                  style={{
                    animation: `orbit 3s linear infinite`,
                    animationDelay: `${i * 1}s`,
                    transformOrigin: `${sizeClass.container.includes('32') ? '64px 64px' : sizeClass.container.includes('24') ? '48px 48px' : '32px 32px'}`,
                  }}
                />
              ))}

              {/* Progress indicator if enabled */}
              {showProgress && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#194e3e] to-[#4a9d7a] rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${animatedProgress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="text-center space-y-3">
              <p
                className={`${sizeClass.text} font-medium  transition-all duration-500`}
              >
                {currentMessage}
              </p>
              <div className="flex items-center justify-center gap-4 text-sm ">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Bank-level Security</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span>256-bit Encryption</span>
                </div>
              </div>
              {showProgress && (
                <div className="text-sm font-medium text-[#194e3e]">
                  {Math.round(animatedProgress)}% Complete
                </div>
              )}
            </div>
          </div>
        );
      }
      default:
        return (
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              {/* Main loading circle */}
              <div
                className={`${sizeClass.container} rounded-full bg-gradient-to-br from-[#194e3e] to-[#2d7a5f] flex items-center justify-center  shadow-2xl animate-pulse`}
              >
                <LoaderIcon
                  className={`${sizeClass.icon} animate-spin text-white`}
                  style={{ animationDuration: '2s' }}
                />
              </div>

              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-[#194e3e] opacity-20 animate-ping" />
              <div
                className="absolute inset-0 rounded-full border border-[#4a9d7a] opacity-30 animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#4a9d7a] rounded-full opacity-80 animate-bounce" />
              <div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#67c095] rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: '0.5s' }}
              />
            </div>

            <div className="text-center space-y-2">
              <p className={`${sizeClass.text} font-medium `}>
                {currentMessage}
              </p>
              <div className="flex items-center justify-center gap-2 text-sm ">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#194e3e] to-[#4a9d7a] animate-pulse" />
                <span>Please wait...</span>
              </div>
            </div>
          </div>
        );
    }
  };

  const content = (
    <div className="flex items-center justify-center p-8 min-h-screen m-auto">
      {renderLoader()}

      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg)
              translateX(
                ${size === 'lg' ? '64px' : size === 'md' ? '48px' : '32px'}
              )
              rotate(0deg);
          }
          to {
            transform: rotate(360deg)
              translateX(
                ${size === 'lg' ? '64px' : size === 'md' ? '48px' : '32px'}
              )
              rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
          {content}
        </div>
      </div>
    );
  }

  return content;
}
