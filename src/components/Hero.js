'use client';

import { Phone, ArrowRight, Star, ShieldCheck, Truck, MapPin } from 'lucide-react';
import Image from 'next/image';
import { SITE_CONFIG, TRUST_BADGES } from '@/data/siteData';

const iconMap = { Star, ShieldCheck, Truck, MapPin };

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center bg-navy-900 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="South Florida Moving Services"
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

      <div className="container-custom relative z-10 py-32 sm:py-36 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 
                        rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-soft" />
            <span className="text-white/90 text-sm font-medium">
              Now Serving All of South Florida
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white 
                       leading-[1.1] mb-6 text-balance animate-fade-in-up">
            South Florida&apos;s{' '}
            <span className="gold-gradient-text">Trusted Local</span>{' '}
            Moving Company
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed 
                      animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Licensed &amp; Insured Movers Serving Fort Pierce, Port St. Lucie, Jupiter, 
            West Palm Beach, Boca Raton, Delray Beach, Fort Lauderdale &amp; Miami.
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-12 
                        animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="glass-card flex items-center gap-2.5 sm:gap-3 text-left"
              >
                <div className="flex-shrink-0 text-gold-500">
                  {(() => {
                    const Icon = iconMap[badge.icon];
                    return Icon ? <Icon className="w-6 h-6" /> : null;
                  })()}
                </div>
                <span className="text-white text-xs sm:text-sm font-semibold leading-tight">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 
                        animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#quote"
              className="btn-primary w-full sm:w-auto text-lg group"
              id="hero-get-quote"
            >
              GET FREE QUOTE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="btn-secondary w-full sm:w-auto text-lg"
              id="hero-call-now"
            >
              <Phone className="w-5 h-5" />
              CALL NOW
            </a>
          </div>

          {/* Social proof line */}
          <div className="mt-10 flex items-center justify-center gap-3 text-white/60 text-sm 
                        animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 
                           border-2 border-navy-800 flex items-center justify-center text-xs font-bold text-navy-900"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span>
              Trusted by <strong className="text-white">500+</strong> South Florida families
            </span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
