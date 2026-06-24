import { Inter, Outfit } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import BackToTop from '@/components/BackToTop';
import { SITE_CONFIG } from '@/data/siteData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const cabourg = localFont({
  src: './fonts/CabourgOT-Regular.otf',
  variable: '--font-cabourg',
  display: 'swap',
});

const shadeerah = localFont({
  src: './fonts/ShadeerahDemo.ttf',
  variable: '--font-shadeerah',
  display: 'swap',
});

export const metadata = {
  title: {
    default: `${SITE_CONFIG.companyName} | South Florida's Trusted Moving Company`,
    template: `%s | ${SITE_CONFIG.companyName}`,
  },
  description:
    'Licensed & insured movers serving Fort Pierce, Port St. Lucie, Jupiter, West Palm Beach, Boca Raton, Delray Beach, Fort Lauderdale & Miami. Get your free quote today!',
  keywords: [
    'South Florida movers',
    'moving company',
    'local movers',
    'Fort Lauderdale movers',
    'Boca Raton movers',
    'West Palm Beach movers',
    'Miami movers',
    'Port St. Lucie movers',
    'licensed movers',
    'insured movers',
  ],
  openGraph: {
    title: `${SITE_CONFIG.companyName} | South Florida's Trusted Moving Company`,
    description:
      'Licensed & insured movers serving all of South Florida. 5-star rated, transparent pricing, no hidden fees.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${cabourg.variable} ${shadeerah.variable} scroll-smooth`}>
      <head>
        {/* Google Tag Manager - Replace GTM-XXXXXXX with your container ID */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXXX');` }} /> */}

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MovingCompany',
              name: SITE_CONFIG.companyName,
              telephone: SITE_CONFIG.phone,
              email: SITE_CONFIG.email,
              url: SITE_CONFIG.domain,
              areaServed: [
                { '@type': 'City', name: 'Fort Pierce' },
                { '@type': 'City', name: 'Port St. Lucie' },
                { '@type': 'City', name: 'Stuart' },
                { '@type': 'City', name: 'Jupiter' },
                { '@type': 'City', name: 'Palm Beach Gardens' },
                { '@type': 'City', name: 'West Palm Beach' },
                { '@type': 'City', name: 'Boynton Beach' },
                { '@type': 'City', name: 'Delray Beach' },
                { '@type': 'City', name: 'Boca Raton' },
                { '@type': 'City', name: 'Deerfield Beach' },
                { '@type': 'City', name: 'Pompano Beach' },
                { '@type': 'City', name: 'Fort Lauderdale' },
                { '@type': 'City', name: 'Hollywood' },
                { '@type': 'City', name: 'Miami' },
              ],
              priceRange: '$$',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
                bestRating: '5',
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
        <BackToTop />
      </body>
    </html>
  );
}
