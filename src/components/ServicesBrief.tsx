import { Code, Megaphone, Film, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesBrief = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Fast, secure, responsive websites that match your brand's personality",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Powerful solutions that boost engagement and drive measurable growth",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Film,
      title: "Film Promotions",
      description: "Creative campaigns that captivate audiences and spark conversations",
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1489599904593-130ba1ce79c8?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Visual storytelling that captures attention and strengthens your brand",
      color: "from-green-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center"
    },
  ];

  return (
    <section className="py-20 bg-background animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden animate-slide-up" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up">
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBrief;