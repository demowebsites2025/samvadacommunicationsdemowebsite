import { useEffect, useState } from "react";
import { Lightbulb, PenTool, Layers, Sparkles } from "lucide-react";

const CreativeJourneyAnimation = () => {
  const [currentStage, setCurrentStage] = useState(0);
  
  const stages = [
    { 
      name: "Ideation", 
      icon: Lightbulb, 
      color: "from-orange-300 to-red-400",
      description: "Abstract concepts take shape"
    },
    { 
      name: "Sketching", 
      icon: PenTool, 
      color: "from-amber-300 to-orange-400",
      description: "Ideas become visual sketches"
    },
    { 
      name: "Design", 
      icon: Layers, 
      color: "from-yellow-300 to-amber-400",
      description: "Digital transformation begins"
    },
    { 
      name: "Brand", 
      icon: Sparkles, 
      color: "from-rose-300 to-pink-400",
      description: "Complete branded experience"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Warm Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-8 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-8 right-8 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Central Canvas */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-100">
          
          {/* Stage 0: Abstract Shapes */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${currentStage === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-8 left-8 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-bounce" />
            <div className="absolute top-16 right-12 w-6 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg animate-pulse" />
            <div className="absolute bottom-12 left-12 w-12 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Stage 1: Sketches */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${currentStage === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <svg className="w-full h-full" viewBox="0 0 192 192">
              <path d="M40 60 Q80 40 120 60 T160 80" stroke="#f59e0b" strokeWidth="2" fill="none" className="animate-draw" />
              <circle cx="60" cy="80" r="8" stroke="#f97316" strokeWidth="2" fill="none" className="animate-draw" style={{ animationDelay: '0.5s' }} />
              <rect x="100" y="100" width="40" height="30" stroke="#ea580c" strokeWidth="2" fill="none" className="animate-draw" style={{ animationDelay: '1s' }} />
            </svg>
          </div>

          {/* Stage 2: Digital Design */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${currentStage === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gradient-to-r from-yellow-300 to-amber-400 rounded animate-expand" />
              <div className="h-3 bg-gradient-to-r from-amber-300 to-orange-400 rounded w-3/4 animate-expand" style={{ animationDelay: '0.3s' }} />
              <div className="h-3 bg-gradient-to-r from-orange-300 to-red-400 rounded w-1/2 animate-expand" style={{ animationDelay: '0.6s' }} />
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-8 bg-gradient-to-br from-rose-300 to-pink-400 rounded animate-expand" style={{ animationDelay: '0.9s' }} />
                <div className="h-8 bg-gradient-to-br from-pink-300 to-rose-400 rounded animate-expand" style={{ animationDelay: '1.2s' }} />
              </div>
            </div>
          </div>

          {/* Stage 3: Complete Brand */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${currentStage === 3 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="p-3 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full animate-pulse" />
                <div className="h-2 bg-gradient-to-r from-pink-400 to-rose-500 rounded flex-1 animate-expand" />
              </div>
              <div className="flex-1 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg p-2 animate-fade-in">
                <div className="w-full h-full bg-gradient-to-br from-rose-300 to-pink-400 rounded opacity-80" />
              </div>
            </div>
          </div>

          {/* Hand-drawn Texture Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 192 192">
              <defs>
                <pattern id="handDrawn" patternUnits="userSpaceOnUse" width="20" height="20">
                  <path d="M0,10 Q5,5 10,10 T20,10" stroke="#f97316" strokeWidth="0.5" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#handDrawn)" />
            </svg>
          </div>
        </div>

        {/* Stage Icon */}
        <div className={`absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-br ${stages[currentStage].color} shadow-lg flex items-center justify-center transition-all duration-500`}>
          {(() => {
            const IconComponent = stages[currentStage].icon;
            return <IconComponent className="w-6 h-6 text-white" />;
          })()}
        </div>
      </div>

      {/* Floating Creative Elements */}
      <div className="absolute top-12 left-4 w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-float" />
      <div className="absolute top-20 right-8 w-3 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-16 left-8 w-6 h-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-8 right-12 w-5 h-5 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg animate-float" style={{ animationDelay: '3s' }} />

      {/* Collaboration Dots */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <div className="flex flex-col space-y-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <div className="flex flex-col space-y-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.3 + 1.5}s` }}
            />
          ))}
        </div>
      </div>

      {/* Stage Label */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-orange-200">
          <div className="text-sm font-bold text-gray-800">{stages[currentStage].name}</div>
          <div className="text-xs text-gray-600">{stages[currentStage].description}</div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {stages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentStage 
                ? 'bg-gradient-to-r from-orange-400 to-pink-400 scale-125' 
                : 'bg-orange-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CreativeJourneyAnimation;