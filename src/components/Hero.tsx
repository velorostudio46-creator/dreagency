import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 bg-[#FFFFFF] border-b border-[#111111]/10 editorial-grid overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Monument */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F6] border border-[#111111]/15 mb-6 self-start">
              <span className="w-1.5 h-1.5 bg-[#D4A72C]" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.22em] text-[#111111] uppercase">
                DREAGENCY / DIGITAL GROWTH STUDIO
              </span>
            </div>

            {/* Monumental Headline */}
            <h1
              id="hero-headline"
              className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[5.8rem] leading-[0.92] tracking-[-0.035em] text-[#111111] uppercase select-none"
            >
              <span className="block hover:translate-x-1 transition-transform duration-300">BUILD.</span>
              <span className="block hover:translate-x-1 transition-transform duration-300">CREATE.</span>
              <span className="block text-[#D4A72C] hover:translate-x-1 transition-transform duration-300">GROW.</span>
              <span className="block text-[#111111] hover:translate-x-1 transition-transform duration-300">SCALE.</span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-[#111111]/80 max-w-xl font-normal leading-relaxed mt-7 mb-9"
            >
              We combine strategy, creativity and performance to build brands that move businesses forward.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] text-white text-xs font-mono font-bold tracking-[0.2em] border border-[#111111] hover:bg-[#222222] hover:border-[#D4A72C] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4A72C] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onViewWork}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent text-[#111111] text-xs font-mono font-bold tracking-[0.2em] border border-[#111111]/20 hover:border-[#111111] hover:bg-[#F7F7F6] transition-all duration-300 cursor-pointer"
              >
                <span>EXPLORE OUR WORK</span>
                <span className="text-[#D4A72C] transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </button>
            </div>

            {/* Operational Tagline Indicators */}
            <div className="mt-9 pt-6 border-t border-[#111111]/10 flex flex-wrap items-center gap-6 text-xs font-mono text-[#111111]/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4A72C]" />
                <span className="font-bold text-[#111111]">DELHI HQ</span>
                <span className="text-[#111111]/50">Dwarka Sector 7</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4A72C]" />
                <span className="font-bold text-[#111111]">PARTNERS</span>
                <span className="text-[#111111]/50">Javed &amp; Shubham</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Agency Art-Direction Visual: Brand → Creative → Marketing → Growth */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative w-full bg-[#111111] text-white p-7 sm:p-9 border border-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex flex-col justify-between overflow-hidden">
              
              {/* Subtle architectural gold background grid accent */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#D4A72C_1px,transparent_1px)] [background-size:24px_24px]" />
              </div>

              {/* Card Header: Metadata Spec */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4A72C] uppercase block font-bold">
                    GROWTH ENGINE // SPEC 2026
                  </span>
                  <span className="text-xs font-mono text-white/50 tracking-wider">
                    DREAGENCY SYSTEM FRAMEWORK
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D4A72C] animate-pulse" />
                  <span className="text-[10px] font-mono text-white/60 uppercase">ACTIVE</span>
                </div>
              </div>

              {/* Dynamic Geometric Flow: Brand → Creative → Marketing → Growth */}
              <div className="relative z-10 space-y-4 my-2">
                
                {/* 1. BRAND */}
                <div className="group/node p-3.5 bg-[#181818] border border-white/10 hover:border-[#D4A72C] transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#D4A72C]">01</span>
                      <div>
                        <span className="font-display font-bold text-sm tracking-wider text-white uppercase block">
                          BRAND
                        </span>
                        <span className="text-[10px] font-mono text-white/50">Positioning • Identity • Thesis</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center font-mono text-[10px] text-[#D4A72C] bg-[#111111]">
                      [B]
                    </div>
                  </div>
                </div>

                {/* Animated Connector 1 */}
                <div className="flex items-center justify-center -my-2.5 relative z-20">
                  <div className="h-4 w-px bg-[#D4A72C]/40 relative">
                    <div className="w-1.5 h-1.5 bg-[#D4A72C] -left-[2px] top-1/2 -translate-y-1/2 absolute" />
                  </div>
                </div>

                {/* 2. CREATIVE */}
                <div className="group/node p-3.5 bg-[#181818] border border-white/10 hover:border-[#D4A72C] transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#D4A72C]">02</span>
                      <div>
                        <span className="font-display font-bold text-sm tracking-wider text-white uppercase block">
                          CREATIVE
                        </span>
                        <span className="text-[10px] font-mono text-white/50">Visual Design • Copy • Motion</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center font-mono text-[10px] text-[#D4A72C] bg-[#111111]">
                      [C]
                    </div>
                  </div>
                </div>

                {/* Animated Connector 2 */}
                <div className="flex items-center justify-center -my-2.5 relative z-20">
                  <div className="h-4 w-px bg-[#D4A72C]/40 relative">
                    <div className="w-1.5 h-1.5 bg-[#D4A72C] -left-[2px] top-1/2 -translate-y-1/2 absolute" />
                  </div>
                </div>

                {/* 3. MARKETING */}
                <div className="group/node p-3.5 bg-[#181818] border border-white/10 hover:border-[#D4A72C] transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#D4A72C]">03</span>
                      <div>
                        <span className="font-display font-bold text-sm tracking-wider text-white uppercase block">
                          MARKETING
                        </span>
                        <span className="text-[10px] font-mono text-white/50">Meta Ads • Omnichannel • Funnels</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center font-mono text-[10px] text-[#D4A72C] bg-[#111111]">
                      [M]
                    </div>
                  </div>
                </div>

                {/* Animated Connector 3 */}
                <div className="flex items-center justify-center -my-2.5 relative z-20">
                  <div className="h-4 w-px bg-[#D4A72C]/40 relative">
                    <div className="w-1.5 h-1.5 bg-[#D4A72C] -left-[2px] top-1/2 -translate-y-1/2 absolute" />
                  </div>
                </div>

                {/* 4. GROWTH (Result Tier) */}
                <div className="group/node p-4 bg-[#111111] border-2 border-[#D4A72C] shadow-[0_4px_20px_rgba(212,167,44,0.15)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-extrabold text-[#D4A72C]">04</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display font-extrabold text-base tracking-wider text-[#D4A72C] uppercase block">
                            GROWTH
                          </span>
                          <span className="text-[9px] font-mono bg-[#D4A72C] text-[#111111] px-1.5 py-0.5 font-extrabold">
                            COMPOUND
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-white/70">Scale • Acquisition • Enterprise Value</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-[#D4A72C] text-[#111111] flex items-center justify-center font-mono text-xs font-extrabold">
                      ↑
                    </div>
                  </div>
                </div>

              </div>

              {/* Graphic Specimen Bottom Summary */}
              <div className="relative z-10 pt-5 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                <span className="text-white/40 font-mono tracking-wider uppercase">METHODOLOGY</span>
                <span className="text-[#D4A72C] font-bold tracking-widest">
                  BRAND → CREATIVE → MARKETING → GROWTH
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
