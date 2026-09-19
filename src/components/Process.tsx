import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      phase: 'Immersion & Commercial Audit',
      description: 'We dissect your market landscape, competitive vectors, historical campaign data, and target buyer psyche to uncover untapped commercial levers.',
      outputs: ['Market Opportunity Matrix', 'Audience Segmentation', 'Competitive Benchmark']
    },
    {
      number: '02',
      title: 'STRATEGIZE',
      phase: 'Architecture & Positioning',
      description: 'We formulate the overarching commercial blueprint, budget allocation, messaging hierarchy, and media channel matrix tailored to your business objectives.',
      outputs: ['Omnichannel Growth Blueprint', 'Offer & Messaging Strategy', 'Media Channel Mix']
    },
    {
      number: '03',
      title: 'CREATE',
      phase: 'Production & Creative Direction',
      description: 'Our design and copy team brings the strategy to life with bespoke visual systems, high-converting ad variants, and compelling brand storytelling.',
      outputs: ['Ad Creative Suites', 'Editorial Visual Systems', 'Landing Page Wireframes']
    },
    {
      number: '04',
      title: 'LAUNCH',
      phase: 'Deployment & Attribution',
      description: 'We deploy campaigns with surgical precision, ensuring full server-side tracking, conversion pixels, and clean budget pacing from minute one.',
      outputs: ['Multi-Channel Campaign Activation', 'Tracking & Attribution Setup', 'Pacing Calibration']
    },
    {
      number: '05',
      title: 'OPTIMIZE',
      phase: 'Scale & Compounding Returns',
      description: 'Continuous algorithmic tuning, creative variant iteration, and conversion rate optimization to scale winning campaigns and eliminate wasted spend.',
      outputs: ['Weekly Performance Audits', 'Creative Refresh Cadence', 'Expansion Flywheel']
    },
  ];

  const currentStep = steps[activeStepIndex];

  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#111111]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-6 border-b border-[#111111]/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 bg-[#D4A72C]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#111111]/70 uppercase">
                METHODOLOGY // 01 – 05
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight uppercase">
              PROCESS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#111111]/70 max-w-md font-normal leading-relaxed">
            A sequential 5-phase growth cycle with real-time progression and partner accountability.
          </p>
        </div>

        {/* Gold Progress Line Across the 5 Steps */}
        <div className="relative mb-10 sm:mb-14">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#111111]/10 -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 left-0 h-[2px] bg-[#D4A72C] -translate-y-1/2 z-0 transition-all duration-500 ease-out"
            style={{ width: `${(activeStepIndex / (steps.length - 1)) * 100}%` }}
          />

          {/* Horizontal Step Buttons */}
          <div className="relative z-10 flex justify-between items-center">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex >= idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex flex-col items-center group cursor-pointer transition-all duration-300 focus:outline-none`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-mono text-xs sm:text-sm font-bold border transition-all duration-300 ${
                      isActive
                        ? 'bg-[#111111] text-[#D4A72C] border-[#D4A72C] scale-110 shadow-md'
                        : isPast
                        ? 'bg-white text-[#111111] border-[#D4A72C]'
                        : 'bg-white text-[#111111]/40 border-[#111111]/20 group-hover:border-[#111111]'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`mt-2 text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase transition-colors hidden sm:block ${
                      isActive ? 'text-[#111111]' : 'text-[#111111]/50 group-hover:text-[#111111]'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-[#F7F7F6] border border-[#111111]/15 p-8 sm:p-12 transition-all duration-400">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 pb-4 border-b border-[#111111]/10 mb-5">
                <span className="font-mono text-xs font-bold text-[#D4A72C] tracking-widest">
                  PHASE {currentStep.number} // 05
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/50">
                  {currentStep.phase}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight mb-4">
                {currentStep.title}
              </h3>

              <p className="text-base text-[#111111]/80 leading-relaxed font-normal mb-6">
                {currentStep.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white border border-[#111111]/10 p-6 sm:p-8">
              <span className="text-[10px] font-mono tracking-widest text-[#D4A72C] uppercase font-bold block mb-4">
                KEY DELIVERABLES &amp; OUTPUTS
              </span>
              <ul className="space-y-3 font-mono text-xs text-[#111111]/90">
                {currentStep.outputs.map((out, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 bg-[#D4A72C]/10 border border-[#D4A72C]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#D4A72C] stroke-[3]" />
                    </div>
                    <span className="leading-snug">{out}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
