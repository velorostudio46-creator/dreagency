import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Digital Marketing'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || 'Digital Marketing',
    budget: '₹50,000 – ₹1,50,000 / month',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-2xl bg-white border border-[#111111] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#111111] text-white flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4A72C] uppercase block mb-1 font-bold">
              DREAGENCY PROJECT INTAKE
            </span>
            <h3 id="inquiry-modal-title" className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight">
              START A PROJECT
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
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-12 h-12 bg-[#111111] text-[#D4A72C] mx-auto flex items-center justify-center border border-[#D4A72C]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#111111] uppercase tracking-tight">
                BRIEF TRANSMITTED
              </h4>
              <p className="text-sm text-[#111111]/70 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#111111]">{formData.name}</span>. Partners Javed and Shubham will review your inquiry immediately.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919211040071?text=Hi%20DREAGENCY,%20I%20just%20submitted%20a%20brief%20for%20${encodeURIComponent(formData.company || formData.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#111111] text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 border border-[#D4A72C]"
                >
                  <MessageSquare className="w-4 h-4 text-[#D4A72C]" />
                  <span>CONTINUE ON WHATSAPP</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#F7F7F6] hover:bg-gray-200 text-xs font-mono font-bold tracking-wider text-[#111111] border border-gray-300"
                >
                  CLOSE WINDOW
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#111111] uppercase mb-1.5">
                    YOUR FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aditi Kapoor"
                    className="w-full px-3.5 py-2.5 bg-[#F7F7F6] border border-gray-300 focus:border-[#111111] focus:outline-none text-sm font-sans"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#111111] uppercase mb-1.5">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9211040071"
                    className="w-full px-3.5 py-2.5 bg-[#F7F7F6] border border-gray-300 focus:border-[#111111] focus:outline-none text-sm font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#111111] uppercase mb-1.5">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@brand.com"
                    className="w-full px-3.5 py-2.5 bg-[#F7F7F6] border border-gray-300 focus:border-[#111111] focus:outline-none text-sm font-sans"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#111111] uppercase mb-1.5">
                    COMPANY / BRAND
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Brand name"
                    className="w-full px-3.5 py-2.5 bg-[#F7F7F6] border border-gray-300 focus:border-[#111111] focus:outline-none text-sm font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#111111] uppercase mb-1.5">
                    SELECTED PACKAGE OR DISCIPLINE
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F7F6] border border-gray-300 focus:border-[#111111] focus:outline-none text-sm font-sans"
                  >
                    <optgroup label="Growth Plans">
                      <option value="Basic – ₹4,999/month">Basic – ₹4,999/month</option>
                      <option value="Premium – ₹9,999/month">Premium – ₹9,999/month (Most Popular)</option>
                      <option value="Enterprise – ₹21,999/month">Enterprise – ₹21,999/month</option>
                      <option value="Enterprise Plus – ₹34,999/month">Enterprise Plus – ₹34,999/month</option>
                      <option value="Custom Package">Custom Package</option>
                    </optgroup>
                    <optgroup label="Agency Retainers">
                      <option value="Digital Marketing">01 — Digital Marketing (Omnichannel)</option>
                      <option value="Creative Strategy">02 — Creative Strategy &amp; Identity</option>
                      <option value="Brand Growth">03 — Brand Growth &amp; GTM</option>
                      <option value="Performance">04 — Performance &amp; Paid Media</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-[#111111] uppercase mb-1.5">
                    TARGET BUDGET / MONTH
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F7F6] border border-gray-300 focus:border-[#111111] focus:outline-none text-sm font-sans"
                  >
                    <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000</option>
                    <option value="₹1,50,000 – ₹3,50,000">₹1,50,000 – ₹3,50,000</option>
                    <option value="₹3,50,000 – ₹10,00,000+">₹3,50,000 – ₹10,00,000+</option>
                    <option value="Enterprise Custom">Enterprise / Custom</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#111111] uppercase mb-1.5">
                  PROJECT SUMMARY &amp; OBJECTIVES *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about what you want to build or scale..."
                  className="w-full px-3.5 py-2.5 bg-[#F7F7F6] border border-gray-300 focus:border-[#111111] focus:outline-none text-sm font-sans resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#111111] hover:bg-[#222222] text-white font-mono font-bold tracking-[0.2em] transition-colors uppercase border border-[#111111] flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <span>SUBMIT BRIEF TO PARTNERS</span>
                    <Send className="w-3.5 h-3.5 text-[#D4A72C]" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Direct Partner Details */}
          <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#111111]/70 gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D4A72C]" />
              <span>Dwarka Sector 7, Delhi – 110075</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${AGENCY_INFO.directPhone}`}
                className="font-bold text-[#111111] hover:text-[#D4A72C]"
              >
                Call: 9211040071
              </a>
              <span>•</span>
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4A72C] font-bold"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
