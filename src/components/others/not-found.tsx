import { Search, HelpCircle, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function NotFound() {
  const floatingElements = [
    { icon: '💰', top: '15%', left: '10%', delay: '0s', size: 'text-2xl' },
    { icon: '📊', top: '25%', right: '15%', delay: '1s', size: 'text-xl' },
    { icon: '💳', bottom: '30%', left: '8%', delay: '2s', size: 'text-lg' },
    { icon: '🎯', top: '60%', right: '12%', delay: '0.5s', size: 'text-xl' },
    {
      icon: '📈',
      bottom: '20%',
      right: '20%',
      delay: '1.5s',
      size: 'text-2xl',
    },
    { icon: '💡', top: '40%', left: '5%', delay: '2.5s', size: 'text-lg' },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute hidden lg:block pointer-events-none"
          style={{
            top: element.top,
            bottom: element.bottom,
            left: element.left,
            right: element.right,
            animationDelay: element.delay,
          }}
        >
          <div
            className={`${element.size} opacity-20 animate-bounce`}
            style={{
              animationDelay: element.delay,
              animationDuration: '3s',
            }}
          >
            {element.icon}
          </div>
        </div>
      ))}

      <div className="absolute top-20 left-20 w-4 h-4 bg-[#194e3e] rounded-full opacity-30 animate-bounce hidden lg:block" />
      <div
        className="absolute top-40 right-32 w-3 h-3 bg-[#4a9d7a] rounded-full opacity-40 animate-bounce hidden lg:block"
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className="absolute bottom-32 left-32 w-5 h-5 bg-[#67c095] rounded-full opacity-20 animate-bounce hidden lg:block"
        style={{ animationDelay: '1s' }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl min-h-screen flex items-center m-auto  justify-center">
        <div className="text-center space-y-12">
          <div className="relative">
            <div className="relative inline-block">
              <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#194e3e] via-[#2d7a5f] to-[#4a9d7a] leading-none">
                404
              </h1>

              <div className="absolute -top-4 -left-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#194e3e] to-[#2d7a5f] flex items-center justify-center text-white shadow-xl animate-bounce">
                    <Search className="w-8 h-8" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-[#194e3e] opacity-20 animate-ping" />
                </div>
              </div>

              <div className="absolute -top-4 -right-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4a9d7a] to-[#67c095] flex items-center justify-center text-white shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div
                    className="absolute inset-0 rounded-full border-2 border-[#4a9d7a] opacity-20 animate-ping"
                    style={{ animationDelay: '0.5s' }}
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#67c095] to-[#84e3b0] flex items-center justify-center text-white shadow-lg animate-bounce">
                    <HelpCircle className="w-7 h-7" />
                  </div>
                  <div
                    className="absolute inset-0 rounded-full border-2 border-[#67c095] opacity-20 animate-ping"
                    style={{ animationDelay: '1s' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Badge
              className="px-4 py-2 text-white font-medium"
              style={{ backgroundColor: '#194e3e' }}
            >
              Page Not Found
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Oops! This page seems to have
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#194e3e] to-[#4a9d7a]">
                wandered off
              </span>
            </h2>
          </div>

          <div className="text-center text-gray-500">
            <p className="text-sm">
              Lost? Don't worry, even the best financial plans sometimes need a
              course correction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
