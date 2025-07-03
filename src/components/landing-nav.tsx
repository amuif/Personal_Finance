import { Link } from '@tanstack/react-router';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './ui/button';
interface navLinksProps {
  id: number;
  name: string;
  href: string;
}

export const navLinks: navLinksProps[] = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'Features',
    href: '#features',
  },
  {
    id: 3,
    name: 'Steps',
    href: '#steps',
  },
  {
    id: 4,
    name: 'Pricing',
    href: '#pricing',
  },
  {
    id: 5,
    name: 'FAQ',
    href: '#faq',
  },
];

const LandingNav = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center z-50 fixed w-full  mx-auto">
      {' '}
      <div
        className={`p-3 flex justify-between items-center   backdrop-blur-md rounded-3xl w-full `}
      >
        <div className="flex gap-1">
          <img src="/images/logo.svg" alt="Logo" className="h-11 w-11" />
          <p className="flex items-center justify-center font-bold text-lg lg:text-xl ">
            Clarity
          </p>
        </div>
        <div>
          {isMobile ? (
            <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />
          ) : (
            <DesktopNav />
          )}
        </div>
        {!isMobile && (
          <div className="flex gap-2 ">
            <Button className="rounded-[10px]" size="lg">
              <Link to="/login">Get Started</Link>
            </Button>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default LandingNav;

export function DesktopNav() {
  return (
    <div className="flex gap-5 ">
      {navLinks.map(({ id, name, href }) => (
        <div key={id}>
          <Link
            to={href}
            className="text-lg "
          >
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
}

import { useState, type SetStateAction } from 'react';
import { Menu, X } from 'lucide-react';

export function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden w-10 h-10 rounded-full  hover:bg-[#194e3e]/10 flex items-center justify-center transition-colors`}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-black" />
        ) : (
          <Menu className="w-5 h-5 text-black" />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0"
            onClick={() => setIsOpen(false)}
          />

          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-50 animate-in slide-in-from-top-2 duration-300">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.id}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#194e3e] hover:bg-[#194e3e]/5 rounded-xl transition-all duration-300 group "
                >
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#194e3e] to-[#4a9d7a] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#194e3e] to-[#4a9d7a] opacity-20 animate-ping group-hover:animate-none" />
                  </div>
                  <span className="font-medium">{link.name}</span>

                  <div className="ml-auto w-6 h-6 rounded-full bg-gray-100 group-hover:bg-[#194e3e] flex items-center justify-center transition-colors">
                    <span className="text-xs font-bold text-gray-600 group-hover:text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </Link>
              ))}

              <Button
                className="w-full bg-[#194e3e] text-white rounded-xl font-medium hover:bg-[#2d7a5f] transition-colors h-12 relative group overflow-hidden"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#194e3e] to-[#4a9d7a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
