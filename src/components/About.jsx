import React, { useState, useEffect } from 'react';

const About = () => {
  const [matrixChars, setMatrixChars] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "Graduated in 2025 from St. Thomas' College of Engineering & Technology with a degree in Electronics & Communication Engineering, I thrive on solving real-world problems through innovation and hands-on execution. I have designed and delivered impactful projects and actively engaged in industry-level training to sharpen my practical understanding. I aim to contribute to forward-thinking teams, embrace new challenges, and continuously evolve through learning and collaboration.";

  useEffect(() => {
    const chars = [];
    const charCount = window.innerWidth < 768 ? 30 : window.innerWidth < 1024 ? 40 : 50;
    for (let i = 0; i < charCount; i++) {
      chars.push({
        char: Math.random() > 0.5 ? '0' : '1',
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1
      });
    }
    setMatrixChars(chars);

    const interval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => ({
        ...char,
        y: char.y > 100 ? -10 : char.y + char.speed,
        char: Math.random() > 0.98 ? (Math.random() > 0.5 ? '0' : '1') : char.char
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 
              0 0 20px rgba(255, 165, 0, 0.3),
              0 0 40px rgba(255, 165, 0, 0.2),
              0 0 60px rgba(255, 165, 0, 0.1);
          }
          50% { 
            box-shadow: 
              0 0 30px rgba(255, 165, 0, 0.5),
              0 0 60px rgba(255, 165, 0, 0.4),
              0 0 90px rgba(255, 165, 0, 0.3);
          }
        }
        
        @keyframes hologram-border {
          0% { 
            background-position: 0% 50%;
            box-shadow: 0 0 20px rgba(255, 165, 0, 0.4);
          }
          50% { 
            background-position: 100% 50%;
            box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
          }
          100% { 
            background-position: 0% 50%;
            box-shadow: 0 0 20px rgba(255, 165, 0, 0.4);
          }
        }
        
        @keyframes scan-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes neon-text {
          0%, 100% { 
            text-shadow: 
              0 0 5px currentColor,
              0 0 10px currentColor,
              0 0 15px currentColor,
              0 0 20px currentColor;
          }
          50% { 
            text-shadow: 
              0 0 10px currentColor,
              0 0 20px currentColor,
              0 0 30px currentColor,
              0 0 40px currentColor;
          }
        }
        
        @keyframes slide-in {
          0% { 
            transform: translateY(50px);
            opacity: 0;
          }
          100% { 
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .hologram-border {
          background: linear-gradient(45deg, #ff6b00, #00ffff, #ff6b00, #00ffff);
          background-size: 400% 400%;
          animation: hologram-border 4s ease-in-out infinite;
        }
        
        .cyber-card {
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 165, 0, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .cyber-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
          animation: scan-line 3s linear infinite;
        }
        
        .terminal-window {
          background: linear-gradient(145deg, #1a1a2e, #16213e);
          border: 2px solid #ff6b00;
          border-radius: 12px;
          box-shadow: 
            0 0 20px rgba(255, 165, 0, 0.3),
            inset 0 0 20px rgba(0, 0, 0, 0.5);
        }
        
        .text-neon {
          animation: neon-text 2s ease-in-out infinite;
        }
        
        .slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }
        
        .floating {
          animation: float 4s ease-in-out infinite;
        }
        
        .profile-image {
          border-radius: 12px;
          border: 4px solid transparent;
          background: linear-gradient(45deg, #ff6b00, #00ffff, #ff6b00) border-box;
          box-shadow: 
            0 0 30px rgba(255, 165, 0, 0.5),
            0 0 60px rgba(0, 255, 255, 0.3);
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .resume-button {
          background: linear-gradient(45deg, #ff6b00, #ffa500);
          border: 2px solid #ff6b00;
          border-radius: 25px;
          color: white;
          font-weight: bold;
          font-family: 'Monaco', monospace;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 
            0 0 20px rgba(255, 165, 0, 0.4),
            0 4px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .resume-button:hover {
          background: linear-gradient(45deg, #ffa500, #00ffff);
          border-color: #00ffff;
          box-shadow: 
            0 0 30px rgba(0, 255, 255, 0.6),
            0 4px 20px rgba(0, 0, 0, 0.4);
          transform: translateY(-2px);
        }
        
        .resume-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .resume-button:hover::before {
          left: 100%;
        }
        
        .matrix-char {
          position: absolute;
          font-family: 'Monaco', monospace;
          color: #ff6b00;
          pointer-events: none;
          opacity: 0.6;
        }
        
        .cyber-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 165, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 165, 0, 0.1) 1px, transparent 1px);
          opacity: 0.3;
          pointer-events: none;
        }
        
        .typewriter {
          font-family: 'Monaco', monospace;
          line-height: 1.6;
        }
        
        .highlight-orange {
          color: #ff6b00;
          font-weight: bold;
        }
        
        .highlight-cyan {
          color: #00ffff;
          font-weight: bold;
        }
        
        .highlight-pink {
          color: #ff69b4;
          font-weight: bold;
        }
        
        /* Responsive styles */
        @media (max-width: 640px) {
          .matrix-char {
            font-size: 10px;
          }
          .cyber-grid {
            background-size: 20px 20px;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .matrix-char {
            font-size: 11px;
          }
          .cyber-grid {
            background-size: 25px 25px;
          }
        }
        
        @media (min-width: 1025px) {
          .matrix-char {
            font-size: 12px;
          }
          .cyber-grid {
            background-size: 30px 30px;
          }
        }
      `}</style>

      <section className="relative min-h-screen bg-black text-white pb-8 pt-24 sm:pt-24 sm:py-12 md:pb-16 lg:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
        {/* Matrix Background */}
        <div className="absolute inset-0 overflow-hidden">
          {matrixChars.map((char, index) => (
            <div
              key={index}
              className="matrix-char"
              style={{
                left: `${char.x}%`,
                top: `${char.y}%`,
                opacity: char.opacity
              }}
            >
              {char.char}
            </div>
          ))}
        </div>

        {/* Cyber Grid */}
        <div className="cyber-grid"></div>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Terminal Header */}
          <div className="terminal-window p-3 sm:p-4 md:p-5 lg:p-6 mb-6 sm:mb-8 slide-in">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="flex space-x-1.5 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-3 sm:ml-4 text-cyan-400 font-mono text-xs sm:text-sm">~/about-me</span>
            </div>
            <div className="font-mono text-xs sm:text-sm">
              <span className="text-cyan-400">user@premanshu:~$</span>
              <span className="text-orange-400 ml-2">cat profile.txt</span>
              {showCursor && <span className="text-white ml-1 animate-pulse">|</span>}
            </div>
          </div>

          {/* Main Content Grid - Modified for wider right section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-y-10 gap-x-6 lg:gap-x-8 xl:gap-x-12 2xl:gap-x-16 max-w-7xl mx-auto px-4 pt-9 sm:px-6 lg:px-8">

            {/* Left Side - Profile + Button (Takes 2 columns) */}
            <div className="flex flex-col items-center justify-start space-y-6 lg:col-span-2 lg:sticky lg:top-8">
              
              {/* Profile Section */}
              <div className="relative inline-block animate-float">
                <img
                  src="/premam.jpg"
                  alt="Premanshu Ray"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 rounded-full object-cover shadow-lg"
                />
                <div className="absolute -top-2 -right-2 text-orange-400 text-lg animate-bounce">🔧</div>
                <div className="absolute -bottom-2 -left-2 text-cyan-400 text-lg animate-bounce" style={{ animationDelay: '0.5s' }}>⚡</div>
                <div className="absolute -top-2 -left-2 text-green-400 text-lg animate-bounce" style={{ animationDelay: '1s' }}>📡</div>
              </div>

              {/* Profile Info */}
              <div className="text-center space-y-2">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">
                  Premanshu Ray
                </h3>
                <p className="text-orange-400 text-base lg:text-lg font-mono">
                  ECE Graduate '25
                </p>
                <div className="flex items-center justify-center space-x-2 text-cyan-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs lg:text-sm">Available for opportunities</span>
                </div>
              </div>

              {/* Coding Style Resume Button */}
              <div className="w-full max-w-sm">
                <div className="cyber-card rounded-lg p-3 mb-2">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="ml-2 text-cyan-400 font-mono text-xs">~/documents</span>
                  </div>
                  <div className="font-mono text-xs text-gray-400 mb-3">
                    <span className="text-green-400">$</span>
                    <span className="text-yellow-400 ml-1">wget</span>
                    <span className="text-white ml-1">resume.pdf</span>
                  </div>
                  <a
                    href="/PREMANSHU_RAY_RESUME.pdf"
                    download="Premanshu_Ray_Resume.pdf"
                  >
                    <button className="w-full group relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-orange-500 rounded-md py-3 px-4 text-sm font-mono text-white hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-green-400 group-hover:text-cyan-400 transition-colors">⚡</span>
                        <span className="text-orange-400 group-hover:text-white transition-colors">download</span>
                        <span className="text-gray-400 group-hover:text-cyan-400 transition-colors">--resume</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - About Section (Takes 3 columns for wider rectangular shape) */}
            <div className="w-full slide-in lg:col-span-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 flex items-center justify-center lg:justify-start">
                <span className="text-pink-500 mr-2 lg:mr-3">📢</span>
                <span className="text-white">About</span>
                <span className="text-orange-500 ml-2 lg:ml-3 text-neon">Me</span>
              </h1>

              <div className="cyber-card rounded-lg p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6 lg:mb-8 w-full">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-semibold flex items-center justify-center lg:justify-start">
                  <span className="text-cyan-400 mr-2 lg:mr-3">💡</span>
                  <span className="text-cyan-400 font-mono">&gt;</span>
                  <span className="text-yellow-400 ml-2 lg:ml-3">Electronics & Communication Engineer</span>
                </h2>
              </div>

              <div className="cyber-card rounded-lg px-4 py-5 sm:p-6 md:p-8 lg:p-8 xl:p-10 w-full text-justify min-h-[320px] lg:min-h-[360px] xl:min-h-[380px]">
                <p className="text-gray-300 text-justify text-sm sm:text-base md:text-base lg:text-lg xl:text-xl leading-relaxed">
                  <span className="text-green-400 font-mono text-sm lg:text-base xl:text-lg">&gt; </span>
                  <span className="typewriter">{typewriterText}</span>
                  {typewriterText.length < fullText.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;