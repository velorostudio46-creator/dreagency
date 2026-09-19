import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-2xl bg-white border border-[#111111] shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#111111] text-white flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4A72C] uppercase block mb-1 font-bold">
              CLIENT ASSURANCE &amp; CONFIDENTIALITY
            </span>
            <h3 id="privacy-modal-title" className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-tight">
              PRIVACY &amp; DATA POLICY
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

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm text-[#111111]/80 leading-relaxed font-normal">
          <div className="p-4 bg-[#F7F7F6] border border-gray-200 text-xs font-mono">
            <span className="text-[#111111] font-bold block mb-1">DREAGENCY CONFIDENTIALITY GUARANTEE:</span>
            <span>All proprietary business data, campaign figures, ad spends, and strategic deliverables are protected under strict non-disclosure terms.</span>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider mb-1">
              1. Information Collection
            </h4>
            <p className="text-xs sm:text-sm">
              We only collect information willingly submitted via our consultation forms, direct hotline calls, or WhatsApp inquiries. This includes your name, work email, phone number, and project goals.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider mb-1">
              2. Use of Information
            </h4>
            <p className="text-xs sm:text-sm">
              Your contact details and project descriptions are exclusively used by partners Javed and Shubham to evaluate commercial viability, formulate proposals, and communicate during your engagement. We never sell, lease, or distribute client data.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider mb-1">
              3. Commercial Asset Ownership
            </h4>
            <p className="text-xs sm:text-sm">
              Upon final settlement of contract invoices, all finalized design files, media assets, copy variants, and ad account setups become the 100% intellectual property of the client.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200 text-xs font-mono text-[#111111]/60">
            <p>Studio: {AGENCY_INFO.location.fullFormatted}</p>
            <p className="pt-1">Partner Direct: +91 9211040071</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F7F7F6] border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#111111] text-white text-xs font-mono font-bold tracking-wider uppercase border border-[#111111] cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
