import { Link } from '@tanstack/react-router';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './ui/button';
import { IconMenuDeep } from '@tabler/icons-react';
import { useState } from 'react';

interface navLinksProps {
  id: number;
  name: string;
  href: string;
}
export const navLinks: navLinksProps[] = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'Service',
    href: '#service',
  },
  {
    id: 3,
    name: 'Features',
    href: '#features',
  },
];

const LandingNav = () => {
  const isMobile = useIsMobile();
  return (
    <div className="flex justify-center items-center z-50 fixed w-full mt-2 mx-auto">
      {' '}
      <div className="p-2 flex justify-between items-center  bg-[#232323]/20  backdrop-blur-md rounded-3xl w-full lg:w-[60%]">
        <div className="flex gap-1">
          <img src="/images/logo.svg" alt="Logo" className="h-11 w-11" />
          <p className="flex items-center justify-center font-bold text-lg lg:text-xl ">
            Clarity
          </p>
        </div>
        <div>{isMobile ? <MobileNav /> : <DesktopNav />}</div>
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
          <Link to={href} className="text-lg ">
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export function MobileNav() {
  return (
    <div className="flex p-2  gap-4 ">
      {navLinks.map(({ id, name, href }) => (
        <div key={id}>
          <Link to={href} className="text-lg ">
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
}
