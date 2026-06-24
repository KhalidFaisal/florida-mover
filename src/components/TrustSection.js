'use client';

import { useEffect, useRef } from 'react';
import {
  ShieldCheck,
  DollarSign,
  Ban,
  Users,
  Home,
  Wrench,
  Clock,
} from 'lucide-react';
import { WHY_TRUST_US } from '@/data/siteData';

const ICON_MAP = {
  ShieldCheck,
  DollarSign,
  Ban,
  Users,
  Home,
  Wrench,
  Clock,
};

export default function TrustSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white" ref={sectionRef}>
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="section-heading mb-4">
            Why Homeowners <span className="gold-gradient-text">Trust Us</span>
          </h2>
          <p className="section-subheading">
            We&apos;re not just movers — we&apos;re your neighbors. Here&apos;s why South Florida 
            families choose us for their most important moves.
          </p>
        </div>

        {/* Trust cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WHY_TRUST_US.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.title}
                className="animate-on-scroll card-premium group text-center"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div
                  className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-gold-500/10 to-gold-400/5 
                            flex items-center justify-center group-hover:from-gold-500/20 group-hover:to-gold-400/10 
                            transition-all duration-300"
                >
                  <Icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="font-heading font-bold text-navy-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
