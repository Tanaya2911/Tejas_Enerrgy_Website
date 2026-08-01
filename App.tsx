import { ThemeProvider } from '@/lib/theme';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import FloatingButtons from '@/components/FloatingButtons';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Subsidy from '@/components/sections/Subsidy';
import BankLoan from '@/components/sections/BankLoan';
import Brands from '@/components/sections/Brands';
import Warranty from '@/components/sections/Warranty';
import Process from '@/components/sections/Process';
import SavingsCalculator from '@/components/sections/SavingsCalculator';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <ParticleBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Subsidy />
          <BankLoan />
          <Brands />
          <Warranty />
          <Process />
          <SavingsCalculator />
          <Gallery />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </ThemeProvider>
  );
}

export default App;
