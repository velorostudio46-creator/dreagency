import React from 'react';
import { Check, Minus } from 'lucide-react';

export const PricingComparison: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Creative Posts',
      basic: '5 Posts',
      premium: '12 Posts',
      enterprise: '20 Posts',
      enterprisePlus: 'Unlimited',
    },
    {
      feature: 'Meta Ads',
      basic: 'Basic Setup',
      premium: 'FB + IG Setup',
      enterprise: 'Advanced Scaling',
      enterprisePlus: 'Full Funnel Strategy',
    },
    {
      feature: 'Lead Generation',
      basic: false,
      premium: true,
      enterprise: true,
      enterprisePlus: true,
    },
    {
      feature: 'Video Editing',
      basic: false,
      premium: 'Basic Editing',
      enterprise: 'Product Video Ads',
      enterprisePlus: 'UGC Video Editing',
    },
    {
      feature: 'Retargeting',
      basic: false,
      premium: false,
      enterprise: true,
      enterprisePlus: true,
    },
    {
      feature: 'Conversion Tracking',
      basic: false,
      premium: false,
      enterprise: true,
      enterprisePlus: true,
    },
    {
      feature: 'Website Support',
      basic: false,
      premium: 'Product Catalog',
      enterprise: 'Banner Design',
      enterprisePlus: 'Shopify / WP / Landing Page',
    },
    {
      feature: 'Reporting',
      basic: 'Monthly Report',
      premium: 'Daily Optimization',
      enterprise: 'Weekly Performance',
      enterprisePlus: 'Daily Reporting',
    },
    {
      feature: 'Dedicated Manager',
      basic: false,
      premium: 'Monthly Call',
      enterprise: 'Priority Support',
      enterprisePlus: 'Dedicated Manager',
    },
  ];

  const renderCell = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <div className="w-5 h-5 bg-[#D4A72C]/10 border border-[#D4A72C]/40 mx-auto flex items-center justify-center">
          <Check className="w-3 h-3 text-[#D4A72C] stroke-[3]" />
        </div>
      ) : (
        <div className="w-5 h-5 mx-auto flex items-center justify-center">
          <Minus className="w-3 h-3 text-[#111111]/30 stroke-[2]" />
        </div>
      );
    }
    return (
      <span className="font-mono text-xs font-semibold text-[#111111] leading-tight block">
        {val}
      </span>
    );
  };

  return (
    <section
      id="compare-plans"
      className="py-20 sm:py-28 bg-[#F7F7F6] border-b border-[#111111]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#111111]/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 bg-[#D4A72C]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#111111]/70 uppercase">
                FEATURE SPECIFICATION MATRIX
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight uppercase">
              COMPARE PLANS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#111111]/70 max-w-md font-mono leading-relaxed">
            Detailed granular capability breakdown across all four growth tiers.
          </p>
        </div>

        {/* Comparison Table with Mobile Scroll Container */}
        <div className="overflow-x-auto bg-white border border-[#111111]/15 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-[#111111]/15 bg-[#111111] text-white">
                <th className="p-4 sm:p-5 text-xs font-mono tracking-widest uppercase font-bold text-white/70 w-1/4">
                  FEATURE SPEC
                </th>
                <th className="p-4 sm:p-5 text-center text-xs font-mono tracking-wider uppercase font-bold text-white w-[18.75%]">
                  BASIC
                  <span className="block text-[10px] text-[#D4A72C] font-normal">₹4,999/mo</span>
                </th>
                <th className="p-4 sm:p-5 text-center text-xs font-mono tracking-wider uppercase font-bold text-[#D4A72C] w-[18.75%] border-x border-white/10 bg-[#1a1a1a]">
                  PREMIUM
                  <span className="block text-[10px] text-white/80 font-normal">₹9,999/mo</span>
                </th>
                <th className="p-4 sm:p-5 text-center text-xs font-mono tracking-wider uppercase font-bold text-white w-[18.75%]">
                  ENTERPRISE
                  <span className="block text-[10px] text-[#D4A72C] font-normal">₹21,999/mo</span>
                </th>
                <th className="p-4 sm:p-5 text-center text-xs font-mono tracking-wider uppercase font-bold text-white w-[18.75%]">
                  ENTERPRISE PLUS
                  <span className="block text-[10px] text-[#D4A72C] font-normal">₹34,999/mo</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#111111]/10 text-xs">
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-[#F7F7F6]/80 transition-colors ${
                    idx % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'
                  }`}
                >
                  <td className="p-4 sm:p-5 font-mono font-bold text-[#111111]">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-center">
                    {renderCell(row.basic)}
                  </td>
                  <td className="p-4 sm:p-5 text-center bg-[#D4A72C]/5 border-x border-[#111111]/10">
                    {renderCell(row.premium)}
                  </td>
                  <td className="p-4 sm:p-5 text-center">
                    {renderCell(row.enterprise)}
                  </td>
                  <td className="p-4 sm:p-5 text-center">
                    {renderCell(row.enterprisePlus)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#111111]/50">
          <span>* All packages billed monthly. Direct partner oversight included.</span>
          <span className="hidden sm:inline">Scroll horizontally on smaller screens</span>
        </div>

      </div>
    </section>
  );
};
