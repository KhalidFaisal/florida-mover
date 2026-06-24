'use client';

import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { REVIEWS } from '@/data/siteData';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-star fill-star' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current * 10) / 10);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function ReviewsSection() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white"
      ref={sectionRef}
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Customer Reviews
          </span>
          <h2 className="section-heading mb-6">
            What Our Customers <span className="gold-gradient-text">Say</span>
          </h2>

          {/* Rating summary */}
          <div className="inline-flex flex-col items-center gap-3 bg-white rounded-2xl p-6 sm:p-8 
                        shadow-card border border-gray-100">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-star fill-star" />
              ))}
            </div>
            <div className="text-5xl sm:text-6xl font-heading font-bold text-navy-900">
              <AnimatedCounter target={4.9} suffix="+" />
            </div>
            <div className="text-gray-500 text-sm font-medium">
              Based on 127+ Verified Google Reviews
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-gold-500 hover:text-gold-600 
                       text-sm font-semibold transition-colors mt-1"
              id="reviews-see-all"
            >
              See All Reviews on Google
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {REVIEWS.map((review, index) => (
            <div
              key={review.name}
              className="animate-on-scroll card-premium relative"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold-500/10" />

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review text */}
              <p className="text-gray-700 text-sm leading-relaxed mt-4 mb-5">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 
                              flex items-center justify-center text-navy-900 font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">
                    {review.name}
                  </div>
                  <div className="text-gray-500 text-xs">{review.location}</div>
                </div>
                <div className="ml-auto text-xs text-gray-400">{review.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
