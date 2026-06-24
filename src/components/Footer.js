import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Star, Globe, Camera, ExternalLink } from 'lucide-react';
import { SITE_CONFIG, SERVICE_AREAS, SERVICES } from '@/data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-16 sm:pt-20 pb-24 lg:pb-8">
      <div className="container-custom">
        {/* CTA strip */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-400 rounded-2xl p-8 sm:p-12 
                      text-navy-900 text-center mb-16 -mt-32 relative z-10 shadow-premium">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-3">
            Ready to Make Your Move?
          </h2>
          <p className="text-navy-800 text-lg mb-6 max-w-xl mx-auto">
            Get your free, no-obligation quote in minutes. We&apos;re ready when you are.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold 
                       text-lg px-8 py-4 rounded-lg hover:bg-navy-800 transition-all 
                       shadow-lg hover:-translate-y-0.5"
              id="footer-cta-quote"
            >
              GET FREE QUOTE
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-navy-900 font-bold 
                       text-lg px-8 py-4 rounded-lg hover:bg-white/30 transition-all border border-navy-900/10"
              id="footer-cta-call"
            >
              <Phone className="w-5 h-5" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: About */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-0.5 mb-5 -ml-2">
              <Image
                src="/images/icon.png"
                alt="Neat & Complete Icon"
                width={120}
                height={120}
                className="h-16 w-auto object-contain"
              />
              <Image
                src="/images/logo.png"
                alt="Neat & Complete Relocation Services"
                width={500}
                height={150}
                className="h-16 w-auto object-contain -ml-2"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              South Florida&apos;s trusted local moving company. Licensed, insured, and committed 
              to making your move stress-free.
            </p>
            <div className="space-y-2.5">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-center gap-2.5 text-gray-300 hover:text-gold-400 transition-colors text-sm"
                id="footer-phone"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2.5 text-gray-300 hover:text-gold-400 transition-colors text-sm"
                id="footer-email"
              >
                <Mail className="w-4 h-4 text-gold-500" />
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-gold-500" />
                Serving All of South Florida
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-base mb-5 text-gold-400">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div className="lg:col-span-4">
            <h3 className="font-heading font-bold text-base mb-5 text-gold-400">Service Areas</h3>
            <ul className="columns-2 gap-x-4">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug} className="mb-2.5 break-inside-avoid">
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {area.name} Movers
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-base mb-5 text-gold-400">Connect With Us</h3>
            
            {/* Google review mini badge */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-5">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-star fill-star" />
                ))}
              </div>
              <div className="text-white font-bold text-sm">4.9 out of 5</div>
              <div className="text-gray-500 text-xs mb-2">Based on 127+ Google Reviews</div>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 text-xs font-semibold"
                id="footer-google-reviews"
              >
                Read Reviews <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mb-5">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gold-500/20 
                         flex items-center justify-center transition-all text-gray-400 hover:text-gold-400"
                aria-label="Facebook"
                id="footer-facebook"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gold-500/20 
                         flex items-center justify-center transition-all text-gray-400 hover:text-gold-400"
                aria-label="Instagram"
                id="footer-instagram"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gold-500/20 
                         flex items-center justify-center transition-all text-gray-400 hover:text-gold-400"
                aria-label="Google Reviews"
                id="footer-google"
              >
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center 
                      justify-between gap-4 text-gray-500 text-xs">
          <p>© {currentYear} {SITE_CONFIG.companyName}. All rights reserved.</p>
          <p>License: {SITE_CONFIG.licenseNumber} | Serving South Florida Since 2024</p>
        </div>
      </div>
    </footer>
  );
}
