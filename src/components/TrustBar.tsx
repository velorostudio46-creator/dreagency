import React from 'react';
import { TRUST_MARKS } from '../data/agencyData';

export const TrustBar: React.FC = () => {
  return (
    <section
      id="trust-section"
      className="py-10 sm:py-12 bg-[#F7F7F6] border-b border-[#111111]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#111111]/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#D4A72C]" />
            <h2 className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[#111111]">
              TRUSTED TO BUILD, CREATE &amp; GROW
            </h2>
          </div>
          <span className="text-[10px] font-mono tracking-wider text-[#111111]/50 uppercase">
            CROSS-CATEGORY BRANDS &amp; VENTURES
          </span>
        </div>

        {/* Clean Editorial Typographic Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
          {TRUST_MARKS.map((mark, index) => (
            <div
              key={index}
              className="p-3 bg-white border border-[#111111]/10 hover:border-[#D4A72C] transition-colors text-center flex flex-col justify-center min-h-[64px]"
            >
              <span className="font-display font-bold text-[11px] sm:text-xs tracking-[0.14em] text-[#111111] uppercase">
                {mark.name}
              </span>
              <span className="text-[9px] font-mono text-[#111111]/50 tracking-wider mt-0.5">
                {mark.sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
