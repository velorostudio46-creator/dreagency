import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudyItem } from '../types';

interface PortfolioProps {
  onSelectCaseStudy: (caseStudy: CaseStudyItem) => void;
}

interface ProjectBlock {
  number: string;
  title: string;
  category: string;
  scope: string;
  description: string;
  keyOutputs: string[];
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectCaseStudy }) => {
  const projects: ProjectBlock[] = [
    {
      number: '01',
      title: 'BRAND TRANSFORMATION',
      category: 'Strategic Identity & Architecture',
      scope: 'Visual System • Verbal Identity • Digital Guidelines',
      description: 'End-to-end brand repositioning and aesthetic elevation for high-growth consumer ventures seeking defensible market distinction.',
      keyOutputs: ['Brand Book & Editorial Guidelines', 'Custom Typography & Color Space', 'Omnichannel Packaging & Asset Kits']
    },
    {
      number: '02',
      title: 'PERFORMANCE CAMPAIGN',
      category: 'Meta & Search Media Buying',
      scope: 'Audience Modeling • Ad Variant Testing • Conversion Attribution',
      description: 'Multi-variant advertising campaigns architected to cut customer acquisition costs while maintaining aggressive volume expansion.',
      keyOutputs: ['Full-Funnel Media Strategy', 'Dynamic Creative Optimization', 'First-Party Tracking Pixels']
    },
    {
      number: '03',
      title: 'DIGITAL EXPERIENCE',
      category: 'High-Conversion Web Ecosystem',
      scope: 'Editorial UI/UX • Interactive Craft • Mobile Fluidity',
      description: 'Architectural web platforms and conversion funnels engineered with typographic precision, instantaneous load times, and high user retention.',
      keyOutputs: ['Custom Interactive Design Systems', 'High-Converting Landing Pages', 'Technical Speed Optimization']
    },
    {
      number: '04',
      title: 'GROWTH STRATEGY',
      category: 'Commercial Scaling & GTM Architecture',
      scope: 'Go-To-Market Blueprint • Customer Retention Flywheel',
      description: 'Defensive market planning, lifecycle marketing loops, and omni-channel acquisition architectures engineered for multi-year compounding returns.',
      keyOutputs: ['Competitive Whitespace Audit', 'Customer Lifetime Value Frameworks', 'Quarterly Revenue Milestones']
    },
  ];

  return (
    <section
      id="work"
      className="py-24 sm:py-32 bg-[#F7F7F6] border-b border-[#111111]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-6 border-b border-[#111111]/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 bg-[#D4A72C]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#111111]/70 uppercase">
                PORTFOLIO ARCHIVE // 01 – 04
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight uppercase">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#111111]/70 max-w-md font-normal leading-relaxed">
            Asymmetric project frameworks engineered for high-growth enterprises and category leaders.
          </p>
        </div>

        {/* Large Asymmetric Project Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const isAlternate = index % 2 === 1;
            return (
              <div
                key={project.number}
                id={`project-block-${project.number}`}
                className={`group bg-white border border-[#111111]/15 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#111111] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] ${
                  isAlternate ? 'md:translate-y-6' : ''
                }`}
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10 mb-6 text-xs font-mono">
                    <span className="font-bold text-[#D4A72C] tracking-widest text-sm">
                      {project.number} // ARCHIVE
                    </span>
                    <span className="text-[10px] uppercase text-[#111111]/60 tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-[#D4A72C] font-semibold uppercase tracking-wider mb-5">
                    {project.scope}
                  </p>

                  <p className="text-sm text-[#111111]/75 leading-relaxed font-normal mb-8">
                    {project.description}
                  </p>

                  {/* Abstract Editorial Graphic Specimen Placeholder (Not AI or generic mockup) */}
                  <div className="w-full bg-[#111111] text-white p-6 mb-8 border border-[#111111] relative overflow-hidden">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono text-white/50 mb-4">
                      <span>SPECIMEN FRAMEWORK</span>
                      <span className="text-[#D4A72C] font-bold">DREAGENCY STUDIO ARCHIVE</span>
                    </div>
                    <div className="space-y-2 font-mono text-xs text-white/80">
                      {project.keyOutputs.map((out, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#D4A72C]" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 border-t border-[#111111]/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#111111]/50 tracking-wider uppercase">
                    AVAILABLE FOR CLIENT DEPLOYMENT
                  </span>
                  <div className="w-9 h-9 bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#D4A72C] group-hover:text-[#111111] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
