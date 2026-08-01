import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import Logo from '@/components/Logo';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Subsidy', href: '#subsidy' },
  { label: 'Brands', href: '#brands' },
  { label: 'Process', href: '#process' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-premium' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <button onClick={() => handleNav('#home')} className="flex items-center gap-2.5">
          <Logo size={40} />
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Tejas<span className="text-primary-500"> Enerrgy</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-primary-500/10 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-primary-500/10 dark:border-white/10 dark:text-slate-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={() => handleNav('#contact')}
            className="hidden btn-primary !py-2.5 !px-5 text-sm sm:inline-flex"
          >
            Get Free Quote
          </button>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden glass-strong lg:hidden"
          >
            <div className="mb-3 flex items-center gap-2.5 px-4 pt-2">
              <Logo size={36} />
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                Tejas<span className="text-primary-500"> Enerrgy</span>
              </span>
            </div>
            <ul className="flex flex-col gap-1 px-4 py-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-primary-500/10 hover:text-primary-600 dark:text-slate-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => handleNav('#contact')} className="btn-primary mt-2 w-full">
                  Get Free Quote
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
