import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import TargetAudiences from '@/components/TargetAudiences';
import AutomationCapabilities from '@/components/AutomationCapabilities';
import IdealClient from '@/components/IdealClient';
import Pricing from '@/components/Pricing';
import CaseStudies from '@/components/CaseStudies';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';
import NextSteps from '@/components/NextSteps';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import BonusAutomationIdeas from '@/components/BonusAutomationIdeas';
import ScheduleMeet from '@/components/ScheduleMeet';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ValueProposition />
      <TargetAudiences />
      <ScheduleMeet />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
}
