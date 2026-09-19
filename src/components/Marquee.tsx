import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'DIGITAL MARKETING',
    'CREATIVE STRATEGY',
    'BRAND GROWTH',
    'PERFORMANCE',
    'SOCIAL MEDIA',
    'PAID ADVERTISING',
    'BRANDING',
  ];

  // Repeat for smooth continuous seamless loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div
      id="brand-marquee"
      className="bg-[#111111] border-b border-white/10 py-4.5 overflow-hidden select-none relative z-20"
      aria-label="Core disciplines marquee"
    >
      <div className="flex w-max animate-marquee space-x-8 items-center whitespace-nowrap">
        {displayItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-8">
            <span className="font-display font-bold text-sm sm:text-base tracking-[0.24em] text-white hover:text-[#D4A72C] transition-colors uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 bg-[#D4A72C] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
