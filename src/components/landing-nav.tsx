import { Link } from '@tanstack/react-router';
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
  return (
    <div className="flex justify-between items-center">
      {' '}
      <div className="p-4 flex justify-between items-center w-full">
        <div className="flex gap-1">
          <img src="/images/logo.svg" alt="Logo" className="h-11 w-11" />
          <p className="flex items-center justify-center font-bold text-lg lg:text-xl ">
            Clarity
          </p>
        </div>
        <div className="flex gap-5">
          {navLinks.map(({ id, name, href }) => (
            <div key={id}>
              <Link to={href} className="text-lg ">
                {name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-2 ">
          <Button>
            <Link to="/login">Get Started</Link>
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LandingNav;
