import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CITY_PAGE_DATA } from '@/data/cityData';
import { SITE_CONFIG, SERVICES, SERVICE_AREAS } from '@/data/siteData';
import CityPageClient from './CityPageClient';

// Generate static paths for all 14 cities
export function generateStaticParams() {
  return Object.keys(CITY_PAGE_DATA).map((slug) => ({ slug }));
}

// Dynamic metadata for each city page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = CITY_PAGE_DATA[slug];
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      type: 'website',
    },
  };
}

export default async function CityPage({ params }) {
  const { slug } = await params;
  const city = CITY_PAGE_DATA[slug];
  if (!city) notFound();

  const nearbyAreas = city.nearbyAreas
    .map((s) => SERVICE_AREAS.find((a) => a.slug === s))
    .filter(Boolean);

  return (
    <>
      {/* Schema.org LocalBusiness for this city */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MovingCompany',
            name: `${SITE_CONFIG.companyName} - ${city.name} Movers`,
            telephone: SITE_CONFIG.phone,
            email: SITE_CONFIG.email,
            url: `${SITE_CONFIG.domain}/areas/${slug}`,
            areaServed: {
              '@type': 'City',
              name: city.name,
              containedInPlace: {
                '@type': 'State',
                name: 'Florida',
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '127',
            },
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
            mainEntity: city.localFaqs.map((faq) => ({
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

      <CityPageClient
        city={city}
        slug={slug}
        nearbyAreas={nearbyAreas}
        services={SERVICES}
        siteConfig={SITE_CONFIG}
      />
    </>
  );
}
