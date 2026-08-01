import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import { SectionHeading, fadeInUp, staggerContainer } from '@/components/ui/Section';

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-50 px-4 py-24 dark:bg-slate-900/40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Premium <span className="text-primary-500">Solar Services</span></>}
          subtitle="Elegant animated service cards covering every solar need — from residential rooftops to industrial-scale projects and ongoing maintenance."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="card-surface group relative overflow-hidden p-6 hover:border-primary-500/40 hover:shadow-premium"
            >
              {/* Glow on hover */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-glow transition-transform group-hover:scale-110 group-hover:rotate-3">
                <service.icon className="h-7 w-7" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.description}</p>

              <ul className="mt-4 space-y-1.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
