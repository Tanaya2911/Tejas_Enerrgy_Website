import {
  Home,
  Building2,
  Wrench,
  ShieldCheck,
  Repeat2,
  ClipboardList,
  BadgeCheck,
  Handshake,
  Sun,
  Zap,
  PanelsTopLeft,
  Wallet,
  Clock,
  FileText,
  CreditCard,
  type LucideIcon,
} from 'lucide-react';

export const COMPANY = {
  name: 'Tejas Enerrgy',
  tagline: 'Power Your Future with Solar Energy',
  phone: '+91 77450 87595',
  phones: [
    { number: '+91 77450 87595', person: 'Omkar Chivate', whatsapp: '917745087595' },
    { number: '+91 94227 54039', person: 'Sandeep Rajmane', whatsapp: '919422754039' },
  ],
  whatsapp: '917745087595',
  email: 'tejasenerrgy@gmail.com',
  address: 'Nrusinhawadi - 416104, Tal. Shirol, District Kolhapur, Maharashtra, India',
  hours: 'Monday – Saturday, 9:00 AM – 6:00 PM',
  mapsQuery: 'Nrusinhawadi, Kolhapur, Maharashtra',
};

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Home,
    title: 'Residential Solar Installation',
    description:
      'Premium rooftop solar systems designed for homes, villas, apartments, and bungalows — cutting your electricity bills while boosting property value.',
    features: ['1–10 kW systems', 'Homes, villas, apartments & bungalows', 'Sleek, low-profile design'],
  },
  {
    icon: Home,
    title: 'Home Rooftop Solar Solutions',
    description:
      'Custom-designed solar installations for every home type. Our expert team ensures safe installation, maximum efficiency, and long-term savings.',
    features: ['1–10 kW systems', 'Free site survey & design', 'Subsidy & loan assistance'],
  },
  {
    icon: Building2,
    title: 'Commercial Solar Solutions',
    description:
      'Cut operating costs for shops, offices, schools, hospitals, hotels, and commercial buildings with high-efficiency solar arrays.',
    features: ['5–100 kW systems', 'Net metering ready', 'ROI in 3–4 years'],
  },
  {
    icon: Wrench,
    title: 'Solar Maintenance & Repair',
    description:
      'Keep your system at peak output with professional cleaning, diagnostics, and component repairs.',
    features: ['Panel cleaning', 'Inverter diagnostics', 'Performance audit'],
  },
  {
    icon: ShieldCheck,
    title: 'Annual Maintenance Contracts',
    description:
      'Worry-free ownership with scheduled servicing, priority support, and guaranteed response times.',
    features: ['Scheduled servicing', 'Priority support', 'Performance guarantee'],
  },
  {
    icon: Repeat2,
    title: 'Net Metering Assistance',
    description:
      'We handle the complete net-metering paperwork and approvals so you earn credits on excess power.',
    features: ['Application & approval', 'DISCOM coordination', 'Bi-directional meter setup'],
  },
  {
    icon: ClipboardList,
    title: 'Solar Consultation & Site Survey',
    description:
      'Free expert assessment of your site’s solar potential, shading analysis, and custom system sizing.',
    features: ['Free site survey', 'Shading analysis', 'Custom system design'],
  },
  {
    icon: Zap,
    title: 'Solar Loan & Subsidy Assistance',
    description:
      'We handle government subsidy applications and arrange easy bank financing so going solar is affordable.',
    features: ['Subsidy up to ₹78,000', 'Low EMI bank loans', 'Complete documentation'],
  },
];

export interface WhyChoose {
  icon: LucideIcon;
  title: string;
}

