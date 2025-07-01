import LandingHero from '@/components/landing-hero';
import LandingNav from '@/components/landing-nav';
import LandingServices from '@/components/landing-services';
import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/landing')({
  component: Landing,
});
export function Landing() {
  return (
    <div className="flex flex-col ">
      <LandingNav />
      <LandingHero />
      <LandingServices />
    </div>
  );
}
