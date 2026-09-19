import React, { useEffect } from 'react';
import { X, Check, ArrowRight, Layers, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../types';
import { AGENCY_INFO } from '../data/agencyData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-detail-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-3xl bg-white border border-[#111111] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 bg-[#111111] text-white flex items-center justify-between border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4A72C] uppercase font-bold">
                PRACTICE AREA // {service.number}
              </span>
            </div>
            <h3 id="service-detail-title" className="font-display font-extrabold text-2xl uppercase tracking-tight">
              {service.title}
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
          {/* Practice Summary */}
          <div>
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#111111] uppercase mb-2">
              DISCIPLINE FOCUS
            </h4>
            <p className="text-[#111111]/80 text-base leading-relaxed font-normal">
              {service.detailedDescription}
            </p>
          </div>

          {/* Capabilities Grid */}
          <div>
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#111111] uppercase mb-3">
              ACTIVE CAPABILITIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#F7F7F6] border border-gray-200 flex items-center gap-2.5 text-xs text-[#111111]"
                >
                  <span className="w-1.5 h-1.5 bg-[#D4A72C] shrink-0" />
                  <span className="font-mono font-medium">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables Grid */}
          <div>
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#111111] uppercase mb-3">
              CONTRACT DELIVERABLES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, index) => (
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

          {/* Metric Objective Focus */}
          <div className="p-4 bg-[#F7F7F6] border-l-2 border-[#D4A72C] text-xs font-mono">
            <span className="text-[#D4A72C] font-bold block mb-1">PRIMARY COMMERCIAL OBJECTIVE:</span>
            <span className="text-[#111111] font-semibold">{service.metricFocus}</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-[#F7F7F6] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-mono text-[#111111]/60">
            <span>Direct partner consultation available</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onInquire(service.title);
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#111111] hover:bg-[#222222] text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer border border-[#111111]"
            >
              <span>INQUIRE ABOUT {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4A72C]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
