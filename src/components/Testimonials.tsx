import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      badge: 'CLIENT TESTIMONIAL',
      quote: 'DREAGENCY brought a rare combination of disciplined creative direction and razor-sharp Meta Ads performance to our brand. Their direct partner involvement made all the difference in scaling our customer acquisition.',
      author: 'Managing Director',
      company: 'High-Growth Consumer Brand',
      sector: 'E-Commerce & Retail'
    },
    {
      id: 2,
      badge: 'CLIENT TESTIMONIAL',
      quote: 'Working directly with Javed and Shubham felt like having executive CMO and Head of Growth partners in-house. Transparent reporting, no wasted media spend, and brand work we are proud of.',
      author: 'Co-Founder & CEO',
      company: 'Omnichannel Enterprise',
      sector: 'Lifestyle & Design'
    },
    {
      id: 3,
      badge: 'CLIENT TESTIMONIAL',
      quote: 'Before DREAGENCY, our creative and performance agencies were constantly pointing fingers. DREAGENCY unified both sides into one cohesive engine that scaled our lead pipeline systematically.',
      author: 'Head of Marketing',
      company: 'Venture-Backed Venture',
      sector: 'B2B & Tech Platform'
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 bg-[#F7F7F6] border-b border-[#111111]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-6 border-b border-[#111111]/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 bg-[#D4A72C]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.24em] text-[#111111]/70 uppercase">
                PARTNER REPUTATION
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight uppercase">
              CLIENT TESTIMONIALS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#111111]/70 max-w-md font-mono leading-relaxed">
            Direct client feedback on DREAGENCY strategy, creative execution, and performance.
          </p>
        </div>

        {/* 3 Testimonial Cards clearly marked as CLIENT TESTIMONIAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#111111]/15 p-8 sm:p-10 flex flex-col justify-between hover:border-[#D4A72C] transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Badge Clearly Marked as CLIENT TESTIMONIAL */}
                <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10 mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-[0.22em] text-[#D4A72C] uppercase bg-[#111111] text-white px-2.5 py-1">
                    {item.badge}
                  </span>
                  <Quote className="w-4 h-4 text-[#D4A72C]" />
                </div>

                <p className="text-sm text-[#111111]/85 leading-relaxed font-normal mb-8 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#111111]/10">
                <span className="font-display font-bold text-sm text-[#111111] block uppercase">
                  {item.author}
                </span>
                <span className="text-xs font-mono text-[#D4A72C] font-semibold block">
                  {item.company}
                </span>
                <span className="text-[10px] font-mono text-[#111111]/50 uppercase mt-0.5 block">
                  {item.sector}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 text-center">
          <span className="text-[11px] font-mono text-[#111111]/40 uppercase tracking-widest">
            Structured for direct verified client endorsement records
          </span>
        </div>

      </div>
    </section>
  );
};
