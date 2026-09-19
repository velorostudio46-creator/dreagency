import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface AboutProps {
  onStartProject: () => void;
}

export const About: React.FC<AboutProps> = ({ onStartProject }) => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#111111]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-[#D4A72C]" />
          <span className="text-[11px] font-mono font-bold tracking-[0.24em] text-[#111111]/70 uppercase">
            ABOUT DREAGENCY // MANIFESTO
          </span>
        </div>

        {/* Oversized Headline with Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h2
              id="about-headline"
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.7rem] leading-[0.96] text-[#111111] uppercase tracking-tight"
            >
              WE DON'T JUST MARKET BRANDS. <br />
              <span className="text-[#D4A72C]">WE BUILD MOMENTUM.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between pt-2 lg:pt-6 space-y-6">
            <p className="text-base sm:text-lg text-[#111111]/80 leading-relaxed font-normal">
              DREAGENCY is an independent digital growth studio based in Dwarka, Delhi. We fuse rigorous business strategy, bespoke visual craftsmanship, and full-funnel performance marketing to turn brand ambition into sustainable commercial authority.
            </p>
            <div className="pt-4 border-t border-[#111111]/10">
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#111111] hover:text-[#D4A72C] transition-colors cursor-pointer group"
              >
                <span>INITIATE PARTNER BRIEF</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4A72C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Asymmetric Studio Pillar Specimen */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#111111]/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#F7F7F6] border border-[#111111]/10 space-y-2">
            <span className="font-mono text-xs font-bold text-[#D4A72C] tracking-widest block">
              01 // THE THESIS
            </span>
            <h3 className="font-display font-bold text-lg text-[#111111] uppercase">
              No Unmoored Creative
            </h3>
            <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed">
              Design is only as valuable as the business leverage it produces. Every font choice, color palette, and video cut is calculated for commercial recall.
            </p>
          </div>

          <div className="p-6 bg-[#F7F7F6] border border-[#111111]/10 space-y-2">
            <span className="font-mono text-xs font-bold text-[#D4A72C] tracking-widest block">
              02 // THE DISCIPLINE
            </span>
            <h3 className="font-display font-bold text-lg text-[#111111] uppercase">
              Unified Growth Loops
            </h3>
            <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed">
              We eliminate the toxic friction between branding and performance teams. Our media buyers and art directors build the funnel together from day one.
            </p>
          </div>

          <div className="p-6 bg-[#F7F7F6] border border-[#111111]/10 space-y-2">
            <span className="font-mono text-xs font-bold text-[#D4A72C] tracking-widest block">
              03 // THE PARTNERS
            </span>
            <h3 className="font-display font-bold text-lg text-[#111111] uppercase">
              Direct Senior Execution
            </h3>
            <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed">
              No junior account handlers or endless layers of bureaucracy. You work directly with agency founders Javed and Shubham.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