export const WHY_CHOOSE: WhyChoose[] = [
  { icon: BadgeCheck, title: '100+ Successful Installations' },
  { icon: Handshake, title: 'Trusted Solar Installation Company' },
  { icon: FileText, title: 'Government Subsidy Assistance' },
  { icon: CreditCard, title: 'Easy Bank Loan Facility' },
  { icon: PanelsTopLeft, title: 'High-Quality Solar Panels' },
  { icon: Zap, title: 'Premium Inverters & Components' },
  { icon: Wrench, title: 'Professional Installation Team' },
  { icon: Wallet, title: 'Affordable Pricing' },
  { icon: Clock, title: 'Fast & Reliable Service' },
  { icon: ShieldCheck, title: 'Excellent After-Sales Support' },
  { icon: Repeat2, title: 'Long Product Warranty' },
  { icon: BadgeCheck, title: 'Customer Satisfaction Guaranteed' },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export const STATS: Stat[] = [
  { value: 100, suffix: '+', label: 'Projects Completed', icon: BadgeCheck },
  { value: 78, suffix: 'K', label: 'Government Subsidy', icon: FileText },
  { value: 100, suffix: '%', label: 'Bank Loan Available', icon: CreditCard },
  { value: 25, suffix: '+ yrs', label: 'Premium Components', icon: PanelsTopLeft },
  { value: 100, suffix: '%', label: 'Trusted Installation', icon: Handshake },
  { value: 5, suffix: ' yrs', label: 'Workmanship Warranty', icon: ShieldCheck },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const PROCESS: ProcessStep[] = [
  { step: 1, title: 'Contact Tejas Enerrgy', description: 'Reach out via call, WhatsApp, or our quote form.' },
  { step: 2, title: 'Free Site Survey', description: 'Our engineers assess your roof, shading, and solar potential.' },
  { step: 3, title: 'Customized Solar Design', description: 'We engineer a system sized to your energy needs and budget.' },
  { step: 4, title: 'Subsidy & Loan Assistance', description: 'We handle subsidy paperwork and arrange easy bank financing.' },
  { step: 5, title: 'Professional Installation', description: 'Certified crew installs premium panels and inverters safely.' },
  { step: 6, title: 'Net Metering Support', description: 'We coordinate with your DISCOM for net-metering approval.' },
  { step: 7, title: 'Testing & Commissioning', description: 'Full system testing, safety checks, and grid synchronization.' },
  { step: 8, title: 'Lifetime Customer Support', description: 'Ongoing maintenance, monitoring, and after-sales care.' },
];

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rajesh Patil',
    location: 'Kolhapur, Maharashtra',
    quote: 'Outstanding service and premium installation quality. Highly recommended!',
    rating: 5,
    initials: 'RP',
  },
  {
    name: 'Sunita Deshmukh',
    location: 'Sangli, Maharashtra',
    quote: 'The subsidy process was handled perfectly. Very professional team.',
    rating: 5,
    initials: 'SD',
  },
  {
    name: 'Amit Kulkarni',
    location: 'Kolhapur, Maharashtra',
    quote: 'Excellent workmanship, quality products, and timely installation.',
    rating: 5,
    initials: 'AK',
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: 'How much government subsidy is available?',
    answer:
      'Under the PM Surya Ghar Muft Bijli Yojana, residential rooftop solar installations receive a subsidy of up to ₹78,000 as per eligibility. Tejas Enerrgy manages the complete application on your behalf.',
  },
  {
    question: 'How many days does installation take?',
    answer:
      'A typical residential 5 kW system is installed in 2–3 days. Subsidy and net-metering approvals run in parallel and may take 2–4 weeks.',
  },
  {
    question: 'Which solar panel brands do you use?',
    answer:
      'We use premium Tier-1 monocrystalline panels from trusted brands like Waaree, Tata Power Solar, Adani Solar, Vikram Solar, Goldi Solar, and RenewSys, paired with high-efficiency inverters from Growatt, Sungrow, GoodWe, and Havells.',
  },
  {
    question: 'Do you provide maintenance services?',
    answer:
      'Yes. We offer one-time maintenance, panel cleaning, and Annual Maintenance Contracts (AMC) that include scheduled servicing, performance audits, and priority support.',
  },
  {
    question: 'Is bank loan financing available?',
    answer:
      'Yes. We partner with leading banks to offer solar loans with low EMIs, fast approval, and minimal documentation, so you can go solar with little to no upfront cost.',
  },
  {
    question: 'What warranty do you provide?',
    answer:
      'Solar panels carry a 25-year performance warranty, inverters a 5-year warranty, and our installation workmanship is guaranteed for 5 years.',
  },
  {
    question: 'How much can I save on electricity bills?',
    answer:
      'Most customers reduce their electricity bill by 80–100%, recovering the system cost in 3–5 years and enjoying near-free power for 20+ years. Use our Savings Calculator for a personalized estimate.',
  },
];

export interface GalleryItem {
  image: string;
  category: string;
  title: string;
  span: boolean;
}

