import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import WebDevShowcase from "@/components/WebDevShowcase";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServicesSection />
        <WebDevShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Services;