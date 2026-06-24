'use client';

import { Phone, FileText } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export default function MobileStickyBar() {
  return (
    <div className="mobile-sticky-cta" id="mobile-sticky-bar">
      <a
        href={`tel:${SITE_CONFIG.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-2 bg-white text-navy-900 
                 font-bold py-3.5 rounded-xl text-base active:scale-95 transition-transform"
        id="sticky-call-now"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a
        href="#quote"
        className="flex-1 flex items-center justify-center gap-2 bg-gold-500 text-navy-900 
                 font-bold py-3.5 rounded-xl text-base active:scale-95 transition-transform"
        id="sticky-get-quote"
      >
        <FileText className="w-5 h-5" />
        Free Quote
      </a>
    </div>
  );
}
