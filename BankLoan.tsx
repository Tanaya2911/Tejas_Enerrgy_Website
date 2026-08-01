import { motion } from 'framer-motion';
import { CreditCard, Zap, FileText, Wallet, TrendingDown, ArrowRight } from 'lucide-react';
import { SectionHeading, fadeInUp, staggerContainer } from '@/components/ui/Section';

const LOAN_CARDS = [
  { icon: TrendingDown, title: 'Low EMI Options', desc: 'Affordable monthly installments tailored to your budget.' },
  { icon: Zap, title: 'Fast Approval', desc: 'Quick loan processing so you can go solar sooner.' },
  { icon: FileText, title: 'Easy Documentation', desc: 'Minimal paperwork with our guided application support.' },
  { icon: Wallet, title: 'Flexible Payment Plans', desc: 'Choose a repayment tenure that suits you best.' },
];

export default function BankLoan() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="loan" className="relative bg-slate-50 px-4 py-24 dark:bg-slate-900/40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Bank Loan"
          title={<>Easy <span className="text-primary-500">Solar Finance</span></>}
          subtitle="Tejas Enerrgy helps customers secure bank loans with minimal documentation and affordable EMI options, making solar installation simple and budget-friendly."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {LOAN_CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="card-surface group relative overflow-hidden p-6 text-center hover:border-accent-400/50 hover:shadow-glow-yellow"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-400/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow-glow-yellow transition-transform group-hover:scale-110">
                <card.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl glass p-8 text-center sm:flex-row sm:text-left"
        >
          <CreditCard className="h-10 w-10 text-accent-500" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Go solar with zero upfront cost</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Your monthly EMI is often less than your current electricity bill — solar pays for itself.
            </p>
          </div>
          <button onClick={() => scrollTo('#contact')} className="btn-accent shrink-0">
            Apply for Loan
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
