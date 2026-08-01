import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp, ClipboardCheck, X } from 'lucide-react';
import { COMPANY } from '@/lib/data';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="grid h-12 w-12 place-items-center rounded-full bg-slate-900 text-white shadow-premium transition-transform hover:scale-110 dark:bg-white dark:text-slate-900"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Get Free Quote */}
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Get free quote"
          className="hidden rounded-full bg-gradient-to-br from-primary-500 to-primary-700 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 sm:block"
        >
          <span className="flex items-center gap-2">
            <ClipboardCheck className="h-4 w-4" />
            Get Free Quote
          </span>
        </button>

        {/* Call */}
        <a
          href={`tel:${COMPANY.phones[0]?.number.replace(/\s/g, '')}`}
          aria-label="Call now"
          className="relative grid h-13 w-13 place-items-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 p-3.5 text-white shadow-glow-blue transition-transform hover:scale-110"
        >
          <Phone className="h-6 w-6" />
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-30" />
        </a>

        {/* WhatsApp with popup */}
        <button
          onClick={() => setShowWhatsAppPopup(true)}
          aria-label="WhatsApp now"
          className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-lg transition-transform hover:scale-110"
        >
          <MessageCircle className="h-7 w-7" />
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
        </button>
      </div>

      {/* WhatsApp number selection popup */}
      <AnimatePresence>
        {showWhatsAppPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowWhatsAppPopup(false)}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-2xl glass-strong p-6 shadow-premium"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">WhatsApp Us</h3>
                <button onClick={() => setShowWhatsAppPopup(false)} aria-label="Close" className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Choose a number to start a WhatsApp chat:</p>
              <div className="mt-4 space-y-3">
                {COMPANY.phones.map((p) => (
                  <a
                    key={p.number}
                    href={`https://wa.me/${p.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition-all hover:border-[#25D366] hover:bg-[#25D366]/5 dark:border-white/10"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{p.number}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{p.person}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
