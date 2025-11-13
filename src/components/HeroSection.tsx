import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import KineticHeroAnimation from "./KineticHeroAnimation";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-accent"
    >
      {/* Kinetic Background Animation */}
      <KineticHeroAnimation />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-6 animate-scale-in">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Since 2022 - Delivering Excellence
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Delivering the best digital solutions with{" "}
            <span className="relative inline-block">
              <span className="relative z-10">strategy, creativity,</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 -z-0" />
            </span>{" "}
            and impact
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            That's what our digital marketing company, Samvada Communications,
            stands for
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
            >
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-purple-600 text-white hover:bg-purple-700 rounded-xl"
            >
              Get Started
            </Button>
          </div>

          {/* Location Badge */}
          <div className="mt-12 text-primary-foreground/80 text-sm">
            📍 S S Complex, Saibrakatte, Shiriyara Village - 576210
          </div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
