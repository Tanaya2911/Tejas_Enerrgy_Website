import { motion } from 'framer-motion';
import { PROCESS } from '@/lib/data';
import { SectionHeading } from '@/components/ui/Section';

export default function Process() {
  return (
    <section id="process" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Installation Process"
          title={<>Our <span className="text-primary-500">8-Step Process</span></>}
          subtitle="A modern animated timeline guiding you from first contact to lifetime support — every step handled by our expert team."
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-400 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-8">
            {PROCESS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-center gap-6 sm:gap-0 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Node */}
                  <div className="absolute left-4 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-xs font-bold text-white shadow-glow sm:left-1/2">
                    {step.step}
                  </div>

                  {/* Spacer for desktop alternating layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card */}
                  <div className={`ml-12 w-full sm:ml-0 sm:w-1/2 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div className="card-surface group p-5 hover:border-primary-500/40 hover:shadow-premium">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary-500">
                        Step {step.step}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
