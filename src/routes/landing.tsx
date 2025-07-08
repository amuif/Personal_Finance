import LandingFAQ from '@/components/landing/landing-faq';
import LandingFooter from '@/components/landing/landing-footer';
import LandingHero from '@/components/landing/landing-hero';
import LandingHowItWorks from '@/components/landing/landing-how';
import LandingNav from '@/components/landing/landing-nav';
import LandingPricing from '@/components/landing/landing-pricing';
import LandingFeatuers from '@/components/landing/landing-services';
import LoadingComponent from '@/components/loading-component';
import NotFound from '@/components/others/not-found';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/landing')({
  component: Landing,
  pendingComponent: LoadingComponent,
  notFoundComponent: NotFound,
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
