import { ServiceItem, CaseStudyItem, ProcessStep, WhyPoint } from '../types';

export const AGENCY_INFO = {
  name: 'DREAGENCY',
  tagline: 'WE BUILD BRANDS, YOU GROW',
  businessPillars: 'Digital Marketing • Creative Strategy • Brand Growth • Performance',
  location: {
    addressLine1: 'E-530, 3rd Floor,',
    landmark: 'Near Ramphal Chowk,',
    sector: 'Dwarka Sector 7,',
    cityPin: 'Delhi – 110075',
    fullFormatted: 'E-530, 3rd Floor, Near Ramphal Chowk, Dwarka Sector 7, Delhi – 110075',
    coordinates: '28.5835° N, 77.0673° E',
    googleMapsUrl: 'https://maps.google.com/?q=Ramphal+Chowk+Dwarka+Sector+7+Delhi+110075',
  },
  contacts: [
    { name: 'Javed', role: 'Partner & Brand Strategist' },
    { name: 'Shubham', phone: '9211040071', formattedPhone: '+91 9211040071', role: 'Partner & Performance Lead' }
  ],
  directPhone: '+919211040071',
  rawPhone: '9211040071',
  email: 'contact@dreagency.com',
  whatsappUrl: 'https://wa.me/919211040071?text=Hello%20DREAGENCY%20team,%20I%20would%20like%20to%20discuss%20a%20new%20project.',
  foundedYear: 2026,
};

export const TRUST_MARKS = [
  { name: 'VALOIR STUDIO', sector: 'Luxury Lifestyle' },
  { name: 'AETHEL CAPITAL', sector: 'Venture Group' },
  { name: 'NORDIC ARCHIVE', sector: 'Editorial Design' },
  { name: 'KROMIA LABS', sector: 'Technology Platform' },
  { name: 'VERTEX DYNAMICS', sector: 'B2B Enterprise' },
  { name: 'AURORA LIVING', sector: 'Premium Consumer' },
  { name: 'SYNTHESIS MEDIA', sector: 'Digital Publishing' },
  { name: 'SOLIS GROUP', sector: 'Omnichannel Retail' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'digital-marketing',
    number: '01',
    title: 'DIGITAL MARKETING',
    category: 'Omnichannel Distribution',
    shortDescription: 'High-impact campaigns architected to cut through digital noise and command audience attention.',
    detailedDescription: 'We craft comprehensive digital marketing ecosystems that combine organic resonance with hyper-targeted paid amplification. From community building to full-funnel activation, we ensure your message reaches qualified decision-makers.',
    capabilities: [
      'Social Media Marketing',
      'Paid Advertising',
      'Content Marketing',
      'Campaign Strategy'
    ],
    deliverables: [
      'Omnichannel Campaign Architecture',
      'High-Conversion Ad Creatives',
      'Editorial Social Content Calendar',
      'Real-Time Channel Optimization'
    ],
    metricFocus: 'Attention, Engagement & Customer Acquisition'
  },
  {
    id: 'creative-strategy',
    number: '02',
    title: 'CREATIVE STRATEGY',
    category: 'Brand Elevation',
    shortDescription: 'Unforgettable visual identities and conceptual creative systems that anchor brands in customer memory.',
    detailedDescription: 'Aesthetic excellence paired with strategic intentionality. We define your brand’s visual vocabulary, tone of voice, and narrative framework to turn passive viewers into fiercely loyal advocates.',
    capabilities: [
      'Brand Identity',
      'Creative Direction',
      'Content Design',
      'Campaign Concepts'
    ],
    deliverables: [
      'Comprehensive Brand Style Guides',
      'Editorial Asset Libraries & Motion Design',
      'High-Impact Campaign Visuals',
      'Omnichannel Design Systems'
    ],
    metricFocus: 'Brand Recall, Differentiation & Cultural Resonance'
  },
  {
    id: 'brand-growth',
    number: '03',
    title: 'BRAND GROWTH',
    category: 'Market Dominance',
    shortDescription: 'Market positioning and structural expansion models engineered for enduring compounding authority.',
    detailedDescription: 'Sustainable growth requires more than quick spikes—it demands a defensible market position. We clarify your unique value proposition, calibrate go-to-market strategies, and structure acquisition flywheels.',
    capabilities: [
      'Brand Positioning',
      'Digital Strategy',
      'Customer Acquisition',
      'Growth Planning'
    ],
    deliverables: [
      'Competitive Landscape Architecture',
      'Market Opportunity Roadmap',
      'Customer Lifecycle Funnel Engineering',
      'Retention & Expansion Playbooks'
    ],
    metricFocus: 'Market Share, Customer Lifetime Value & Authority'
  },
  {
    id: 'performance',
    number: '04',
    title: 'PERFORMANCE',
    category: 'Conversion Engineering',
    shortDescription: 'Rigorous algorithmic paid media management and conversion rate optimization backed by clear data.',
    detailedDescription: 'Every marketing rupee must be held accountable. We engineer data-backed acquisition funnels across Meta and Google, pairing algorithmic bidding with aggressive landing page conversion testing.',
    capabilities: [
      'Meta Ads',
      'Google Ads',
      'Conversion Optimization',
      'Analytics & Reporting'
    ],
    deliverables: [
      'Granular Meta & Google Campaign Structures',
      'Full-Funnel Pixel & Attribution Tracking',
      'Iterative Landing Page CRO Sprints',
      'Transparent Executive Performance Dashboards'
    ],
    metricFocus: 'ROAS, Cost-Per-Acquisition & Net Revenue'
  }
];

