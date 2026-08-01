import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  ClipboardCheck,
  MessageCircle,
  Phone,
  Sparkles,
  BadgeCheck,
  FileText,
  CreditCard,
  PanelsTopLeft,
  Handshake,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/components/ui/Section';
import { useCountUp, useInView } from '@/lib/hooks';
import Logo from '@/components/Logo';

interface HeroCounterProps {
  value: number;
  suffix: string;
  label: string;
  icon: typeof BadgeCheck;
}

function HeroCounter({ value, suffix, label, icon: Icon }: HeroCounterProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const count = useCountUp(value, 2000, inView);
  const display = suffix.includes('yrs')
    ? `${Math.round(count)}+ yrs`
    : suffix === 'K'
      ? `₹${Math.round(count)}K`
      : `${Math.round(count)}${suffix}`;

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="glass flex items-center gap-3 rounded-xl px-4 py-3"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-500/15 text-primary-600 dark:text-primary-400">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-lg font-bold text-slate-900 dark:text-white">{display}</div>
        <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">{label}</div>
      </div>
    </motion.div>
  );
}

const HERO_STATS = [
  { value: 100, suffix: '+', label: 'Projects Completed', icon: BadgeCheck },
  { value: 78, suffix: 'K', label: 'Government Subsidy', icon: FileText },
  { value: 100, suffix: '%', label: 'Bank Loan Available', icon: CreditCard },
  { value: 25, suffix: '+ yrs', label: 'Premium Components', icon: PanelsTopLeft },
  { value: 100, suffix: '%', label: 'Trusted Installation', icon: Handshake },
  { value: 5, suffix: ' yrs', label: 'Workmanship Warranty', icon: ShieldCheck },
];

const HERO_IMAGE =
  'https://images.pexels.com/photos/6729427/pexels-photo-6729427.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax on the background image
  const bgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const overlayY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  // Subtle light sweep animation
  const [sweep, setSweep] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setSweep(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" ref={bgRef} className="relative flex min-h-screen flex-col overflow-hidden pt-20">
      {/* Parallax full-width real photo background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20 h-[120%]">
        <img
          src={HERO_IMAGE}
          alt="Modern Indian home with rooftop solar panels at sunrise"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* Cinematic gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/55 to-slate-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/30 to-transparent" />
        {/* Sunlight glow accents */}
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent-400/25 blur-3xl" />
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-primary-500/15 blur-3xl" />
        {/* Elegant light sweep */}
        {sweep && (
          <motion.div
            initial={{ x: '-120%' }}
            animate={{ x: '120%' }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
            className="absolute inset-y-0 -z-10 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        )}
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />

      {/* Main content */}
      <motion.div
        style={{ y: overlayY }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8"
      >
        {/* Logo + brand badge */}
        <motion.div variants={fadeInUp} className="mb-6 flex items-center justify-center gap-3">
          <Logo size={56} />
          <span className="text-3xl font-bold tracking-tight text-white">
            Tejas<span className="text-accent-400"> Enerrgy</span>
          </span>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-white"
        >
          <Sparkles className="h-4 w-4 text-accent-400" />
          Trusted Solar Installation Experts in Maharashtra
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Power Your Future with <span className="text-gradient">Solar Energy</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-200 drop-shadow sm:text-base lg:text-lg"
        >
          Trusted Solar Installation Experts | 100+ Successful Installations | Government Subsidy
          Available | Bank Loan Facility | Premium Quality Components
        </motion.p>

        {/* CTA buttons — three buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:justify-center"
        >
          <button onClick={() => scrollTo('#contact')} className="btn-primary w-full sm:w-auto">
            <ClipboardCheck className="h-5 w-5" />
            Get Free Site Survey
          </button>
          <a
            href={`https://wa.me/${COMPANY.phones[0]?.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] px-7 py-3.5 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Now
          </a>
          <a
            href={`tel:${COMPANY.phones[0]?.number.replace(/\s/g, '')}`}
            className="btn-accent w-full sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeInUp}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-300 sm:text-sm"
        >
          <div className="flex items-center gap-1.5">
            <ArrowRight className="h-3.5 w-3.5 text-accent-400" />
            Government Subsidy Available
          </div>
          <div className="flex items-center gap-1.5">
            <ArrowRight className="h-3.5 w-3.5 text-primary-400" />
            Bank Loan Facility
          </div>
          <div className="flex items-center gap-1.5">
            <ArrowRight className="h-3.5 w-3.5 text-accent-400" />
            Premium Quality Components
          </div>
        </motion.div>
      </motion.div>

      {/* Animated counters strip */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto -mb-8 w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-3 rounded-2xl glass-strong p-4 sm:grid-cols-3 lg:grid-cols-6">
          {HERO_STATS.map((stat) => (
            <HeroCounter key={stat.label} {...stat} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
