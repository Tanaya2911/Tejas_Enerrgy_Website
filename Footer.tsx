import { Phone, Mail, MapPin, ArrowRight, Clock } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import Logo from '@/components/Logo';

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#gallery' },
  { label: 'Brands', href: '#brands' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
];

export default function Footer() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-slate-950 px-4 py-16 text-slate-300 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute -top-20 left-1/2 h-40 w-[60%] -translate-x-1/2 rounded-full bg-primary-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Logo size={40} />
              <span className="text-lg font-bold text-white">
                Tejas<span className="text-primary-400"> Enerrgy</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Trusted solar installation company delivering premium-quality rooftop solar solutions
              for homes and businesses across Kolhapur and Maharashtra.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
              <Clock className="h-4 w-4 text-primary-400" />
              {COMPANY.hours}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-primary-400"
                  >
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {['Residential Solar', 'Home Rooftop Solar', 'Commercial Solar', 'Solar Maintenance', 'Net Metering', 'Subsidy & Loan'].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-primary-400"
                  >
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                {COMPANY.address}
              </li>
              {COMPANY.phones.map((p) => (
                <li key={p.number} className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-primary-400" />
                  <a href={`tel:${p.number.replace(/\s/g, '')}`} className="hover:text-primary-400">{p.number}</a>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-primary-400" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary-400">{COMPANY.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 Tejas Enerrgy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
