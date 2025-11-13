import FuturisticWebAnimation from "./FuturisticWebAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WebDevShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Flowing Data Streams */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-blue-400/0 via-blue-400/50 to-blue-400/0 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Animation */}
            <div className="flex justify-center animate-fade-in-up">
              <FuturisticWebAnimation />
            </div>

            {/* Right Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-400/20">
                Web Development
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Building Tomorrow's 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Digital Experiences</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                We craft cutting-edge web applications using the latest technologies and frameworks. From responsive designs to complex interactive systems, we transform your vision into powerful digital solutions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span>React, Next.js, TypeScript Development</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span>Progressive Web Applications (PWA)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <span>API Integration & Backend Services</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-cyan-500 text-white hover:bg-cyan-600 rounded-xl">
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-xl">
                  <Link to="/services">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevShowcase;