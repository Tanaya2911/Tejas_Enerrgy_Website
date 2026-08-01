import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { GALLERY, GALLERY_CATEGORIES } from '@/lib/data';
import { SectionHeading } from '@/components/ui/Section';

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'All' ? GALLERY : GALLERY.filter((g) => g.category === active);

  return (
    <section id="gallery" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Project Gallery"
          title={<>Our <span className="text-primary-500">Solar Projects</span></>}
          subtitle="A stunning gallery of our completed residential solar installations. Hover to explore."
        />

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === cat
                  ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-glow'
                  : 'glass text-slate-600 hover:text-primary-600 dark:text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div layout className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.button
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightbox(item.image)}
                className={`group relative overflow-hidden rounded-2xl ${item.span ? 'row-span-2' : ''}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-left">
                  <span className="text-xs font-medium text-primary-300">{item.category}</span>
                  <span className="text-sm font-semibold text-white">{item.title}</span>
                </div>
                <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox}
              alt="Project enlarged"
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-premium"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
