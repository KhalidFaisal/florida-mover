// Site-wide constants and data
export const SITE_CONFIG = {
  companyName: 'Neat & Complete Relocation Services',
  phone: '(631) 885-0800',
  phoneRaw: '6318850800',
  secondaryPhone: '(631) 275-5908',
  secondaryPhoneRaw: '6312755908',
  email: 'neatncompleteFL@gmail.com',
  licenseNumber: 'FL Mover Reg #IM0000',
  tagline: "South Florida's Trusted Local Moving Company",
  domain: 'https://neatandcompleterelocation.com',
};

export const NAV_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Service Areas', href: '/#service-areas' },
  { label: 'FAQ', href: '/#faq' },
];

export const TRUST_BADGES = [
  { icon: 'Star', label: '5-Star Rated Service', emoji: '⭐' },
  { icon: 'ShieldCheck', label: 'Licensed & Insured', emoji: '✅' },
  { icon: 'Truck', label: 'Professional Moving Team', emoji: '🚚' },
  { icon: 'MapPin', label: 'Serving South Florida', emoji: '📍' },
];

export const WHY_TRUST_US = [
  {
    icon: 'ShieldCheck',
    title: 'Licensed & Insured',
    description: 'Fully licensed Florida movers with comprehensive insurance coverage for your peace of mind.',
  },
  {
    icon: 'DollarSign',
    title: 'Transparent Pricing',
    description: 'Upfront, honest quotes with no surprises. What we quote is what you pay.',
  },
  {
    icon: 'Ban',
    title: 'No Hidden Fees',
    description: 'Zero hidden charges, fuel surcharges, or surprise costs on moving day.',
  },
  {
    icon: 'Users',
    title: 'Experienced Movers',
    description: 'Our trained, professional crew handles your belongings with the care they deserve.',
  },
  {
    icon: 'Home',
    title: 'Locally Owned',
    description: 'Proud South Florida locals who understand the area and care about our community.',
  },
  {
    icon: 'Wrench',
    title: 'Professional Equipment',
    description: 'Top-of-the-line trucks, padding, dollies, and packing materials for a flawless move.',
  },
  {
    icon: 'Clock',
    title: 'Same-Day Availability',
    description: 'Need to move fast? We offer same-day and next-day moving services across South Florida.',
  },
];

export const SERVICES = [
  {
    icon: 'Home',
    title: 'Local Moving',
    description: 'Expert local moves across South Florida. From Port St. Lucie to Miami, we handle every detail.',
    slug: 'local-moving',
  },
  {
    icon: 'MapPin',
    title: 'Long Distance Moving',
    description: 'Reliable long-distance moving services throughout Florida and beyond with careful planning.',
    slug: 'long-distance-moving',
  },
  {
    icon: 'Building2',
    title: 'Apartment Moving',
    description: 'Specialized apartment moves with elevator coordination, tight hallways, and parking logistics.',
    slug: 'apartment-moving',
  },
  {
    icon: 'House',
    title: 'Residential Moving',
    description: 'Full-service home moves with packing, loading, transport, and setup at your new place.',
    slug: 'residential-moving',
  },
  {
    icon: 'Briefcase',
    title: 'Commercial Moving',
    description: 'Minimize downtime with professional office and business moves, including IT equipment.',
    slug: 'commercial-moving',
  },
  {
    icon: 'Package',
    title: 'Packing Services',
    description: 'Professional packing with premium materials to protect your valuables during transit.',
    slug: 'packing-services',
  },
  {
    icon: 'ArrowUpDown',
    title: 'Loading & Unloading',
    description: 'Need muscle? Our crew handles all loading and unloading with care and efficiency.',
    slug: 'loading-unloading',
  },
  {
    icon: 'Sofa',
    title: 'Furniture Moving',
    description: 'Heavy furniture? No problem. Expert disassembly, safe transport, and reassembly included.',
    slug: 'furniture-moving',
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Request a Quote',
    description: 'Fill out our simple form or give us a call. We\'ll provide a free, no-obligation estimate.',
    icon: 'ClipboardList',
  },
  {
    step: 2,
    title: 'Schedule Your Move',
    description: 'Pick a date that works for you. We offer flexible scheduling including weekends and same-day moves.',
    icon: 'Calendar',
  },
  {
    step: 3,
    title: 'We Handle the Heavy Lifting',
    description: 'Sit back and relax while our professional crew takes care of everything from start to finish.',
    icon: 'PackageCheck',
  },
];

