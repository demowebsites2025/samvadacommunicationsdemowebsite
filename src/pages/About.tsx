import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import CreativeStoryShowcase from "@/components/CreativeStoryShowcase";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutSection />
        <CreativeStoryShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default About;