export const GALLERY: GalleryItem[] = [
  {
    image: "https://5.imimg.com/data5/SELLER/Default/2023/1/ZT/JC/FA/28650970/3kw-on-grid-solar-rooftop-system.jpeg",
    category: "Residential Rooftop Solar",
    title: "3KW Solar System on Home Terrace",
    span: true,
  },
  {
    image: "https://5.imimg.com/data5/SELLER/Default/2022/2/ZA/QZ/WQ/91154066/whatsapp-image-2022-02-02-at-14-56-27-1--500x500.jpeg",
    category: "Residential Rooftop Solar",
    title: "Solar Panels on Indian Home Roof",
    span: false,
  },
  {
    image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202401/65b09ad15d89e-pradhan-mantri-suryodaya-yojana-what-is-the-cost-of-installing-rooftop-solar-panel-check-subsidy-240623703-16x9.jpg?size=1280:720",
    category: "Residential Solar",
    title: "Affordable Rooftop Solar Solution",
    span: false,
  },
  {
    image: "https://5.imimg.com/data5/SELLER/Default/2023/1/ZT/JC/FA/28650970/3kw-on-grid-solar-rooftop-system.jpeg",
    category: "Home Solar System",
    title: "Solar Installation for Home",
    span: false,
  },
  {
    image: "https://5.imimg.com/data5/SELLER/Default/2022/2/ZA/QZ/WQ/91154066/whatsapp-image-2022-02-02-at-14-56-27-1--500x500.jpeg",
    category: "Residential Rooftop Solar",
    title: "Terrace Solar Panels for Home",
    span: true,
  },
  {
    image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202401/65b09ad15d89e-pradhan-mantri-suryodaya-yojana-what-is-the-cost-of-installing-rooftop-solar-panel-check-subsidy-240623703-16x9.jpg?size=1280:720",
    category: "Residential Solar",
    title: "Solar Power for home and apartment",
    span: false,
  }
];

export const GALLERY_CATEGORIES = [
  'All',
  'Residential Rooftop Solar',
  'Residential Installation',
  'Solar Maintenance',
  'Before & After Installation',
];

export interface Brand {
  name: string;
  tagline: string;
  logo: string;
}

export const BRANDS = [
  {
    name: "Waaree",
    tagline: "Solar Panels",
    logo: "/images/brands/waaree.png",
  },
  {
    name: "Adani Solar",
    tagline: "Solar Panels",
    logo: "/images/brands/adani-solar.png",
  },
  {
    name: "Tata Power Solar",
    tagline: "Solar Panels",
    logo: "/images/brands/tata-power-solar.png",
  },
  {
    name: "Vikram Solar",
    tagline: "Solar Panels",
    logo: "/images/brands/vikram-solar.png",
  },
  {
    name: "Goldi Solar",
    tagline: "Solar Panels",
    logo: "/images/brands/goldi-Solar.png",
  },
  {
    name: "RenewSys",
    tagline: "Solar Panels",
    logo: "/images/brands/renewsys.png",
  },
  {
    name: "Loom Solar",
    tagline: "Solar Panels",
    logo: "/images/brands/loom-solar.png",
  },
  {
    name: "Growatt",
    tagline: "Inverters",
    logo: "/images/brands/growatt.png",
  },
  {
    name: "Sungrow",
    tagline: "Inverters",
    logo: "/images/brands/sungrow.png",
  },
  {
    name: "GoodWe",
    tagline: "Inverters",
    logo: "/images/brands/goodwe.png",
  },
  {
    name: "Havells",
    tagline: "Inverters",
    logo: "/images/brands/havells.png",
  },
];

export const CITIES = [
  'Kolhapur', 'Sangli', 'Pune', 'Mumbai', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur',
  'Kolhapur District', 'Sangli District', 'Satara', 'Other',
];

export interface CalcResults {
  capacity: number;
  installCost: number;
  subsidy: number;
  netCost: number;
  monthlySavings: number;
  annualSavings: number;
  paybackYears: number;
  co2Tons: number;
  lifetimeSavings: number;
}

export function calculateSavings(
  monthlyBill: number,
  propertyType: string,
  roofType: string,
): CalcResults {
  const tariff = 8;
  const monthlyUnits = monthlyBill / tariff;
  const dailyUnits = monthlyUnits / 30;
  const generationFactor = roofType === 'sloped' ? 4.2 : 4.5;
  const capacityRaw = dailyUnits / generationFactor;
  const capacity = Math.max(1, Math.round(capacityRaw * 2) / 2);

  const costPerWatt =
    propertyType === 'commercial' ? 40000 : 45000;
  const installCost = capacity * costPerWatt;

  const subsidy = propertyType === 'residential'
    ? capacity <= 3 ? 78000 : 78000 + Math.round(capacity - 3) * 7800
    : 0;

  const netCost = Math.max(0, installCost - subsidy);
  const monthlySavings = monthlyBill * 0.9;
  const annualSavings = monthlySavings * 12;
  const paybackYears = netCost / annualSavings;
  const co2Tons = capacity * 1.5 * 25;
  const lifetimeSavings = annualSavings * 25 - netCost;

  return {
    capacity,
    installCost,
    subsidy,
    netCost,
    monthlySavings,
    annualSavings,
    paybackYears,
    co2Tons,
    lifetimeSavings,
  };
}

export const PROPERTY_TYPES = ['residential', 'commercial'] as const;
export const ROOF_TYPES = ['flat', 'sloped'] as const;
