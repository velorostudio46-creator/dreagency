import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onStartProject: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onStartProject }) => {
  return (
    <section
      id="cta-section"
      className="py-24 sm:py-36 bg-[#111111] text-white border-b border-white/10 relative overflow-hidden text-center"
    >
      {/* Subtle Gold Accent Line on top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D4A72C]" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/5 border border-white/10 mb-8">
          <span className="w-1.5 h-1.5 bg-[#D4A72C]" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.24em] text-[#D4A72C] uppercase font-bold">
            COMMERCIAL GROWTH ACCELERATION
          </span>
        </div>

        {/* Dramatic Headline */}
        <h2
          id="cta-headline"
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase leading-[0.92] tracking-[-0.03em] mb-8 text-white select-none"
        >
          YOUR BRAND <br />
          <span className="text-[#D4A72C]">DESERVES</span> <br />
          TO GROW.
        </h2>

        {/* Subtext */}
        <p
          id="cta-subtext"
          className="text-base sm:text-xl text-white/75 max-w-lg mx-auto font-normal leading-relaxed mb-12"
        >
          Let's build something people remember.
        </p>

        {/* Magnetic Button */}
        <div>
          <button
            id="cta-start-project-btn"
            onClick={onStartProject}
            className="group inline-flex items-center justify-center gap-3.5 px-10 py-5 bg-[#D4A72C] hover:bg-[#E8C45A] text-[#111111] text-xs sm:text-sm font-mono font-extrabold tracking-[0.22em] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(212,167,44,0.25)] hover:scale-105"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4 text-[#111111] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-white/50">
          <span>PARTNERS: JAVED &amp; SHUBHAM</span>
          <span className="hidden sm:inline">•</span>
          <span>DWARKA SECTOR 7, DELHI</span>
          <span className="hidden sm:inline">•</span>
          <span>EST. 2026</span>
        </div>

      </div>
    </section>
  );
};
