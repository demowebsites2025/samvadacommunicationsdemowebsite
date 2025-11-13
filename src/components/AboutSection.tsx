import { Button } from "@/components/ui/button";
import { Target, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {


  const features = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every strategy is rooted in purpose and designed for impact",
    },
    {
      icon: Zap,
      title: "Creative Excellence",
      description: "Bold ideas that stand out and make a lasting impression",
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "Data-driven approach that delivers real, trackable outcomes",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Since 2022
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              We create digital ideas that are{" "}
              <span className="text-primary">bigger, bolder, and built</span> to
              make an impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Samvada Communications, every strategy is rooted in purpose,
              driven by creativity, and designed to deliver measurable results. We
              think beyond trends, beyond platforms — because your brand deserves
              more than ordinary.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl shadow-lg animate-fade-in">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              We're not just another digital marketing company — we're your creative
              partners in building a bold, lasting digital presence. From local
              roots to national reach, we craft ideas that are bigger, bolder, and
              built to make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button asChild className="bg-purple-600 text-white hover:bg-purple-700 rounded-xl">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
