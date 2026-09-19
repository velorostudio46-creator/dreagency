/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { HowWeThink } from './components/HowWeThink';
import { Portfolio } from './components/Portfolio';
import { ResultsMetrics } from './components/ResultsMetrics';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { PricingComparison } from './components/PricingComparison';
import { WhyDreagency } from './components/WhyDreagency';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { CaseStudyItem, ServiceItem, PricingPlan } from './types';
import { MessageSquare, Phone } from 'lucide-react';
import { AGENCY_INFO } from './data/agencyData';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState<string>('Basic – ₹4,999/month');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleOpenInquiry = (initialService?: string) => {
    if (initialService) {
      setInquiryService(initialService);
    }
    setInquiryModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setInquiryService(plan.packageOptionValue);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      const navHeight = 72;
      const elementPosition = contactElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCustomPlanInquiry = () => {
    setInquiryService('Custom Package');
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      const navHeight = 72;
      const elementPosition = contactElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleViewWork = () => {
    const workElem = document.querySelector('#work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] flex flex-col selection:bg-[#D4A72C] selection:text-[#111111] relative font-sans">
      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Orchestration Structure matching exact prompt design specifications */}
      <main className="flex-grow">
        {/* 1. Hero: Cinematic Editorial Hero */}
        <Hero
          onStartProject={() => handleOpenInquiry()}
          onViewWork={handleViewWork}
        />

        {/* 2. Marquee: Clean, high-contrast animated typography tape */}
        <Marquee />

        {/* 3. About: Big Statement Manifesto */}
        <About onStartProject={() => handleOpenInquiry()} />

        {/* 4. Services: 4 Large Interactive Panels */}
        <Services
          onSelectService={(service) => setSelectedService(service)}
          onInquireService={(serviceTitle) => handleOpenInquiry(serviceTitle)}
        />

        {/* 5. How We Think: 3 Principles with animated connecting line & Growth Formula */}
        <HowWeThink />

        {/* 6. Featured Work: Large Asymmetric Project Blocks */}
        <Portfolio
          onSelectCaseStudy={(caseStudy) => setSelectedCaseStudy(caseStudy)}
        />

        {/* 7. Results / Metrics: Dark Section with Neutral Metric Panels */}
        <ResultsMetrics />

        {/* 8. Process: Sequential 5-Step Methodology with Horizontal Bar */}
        <Process />

        {/* 9. Plans & Pricing: 4 Editorial Growth Tier Cards */}
        <Pricing
          onSelectPlan={handleSelectPlan}
          onCustomInquiry={handleCustomPlanInquiry}
        />

        {/* 10. Pricing Comparison: Detailed Feature Matrix Table */}
        <PricingComparison />

        {/* 11. Why DREAGENCY: Split-Screen Typography & Expandable Points */}
        <WhyDreagency />

        {/* 12. Testimonials: Client Endorsements Clearly Marked */}
        <Testimonials />

        {/* 13. FAQ: 7 Clean Accordions Covering All Client Inquiries */}
        <FAQ />

        {/* 14. Dramatic CTA: Full-Width Black Statement */}
        <CTA onStartProject={() => handleOpenInquiry()} />

        {/* 15. Contact Section: Partner Access, Phone, Map & Form */}
        <Contact initialService={inquiryService} />
      </main>

      {/* 16. Footer: Monumental Watermark Branding & Clean Directory */}
      <Footer onOpenPrivacy={() => setPrivacyModalOpen(true)} />

      {/* Floating Fast Dial Access for WhatsApp and Phone */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          id="floating-whatsapp-btn"
          href={AGENCY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp chat with partner"
          className="group flex items-center gap-2 px-4 py-2.5 bg-[#111111] text-white hover:bg-[#1a1a1a] border border-[#D4A72C] shadow-lg text-xs font-mono font-bold tracking-wider transition-all duration-300 hover:scale-105"
        >
          <MessageSquare className="w-4 h-4 text-[#D4A72C]" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
        <a
          id="floating-phone-btn"
          href={`tel:${AGENCY_INFO.directPhone}`}
          aria-label="Direct phone call with partner"
          className="p-2.5 bg-[#D4A72C] text-[#111111] hover:bg-[#E8C45A] shadow-lg border border-[#D4A72C] transition-all duration-300 hover:scale-105"
        >
          <Phone className="w-4 h-4 text-[#111111]" />
        </a>
      </div>

      {/* Interactive Modals */}
      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialService={inquiryService}
      />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onInquire={(serviceTitle) => {
          setSelectedCaseStudy(null);
          handleOpenInquiry(serviceTitle);
        }}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={(serviceTitle) => {
          setSelectedService(null);
          handleOpenInquiry(serviceTitle);
        }}
      />

      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
