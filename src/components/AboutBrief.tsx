import { Button } from "@/components/ui/button";
import { Target, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const AboutBrief = () => {
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
    <section className="py-20 bg-muted animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">Samvada Communications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We create digital ideas that are bigger, bolder, and built to make an impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up">
            <Button asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrief;