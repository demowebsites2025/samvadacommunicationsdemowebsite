import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ModernHeroSection = () => {
  return (
    <section className="min-h-screen bg-white pt-24 pb-16 relative overflow-hidden animate-fade-in">
      {/* Background decorative curves */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-20 left-0 w-96 h-96 text-purple-50" viewBox="0 0 400 400" fill="currentColor">
          <path d="M0,100 Q200,0 400,100 L400,0 L0,0 Z" />
        </svg>
        <svg className="absolute bottom-20 right-0 w-96 h-96 text-purple-50" viewBox="0 0 400 400" fill="currentColor">
          <path d="M0,300 Q200,400 400,300 L400,400 L0,400 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Top Tagline */}
            <div className="text-purple-600 text-sm font-medium">
              50% discount on early purchase
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              Work With Our Full Time{" "}
              <span className="bg-purple-600 text-white px-4 py-2 rounded-lg inline-block">
                Experts
              </span>
            </h1>

            {/* Sub-text */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Work with our full-time experts who turn ideas into impact. Backed by deep industry knowledge and a passion for perfection, we ensure every project is delivered with precision, professionalism, and excellence you can trust.
            </p>

            {/* Badge + CTA + Contact Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-md">
              <div className="space-y-4">
                {/* Badge */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">The best agency solution 2024</span>
                </div>

                {/* CTA Button */}
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3">
                  <Link to="/about">Learn More</Link>
                </Button>

                {/* Contact */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Call Us</div>
                    <a href="tel:+917619394676" className="font-semibold text-gray-800 hover:text-purple-600 transition-colors">
                      +91 7619394676
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative animate-slide-left">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-96 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Team working together" 
                  className="w-full h-full object-cover"
                />
                {/* Curved mask overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent"></div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">2+</div>
                  <div className="text-xs">Years of</div>
                  <div className="text-xs">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;