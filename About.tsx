import { motion } from 'framer-motion';
import { Sun, ShieldCheck, Leaf, Award } from 'lucide-react';
import { WHY_CHOOSE } from '@/lib/data';
import { SectionHeading, fadeInUp, staggerContainer } from '@/components/ui/Section';

const PILLARS = [
  { icon: ShieldCheck, title: 'Premium Components', text: 'Tier-1 panels & inverters from trusted global brands.' },
  { icon: Leaf, title: 'Clean & Sustainable', text: 'Reduce your carbon footprint and power bills together.' },
  { icon: Award, title: 'Expert Team', text: 'Certified engineers with 100+ successful installations.' },
  { icon: Sun, title: 'Maximum Efficiency', text: 'Engineered for peak output and long-term savings.' },
];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Us"
          title={<>About <span className="text-primary-500">Tejas Enerrgy</span></>}
          subtitle="Tejas Enerrgy is a trusted and professional solar energy company committed to providing high-quality rooftop solar solutions. We specialize in residential and commercial solar installations using premium components from trusted brands. Our experienced team ensures safe installation, maximum efficiency, and long-term customer satisfaction. We also assist customers with government subsidy applications and bank loan facilities, making solar energy affordable and accessible."
        />

        {/* Pillars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PILLARS.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="card-surface group p-6 hover:shadow-premium hover:border-primary-500/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-500/10 text-primary-600 transition-transform group-hover:scale-110 dark:text-primary-400">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={<>Why Choose <span className="text-primary-500">Tejas Enerrgy</span></>}
            subtitle="Beautiful animated feature cards with premium icons showcasing what makes us the trusted choice."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
            {WHY_CHOOSE.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="glass group flex items-center gap-3 rounded-xl p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-400/20 text-primary-600 transition-transform group-hover:scale-110 dark:text-primary-400">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{item.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
