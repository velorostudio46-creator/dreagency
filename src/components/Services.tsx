import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onInquireService: (serviceTitle: string) => void;
}

interface ServicePanel {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  capabilities: string[];
  iconSvg: React.ReactNode;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onInquireService }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const servicePanels: ServicePanel[] = [
    {
      id: 'digital-marketing',
      number: '01',
      title: 'DIGITAL MARKETING',
      category: 'Omnichannel Distribution',
      shortDescription: 'Comprehensive marketing systems designed to dominate audience mindshare, command engagement, and acquire high-intent buyers across digital surfaces.',
      capabilities: ['Social Media Marketing', 'Paid Meta & Search Ads', 'Content Marketing', 'Campaign Strategy'],
      iconSvg: (
        <svg className="w-8 h-8 text-[#D4A72C] stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
          <path d="M3 12h18" />
        </svg>
      )
    },
    {
      id: 'creative-strategy',
      number: '02',
      title: 'CREATIVE STRATEGY',
      category: 'Brand Elevation',
      shortDescription: 'Unforgettable visual identities, conceptual campaign direction, and bespoke design systems that anchor your brand indelibly in customer consciousness.',
      capabilities: ['Brand Identity', 'Creative Direction', 'Content Design', 'Campaign Concepts'],
      iconSvg: (
        <svg className="w-8 h-8 text-[#D4A72C] stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 20h16" />
          <path d="M12 4v16" />
          <path d="M4 4l16 16" />
          <path d="M20 4L4 20" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      id: 'brand-growth',
      number: '03',
      title: 'BRAND GROWTH',
      category: 'Market Dominance',
      shortDescription: 'Defensible market positioning and architectural expansion playbooks engineered to build compounding business equity over multi-year horizons.',
      capabilities: ['Brand Positioning', 'Digital Strategy', 'Customer Acquisition', 'Growth Planning'],
      iconSvg: (
        <svg className="w-8 h-8 text-[#D4A72C] stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 21h18" />
          <path d="M3 10l6-6 4 4 8-8" />
          <path d="M14 4h7v7" />
        </svg>
      )
    },
    {
      id: 'performance',
      number: '04',
      title: 'PERFORMANCE',
      category: 'Data & Conversion',
      shortDescription: 'Aggressive algorithmic ad buying, continuous creative variant testing, and conversion rate optimization that turns traffic into measurable revenue.',
      capabilities: ['Meta & Google Ads', 'Lead Generation', 'Conversion Rate Optimization', 'Analytics & Tracking'],
      iconSvg: (
        <svg className="w-8 h-8 text-[#D4A72C] stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="0" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
  ];

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#111111]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 pb-6 border-b border-[#111111]/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 bg-[#D4A72C]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#111111]/70 uppercase">
                DISCIPLINES // 01 – 04
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight uppercase">
              SERVICES
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#111111]/70 max-w-md font-normal leading-relaxed">
            Four interconnected growth disciplines engineered to build authority and accelerate revenue.
          </p>
        </div>

        {/* 4 Large Interactive Service Panels */}
        <div className="space-y-4">
          {servicePanels.map((service) => {
            const isHovered = hoveredService === service.id;
            return (
              <div
                key={service.id}
                id={`service-panel-${service.id}`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative bg-[#F7F7F6] border border-[#111111]/15 p-6 sm:p-10 transition-all duration-300 cursor-pointer ${
                  isHovered ? 'border-[#D4A72C] bg-[#FFFFFF] shadow-[0_12px_36px_rgba(0,0,0,0.06)]' : ''
                }`}
                onClick={() => onInquireService(service.title)}
              >
                {/* Expanding Gold Hairline Top Indicator */}
                <div
                  className="absolute top-0 left-0 h-[2px] bg-[#D4A72C] transition-all duration-500 ease-out"
                  style={{ width: isHovered ? '100%' : '0%' }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Number + Icon */}
                  <div className="lg:col-span-3 flex items-center gap-6">
                    <span
                      className={`font-mono text-xl sm:text-2xl font-bold tracking-widest transition-transform duration-300 ${
                        isHovered ? 'text-[#D4A72C] translate-x-2' : 'text-[#111111]/40'
                      }`}
                    >
                      {service.number}
                    </span>
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {service.iconSvg}
                    </div>
                  </div>

                  {/* Center: Title + Category */}
                  <div className="lg:col-span-5">
                    <span className="text-[10px] font-mono tracking-widest text-[#D4A72C] uppercase block mb-1">
                      {service.category}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] uppercase tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Interactive Arrow */}
                  <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-6">
                    <div className="hidden sm:flex flex-wrap gap-2 text-[11px] font-mono text-[#111111]/60">
                      {service.capabilities.slice(0, 2).map((cap, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white border border-[#111111]/10">
                          {cap}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 shrink-0 ${
                        isHovered
                          ? 'bg-[#111111] text-[#D4A72C] border-[#111111] rotate-45'
                          : 'bg-white text-[#111111] border-[#111111]/20'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300" />
                    </div>
                  </div>

                </div>

                {/* Description Appears on Hover & Mobile Default */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isHovered ? 'max-h-48 opacity-100 pt-6 mt-6 border-t border-[#111111]/10' : 'max-h-0 sm:max-h-0 opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-sm text-[#111111]/80">
                    <p className="lg:col-span-8 font-normal leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="lg:col-span-4 flex flex-wrap gap-2 text-xs font-mono">
                      {service.capabilities.map((cap, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-[#111111]/5 text-[#111111]">
                          • {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
