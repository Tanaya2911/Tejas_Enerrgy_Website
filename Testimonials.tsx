import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';
import { SectionHeading, fadeInUp, staggerContainer } from '@/components/ui/Section';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-slate-50 px-4 py-24 dark:bg-slate-900/40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What Our <span className="text-primary-500">Customers Say</span></>}
          subtitle="Elegant animated testimonial cards from happy customers across Maharashtra."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="card-surface relative overflow-hidden p-7 hover:border-primary-500/40 hover:shadow-premium"
            >
              <Quote className="absolute right-4 top-4 h-16 w-16 text-primary-500/10" />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{t.location}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
