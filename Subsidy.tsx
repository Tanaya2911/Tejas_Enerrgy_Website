import { motion } from 'framer-motion';
import { FileText, CheckCircle2, TrendingDown, ArrowRight, IndianRupee, Zap } from 'lucide-react';
import { SectionHeading, fadeInUp, staggerContainer } from '@/components/ui/Section';

const SUBSIDY_POINTS = [
  'Government Subsidy up to ₹78,000 (as per eligibility)',
  'Complete documentation support by our team',
  'Net Metering Assistance — earn from surplus power',
  'Direct subsidy credit to your bank account',
  'PM Surya Ghar Yojana Authorized Vendor',
  'Hassle-free approvals with zero paperwork stress',
];

const SUBSIDY_TABLE = [
  { capacity: '1.1 kW', area: '60 sq.ft', units: '100–150', subsidy: '₹30,000', saving: '₹80,000' },
  { capacity: '2.2 kW', area: '120 sq.ft', units: '200–250', subsidy: '₹60,000', saving: '₹80,000' },
  { capacity: '3.3 kW', area: '180 sq.ft', units: '300–350', subsidy: '₹78,000', saving: '₹1,20,000' },
  { capacity: '4.4 kW', area: '240 sq.ft', units: '400–450', subsidy: '₹78,000', saving: '₹1,60,000' },
  { capacity: '5.0 kW', area: '300 sq.ft', units: '500–600', subsidy: '₹78,000', saving: '₹2,00,000' },
];

export default function Subsidy() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="subsidy" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 to-secondary-600 p-8 shadow-premium">
              {/* Animated rays */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 animate-pulse-slow bg-white" />
                <div className="absolute left-1/4 top-0 h-full w-px animate-pulse-slow bg-white" style={{ animationDelay: '1s' }} />
                <div className="absolute left-3/4 top-0 h-full w-px animate-pulse-slow bg-white" style={{ animationDelay: '2s' }} />
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 text-white">
                  <FileText className="h-8 w-8" />
                  <span className="text-sm font-semibold uppercase tracking-wider opacity-90">PM Surya Ghar Muft Bijli Yojana</span>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="mt-6 rounded-2xl bg-white/15 p-6 backdrop-blur-sm"
                >
                  <div className="flex items-end gap-2">
                    <IndianRupee className="mb-1 h-8 w-8 text-accent-300" />
                    <div className="text-5xl font-bold text-white">78,000</div>
                  </div>
                  <div className="mt-1 text-sm text-white/80">Maximum subsidy available as per eligibility</div>
                </motion.div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white/15 p-3 text-center backdrop-blur-sm">
                    <TrendingDown className="mx-auto h-5 w-5 text-white" />
                    <div className="mt-1.5 text-sm font-bold text-white">Lower Cost</div>
                  </div>
                  <div className="rounded-xl bg-white/15 p-3 text-center backdrop-blur-sm">
                    <CheckCircle2 className="mx-auto h-5 w-5 text-white" />
                    <div className="mt-1.5 text-sm font-bold text-white">Easy Process</div>
                  </div>
                  <div className="rounded-xl bg-white/15 p-3 text-center backdrop-blur-sm">
                    <Zap className="mx-auto h-5 w-5 text-white" />
                    <div className="mt-1.5 text-sm font-bold text-white">Net Metering</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -right-3 rounded-2xl glass-strong px-5 py-3 shadow-premium"
            >
              <div className="text-2xl font-bold text-primary-500">30%+ OFF</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">via subsidy</div>
            </motion.div>

            {/* Subsidy table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
            >
              <div className="bg-primary-600 px-4 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white">
                Rooftop Solar Capacity & Savings Guide
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/60">
                      <th className="px-3 py-2.5 text-left font-semibold text-slate-600 dark:text-slate-300">Capacity</th>
                      <th className="px-3 py-2.5 text-left font-semibold text-slate-600 dark:text-slate-300">Area</th>
                      <th className="px-3 py-2.5 text-left font-semibold text-slate-600 dark:text-slate-300">Monthly Units</th>
                      <th className="px-3 py-2.5 text-left font-semibold text-primary-600 dark:text-primary-400">Subsidy</th>
                      <th className="px-3 py-2.5 text-left font-semibold text-accent-600 dark:text-accent-400">Annual Saving</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SUBSIDY_TABLE.map((row, i) => (
                      <tr key={row.capacity} className={i % 2 === 0 ? 'bg-white dark:bg-transparent' : 'bg-slate-50 dark:bg-slate-800/30'}>
                        <td className="px-3 py-2.5 font-semibold text-slate-900 dark:text-white">{row.capacity}</td>
                        <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{row.area}</td>
                        <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{row.units}</td>
                        <td className="px-3 py-2.5 font-bold text-primary-600 dark:text-primary-400">{row.subsidy}</td>
                        <td className="px-3 py-2.5 font-bold text-accent-600 dark:text-accent-400">{row.saving}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionHeading
              center={false}
              eyebrow="Government Subsidy"
              title={<>Save More with <span className="text-primary-500">Government Subsidy</span></>}
              subtitle="We guide customers through the complete government subsidy application process, helping reduce the overall cost of solar installation while ensuring a smooth and hassle-free experience."
            />

            <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 space-y-3">
              {SUBSIDY_POINTS.map((point) => (
                <motion.li key={point} variants={fadeInUp} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <span className="text-slate-700 dark:text-slate-300">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              variants={fadeInUp}
              onClick={() => scrollTo('#calculator')}
              className="btn-primary mt-8"
            >
              Check Subsidy Eligibility
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
