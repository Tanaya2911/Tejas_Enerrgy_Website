import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { BRANDS } from "@/lib/data";
import {
  SectionHeading,
  fadeInUp,
  staggerContainer,
} from "@/components/ui/Section";

export default function Brands() {
  return (
    <section
      id="brands"
      className="relative bg-slate-50 py-24 px-4 dark:bg-slate-900/40 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="Our Partners"
          title={
            <>
              Our Trusted{" "}
              <span className="text-primary-500">
                Brand Partners
              </span>
            </>
          }
          subtitle="We install only premium Tier-1 solar panels and inverters from globally trusted brands, ensuring maximum efficiency, durability, and long-term performance."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
        >
          {BRANDS.map((brand) => (
            <motion.div
              key={brand.name}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-all duration-300 hover:border-primary-500 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="relative flex h-16 w-28 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-md">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow opacity-0 transition-opacity group-hover:opacity-100">
                  <ShieldCheck className="h-3 w-3 text-green-600" />
                </span>
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                  {brand.name}
                </h3>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {brand.tagline}
                </p>
              </div>

              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          We use premium products from globally trusted solar brands to ensure
          maximum performance, reliability, and long-term value.
        </p>

      </div>
    </section>
  );
}