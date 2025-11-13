import CreativeJourneyAnimation from "./CreativeJourneyAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CreativeStoryShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 relative overflow-hidden">
      {/* Warm Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-rose-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                Our Creative Process
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                From Spark to 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500"> Spectacular</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Every great brand starts with a simple idea. Watch how we transform abstract concepts into powerful visual stories that connect, inspire, and drive results. Our collaborative approach ensures your vision becomes reality.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Ideation & Strategy</h4>
                    <p className="text-gray-600 text-sm">We start with understanding your vision and goals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Creative Development</h4>
                    <p className="text-gray-600 text-sm">Sketches and concepts come to life through collaboration</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Brand Realization</h4>
                    <p className="text-gray-600 text-sm">Complete branded experiences that make an impact</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 rounded-xl">
                  <Link to="/contact">Start Your Journey</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-400 text-orange-600 hover:bg-orange-50 rounded-xl">
                  <Link to="/services">View Our Work</Link>
                </Button>
              </div>
            </div>

            {/* Right Animation */}
            <div className="flex justify-center animate-fade-in-up">
              <CreativeJourneyAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeStoryShowcase;