import LandingFAQ from '@/components/landing-faq';
import LandingFooter from '@/components/landing-footer';
import LandingHero from '@/components/landing-hero';
import LandingHowItWorks from '@/components/landing-how';
import LandingNav from '@/components/landing-nav';
import LandingPricing from '@/components/landing-pricing';
import LandingFeatuers from '@/components/landing-services';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/landing')({
  component: Landing,
});
export function Landing() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <LandingNav />
      <LandingHero />
      <LandingFeatuers />
      <LandingHowItWorks />
      <LandingPricing />
      <LandingFAQ />
      <LandingFooter />
    </div>
  );
}