export const PORTFOLIO_DATA: CaseStudyItem[] = [
  {
    id: 'project-01',
    projectNumber: 'PROJECT 01',
    title: 'Brand Growth Campaign',
    category: 'Strategic Expansion & Market Launch',
    clientType: 'Direct-to-Consumer & Retail',
    shortDescription: 'An omnichannel repositioning and full-scale market entry campaign targeting modern consumers with cohesive storytelling.',
    challenge: 'The brand suffered from fragmented visual touchpoints, high acquisition costs, and weak customer loyalty across saturated digital channels.',
    solution: 'Engineered a unified brand design language, launched high-production narrative video assets, and restructured the digital funnel from awareness to repeat purchase.',
    deliverables: [
      'Brand Strategy & Narrative Architecture',
      'Multi-Platform Video & Editorial Assets',
      'Audience Segmentation & Acquisition Plan',
      'Launch Event & Influencer Collaboration'
    ],
    visualAccent: {
      badge: 'Brand Repositioning',
      metrics: [
        { label: 'Strategic Reach', value: 'National' },
        { label: 'Brand Recall', value: 'High' }
      ],
      theme: 'dark'
    }
  },
  {
    id: 'project-02',
    projectNumber: 'PROJECT 02',
    title: 'Performance Marketing',
    category: 'Customer Acquisition & Algorithmic Media',
    clientType: 'High-Growth Digital Commerce',
    shortDescription: 'Data-driven paid media execution across Meta & Google Ads designed to scale monthly recurring revenue efficiently.',
    challenge: 'Previous ad efforts were burning budget on non-converting clicks with no attribution tracking and stagnant creative fatigue.',
    solution: 'Built a systematic creative testing pipeline with 20+ weekly hook variations, combined with deep audience exclusions and server-side tracking.',
    deliverables: [
      'Full-Funnel Meta & Google Campaign Overhaul',
      'Dynamic Creative Testing Engine',
      'Conversion Rate Optimization (CRO) Sprint',
      'Custom Multi-Touch Attribution Dashboard'
    ],
    visualAccent: {
      badge: 'Paid Acquisition',
      metrics: [
        { label: 'Media Channels', value: 'Meta & Google' },
        { label: 'Tracking Fidelity', value: 'CAPI 100%' }
      ],
      theme: 'gold'
    }
  },
  {
    id: 'project-03',
    projectNumber: 'PROJECT 03',
    title: 'Brand Identity & Creative',
    category: 'Visual Systems & Creative Direction',
    clientType: 'Premium Lifestyle & Hospitality',
    shortDescription: 'A bespoke identity overhaul featuring architectural typography, custom editorial palettes, and high-end digital touchpoints.',
    challenge: 'The client possessed a premium physical experience but an outdated digital presence that failed to convey their prestige.',
    solution: 'Crafted a timeless identity system utilizing metallic accents, monochromatic contrast, and an elevated digital design system.',
    deliverables: [
      'Complete Identity Guidelines & Logomark Suite',
      'Editorial Asset Library & Typography System',
      'Packaging & Digital Collateral Framework',
      'Responsive Showcase Interface'
    ],
    visualAccent: {
      badge: 'Identity System',
      metrics: [
        { label: 'Design System', value: 'Full Suite' },
        { label: 'Asset Library', value: '150+ Elements' }
      ],
      theme: 'light'
    }
  },
  {
    id: 'project-04',
    projectNumber: 'PROJECT 04',
    title: 'Digital Growth Strategy',
    category: 'Go-To-Market & Omnichannel Scale',
    clientType: 'B2B Enterprise & Professional Services',
    shortDescription: 'Holistic growth blueprint combining thought leadership, outbound positioning, and high-converting inbound pipelines.',
    challenge: 'Long sales cycles and an opaque digital footprint resulted in inconsistent deal flow and low qualification rates.',
    solution: 'Designed an authoritative thought leadership framework, whitepaper distribution strategy, and calibrated executive lead magnets.',
    deliverables: [
      'Comprehensive Market Mapping & GTM Strategy',
      'Inbound Lead Capture & Nurture Architecture',
      'Executive Brand Elevation Playbook',
      'Analytics & Pipeline Attribution Setup'
    ],
    visualAccent: {
      badge: 'GTM Strategy',
      metrics: [
        { label: 'Target Audience', value: 'C-Suite' },
        { label: 'Funnel Integrity', value: 'End-to-End' }
      ],
      theme: 'dark'
    }
  }
];

