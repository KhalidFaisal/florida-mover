'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-[60] p-3 rounded-full bg-gold-500 text-navy-900 shadow-gold 
                 hover:bg-gold-400 hover:-translate-y-1 transition-all duration-300 
                 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 
                 ${
                   isVisible
                     ? 'opacity-100 translate-y-0 pointer-events-auto'
                     : 'opacity-0 translate-y-10 pointer-events-none'
                 }`}
      id="back-to-top-btn"
      aria-label="Back to top"
    >
      <style dangerouslySetInnerHTML={{__html: `
        #back-to-top-btn {
          right: 1.5rem !important;
          bottom: 1.5rem !important;
        }
        @media (max-width: 1024px) {
          #back-to-top-btn {
            bottom: 85px !important;
          }
        }
      `}} />
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
