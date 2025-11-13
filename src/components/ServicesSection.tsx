import { Code, Megaphone, Film, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "We develop websites that are fast, secure, responsive, and made to match your brand's personality — turning your ideas into digital reality. From concept to launch, we ensure every detail delivers an exceptional user experience that drives results.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "We specialize in delivering powerful digital marketing solutions that help businesses connect with their audience, boost engagement, and drive measurable growth. From social media and search engine marketing to email campaigns and content strategy.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Film,
      title: "Social Media & Film Promotions",
      description:
        "We promote films and brands across digital platforms with creativity and strategy that deliver real impact. Our campaigns captivate audiences, spark conversations, and drive measurable results.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Visual storytelling that captures attention and communicates your brand message effectively. From logos to marketing materials, we create designs that resonate with your audience and strengthen your brand identity.",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Service Area
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your brand and
              drive meaningful results
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button asChild variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <Link to="/contact">Get Started →</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-8 md:p-12 rounded-2xl shadow-lg text-center animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Let's create something extraordinary together. Get started with a
              consultation today.
            </p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
