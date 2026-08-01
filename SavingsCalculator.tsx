import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator as CalcIcon,
  Zap,
  IndianRupee,
  TrendingDown,
  Leaf,
  Clock,
  PiggyBank,
  Sun,
  Building2,
  Home,
} from 'lucide-react';
import { CITIES, PROPERTY_TYPES, ROOF_TYPES, calculateSavings, type CalcResults } from '@/lib/data';
import { SectionHeading, fadeInUp, staggerContainer } from '@/components/ui/Section';

const PROPERTY_ICONS: Record<string, typeof Home> = {
  residential: Home,
  commercial: Building2,
};

function formatINR(value: number): string {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(Math.round(value));
}

function ResultCard({
  icon: Icon,
  label,
  value,
  unit,
  color,
}: {
  icon: typeof Zap;
  label: string;
  value: string;
  unit?: string;
  color: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass flex items-center gap-4 rounded-xl p-4"
    >
      <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${color}`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="min-w-0">
        <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
        <div className="text-lg font-bold text-slate-900 dark:text-white">
          {value}
          {unit && <span className="ml-1 text-sm font-medium text-slate-500">{unit}</span>}
        </div>
      </div>
    </motion.div>
  );
}

export default function SavingsCalculator() {
  const [bill, setBill] = useState(3000);
  const [city, setCity] = useState(CITIES[0] ?? 'Pune');
  const [property, setProperty] = useState<(typeof PROPERTY_TYPES)[number]>('residential');
  const [roof, setRoof] = useState<(typeof ROOF_TYPES)[number]>('flat');
  const [showResults, setShowResults] = useState(false);

  const results: CalcResults = useMemo(
    () => calculateSavings(bill, property, roof),
    [bill, property, roof],
  );

  const handleCalculate = () => setShowResults(true);

  return (
    <section id="calculator" className="relative bg-slate-50 px-4 py-24 dark:bg-slate-900/40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Solar Savings Calculator"
          title={<>Calculate Your <span className="text-primary-500">Solar Savings</span></>}
          subtitle="A modern interactive calculator. Enter your details to get a personalized solar estimate including recommended capacity, costs, subsidy, and lifetime savings."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass-strong rounded-2xl p-6">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                <CalcIcon className="h-5 w-5 text-primary-500" />
                <h3 className="text-lg font-semibold">Your Details</h3>
              </div>

              {/* Monthly bill slider */}
              <div className="mt-6">
                <label className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <IndianRupee className="h-4 w-4 text-primary-500" />
                    Monthly Electricity Bill
                  </span>
                  <span className="rounded-lg bg-primary-500/10 px-2.5 py-1 font-bold text-primary-600 dark:text-primary-400">
                    ₹{formatINR(bill)}
                  </span>
                </label>
                <input
                  type="range"
                  min={500}
                  max={50000}
                  step={500}
                  value={bill}
                  onChange={(e) => { setBill(Number(e.target.value)); setShowResults(false); }}
                  className="mt-3 w-full accent-primary-500"
                  aria-label="Monthly electricity bill"
                />
                <div className="mt-1 flex justify-between text-xs text-slate-400">
                  <span>₹500</span><span>₹50,000</span>
                </div>
              </div>

              {/* City */}
              <div className="mt-6">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-primary-500 dark:border-white/10 dark:bg-slate-800/80 dark:text-white"
                >
                  {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Property type */}
              <div className="mt-6">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Property Type</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {PROPERTY_TYPES.map((pt) => {
                    const Icon = PROPERTY_ICONS[pt] ?? Home;
                    return (
                      <button
                        key={pt}
                        onClick={() => { setProperty(pt); setShowResults(false); }}
                        className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium capitalize transition ${
                          property === pt
                            ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400'
                            : 'border-slate-200 text-slate-600 hover:border-primary-300 dark:border-white/10 dark:text-slate-300'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {pt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Roof type */}
              <div className="mt-6">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Roof Type</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {ROOF_TYPES.map((rt) => (
                    <button
                      key={rt}
                      onClick={() => { setRoof(rt); setShowResults(false); }}
                      className={`rounded-xl border px-3 py-2.5 text-sm font-medium capitalize transition ${
                        roof === rt
                          ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400'
                          : 'border-slate-200 text-slate-600 hover:border-primary-300 dark:border-white/10 dark:text-slate-300'
                      }`}
                    >
                      {rt} roof
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={handleCalculate} className="btn-primary mt-7 w-full">
                <CalcIcon className="h-5 w-5" />
                Calculate Savings
              </button>
            </div>
          </motion.div>

          {/* Results */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 p-8 text-center dark:border-white/10"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="grid h-20 w-20 place-items-center rounded-full bg-primary-500/10"
                  >
                    <Sun className="h-10 w-10 text-primary-500" />
                  </motion.div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-700 dark:text-slate-200">
                    Your savings will appear here
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Fill in your details and tap “Calculate Savings” to see your personalized solar report.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-3 sm:grid-cols-2"
                  >
                    <ResultCard icon={Zap} label="Recommended Solar Capacity" value={`${results.capacity}`} unit="kW" color="bg-gradient-to-br from-primary-500 to-primary-700" />
                    <ResultCard icon={IndianRupee} label="Estimated Installation Cost" value={`₹${formatINR(results.installCost)}`} color="bg-gradient-to-br from-secondary-500 to-secondary-700" />
                    <ResultCard icon={TrendingDown} label="Government Subsidy Amount" value={`₹${formatINR(results.subsidy)}`} color="bg-gradient-to-br from-accent-400 to-accent-600" />
                    <ResultCard icon={PiggyBank} label="Monthly Savings" value={`₹${formatINR(results.monthlySavings)}`} color="bg-gradient-to-br from-primary-500 to-primary-700" />
                    <ResultCard icon={PiggyBank} label="Annual Savings" value={`₹${formatINR(results.annualSavings)}`} color="bg-gradient-to-br from-primary-500 to-secondary-600" />
                    <ResultCard icon={Clock} label="Payback Period" value={`${results.paybackYears.toFixed(1)}`} unit="years" color="bg-gradient-to-br from-secondary-500 to-accent-500" />
                    <ResultCard icon={Leaf} label="CO₂ Reduction" value={`${formatINR(results.co2Tons)}`} unit="tons" color="bg-gradient-to-br from-secondary-500 to-primary-600" />
                    <ResultCard icon={PiggyBank} label="Lifetime Savings (25 yrs)" value={`₹${formatINR(results.lifetimeSavings)}`} color="bg-gradient-to-br from-accent-500 to-primary-600" />
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="mt-4 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-400/10 p-5 text-center"
                  >
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Estimated for a <strong className="text-slate-900 dark:text-white">{property}</strong> property in <strong className="text-slate-900 dark:text-white">{city}</strong> with a {roof} roof. Want an exact quote?
                    </p>
                    <button
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="btn-primary mt-3"
                    >
                      Get a Free Custom Quote
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
