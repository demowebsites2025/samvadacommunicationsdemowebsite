import CreativeAnimation from "./CreativeAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CreativeShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                Creative Design Services
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Where Ideas Transform Into 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Visual Magic</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                From concept to creation, we craft visual experiences that captivate, communicate, and convert. Our design process seamlessly blends creativity with strategy to deliver results that exceed expectations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-purple-600 text-white hover:bg-purple-700 rounded-xl">
                  <Link to="/services">Explore Our Work</Link>
                </Button>
                <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 rounded-xl">
                  <Link to="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>

            {/* Right Animation */}
            <div className="flex justify-center animate-fade-in-up">
              <CreativeAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeShowcase;