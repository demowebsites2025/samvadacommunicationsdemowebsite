import { useEffect, useState } from "react";
import { Code, Layout, Zap, Globe } from "lucide-react";

const FuturisticWebAnimation = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [rippleEffect, setRippleEffect] = useState(false);

  const modules = [
    { Icon: Code, label: "Code", color: "from-cyan-400 to-blue-500" },
    { Icon: Layout, label: "UI Layout", color: "from-blue-400 to-indigo-500" },
    { Icon: Zap, label: "Interactions", color: "from-indigo-400 to-purple-500" },
    { Icon: Globe, label: "Website", color: "from-purple-400 to-pink-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % modules.length);
      setRippleEffect(true);
      setTimeout(() => setRippleEffect(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Data Stream Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-8 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      {/* Central Hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Main Module Container */}
          <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${modules[activeModule].color} shadow-2xl transition-all duration-1000 ease-in-out transform ${rippleEffect ? 'scale-110' : 'scale-100'}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              {(() => {
                const IconComponent = modules[activeModule].Icon;
                return <IconComponent className="w-12 h-12 text-white" />;
              })()}
            </div>
          </div>

          {/* Ripple Effect */}
          {rippleEffect && (
            <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 animate-ping" />
          )}

          {/* Cyber Lines */}
          <div className="absolute -inset-8">
            {[0, 90, 180, 270].map((rotation, index) => (
              <div
                key={index}
                className="absolute w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: 'center',
                  top: '50%',
                  left: '50%',
                  marginLeft: '-32px',
                  marginTop: '-0.5px'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-8 left-8 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/30 animate-float">
        <div className="text-xs font-mono text-cyan-400">
          <div>&lt;div className=</div>
          <div className="text-green-400">"component"&gt;</div>
        </div>
      </div>

      <div className="absolute top-16 right-12 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30 animate-float" style={{ animationDelay: '1s' }}>
        <div className="text-xs font-mono text-blue-400">
          <div>useState()</div>
          <div className="text-purple-400">useEffect()</div>
        </div>
      </div>

      {/* UI Layout Blocks */}
      <div className="absolute bottom-20 left-12 space-y-1 animate-build">
        <div className="w-12 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded" />
        <div className="w-8 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded" />
        <div className="w-10 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded" />
      </div>

      {/* 3D Wireframe Elements */}
      <div className="absolute bottom-12 right-16 animate-assemble">
        <div className="relative w-16 h-12 border-2 border-cyan-400/50 rounded transform rotate-12">
          <div className="absolute inset-2 border border-blue-400/30 rounded" />
          <div className="absolute top-1 left-1 w-2 h-1 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Orbital Modules */}
      {modules.map((module, index) => {
        const angle = (index * 90) - 45;
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <div
            key={index}
            className="absolute w-8 h-8 rounded-lg bg-gray-900/80 border border-cyan-400/30 flex items-center justify-center transition-all duration-500"
            style={{
              left: `calc(50% + ${x}px - 16px)`,
              top: `calc(50% + ${y}px - 16px)`,
              transform: `scale(${index === activeModule ? 1.2 : 0.8})`,
              opacity: index === activeModule ? 1 : 0.6
            }}
          >
            {(() => {
              const IconComponent = module.Icon;
              return <IconComponent className="w-4 h-4 text-cyan-400" />;
            })()}
          </div>
        );
      })}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {modules.map((_, index) => {
          const angle = (index * 90) - 45;
          const radius = 120;
          const x = 192 + Math.cos((angle * Math.PI) / 180) * radius;
          const y = 192 + Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <line
              key={index}
              x1="192"
              y1="192"
              x2={x}
              y2={y}
              stroke="url(#gradient)"
              strokeWidth="1"
              className={`transition-opacity duration-500 ${index === activeModule ? 'opacity-100' : 'opacity-30'}`}
            />
          );
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Status Label */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-400/30">
          <span className="text-sm font-semibold text-cyan-400">
            {modules[activeModule].label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FuturisticWebAnimation;