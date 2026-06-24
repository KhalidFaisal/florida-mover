import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import ReviewsSection from '@/components/ReviewsSection';
import HowItWorks from '@/components/HowItWorks';
import ServicesSection from '@/components/ServicesSection';
import ComparisonSection from '@/components/ComparisonSection';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import QuoteForm from '@/components/QuoteForm';
import FAQSection from '@/components/FAQSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ReviewsSection />
      <HowItWorks />
      <ServicesSection />
      <ComparisonSection />
      <ServiceAreaSection />
      <QuoteForm />
      <FAQSection />
    </>
  );
}
