import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const elem = document.querySelector(href);
    if (elem) {
      const navHeight = 75;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#111111] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Huge Typographic Watermark */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Massive Brand Name */}
        <div className="pb-12 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] tracking-[-0.04em] text-white block leading-none mb-3 select-none">
              DREAGENCY
            </h2>
            <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#D4A72C] uppercase font-bold">
              {AGENCY_INFO.tagline}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="self-start md:self-end inline-flex items-center gap-2 text-xs font-mono tracking-widest text-white/70 hover:text-[#D4A72C] p-3.5 border border-white/20 hover:border-[#D4A72C] transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-[#D4A72C] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Minimal Directory Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/10 text-xs font-mono">
          
          {/* Practice Areas */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] tracking-widest text-[#D4A72C] uppercase font-bold block">
              PRACTICE AREAS
            </span>
            <p className="text-white/80 text-sm font-sans leading-relaxed">
              Digital Marketing • Creative Strategy • Brand Growth • Performance Media
            </p>
            <p className="text-white/40 text-xs pt-2 font-mono">
              Independent commercial growth studio based in Dwarka Sector 7, Delhi.
            </p>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] tracking-widest text-[#D4A72C] uppercase font-bold block">
              SITE DIRECTORY
            </span>
            <ul className="grid grid-cols-2 gap-2.5 text-white/80">
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#services');
                  }}
                  className="hover:text-[#D4A72C] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#pricing');
                  }}
                  className="hover:text-[#D4A72C] transition-colors"
                >
                  Plans &amp; Pricing
                </a>
              </li>
              <li>
                <a
                  href="#compare-plans"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#compare-plans');
                  }}
                  className="hover:text-[#D4A72C] transition-colors"
                >
                  Compare Plans
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#work');
                  }}
                  className="hover:text-[#D4A72C] transition-colors"
                >
                  Selected Work
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }}
                  className="hover:text-[#D4A72C] transition-colors"
                >
                  Manifesto
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#process');
                  }}
                  className="hover:text-[#D4A72C] transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#why-dreagency"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#why-dreagency');
                  }}
                  className="hover:text-[#D4A72C] transition-colors"
                >
                  Why DREAGENCY
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#faq');
                  }}
                  className="hover:text-[#D4A72C] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="hover:text-[#D4A72C] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[#D4A72C] transition-colors text-left cursor-pointer"
                >
                  Client Privacy
                </button>
              </li>
            </ul>
          </div>

          {/* Delhi HQ Details */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] tracking-widest text-[#D4A72C] uppercase font-bold block">
              DELHI STUDIO
            </span>
            <div className="text-white/80 leading-relaxed font-mono space-y-1">
              <p>{AGENCY_INFO.location.addressLine1}</p>
              <p className="text-[#D4A72C]">{AGENCY_INFO.location.landmark}</p>
              <p>{AGENCY_INFO.location.sector} {AGENCY_INFO.location.cityPin}</p>
              <div className="pt-2">
                <p className="text-white/50">Direct Contacts:</p>
                <p className="text-white font-bold">Javed • Shubham (9211040071)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/40">
          <p>© 2026 DREAGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              CONFIDENTIALITY &amp; TERMS
            </button>
            <span>•</span>
            <span className="text-[#D4A72C]">DELHI, INDIA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
