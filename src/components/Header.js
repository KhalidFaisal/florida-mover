'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '@/data/siteData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-900/95 backdrop-blur-lg shadow-premium'
            : 'bg-navy-900/80 backdrop-blur-sm'
        }`}
      >
      {/* Top bar — phone number */}
      <div className="hidden sm:block bg-gold-500 text-navy-900">
        <div className="container-custom flex items-center justify-between py-1.5 text-sm font-semibold">
          <span>South Florida&apos;s Trusted Local Moving Company</span>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-navy-700 transition-colors"
            id="header-phone-top"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now: {SITE_CONFIG.phone}
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-custom">
        <div className="flex items-center justify-between py-[1px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0.5 xl:gap-1 z-50 -ml-2">
            <Image
              src="/images/icon.png"
              alt="Neat & Complete Icon"
              width={120}
              height={120}
              className="h-14 w-auto lg:h-20 object-contain"
            />
            <div className="hidden sm:block -ml-1 lg:-ml-3">
              <Image
                src="/images/logo.png"
                alt="Neat & Complete Relocation Services"
                width={500}
                height={150}
                className="h-14 w-auto lg:h-[5.5rem] object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold-400 font-medium transition-colors whitespace-nowrap
                         relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                         after:bg-gold-400 after:transition-all hover:after:w-full text-sm 2xl:text-base"
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <a
              href="#quote"
              className="btn-primary text-xs xl:text-sm !px-4 xl:!px-5 !py-2.5 whitespace-nowrap"
              id="header-get-quote"
            >
              GET FREE QUOTE
            </a>
          </div>

          {/* Mobile: Phone + Hamburger */}
          <div className="flex items-center gap-3 xl:hidden">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gold-500 text-navy-900"
              id="header-phone-mobile"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-white"
              aria-label="Toggle menu"
              id="header-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed z-[100] transition-all duration-300 overflow-y-auto ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          top: '72px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#0A1628' // Force solid navy-900
        }}
      >
        <nav className="container-custom py-8 flex flex-col gap-2">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl text-white font-heading font-semibold py-3 px-4 rounded-xl 
                       hover:bg-white/5 transition-all border-b border-white/5"
              style={{ animationDelay: `${index * 0.05}s` }}
              id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#quote"
              className="btn-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
              id="mobile-get-quote"
            >
              GET FREE QUOTE
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="btn-secondary w-full text-center"
              id="mobile-call-now"
            >
              <Phone className="w-5 h-5" />
              CALL NOW
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
