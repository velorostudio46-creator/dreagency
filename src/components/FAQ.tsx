import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What services does DREAGENCY provide?',
      a: 'DREAGENCY provides comprehensive digital marketing solutions spanning four interconnected disciplines: 01 Digital Marketing (Omnichannel distribution, social media marketing, content marketing), 02 Creative Strategy (Brand identity, creative direction, high-converting design systems), 03 Brand Growth (Market positioning, go-to-market strategies, customer acquisition), and 04 Performance (Paid Meta & Search ads, lead generation, CRO, and server-side tracking).'
    },
    {
      q: 'Which package is right for my business?',
      a: 'For individuals or creators starting out, our Basic plan (₹4,999/mo) covers essential organic creatives and initial ad setup. Growing small-to-mid businesses typically choose our Premium plan (₹9,999/mo, Most Popular) for full Facebook + Instagram lead campaigns and video editing. Scaling brands and corporations select Enterprise (₹21,999/mo) or Enterprise Plus (₹34,999/mo) for retargeting, custom landing pages, Shopify/WordPress support, and dedicated partner management.'
    },
    {
      q: 'Can I create a custom package?',
      a: 'Yes. If your business has specific multi-channel demands, unique ad spend budgets, or bespoke visual production requirements, select the "Custom Package" option or click "Talk to Us". We build customized engagement scopes tailored strictly around your commercial milestones.'
    },
    {
      q: 'Do you manage Meta Ads?',
      a: 'Yes, Meta Ads (Facebook and Instagram) is one of our flagship core competencies. From audience segmentation, pixel and Conversion API setup, to high-converting ad copy, visual design, daily campaign optimization, and retargeting, we handle the entire ad pipeline.'
    },
    {
      q: 'Do you provide creative design?',
      a: 'Absolutely. We believe performance marketing is only as strong as the creative fueling it. We produce high-converting ad creatives, editorial graphic suites, social media visual systems, motion assets, and brand style guides engineered specifically to stop the scroll and drive action.'
    },
    {
      q: 'Do you work with startups and small businesses?',
      a: 'Yes. We work across the spectrum from early-stage startups and high-potential local ventures in Delhi to nationwide consumer brands and enterprise groups. Our tiered packages (starting at ₹4,999/month) are designed specifically to make world-class agency leadership accessible at every stage of growth.'
    },
    {
      q: 'How do I get started?',
      a: 'Getting started is effortless. Select any package from our Plans & Pricing section to pre-fill your brief, or scroll down to the Contact form. You can also reach out immediately via direct phone call (9211040071) or WhatsApp chat to speak directly with partners Javed and Shubham.'
    }
  ];

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#111111]/10"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 pb-6 border-b border-[#111111]/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F6] border border-[#111111]/15 mb-3">
            <span className="w-1.5 h-1.5 bg-[#D4A72C]" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.24em] text-[#111111] uppercase">
              CLARITY &amp; SCOPE
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xs sm:text-sm text-[#111111]/70 font-mono mt-3">
            Everything you need to know about partnering with DREAGENCY.
          </p>
        </div>

        {/* Clean Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`border transition-all duration-300 ${
                  isOpen
                    ? 'border-[#111111] bg-[#F7F7F6]'
                    : 'border-[#111111]/15 bg-white hover:border-[#111111]/50'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#111111] uppercase tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 flex items-center justify-center border shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'border-[#D4A72C] text-[#D4A72C] rotate-180 bg-[#111111]'
                        : 'border-[#111111]/20 text-[#111111] bg-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 px-5 sm:px-6 pb-6' : 'max-h-0 opacity-0 px-5 sm:px-6'
                  }`}
                >
                  <p className="text-sm text-[#111111]/80 leading-relaxed font-normal pt-2 border-t border-[#111111]/10">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
