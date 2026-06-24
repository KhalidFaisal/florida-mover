'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
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
  MapPin,
  Star,
  ShieldCheck,
  Truck
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

const ICON_MAP = {
  Home,
  MapPin,
  Building2,
  House,
  Briefcase,
  Package,
  ArrowUpDown,
  Sofa,
  Truck
};

function ServiceFAQItem({ faq, index }) {
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

export default function ServicePageClient({ service, baseService, siteConfig }) {
  const sectionRef = useRef(null);
  const Icon = ICON_MAP[service.icon] || Home;

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
      {/* Service Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-navy-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt={`${service.name} Services`}
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
              <Link href="/#services" className="hover:text-gold-400 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gold-400">{service.title}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Icon className="w-4 h-4 text-gold-400" />
              <span className="text-white/90 text-sm font-medium">{service.title} Experts</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-6">
              Professional <span className="gold-gradient-text">{service.title}</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl">{service.heroSubtext}</p>

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
              <a href="#service-quote" className="btn-primary text-lg group">
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

      {/* Introduction & Features */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="section-heading mb-8 text-center">
              South Florida's <span className="gold-gradient-text">{service.title}</span> Experts
            </h2>
            <div className="prose prose-lg max-w-none text-center sm:text-left mb-12">
              {service.intro.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-5 text-base sm:text-lg">{para}</p>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold-600" />
                  </div>
                  <span className="font-semibold text-navy-900">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
              Why Choose Us for{' '}
              <span className="gold-gradient-text">{service.title}?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {[
                'Licensed & Insured',
                'Transparent Flat Pricing',
                'No Hidden Fuel Surcharges',
                'Background-Checked Crew',
                'Premium Protective Materials',
                'On-Time Guarantee',
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

      {/* Service FAQs */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 animate-on-scroll">
              <h2 className="section-heading mb-4">
                {service.title} <span className="gold-gradient-text">FAQs</span>
              </h2>
            </div>
            <div className="space-y-3 animate-on-scroll">
              {service.localFaqs.map((faq, index) => (
                <ServiceFAQItem key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Wrapper */}
      <div id="service-quote">
        <QuoteForm />
      </div>

    </div>
  );
}
