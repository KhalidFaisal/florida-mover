'use client';

import { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import { COMPARISON_FEATURES } from '@/data/siteData';

export default function ComparisonSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-gray-50" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-widest mb-4">
            The Difference
          </span>
          <h2 className="section-heading mb-4">
            Why Choose Us Over{' '}
            <span className="gold-gradient-text">Other Movers?</span>
          </h2>
          <p className="section-subheading">
            Not all moving companies are created equal. See how we compare.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-navy-900 text-white font-heading font-bold text-sm sm:text-base">
              <div className="p-4 sm:p-5">Feature</div>
              <div className="p-4 sm:p-5 text-center border-l border-white/10">
                <span className="gold-gradient-text">Us</span>
              </div>
              <div className="p-4 sm:p-5 text-center border-l border-white/10">
                Competitors
              </div>
            </div>

            {/* Table rows */}
            {COMPARISON_FEATURES.map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-3 text-sm sm:text-base ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                } ${
                  index < COMPARISON_FEATURES.length - 1
                    ? 'border-b border-gray-100'
                    : ''
                } hover:bg-gold-500/5 transition-colors`}
              >
                <div className="p-4 sm:p-5 font-medium text-navy-900">
                  {item.feature}
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-center border-l border-gray-100">
                  <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-center border-l border-gray-100">
                  {item.competitors === false ? (
                    <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                  ) : (
                    <span className="text-gray-500 text-xs sm:text-sm font-medium">
                      {item.competitors}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
