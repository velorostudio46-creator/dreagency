import React, { useEffect } from 'react';
import { X, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { CaseStudyItem } from '../types';
import { AGENCY_INFO } from '../data/agencyData';

interface CaseStudyModalProps {
  caseStudy: CaseStudyItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-3xl bg-white border border-[#111111] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 bg-[#111111] text-white flex items-center justify-between border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4A72C] uppercase font-bold">
                {caseStudy.projectNumber} // CASE DOCUMENTATION
              </span>
            </div>
            <h3 id="case-study-title" className="font-display font-extrabold text-2xl uppercase tracking-tight">
              {caseStudy.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#F7F7F6] border border-[#111111]/10 text-xs font-mono">
            <div>
              <span className="text-[9px] text-[#111111]/50 uppercase tracking-widest block mb-0.5">
                DISCIPLINE
              </span>
              <span className="font-bold text-[#111111]">{caseStudy.category}</span>
            </div>
            <div>
              <span className="text-[9px] text-[#111111]/50 uppercase tracking-widest block mb-0.5">
                SECTOR
              </span>
              <span className="font-bold text-[#111111]">{caseStudy.clientType}</span>
            </div>
            <div>
              <span className="text-[9px] text-[#111111]/50 uppercase tracking-widest block mb-0.5">
                EXECUTION
              </span>
              <span className="font-bold text-[#D4A72C]">DREAGENCY Partner Lead</span>
            </div>
            <div>
              <span className="text-[9px] text-[#111111]/50 uppercase tracking-widest block mb-0.5">
                LOCATION
              </span>
              <span className="font-bold text-[#111111]">Delhi / National</span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#111111] uppercase mb-2">
              OVERVIEW &amp; SCOPE
            </h4>
            <p className="text-[#111111]/80 leading-relaxed font-normal">
              {caseStudy.shortDescription}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#F7F7F6] border border-gray-200">
              <span className="font-mono text-xs font-bold text-[#111111] tracking-wider uppercase block mb-2">
                THE CHALLENGE
              </span>
              <p className="text-xs text-[#111111]/80 leading-relaxed font-normal">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-4 bg-[#F7F7F6] border border-gray-200">
              <span className="font-mono text-xs font-bold text-[#D4A72C] tracking-wider uppercase block mb-2">
                STRATEGIC SOLUTION
              </span>
              <p className="text-xs text-[#111111]/80 leading-relaxed font-normal">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#111111] uppercase mb-3">
              DELIVERABLES INCLUDED
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.deliverables.map((item, index) => (
                <div
                  key={index}
                  className="p-3 bg-white border border-[#111111]/15 flex items-center gap-2.5 text-xs text-[#111111]"
                >
                  <Check className="w-3.5 h-3.5 text-[#D4A72C] shrink-0" />
                  <span className="font-mono">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-[#F7F7F6] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-mono text-[#111111]/60">
            <span>Ready for comparable results for your business?</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onInquire(caseStudy.title);
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#111111] hover:bg-[#222222] text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer border border-[#111111]"
            >
              <span>INQUIRE ABOUT THIS SPECIFICATION</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4A72C]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
