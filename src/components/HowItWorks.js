'use client';

import { useEffect, useRef } from 'react';
import { ClipboardList, Calendar, PackageCheck } from 'lucide-react';
import { HOW_IT_WORKS } from '@/data/siteData';

const ICON_MAP = {
  ClipboardList,
  Calendar,
  PackageCheck,
};

export default function HowItWorks() {
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
    <section className="py-20 sm:py-28 bg-navy-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            How It <span className="gold-gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Getting started is easy. Three simple steps and we handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {HOW_IT_WORKS.map((step, index) => {
            const Icon = ICON_MAP[step.icon];
            return (
              <div
                key={step.step}
                className="animate-on-scroll text-center relative"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Connecting line (desktop) */}
                {index < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] 
                                bg-gradient-to-r from-gold-500/40 to-gold-500/10" />
                )}

                {/* Step number */}
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-400/5 
                                border border-gold-500/20 flex items-center justify-center 
                                group-hover:from-gold-500/30 transition-all">
                    <Icon className="w-10 h-10 text-gold-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-500 
                                flex items-center justify-center text-navy-900 font-heading font-bold text-sm">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
