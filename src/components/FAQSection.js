'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { FAQS } from '@/data/siteData';

function FAQItem({ faq, index }) {
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
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
        id={`faq-${index}`}
        aria-expanded={isOpen}
      >
        <span
          className={`font-heading font-semibold text-base sm:text-lg transition-colors ${
            isOpen ? 'text-gold-600' : 'text-navy-900'
          }`}
        >
          {faq.question}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen ? 'bg-gold-500 text-navy-900 rotate-180' : 'bg-gray-100 text-gray-600'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
        }}
      >
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed text-sm sm:text-base">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
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
    <section id="faq" className="py-20 sm:py-28 bg-gray-50" ref={sectionRef}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-widest mb-4">
              FAQ
            </span>
            <h2 className="section-heading mb-4">
              Frequently Asked{' '}
              <span className="gold-gradient-text">Questions</span>
            </h2>
            <p className="section-subheading">
              Got questions? We&apos;ve got answers. If you don&apos;t see yours here, give us a call!
            </p>
          </div>

          <div className="space-y-3 animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            {FAQS.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Schema.org FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
