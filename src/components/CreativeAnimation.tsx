import { useEffect, useState } from "react";
import { Palette, Type, Grid3X3, Layers, Smartphone } from "lucide-react";

const CreativeAnimation = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  
  const icons = [
    { Icon: Palette, color: "from-pink-400 to-purple-500", name: "Branding" },
    { Icon: Type, color: "from-blue-400 to-cyan-500", name: "Typography" },
    { Icon: Grid3X3, color: "from-green-400 to-emerald-500", name: "Layouts" },
    { Icon: Layers, color: "from-orange-400 to-red-500", name: "Wireframes" },
    { Icon: Smartphone, color: "from-indigo-400 to-purple-500", name: "Mockups" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Particle Effects */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full animate-pulse"
            style={{
              left: `${20 + (i * 25) % 60}%`,
              top: `${15 + (i * 30) % 70}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      {/* Central Animation Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Morphing Background Circle */}
          <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${icons[currentIcon].color} animate-pulse shadow-2xl transition-all duration-1000 ease-in-out`} />
          
          {/* Icon Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            {icons.map((item, index) => {
              const { Icon } = item;
              return (
                <Icon
                  key={index}
                  className={`absolute w-16 h-16 text-white transition-all duration-700 ease-in-out transform ${
                    index === currentIcon 
                      ? 'scale-100 opacity-100 rotate-0' 
                      : 'scale-50 opacity-0 rotate-45'
                  }`}
                />
              );
            })}
          </div>

          {/* Rotating Ring */}
          <div className="absolute -inset-8 border-4 border-dashed border-purple-300/30 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
          
          {/* Outer Glow Ring */}
          <div className={`absolute -inset-4 rounded-full bg-gradient-to-br ${icons[currentIcon].color} opacity-20 blur-xl transition-all duration-1000`} />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 left-8 w-6 h-6 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-lg animate-bounce" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-12 right-12 w-4 h-4 bg-gradient-to-r from-pink-300 to-rose-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-16 left-16 w-5 h-5 bg-gradient-to-r from-green-300 to-emerald-400 rounded-lg animate-bounce" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />

      {/* Label */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm font-semibold text-gray-700 transition-all duration-500">
            {icons[currentIcon].name}
          </span>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {icons.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIcon ? 'bg-purple-500 scale-125' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CreativeAnimation;