export const REVIEWS = [
  {
    name: 'Sarah M.',
    location: 'Boca Raton, FL',
    rating: 5,
    text: 'Absolutely incredible experience! The crew showed up on time, wrapped everything perfectly, and had us moved in by lunch. Best movers we\'ve ever used.',
    date: '2 weeks ago',
  },
  {
    name: 'James T.',
    location: 'West Palm Beach, FL',
    rating: 5,
    text: 'Professional from start to finish. The quote was accurate, no hidden fees, and the guys were super careful with our furniture. Highly recommend!',
    date: '1 month ago',
  },
  {
    name: 'Maria G.',
    location: 'Fort Lauderdale, FL',
    rating: 5,
    text: 'Moved my elderly mother from her condo and they treated her belongings like their own. Patient, kind, and efficient. Five stars all the way.',
    date: '3 weeks ago',
  },
  {
    name: 'David R.',
    location: 'Port St. Lucie, FL',
    rating: 5,
    text: 'Same-day move and they nailed it. Quick, organized, nothing broken. The price was exactly what they quoted. Will use again for sure.',
    date: '1 week ago',
  },
];

export const COMPARISON_FEATURES = [
  { feature: 'Licensed & Insured', us: true, competitors: 'Sometimes' },
  { feature: 'No Hidden Fees', us: true, competitors: false },
  { feature: 'Transparent Pricing', us: true, competitors: false },
  { feature: 'Real Verified Reviews', us: true, competitors: false },
  { feature: 'Locally Owned', us: true, competitors: false },
  { feature: 'Same-Day Availability', us: true, competitors: false },
  { feature: 'Professional Equipment', us: true, competitors: 'Sometimes' },
];

export const SERVICE_AREAS = [
  { name: 'Fort Pierce', slug: 'fort-pierce', lat: 27.4467, lng: -80.3256 },
  { name: 'Port St. Lucie', slug: 'port-st-lucie', lat: 27.2730, lng: -80.3582 },
  { name: 'Stuart', slug: 'stuart', lat: 27.1975, lng: -80.2528 },
  { name: 'Jupiter', slug: 'jupiter', lat: 26.9342, lng: -80.0942 },
  { name: 'Palm Beach Gardens', slug: 'palm-beach-gardens', lat: 26.8234, lng: -80.1387 },
  { name: 'West Palm Beach', slug: 'west-palm-beach', lat: 26.7153, lng: -80.0534 },
  { name: 'Boynton Beach', slug: 'boynton-beach', lat: 26.5254, lng: -80.0662 },
  { name: 'Delray Beach', slug: 'delray-beach', lat: 26.4615, lng: -80.0728 },
  { name: 'Boca Raton', slug: 'boca-raton', lat: 26.3587, lng: -80.0831 },
  { name: 'Deerfield Beach', slug: 'deerfield-beach', lat: 26.3184, lng: -80.0998 },
  { name: 'Pompano Beach', slug: 'pompano-beach', lat: 26.2379, lng: -80.1248 },
  { name: 'Fort Lauderdale', slug: 'fort-lauderdale', lat: 26.1224, lng: -80.1373 },
  { name: 'Hollywood', slug: 'hollywood', lat: 26.0112, lng: -80.1495 },
  { name: 'Miami', slug: 'miami', lat: 25.7617, lng: -80.1918 },
];

export const FAQS = [
  {
    question: 'How much does moving cost in South Florida?',
    answer: 'Moving costs depend on factors like distance, home size, and services needed. Local moves in South Florida typically start at $300-$500 for a studio or one-bedroom apartment. Larger homes range from $800-$2,500+. We provide free, transparent quotes with no hidden fees — what we quote is what you pay.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely! We are fully licensed with the State of Florida and carry comprehensive insurance coverage. This means your belongings are protected throughout the entire moving process. We\'re happy to provide proof of insurance upon request.',
  },
  {
    question: 'Do you offer packing services?',
    answer: 'Yes! We offer full packing services using premium materials including double-walled boxes, bubble wrap, packing paper, and custom crating for fragile items. You can choose full-service packing, partial packing, or just the move — whatever works best for your budget.',
  },
  {
    question: 'How far in advance should I book my move?',
    answer: 'We recommend booking 2-4 weeks in advance for the best availability, especially during peak moving season (May-September). However, we also offer same-day and next-day moves when available. Give us a call and we\'ll work with your timeline.',
  },
  {
    question: 'Do you offer same-day moving services?',
    answer: 'Yes! We understand that sometimes you need to move quickly. We offer same-day and next-day moving services throughout South Florida, subject to crew availability. Call us directly for immediate scheduling.',
  },
];

export const HOME_SIZES = [
  'Studio',
  '1 Bedroom',
  '2 Bedrooms',
  '3 Bedrooms',
  '4 Bedrooms',
  '5+ Bedrooms',
  'Office / Commercial',
];
