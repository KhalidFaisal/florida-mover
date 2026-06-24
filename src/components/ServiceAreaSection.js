'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { SERVICE_AREAS } from '@/data/siteData';

export default function ServiceAreaSection() {
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
    <section id="service-areas" className="py-20 sm:py-28 bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Coverage Area
          </span>
          <h2 className="section-heading mb-4">
            Serving All of{' '}
            <span className="gold-gradient-text">South Florida</span>
          </h2>
          <p className="section-subheading">
            From Fort Pierce to Miami, our professional movers are ready to help you 
            with your next move. Click any city to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <div className="animate-on-scroll order-2 lg:order-1">
            <ServiceAreaMap />
          </div>

          {/* City grid */}
          <div className="animate-on-scroll order-1 lg:order-2" style={{ transitionDelay: '0.1s' }}>
            <div className="grid grid-cols-2 gap-3">
              {SERVICE_AREAS.map((area, index) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 
                           hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-200
                           hover:shadow-card"
                  id={`area-link-${area.slug}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-navy-900/5 group-hover:bg-gold-500/10 
                                flex items-center justify-center transition-colors flex-shrink-0">
                    <MapPin className="w-4 h-4 text-navy-700 group-hover:text-gold-500 transition-colors" />
                  </div>
                  <div>
                    <span className="font-semibold text-navy-900 text-sm group-hover:text-gold-600 transition-colors">
                      {area.name}
                    </span>
                    <span className="block text-xs text-gray-500">Movers</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAreaMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || mapInstanceRef.current) return;

    // Dynamic import leaflet on client only
    const initMap = async () => {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      if (!mapRef.current || mapInstanceRef.current) return;

      const map = L.map(mapRef.current, {
        center: [26.6, -80.15],
        zoom: 8,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Custom gold marker icon
      const goldIcon = L.divIcon({
        html: `<div style="width:32px;height:32px;background:linear-gradient(135deg,#D4A843,#E8C468);border-radius:50%;border:3px solid #0A1628;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.3)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A1628" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
               </div>`,
        className: '',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      SERVICE_AREAS.forEach((area) => {
        L.marker([area.lat, area.lng], { icon: goldIcon })
          .addTo(map)
          .bindPopup(
            `<div style="text-align:center;padding:4px">
              <strong style="font-size:14px;color:#0A1628">${area.name}</strong>
              <br/>
              <a href="/areas/${area.slug}" 
                 style="color:#D4A843;font-size:12px;font-weight:600;text-decoration:none">
                View ${area.name} Movers →
              </a>
            </div>`
          );
      });

      mapInstanceRef.current = map;

      // Fix map tiles not loading correctly
      setTimeout(() => map.invalidateSize(), 100);
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isClient]);

  return (
    <div className="relative">
      <div
        ref={mapRef}
        className="w-full h-[400px] sm:h-[500px] rounded-2xl border border-gray-200 shadow-card overflow-hidden"
        id="service-area-map"
      />
      {!isClient && (
        <div className="w-full h-[400px] sm:h-[500px] rounded-2xl bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Loading map...</span>
        </div>
      )}
    </div>
  );
}
