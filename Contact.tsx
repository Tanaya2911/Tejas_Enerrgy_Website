import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  X,
} from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { SectionHeading, fadeInUp, staggerContainer } from '@/components/ui/Section';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' });
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const { error } = await supabase.from('leads').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        city: form.city || null,
        message: form.message || null,
        service_interest: 'General Inquiry',
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', city: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative bg-slate-50 px-4 py-24 dark:bg-slate-900/40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact Us"
          title={<>Get in <span className="text-primary-500">Touch</span></>}
          subtitle="Ready to go solar? Reach out for a free site survey, subsidy assistance, or a custom quote. Our team responds within one business day."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Left — info card */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp} className="glass-strong rounded-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{COMPANY.name}</h3>
              <div className="mt-5 space-y-4 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">Office Address</div>
                    <div className="text-slate-600 dark:text-slate-400">{COMPANY.address}</div>
                  </div>
                </div>

                {/* Phone numbers */}
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <div className="space-y-2">
                    <div className="font-medium text-slate-900 dark:text-white">Call Now</div>
                    {COMPANY.phones.map((p) => (
                      <div key={p.number}>
                        <a
                          href={`tel:${p.number.replace(/\s/g, '')}`}
                          className="font-medium text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400"
                        >
                          {p.number}
                        </a>
                        <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">({p.person})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#25D366]" />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">WhatsApp</div>
                    <button
                      onClick={() => setShowWhatsAppPopup(true)}
                      className="text-sm font-medium text-[#25D366] hover:underline"
                    >
                      Choose a number to WhatsApp
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">Email</div>
                    <a href={`mailto:${COMPANY.email}`} className="text-slate-600 hover:text-primary-600 dark:text-slate-400">{COMPANY.email}</a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">Business Hours</div>
                    <div className="text-slate-600 dark:text-slate-400">{COMPANY.hours}</div>
                  </div>
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="mt-6 grid grid-cols-2 gap-2.5">
                <a href={`tel:${COMPANY.phones[0]?.number.replace(/\s/g, '')}`} className="btn-primary !py-2.5 text-sm">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <button onClick={() => setShowWhatsAppPopup(true)} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — contact form */}
          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-strong rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Get a Free Quote</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" required>
                <input type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} className="form-input" placeholder="Your name" />
              </Field>
              <Field label="Phone" required>
                <input type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} className="form-input" placeholder="+91 XXXXX XXXXX" />
              </Field>
              <Field label="Email" required>
                <input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className="form-input" placeholder="you@email.com" />
              </Field>
              <Field label="City">
                <input type="text" value={form.city} onChange={(e) => update('city', e.target.value)} className="form-input" placeholder="Your city" />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message">
                <textarea value={form.message} rows={4} onChange={(e) => update('message', e.target.value)} className="form-input resize-none" placeholder="Tell us about your solar requirements..." />
              </Field>
            </div>

            <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-5 w-full disabled:opacity-60">
              {status === 'submitting' ? 'Sending...' : (<><Send className="h-5 w-5" /> Get Free Quote</>)}
            </button>

            {status === 'success' && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 flex items-center gap-2 rounded-xl bg-success-500/10 p-3 text-sm text-success-700 dark:text-success-400">
                <CheckCircle2 className="h-5 w-5" />
                Thank you! We've received your request and will call you within one business day.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 flex items-center gap-2 rounded-xl bg-error-500/10 p-3 text-sm text-error-700 dark:text-error-400">
                <AlertCircle className="h-5 w-5" />
                Something went wrong. Please try again or call us directly.
              </motion.div>
            )}
          </motion.form>
        </div>
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

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgb(226 232 240);
          background: rgba(255,255,255,0.7);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: rgb(15 23 42);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
        }
        .dark .form-input {
          background: rgba(15,23,42,0.6);
          border-color: rgba(255,255,255,0.1);
          color: rgb(226 232 240);
        }
      `}</style>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
        {label}{required && <span className="text-error-500"> *</span>}
      </span>
      {children}
    </label>
  );
}
