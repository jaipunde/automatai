import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import TargetAudiences from '@/components/TargetAudiences';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ValueProposition />
      <TargetAudiences />
      <HowItWorks />
      <Footer />
    </main>
  );
}
