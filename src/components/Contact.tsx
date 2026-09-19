import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { ContactFormData } from '../types';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || 'Basic – ₹4,999/month',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(AGENCY_INFO.location.fullFormatted);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const packageOptions = [
    'Basic – ₹4,999/month',
    'Premium – ₹9,999/month',
    'Enterprise – ₹21,999/month',
    'Enterprise Plus – ₹34,999/month',
    'Custom Package',
    'Digital Marketing (Omnichannel)',
    'Creative Strategy & Identity',
    'Brand Growth & Positioning',
    'Performance (Meta & Google Ads)'
  ];

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#111111]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-6 border-b border-[#111111]/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 bg-[#D4A72C]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.24em] text-[#111111]/70 uppercase">
                COMMISSION AN ENGAGEMENT
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight uppercase">
              CONTACT
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#111111]/70 max-w-md font-normal leading-relaxed">
            Speak directly with agency partners Javed and Shubham at our Dwarka studio or initiate your project brief below.
          </p>
        </div>

        {/* 2-Column Split: Studio Info vs Minimalist Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Agency Info & Location */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Partners Card */}
            <div className="bg-[#111111] text-white p-7 sm:p-9 border border-[#111111]">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#D4A72C] uppercase block mb-2">
                PARTNER CONSULTATION
              </span>
              <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-2">
                Javed &amp; Shubham
              </h3>
              <p className="text-xs text-white/60 font-mono mb-6">
                Partners • Digital Strategy &amp; Performance
              </p>

              <div className="space-y-4 text-xs font-mono border-t border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-white/50">DIRECT PHONE:</span>
                  <a
                    href="tel:9211040071"
                    className="font-bold text-[#D4A72C] hover:underline tracking-wider"
                  >
                    9211040071
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/50">WHATSAPP:</span>
                  <a
                    href={AGENCY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-[#D4A72C] transition-colors"
                  >
                    CHAT WITH PARTNERS →
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/50">EMAIL:</span>
                  <a
                    href={`mailto:${AGENCY_INFO.email}`}
                    className="text-white/90 hover:text-[#D4A72C] transition-colors"
                  >
                    {AGENCY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Studio Address Card */}
            <div className="p-7 sm:p-9 bg-[#F7F7F6] border border-[#111111]/15">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold tracking-[0.22em] text-[#111111]/70 uppercase">
                  STUDIO LOCATION
                </span>
                <MapPin className="w-4 h-4 text-[#D4A72C]" />
              </div>

              <h4 className="font-display font-extrabold text-xl text-[#111111] uppercase tracking-tight mb-2">
                DREAGENCY DELHI HQ
              </h4>

              <div className="text-xs sm:text-sm text-[#111111]/80 font-mono leading-relaxed space-y-1 mb-6">
                <p>{AGENCY_INFO.location.addressLine1}</p>
                <p className="text-[#D4A72C] font-bold">{AGENCY_INFO.location.landmark}</p>
                <p>{AGENCY_INFO.location.sector}</p>
                <p>{AGENCY_INFO.location.cityPin}</p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href={AGENCY_INFO.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#111111] hover:bg-[#222222] text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors"
                >
                  <span>GOOGLE MAPS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4A72C]" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-[#111111]/20 hover:border-[#111111] text-[#111111] text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D4A72C]" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#111111]/60" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right: Minimalist Form */}
          <div className="lg:col-span-7 bg-white border border-[#111111]/15 p-7 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-[#111111] text-[#D4A72C] border-2 border-[#D4A72C] mx-auto flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight mb-2">
                  BRIEF TRANSMITTED
                </h3>
                <p className="text-sm text-[#111111]/75 max-w-md mx-auto font-normal leading-relaxed mb-6">
                  Thank you, <strong>{formData.name}</strong>. Partners Javed &amp; Shubham will review your brief and contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      service: 'Basic – ₹4,999/month',
                      message: '',
                    });
                  }}
                  className="px-6 py-3 bg-[#111111] text-white text-xs font-mono tracking-wider uppercase cursor-pointer hover:bg-[#222222]"
                >
                  TRANSMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs font-mono">
                <div className="pb-3 border-b border-[#111111]/10 flex items-center justify-between">
                  <span className="font-bold text-[#111111] tracking-widest uppercase">
                    CONFIDENTIAL CLIENT INQUIRY
                  </span>
                  <span className="text-[#D4A72C] font-bold">STAGE 01</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-bold text-[#111111] uppercase mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-[#F7F7F6] border border-[#111111]/20 focus:border-[#111111] focus:bg-white focus:outline-none text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#111111] uppercase mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@company.com"
                      className="w-full px-4 py-3 bg-[#F7F7F6] border border-[#111111]/20 focus:border-[#111111] focus:bg-white focus:outline-none text-sm font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-bold text-[#111111] uppercase mb-1.5">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#F7F7F6] border border-[#111111]/20 focus:border-[#111111] focus:bg-white focus:outline-none text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#111111] uppercase mb-1.5">
                      COMPANY / BRAND NAME
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Brand or Venture Name"
                      className="w-full px-4 py-3 bg-[#F7F7F6] border border-[#111111]/20 focus:border-[#111111] focus:bg-white focus:outline-none text-sm font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#111111] uppercase mb-1.5">
                    SELECTED PACKAGE OR DISCIPLINE *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F7F7F6] border border-[#111111]/20 focus:border-[#111111] focus:bg-white focus:outline-none text-sm font-sans font-medium"
                  >
                    {packageOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#111111] uppercase mb-1.5">
                    MESSAGE OR COMMERCIAL OBJECTIVES *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you are aiming to achieve, current bottlenecks, or expected timeline..."
                    className="w-full px-4 py-3 bg-[#F7F7F6] border border-[#111111]/20 focus:border-[#111111] focus:bg-white focus:outline-none text-sm font-sans resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#111111] hover:bg-[#222222] text-white font-mono font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#111111] hover:border-[#D4A72C]"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING BRIEF...</span>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY TO PARTNERS</span>
                      <Send className="w-3.5 h-3.5 text-[#D4A72C]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
