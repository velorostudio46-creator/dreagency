import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

export const WhyDreagency: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const points = [
    {
      title: 'STRATEGY FIRST',
      spec: 'COMMERCIAL ARCHITECTURE',
      short: 'Every tactical execution begins with business unit economics, audience segmentation, and market positioning.',
      detail: 'We refuse to deploy ads or draft creatives in a vacuum. Before investing ad dollars, our partners dissect your cost of goods, customer lifetime value, and competitive whitespace to ensure campaigns build compounding equity rather than ephemeral traffic.'
    },
    {
      title: 'CREATIVE THINKING',
      spec: 'BESPOKE ART DIRECTION',
      short: 'Aesthetics and high-conversion psychology unified into unforgettable visual systems.',
      detail: 'Our design and copy team crafts distinctive visual systems that command attention and respect. We never rely on generic stock or recycled templates; every layout, typography pairing, and motion cut is crafted to establish unmistakable brand authority.'
    },
    {
      title: 'PERFORMANCE FOCUSED',
      spec: 'DATA-BACKED PRECISION',
      short: 'Media buying governed by real-time data, algorithmic attribution, and granular optimization.',
      detail: 'Marketing decisions supported by verifiable metrics. We architect multi-variant testing schedules, optimize conversion funnels daily, and eliminate wasted spend with relentless operational rigor.'
    },
    {
      title: 'LONG-TERM GROWTH',
      spec: 'COMPOUNDING BRAND VALUE',
      short: 'Scalable acquisition flywheels and retention ecosystems designed to endure.',
      detail: 'Quick spikes look attractive in reports but collapse without retention engines. We build sustainable acquisition architectures that grow more cost-efficient over time, multiplying enterprise value for years to come.'
    },
  ];

  return (
    <section
      id="why-dreagency"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#111111]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Large Typography */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#D4A72C]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.24em] text-[#111111]/70 uppercase">
                THE STUDIO PRINCIPLES
              </span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] leading-[0.92] text-[#111111] uppercase tracking-tight mb-6">
              WHY <br />
              <span className="text-[#D4A72C]">DREAGENCY?</span>
            </h2>

            <p className="text-base text-[#111111]/75 leading-relaxed font-normal max-w-sm mb-8">
              We operate at the intersection of business strategy, bespoke creative execution, and algorithmic distribution.
            </p>

            <div className="p-5 bg-[#F7F7F6] border border-[#111111]/10 font-mono text-xs text-[#111111]/80 space-y-1">
              <p className="text-[#D4A72C] font-bold uppercase tracking-wider text-[10px]">OPERATING STANDARD</p>
              <p>Direct Partner Access</p>
              <p>Senior Practitioners Only</p>
              <p>Delhi Studio • Global Standards</p>
            </div>
          </div>

          {/* Right: Expandable Items */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((point, idx) => {
              const isExpanded = activeItem === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveItem(isExpanded ? null : idx)}
                  className={`border transition-all duration-300 cursor-pointer p-6 sm:p-8 ${
                    isExpanded
                      ? 'bg-[#111111] text-white border-[#111111] shadow-lg'
                      : 'bg-[#F7F7F6] text-[#111111] border-[#111111]/15 hover:border-[#111111]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isExpanded ? 'text-[#D4A72C]' : 'text-[#111111]/50'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <div>
                        <span
                          className={`text-[10px] font-mono tracking-widest uppercase block ${
                            isExpanded ? 'text-[#D4A72C]' : 'text-[#111111]/60'
                          }`}
                        >
                          {point.spec}
                        </span>
                        <h3
                          className={`font-display font-extrabold text-xl sm:text-2xl tracking-tight uppercase ${
                            isExpanded ? 'text-white' : 'text-[#111111]'
                          }`}
                        >
                          {point.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 flex items-center justify-center border transition-transform duration-300 ${
                        isExpanded
                          ? 'border-[#D4A72C] text-[#D4A72C] rotate-180 bg-[#1a1a1a]'
                          : 'border-[#111111]/20 text-[#111111] bg-white'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Summary & Expanded Details */}
                  <p
                    className={`mt-4 text-xs sm:text-sm leading-relaxed font-normal ${
                      isExpanded ? 'text-white/80' : 'text-[#111111]/70'
                    }`}
                  >
                    {point.short}
                  </p>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/15 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                      {point.detail}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
