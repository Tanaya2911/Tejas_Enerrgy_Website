import { motion } from 'framer-motion';
import { ShieldCheck, Sun, Zap, BadgeCheck, Award, Clock } from 'lucide-react';
import { SectionHeading, fadeInUp, staggerContainer } from '@/components/ui/Section';

const WARRANTY_CARDS = [
  {
    icon: Sun,
    years: '25',
    title: 'Years Solar Panel Warranty',
    desc: 'Performance guarantee on all Tier-1 solar panels — guaranteed output for decades.',
    gradient: 'from-primary-500 to-primary-700',
    badge: 'Performance Guarantee',
  },
  {
    icon: Zap,
    years: '5',
    title: 'Years Inverter Warranty',
    desc: 'Full manufacturer warranty on premium inverters from GoodWe, Sungrow, and Growatt.',
    gradient: 'from-accent-400 to-accent-600',
    badge: 'Manufacturer Warranty',
  },
];

const TRUST_BADGES = [
  { icon: BadgeCheck, title: 'MNRE Approved', desc: 'Ministry of New and Renewable Energy registered vendor.' },
  { icon: Award, title: 'Maharashtra Govt Approved', desc: 'Officially approved solar installation vendor in Maharashtra.' },
  { icon: ShieldCheck, title: 'PM Surya Ghar Authorized', desc: 'Authorized vendor under PM Surya Ghar Yojana subsidy scheme.' },
];

export default function Warranty() {
  return (
    <section id="warranty" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Warranty & Trust"
          title={<>Warranty & <span className="text-primary-500">Government Recognition</span></>}
          subtitle="Every installation is backed by industry-leading warranties and official government approvals, giving you complete peace of mind."
        />

        {/* Warranty cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {WARRANTY_CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="card-surface group relative overflow-hidden p-8 hover:border-primary-500/40 hover:shadow-premium"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Warranty badge */}
              <div className="flex items-start justify-between">
                <div className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-glow transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <card.icon className="h-8 w-8" />
                </div>
                <div className="relative">
                  <div className="grid h-20 w-20 place-items-center rounded-full border-2 border-dashed border-primary-500/40">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-500">{card.years}</div>
                      <div className="text-[10px] font-semibold uppercase text-slate-500">Years</div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{card.desc}</p>

              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400">
                <BadgeCheck className="h-4 w-4" />
                {card.badge}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Government recognition trust badges */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-5 sm:grid-cols-3"
        >
          {TRUST_BADGES.map((badge) => (
            <motion.div
              key={badge.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="glass group flex items-center gap-4 rounded-2xl p-5"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-700 text-white shadow-glow-blue transition-transform group-hover:scale-110">
                <badge.icon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{badge.title}</h4>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust strip */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-400/10 p-6 text-center"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <Clock className="h-5 w-5 text-primary-500" />
            100+ Successful Installations
          </div>
          <div className="hidden h-4 w-px bg-slate-300 dark:bg-slate-700 sm:block" />
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <ShieldCheck className="h-5 w-5 text-secondary-500" />
            Government Approved Vendor
          </div>
          <div className="hidden h-4 w-px bg-slate-300 dark:bg-slate-700 sm:block" />
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <Award className="h-5 w-5 text-accent-500" />
            Premium Quality Components
          </div>
        </motion.div>
      </div>
    </section>
  );
}
