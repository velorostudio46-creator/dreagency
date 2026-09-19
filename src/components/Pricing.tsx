import React from 'react';
import { Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/agencyData';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
  onCustomInquiry: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan, onCustomInquiry }) => {
  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#111111]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-6 border-b border-[#111111]/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 bg-[#D4A72C]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#111111]/70 uppercase">
                COMMERCIAL TIERS // 2026
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight uppercase">
              PLANS THAT SCALE WITH YOU
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#111111]/70 max-w-md font-normal leading-relaxed">
            Transparent pricing engineered for individual brands, growing businesses, and enterprise companies.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`group relative bg-white flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
                  isPopular
                    ? 'border-2 border-[#D4A72C] shadow-[0_12px_36px_rgba(212,167,44,0.14)] hover:shadow-[0_16px_44px_rgba(212,167,44,0.2)]'
                    : 'border border-[#111111]/15 hover:border-[#D4A72C] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(212,167,44,0.08)]'
                }`}
              >
                {/* Most Popular Badge on Top */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#D4A72C] text-[#111111] text-[10px] font-mono font-extrabold tracking-[0.2em] uppercase shadow-sm">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#111111]/10 mb-4">
                    <span className="font-mono text-xs font-bold text-[#D4A72C] tracking-widest">
                      {plan.planNumber}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#111111]/50">
                      TIER SPEC
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] uppercase tracking-tight mb-2">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#111111]/70 leading-relaxed font-normal min-h-[36px] mb-5">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="pb-5 mb-6 border-b border-[#111111]/10">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-none text-[#111111] tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-[0.24em] text-[#111111]/60 uppercase block mt-1.5">
                      {plan.period}
                    </span>
                  </div>

                  {/* Features Header */}
                  <div className="text-[10px] font-mono font-bold tracking-widest text-[#111111]/50 uppercase mb-3">
                    INCLUDES:
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111111]/90">
                        <div className="w-4 h-4 rounded-none bg-[#D4A72C]/10 border border-[#D4A72C]/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#D4A72C] stroke-[3]" />
                        </div>
                        <span className="font-sans leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-5 border-t border-[#111111]/10">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    id={`pricing-cta-${plan.id}`}
                    className={`w-full py-3.5 px-4 text-xs font-mono font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-[#111111] hover:bg-[#222222] text-white border border-[#D4A72C]'
                        : 'bg-[#111111] hover:bg-[#222222] text-white border border-[#111111] hover:border-[#D4A72C]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4A72C] transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Plan Callout Box */}
        <div className="mt-14 p-7 sm:p-9 bg-[#F7F7F6] border border-[#111111]/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="max-w-xl">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
              <span className="w-2 h-2 bg-[#D4A72C]" />
              <h4 className="font-display font-bold text-lg sm:text-xl text-[#111111] uppercase tracking-tight">
                CUSTOM PACKAGE?
              </h4>
            </div>
            <p className="text-sm text-[#111111]/70 font-normal leading-relaxed">
              Let's build a plan around your goals.
            </p>
          </div>

          <button
            onClick={onCustomInquiry}
            id="pricing-custom-talk-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#111111] hover:bg-[#222222] text-white text-xs font-mono font-bold tracking-[0.2em] border border-[#111111] hover:border-[#D4A72C] transition-all cursor-pointer whitespace-nowrap"
          >
            <span>TALK TO US</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4A72C]" />
          </button>
        </div>

      </div>
    </section>
  );
};
