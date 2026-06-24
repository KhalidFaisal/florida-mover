import { notFound } from 'next/navigation';
import { SERVICE_PAGE_DATA } from '@/data/servicesData';
import { SITE_CONFIG, SERVICES } from '@/data/siteData';
import ServicePageClient from './ServicePageClient';

// Generate static paths for all 8 services
export function generateStaticParams() {
  return Object.keys(SERVICE_PAGE_DATA).map((slug) => ({ slug }));
}

// Dynamic metadata for each service page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICE_PAGE_DATA[slug];
  
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const serviceData = SERVICE_PAGE_DATA[slug];
  
  if (!serviceData) notFound();

  // Find the base service config to match slug and general descriptions
  const baseService = SERVICES.find(s => s.slug === slug);

  return (
    <>
      {/* Schema.org Service for this moving service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `${SITE_CONFIG.companyName} - ${serviceData.title}`,
            provider: {
              '@type': 'MovingCompany',
              name: SITE_CONFIG.companyName,
              telephone: SITE_CONFIG.phone,
              url: SITE_CONFIG.domain,
            },
            areaServed: {
              '@type': 'State',
              name: 'Florida',
            },
            description: serviceData.metaDescription,
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: serviceData.localFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <ServicePageClient
        service={serviceData}
        baseService={baseService}
        siteConfig={SITE_CONFIG}
      />
    </>
  );
}
