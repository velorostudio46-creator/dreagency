import React from 'react';

export const HowWeThink: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'STRATEGY',
      subtitle: 'Clarity & Market Positioning',
      description: 'Understanding market vectors, buyer psychology, unit economics, and competitive whitespace before spending a single rupee on creative or ads.',
    },
    {
      number: '02',
      title: 'CREATIVITY',
      subtitle: 'Aesthetic Authority & Resonance',
      description: 'Crafting bespoke visual identities, high-converting ad concepts, and compelling stories that turn casual viewers into loyal brand advocates.',
    },
    {
      number: '03',
      title: 'PERFORMANCE',
      subtitle: 'Rigorous Algorithmic Execution',
      description: 'Deploying campaigns with surgical precision, measuring real-time conversion signals, and scaling revenue with relentless commercial discipline.',
    },
  ];

  return (
    <section
      id="how-we-think"
      className="py-24 sm:py-32 bg-[#F7F7F6] border-b border-[#111111]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-[#111111]/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 bg-[#D4A72C]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#111111]/70 uppercase">
                FOUNDATIONAL PHILOSOPHY
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight uppercase">
              HOW WE THINK
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#111111]/70 max-w-md font-normal leading-relaxed">
            The mathematical and creative equation that drives sustainable commercial scale.
          </p>
        </div>

        {/* 3 Principles with animated gold connecting line */}
        <div className="relative mb-16 sm:mb-24">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-[2px] bg-[#111111]/10 z-0">
            <div className="h-full bg-[#D4A72C] w-full animate-pulse opacity-80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {principles.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#111111]/15 p-8 flex flex-col justify-between hover:border-[#D4A72C] transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 bg-[#111111] text-[#D4A72C] font-mono text-sm font-bold flex items-center justify-center border border-[#D4A72C]">
                      {item.number}
                    </span>
                    <span className="text-[10px] font-mono text-[#111111]/50 tracking-widest uppercase">
                      PRINCIPLE
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-[#D4A72C] font-bold uppercase tracking-wider mb-4">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-[#111111]/75 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#111111]/10 flex items-center justify-between text-[11px] font-mono text-[#111111]/60">
                  <span>DISCIPLINE SPEC</span>
                  <span className="text-[#111111] font-bold">100% UNCOMPROMISED</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Center Golden Equation Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 bg-[#111111] text-white border border-[#111111] shadow-xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#D4A72C_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

          <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#D4A72C] uppercase block mb-3">
            THE DREAGENCY GROWTH FORMULA
          </span>

          <div className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-tight my-4">
            <span className="text-white">STRATEGY</span>
            <span className="text-[#D4A72C] mx-3">+</span>
            <span className="text-white">CREATIVITY</span>
            <span className="text-[#D4A72C] mx-3">+</span>
            <span className="text-white">PERFORMANCE</span>
            <div className="mt-4 pt-4 border-t border-white/15 text-[#D4A72C]">
              = BUSINESS GROWTH
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto font-mono mt-4">
            Compounding digital market leadership is never an accident—it is the deliberate output of unified strategy, taste, and data.
          </p>
        </div>

      </div>
    </section>
  );
};