export const WHY_DREAGENCY_POINTS: WhyPoint[] = [
  {
    id: 'strategy-first',
    title: 'STRATEGY FIRST',
    description: 'Every campaign starts with a clear business objective. We do not throw tactics at walls—we diagnose your market before deploying capital.',
    iconName: 'Compass',
    metricLabel: 'Framework',
    metricValue: '100% Intentional'
  },
  {
    id: 'creative-connects',
    title: 'CREATIVE THAT CONNECTS',
    description: 'Ideas designed to capture attention and build brand memory. We fuse aesthetic elegance with psychological triggers that make brands memorable.',
    iconName: 'Sparkles',
    metricLabel: 'Design Standard',
    metricValue: 'Editorial Grade'
  },
  {
    id: 'performance-driven',
    title: 'PERFORMANCE DRIVEN',
    description: 'Marketing decisions supported by measurable data. We audit, measure, and optimize every funnel stage with relentless commercial rigor.',
    iconName: 'TrendingUp',
    metricLabel: 'Attribution',
    metricValue: 'Granular Data'
  },
  {
    id: 'built-for-growth',
    title: 'BUILT FOR GROWTH',
    description: 'Everything is designed around sustainable business growth. We build scalable flywheels that compound in value rather than short-lived flashes.',
    iconName: 'Layers',
    metricLabel: 'Longevity',
    metricValue: 'Compounding'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    phase: 'Immersion & Commercial Audit',
    description: 'We dissect your market landscape, competitive vectors, historical campaign data, and target buyer psyche to identify untapped growth levers.',
    keyOutputs: ['Market Opportunity Matrix', 'Audience Segmentation', 'Competitive Benchmark']
  },
  {
    step: '02',
    title: 'STRATEGIZE',
    phase: 'Architecture & Positioning',
    description: 'We formulate the overarching commercial blueprint, budget allocation, messaging hierarchy, and media channel matrix tailored to your objectives.',
    keyOutputs: ['Omnichannel Growth Blueprint', 'Offer & Messaging Strategy', 'Media Channel Mix']
  },
  {
    step: '03',
    title: 'CREATE',
    phase: 'Production & Creative Direction',
    description: 'Our design and copy team brings the strategy to life with bespoke visual systems, high-converting ad variants, and compelling brand storytelling.',
    keyOutputs: ['Ad Creative Suites', 'Editorial Visual Systems', 'Landing Page Wireframes']
  },
  {
    step: '04',
    title: 'LAUNCH',
    phase: 'Deployment & Attribution',
    description: 'We deploy campaigns with surgical precision, ensuring full server-side tracking, conversion pixels, and clean budget pacing from minute one.',
    keyOutputs: ['Multi-Channel Campaign Activation', 'Tracking & Attribution Setup', 'Pacing Calibration']
  },
  {
    step: '05',
    title: 'OPTIMIZE',
    phase: 'Scale & Compounding Returns',
    description: 'Continuous algorithmic tuning, creative iteration, and conversion rate optimization to scale winning campaigns and eliminate wasted spend.',
    keyOutputs: ['Weekly Performance Audits', 'Creative Refresh Cadence', 'Expansion Flywheel']
  }
];

