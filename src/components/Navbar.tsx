import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface NavbarProps {
  onOpenInquiry: (initialService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'SERVICES', href: '#services' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'COMPARE', href: '#compare-plans' },
    { name: 'WORK', href: '#work' },
    { name: 'PROCESS', href: '#process' },
    { name: 'ABOUT', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'py-3.5 bg-white/95 backdrop-blur-md border-b border-[#111111]/10'
          : 'py-5 bg-white/90 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="navbar-brand-logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-start focus:outline-none"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-display font-extrabold tracking-tight text-xl sm:text-2xl text-[#111111]">
              DREAGENCY
            </span>
            <span className="w-1.5 h-1.5 bg-[#D4A72C]" />
          </div>
          <span className="text-[9px] font-mono tracking-[0.24em] uppercase text-[#111111]/60 font-semibold -mt-0.5 hidden sm:block">
            {AGENCY_INFO.tagline}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-xs font-mono font-bold tracking-[0.16em] text-[#111111]/80 hover:text-[#D4A72C] transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${AGENCY_INFO.directPhone}`}
            className="text-xs font-mono text-[#111111]/70 hover:text-[#D4A72C] transition-colors px-2 py-1"
          >
            9211040071
          </a>
          <button
            id="nav-cta-talk-btn"
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-[#222222] text-white text-xs font-mono font-bold tracking-[0.16em] border border-[#111111] transition-colors cursor-pointer"
          >
            <span>START BRIEF</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4A72C]" />
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            id="mobile-menu-talk-btn"
            onClick={() => onOpenInquiry()}
            className="px-3 py-1.5 bg-[#111111] text-white text-xs font-mono font-bold tracking-[0.14em]"
          >
            BRIEF
          </button>
          <button
            id="navbar-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="p-2 text-[#111111] hover:text-[#D4A72C] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 top-[60px] bg-white z-50 flex flex-col justify-between px-6 py-8 border-t border-[#111111]/10 md:hidden overflow-y-auto"
        >
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-bold text-[#D4A72C]">
              SECTIONS
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-display font-bold text-2xl uppercase tracking-tight text-[#111111] hover:text-[#D4A72C] transition-colors py-1.5 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#111111]/10 space-y-4 text-xs font-mono">
            <div>
              <span className="text-[10px] tracking-widest text-[#111111]/50 uppercase block mb-1">
                DIRECT PARTNER CONTACT
              </span>
              <p className="font-bold text-[#111111]">Javed &amp; Shubham</p>
              <a href={`tel:${AGENCY_INFO.directPhone}`} className="text-[#D4A72C] font-bold block mt-1">
                +91 9211040071
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 bg-[#111111] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase border border-[#111111]"
            >
              START PROJECT BRIEF
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
