import { RefreshCw, Wifi, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function LostConnection() {
  const handleRefresh = () => {
    window.location.reload();
  };

  const floatingElements = [
    { icon: '📡', top: '15%', left: '10%', delay: '0s', size: 'text-2xl' },
    { icon: '🔌', top: '25%', right: '15%', delay: '1s', size: 'text-xl' },
    { icon: '⚡', bottom: '30%', left: '8%', delay: '2s', size: 'text-lg' },
    { icon: '🌐', top: '60%', right: '12%', delay: '0.5s', size: 'text-xl' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
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
        className="absolute bottom-32 right-32 w-3 h-3 bg-[#4a9d7a] rounded-full opacity-40 animate-bounce hidden lg:block"
        style={{ animationDelay: '0.5s' }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl min-h-screen flex items-center justify-center">
        <div className="text-center space-y-12">
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#194e3e] to-[#2d7a5f] flex items-center justify-center text-white shadow-2xl">
                <WifiOff className="w-16 h-16" />
              </div>

              <div className="absolute inset-0 rounded-full border-4 border-[#194e3e] opacity-20 animate-ping" />
              <div
                className="absolute inset-0 rounded-full border-2 border-[#4a9d7a] opacity-30 animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />

              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#4a9d7a] to-[#67c095] rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                <Wifi className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Badge
              className="px-4 py-2 text-white font-medium"
              style={{ backgroundColor: '#194e3e' }}
            >
              🔌 Connection Lost
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#194e3e] to-[#4a9d7a]">
                Connection
              </span>
              <br />
              Interrupted
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              It looks like your internet connection was interrupted. Don't
              worry, your data is safe.
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleRefresh}
              className="group relative px-8 py-4 bg-[#194e3e] text-white rounded-full font-semibold text-lg hover:bg-[#2d7a5f] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Refresh Page
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#194e3e] to-[#4a9d7a] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          <div className="text-center text-gray-500">
            <p className="text-sm">
              Check your internet connection and try again
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
