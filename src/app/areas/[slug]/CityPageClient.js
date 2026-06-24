'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Star,
  MapPin,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Check,
  Home,
  Building2,
  Package,
  Briefcase,
  ArrowUpDown,
  Sofa,
  House,
  Truck,
} from 'lucide-react';

const ICON_MAP = {
  Home,
  MapPin,
  Building2,
  House,
  Briefcase,
  Package,
  ArrowUpDown,
  Sofa,
};

function CityFAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-gold-500/30 bg-gold-500/5 shadow-card' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className={`font-heading font-semibold text-base transition-colors ${isOpen ? 'text-gold-600' : 'text-navy-900'}`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen ? 'bg-gold-500 text-navy-900 rotate-180' : 'bg-gray-100 text-gray-600'
        }`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div ref={contentRef} className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px' }}>
        <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm">{faq.answer}</div>
      </div>
    </div>
  );
}

export default function CityPageClient({ city, slug, nearbyAreas, services, siteConfig }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.05 }
    );
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* City Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-navy-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt={`${city.name} Moving Services`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-navy-900/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
        </div>
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold-500/20 rounded-full blur-[100px] z-0" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gold-400/10 rounded-full blur-[100px] z-0" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#service-areas" className="hover:text-gold-400 transition-colors">Service Areas</Link>
              <span>/</span>
              <span className="text-gold-400">{city.name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span className="text-white/90 text-sm font-medium">{city.county}, Florida</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-6">
              Professional Movers in{' '}
              <span className="gold-gradient-text">{city.name}, FL</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl">{city.heroSubtext}</p>

            {/* Trust badges row */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { label: '5-Star Rated', icon: Star },
                { label: 'Licensed & Insured', icon: ShieldCheck },
                { label: 'Professional Team', icon: Truck }
              ].map((badge) => (
                <div key={badge.label} className="glass-card flex items-center gap-2 !p-3 text-sm text-white font-semibold">
                  <badge.icon className="w-4 h-4 text-gold-500" />
                  {badge.label}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#city-quote" className="btn-primary text-lg group">
                GET FREE QUOTE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn-secondary text-lg">
                <Phone className="w-5 h-5" />
                CALL {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="section-heading mb-8 text-center">
              Moving in <span className="gold-gradient-text">{city.name}</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              {city.intro.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-5 text-base sm:text-lg">{para}</p>
              ))}
            </div>

            {/* Neighborhoods */}
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-heading font-bold text-navy-900 text-lg mb-4">
                Neighborhoods We Serve in {city.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {city.neighborhoods.map((n) => (
                  <span key={n} className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg 
                                         text-sm text-navy-800 font-medium border border-gray-200">
                    <MapPin className="w-3 h-3 text-gold-500" />
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-heading mb-4">
              Services in <span className="gold-gradient-text">{city.name}</span>
            </h2>
            <p className="section-subheading">Full-service moving solutions for {city.name} residents and businesses.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <div key={service.slug} className="animate-on-scroll card-premium text-center" 
                     style={{ transitionDelay: `${index * 0.05}s` }}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gold-500/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us for this city */}
      <section className="py-16 sm:py-20 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
              Why Choose Us for Your{' '}
              <span className="gold-gradient-text">{city.name} Move?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {[
                'Licensed & Insured',
                'Transparent Pricing',
                'No Hidden Fees',
                'Locally Owned',
                '5-Star Google Reviews',
                'Same-Day Availability',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 animate-on-scroll">
              <h2 className="section-heading mb-4">
                {city.name} Moving <span className="gold-gradient-text">FAQs</span>
              </h2>
            </div>
            <div className="space-y-3 animate-on-scroll">
              {city.localFaqs.map((faq, index) => (
                <CityFAQItem key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inline Quote Form */}
      <section id="city-quote" className="py-16 sm:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center animate-on-scroll">
            <h2 className="section-heading mb-4">
              Get a Free <span className="gold-gradient-text">{city.name}</span> Moving Quote
            </h2>
            <p className="section-subheading mb-8">
              Tell us about your move and we&apos;ll provide a free, no-obligation estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#quote" className="btn-primary text-lg group">
                START YOUR FREE QUOTE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn-secondary-dark text-lg">
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-2xl font-heading font-bold text-navy-900 text-center mb-8">
              Also Serving Nearby Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 
                           hover:border-gold-500/30 hover:bg-gold-500/5 transition-all font-medium text-navy-900 
                           hover:text-gold-600"
                >
                  <MapPin className="w-4 h-4 text-gold-500" />
                  {area.name} Movers
                </Link>
              ))}
              <Link
                href="/#service-areas"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-900 text-white 
                         hover:bg-navy-800 transition-all font-medium"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
