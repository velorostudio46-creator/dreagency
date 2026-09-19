import React from 'react';

export const ResultsMetrics: React.FC = () => {
  const metrics = [
    {
      id: 'brands-built',
      label: 'BRANDS BUILT',
      description: 'End-to-end identities, strategic positioning, and architectural brand systems launched.',
      spec: 'STRATEGIC FOUNDATIONS'
    },
    {
      id: 'campaigns-launched',
      label: 'CAMPAIGNS LAUNCHED',
      description: 'Multi-channel acquisition, conversion campaigns, and lead generation frameworks.',
      spec: 'OMNICHANNEL SCALE'
    },
    {
      id: 'creatives-delivered',
      label: 'CREATIVES DELIVERED',
      description: 'High-performing ad variants, editorial content suites, and motion assets engineered.',
      spec: 'BESPOKE DESIGN SYSTEMS'
    },
    {
      id: 'marketing-channels',
      label: 'MARKETING CHANNELS',
      description: 'Meta Ads, Search, Organic Social, Email Lifecycles, and Native Discovery networks.',
      spec: 'UNIFIED MEDIA MATRIX'
    },
  ];

  return (
    <section
      id="results"
      className="py-24 sm:py-32 bg-[#111111] text-white border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 bg-[#D4A72C]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.24em] text-[#D4A72C] uppercase">
                COMMERCIAL RIGOR
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              BUILT FOR RESULTS.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/70 max-w-md font-normal leading-relaxed">
            Every metric tracked, audited, and optimized with partner-level accountability.
          </p>
        </div>

        {/* 4 Premium Neutral Metric Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#181818] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#D4A72C] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-xs font-mono">
                  <span className="text-[#D4A72C] font-bold">0{idx + 1}</span>
                  <span className="text-white/40 tracking-wider text-[10px]">PILLAR</span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-3">
                  {item.label}
                </h3>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono text-[#D4A72C] tracking-widest uppercase font-bold block">
                  {item.spec}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
