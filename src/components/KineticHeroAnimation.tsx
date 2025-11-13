const KineticHeroAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Swirling Paint Strokes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="stroke1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b6b" />
            <stop offset="50%" stopColor="#4ecdc4" />
            <stop offset="100%" stopColor="#45b7d1" />
          </linearGradient>
          <linearGradient id="stroke2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#96ceb4" />
            <stop offset="50%" stopColor="#feca57" />
            <stop offset="100%" stopColor="#ff9ff3" />
          </linearGradient>
          <linearGradient id="stroke3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#54a0ff" />
            <stop offset="50%" stopColor="#5f27cd" />
            <stop offset="100%" stopColor="#00d2d3" />
          </linearGradient>
        </defs>
        
        <path
          d="M100,300 Q200,100 400,200 T700,150"
          stroke="url(#stroke1)"
          strokeWidth="8"
          fill="none"
          className="animate-paint-flow"
          strokeLinecap="round"
        />
        <path
          d="M150,450 Q350,250 550,350 T750,300"
          stroke="url(#stroke2)"
          strokeWidth="6"
          fill="none"
          className="animate-paint-flow-reverse"
          strokeLinecap="round"
        />
        <path
          d="M50,150 Q250,350 450,100 T650,400"
          stroke="url(#stroke3)"
          strokeWidth="10"
          fill="none"
          className="animate-paint-flow-slow"
          strokeLinecap="round"
        />
      </svg>

      {/* Liquid Gradient Blobs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-full blur-xl animate-blob" />
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-lg animate-blob-reverse" />
      <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 rounded-full blur-2xl animate-blob-slow" />
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 rounded-full blur-xl animate-blob" />

      {/* Floating 3D Shapes */}
      <div className="absolute inset-0">
        {/* Orbiting Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const radius = 200 + (i % 2) * 50;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div
                key={i}
                className="absolute animate-orbit"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${8 + (i % 3) * 2}s`
                }}
              >
                {i % 4 === 0 && (
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg transform rotate-45 animate-spin-slow" />
                )}
                {i % 4 === 1 && (
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse" />
                )}
                {i % 4 === 2 && (
                  <div className="w-5 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full animate-bounce-slow" />
                )}
                {i % 4 === 3 && (
                  <div className="w-7 h-7 bg-gradient-to-br from-pink-400 to-red-500 transform rotate-12 animate-wiggle" />
                )}
              </div>
            );
          })}
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full animate-float-particle"
            style={{
              left: `${10 + (i * 6) % 80}%`,
              top: `${15 + (i * 7) % 70}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* Central Logo Space - Invisible but reserves space */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-32 pointer-events-none" />

      {/* Reactive Motion Elements */}
      <div className="absolute top-10 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 animate-reactive-motion" />
      <div className="absolute bottom-10 right-1/4 w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg opacity-70 animate-reactive-motion-reverse" />
      <div className="absolute top-1/3 right-10 w-20 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-50 animate-reactive-motion-slow" />
    </div>
  );
};

export default KineticHeroAnimation;