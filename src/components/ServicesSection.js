'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Home,
  MapPin,
  Building2,
  House,
  Briefcase,
  Package,
  ArrowUpDown,
  Sofa,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '@/data/siteData';

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

export default function ServicesSection() {
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
    <section id="services" className="py-20 sm:py-28 bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="section-heading mb-4">
            Moving Services <span className="gold-gradient-text">You Can Trust</span>
          </h2>
          <p className="section-subheading">
            From studio apartments to large homes, local moves to long-distance relocations — 
            we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <Link
                href={`/services/${service.slug}`}
                key={service.title}
                className="block animate-on-scroll group card-premium relative overflow-hidden"
                style={{ transitionDelay: `${index * 0.06}s` }}
                id={`service-${service.slug}`}
              >
                {/* Hover gradient reveal */}
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-navy-900/5 group-hover:bg-gold-500/10 
                                flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-navy-700 group-hover:text-gold-500 transition-colors duration-300" />
                  </div>

                  <h3 className="font-heading font-bold text-navy-900 text-lg mb-2 
                               group-hover:text-navy-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <span
                    className="inline-flex items-center gap-1.5 text-gold-500 hover:text-gold-600 
                             text-sm font-semibold transition-all group-hover:gap-2.5"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
