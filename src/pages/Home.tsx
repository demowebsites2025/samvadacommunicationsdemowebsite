import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutBrief from "@/components/AboutBrief";
import ServicesBrief from "@/components/ServicesBrief";
import CreativeShowcase from "@/components/CreativeShowcase";
import ModernHeroSection from "@/components/ModernHeroSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutBrief />
        <ServicesBrief />
        <CreativeShowcase />
        <ModernHeroSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;