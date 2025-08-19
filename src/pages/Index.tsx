import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import WhyChoose from '@/components/WhyChoose';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Blog from '@/components/Blog';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <WhyChoose />
      <Features />
      <Pricing />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