export const PRICING_PLANS: import('../types').PricingPlan[] = [
  {
    id: 'basic',
    planNumber: 'PLAN 01',
    name: 'BASIC',
    price: '₹4,999',
    period: 'MONTHLY',
    description: 'Standard Package for personal use',
    features: [
      '5 Creative Posts',
      'Basic Meta Ads Setup',
      '1 Ad Campaign',
      'Audience Targeting',
      'WhatsApp Integration',
      'Monthly Report'
    ],
    ctaText: 'GET STARTED',
    packageOptionValue: 'Basic – ₹4,999/month'
  },
  {
    id: 'premium',
    planNumber: 'PLAN 02',
    name: 'PREMIUM',
    price: '₹9,999',
    period: 'MONTHLY',
    badge: 'MOST POPULAR',
    isPopular: true,
    description: 'Premium Package for Small Business',
    features: [
      '12 Premium Creatives',
      'Facebook + Instagram Ads',
      'Product Catalog Setup',
      'Lead Generation Campaign',
      'Basic Video Editing',
      'Daily Optimization',
      'Monthly Strategy Call'
    ],
    ctaText: 'GET STARTED',
    packageOptionValue: 'Premium – ₹9,999/month'
  },
  {
    id: 'enterprise',
    planNumber: 'PLAN 03',
    name: 'ENTERPRISE',
    price: '₹21,999',
    period: 'MONTHLY',
    description: 'Package for Enterprise Company',
    features: [
      '20 High Quality Creatives',
      'Advanced Meta Ads Scaling',
      'Retargeting Ads',
      'Conversion Tracking Setup',
      'Website Banner Design',
      'Product Video Ads',
      'Priority Support',
      'Weekly Performance Report'
    ],
    ctaText: 'GET STARTED',
    packageOptionValue: 'Enterprise – ₹21,999/month'
  },
  {
    id: 'enterprise-plus',
    planNumber: 'PLAN 04',
    name: 'ENTERPRISE PLUS',
    price: '₹34,999',
    period: 'MONTHLY',
    description: 'Package for Enterprise Company',
    features: [
      'Unlimited Creatives',
      'Full Funnel Ads Strategy',
      'Advanced Scaling & Testing',
      'Shopify / WordPress Support',
      'Landing Page Design',
      'UGC Video Editing',
      'Dedicated Manager',
      'Daily Reporting'
    ],
    ctaText: 'GET STARTED',
    packageOptionValue: 'Enterprise Plus – ₹34,999/month'
  }
];

