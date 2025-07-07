import React, { useState, useEffect } from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [matrixChars, setMatrixChars] = useState([]);

  const codeLines = [
    "console.log('Hello World! 🌍');",
    "const developer = 'Premanshu Ray';",
    "if (coding === passion) {",
    "  return awesomeProjects();",
    "}"
  ];

  useEffect(() => {
    const chars = [];
    for (let i = 0; i < 50; i++) {
      chars.push({
        char: Math.random() > 0.5 ? '0' : '1',
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    setMatrixChars(chars);

    const interval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => ({
        ...char,
        y: char.y > 100 ? -10 : char.y + char.speed,
        char: Math.random() > 0.95 ? (Math.random() > 0.5 ? '0' : '1') : char.char
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

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/Prem-Ray', 
      icon: '🐱', 
      color: 'from-gray-400 to-gray-600',
      hoverColor: 'hover:from-green-400 hover:to-green-600'
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/RayPremanshu', 
      icon: '🐦', 
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:from-cyan-400 hover:to-cyan-600'
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/iampremray/', 
      icon: '📸', 
      color: 'from-pink-400 to-pink-600',
      hoverColor: 'hover:from-purple-400 hover:to-purple-600'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/premanshuray/', 
      icon: '💼', 
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-indigo-400 hover:to-indigo-600'
    }
  ];

  const FloatingElement = ({ delay = 0, children }) => (
    <div 
      className="animate-pulse"
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.5); }
          50% { box-shadow: 0 0 40px rgba(255, 0, 255, 0.8); }
        }
        
        @keyframes slideInLeft {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInUp {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes hologram {
          0%, 100% { 
            background-position: 0% 50%;
            filter: hue-rotate(0deg);
          }
          50% { 
            background-position: 100% 50%;
            filter: hue-rotate(180deg);
          }
        }
        
        @keyframes matrix {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        .hologram-bg {
          background: linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff);
          background-size: 400% 400%;
          animation: hologram 4s ease-in-out infinite;
        }
        
        .cyber-border {
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        
        @media (min-width: 768px) {
          .cyber-border {
            clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
          }
        }
        
        .text-glow {
          text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
        }
        
        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        @media (max-width: 640px) {
          .slide-in-left, .slide-in-right {
            animation: slideInUp 0.8s ease-out forwards;
          }
        }
      `}</style>
      
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
      >

        <h3 className="font-semibold flex text-lg sm:text-xl md:text-2xl mb-6 mt-16 md:mb-6 md:mt-4">
              <span className="text-orange-400 italic text-2xl sm:text-3xl md:text-4xl text-glow">Hello,</span>
              <span className="text-cyan-400 italic text-lg sm:text-2xl md:text-3xl ml-2 text-glow">It's Me</span>
              <span className="text-cyan-400 italic text-lg sm:text-2xl md:text-3xl ml-2 text-glow">Premanshu Ray</span>
              <FloatingElement delay={0.5}>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-2">👋</span>
              </FloatingElement>
        </h3>

        {/* Matrix Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {matrixChars.map((char, index) => (
            <div
              key={index}
              className="absolute text-green-400 text-xs font-mono"
              style={{
                left: `${char.x}%`,
                top: `${char.y}%`,
                opacity: char.opacity,
                animation: `matrix 3s linear infinite`
              }}
            >
              {char.char}
            </div>
          ))}
        </div>

        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10 pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        {/* Main Container */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
          
          {/* Profile Image - Mobile First */}
          <div className="order-1 lg:order-2 z-10 slide-in-up lg:slide-in-right">
            <FloatingElement delay={0.8}>
              <div className="relative group">
                {/* Holographic border */}
                <div className="absolute inset-0 hologram-bg rounded-full p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-black"></div>
                </div>
                
                {/* Profile image */}
               <img
                  src="/premanshuray.jpg"
                  alt="Premanshu Ray"
                  className="relative z-10 select-none rounded-full border-4 border-transparent shadow-2xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
                  style={{ animation: 'glow 3s ease-in-out infinite' }}
                />
                
                {/* Rotating rings */}
                <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-spin opacity-30" style={{ animation: 'spin 10s linear infinite' }}></div>
                <div className="absolute inset-2 border-2 border-pink-400 rounded-full animate-spin opacity-30" style={{ animation: 'spin 8s linear infinite reverse' }}></div>
                
                {/* Floating tech icons - responsive positioning */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-lg sm:text-xl md:text-2xl animate-bounce">💻</div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 text-lg sm:text-xl md:text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>⚡</div>
                <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 text-lg sm:text-xl md:text-2xl animate-bounce" style={{ animationDelay: '1s' }}>🔥</div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 text-lg sm:text-xl md:text-2xl animate-bounce" style={{ animationDelay: '1.5s' }}>🚀</div>
              </div>
            </FloatingElement>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left max-w-2xl z-10 slide-in-up lg:slide-in-left w-full">
            {/* Terminal-style Code Block */}
            <div className="bg-gray-900 rounded-lg p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 border border-cyan-500 shadow-lg shadow-cyan-500/25">
              <div className="flex items-center mb-2">
                <div className="flex space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-2 sm:ml-4 text-gray-400 font-mono text-xs sm:text-sm">~/premanshu-ray</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-green-400 overflow-x-auto">
                {codeLines.map((line, index) => (
                  <div key={index} className="mb-1 opacity-70 whitespace-nowrap">
                    <span className="text-gray-500">{index + 1}.</span> {line}
                  </div>
                ))}
                <div className="mt-2 text-cyan-400 whitespace-nowrap">
                  <span className="text-gray-500">6.</span> // Ready to code amazing things!
                  {showCursor && <span className="animate-pulse">|</span>}
                </div>
              </div>
            </div>

            {/* Greeting */}
            {/* <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">
              <span className="text-orange-400 italic text-2xl sm:text-3xl md:text-4xl text-glow">Hello,</span>
              <span className="text-cyan-400 italic text-lg sm:text-2xl md:text-3xl ml-2 text-glow">It's Me</span>
              <FloatingElement delay={0.5}>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-2">👋</span>
              </FloatingElement>
            </h3> */}

            {/* Name with hologram effect */}
            {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 relative">
              <span className="hologram-bg bg-clip-text text-transparent font-mono">
                Premanshu Ray
              </span>
              <FloatingElement delay={1}>
                <span className="ml-2 text-2xl sm:text-3xl md:text-4xl">😊</span>
              </FloatingElement>
            </h1> */}

            {/* Description with cyber styling */}
            <div className="mt-4 p-3 sm:p-4 md:p-5 bg-gray-900/50 rounded-lg border border-pink-500/30 backdrop-blur-sm">
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                <span className="text-cyan-400 font-mono">&gt; </span>
                I am interested in the role of a <span className="text-yellow-400 font-mono">Front-End Developer & Software Engineer</span> where I can contribute my analytical skills and knowledge acquired by pursuing my degree in <span className="text-pink-400 font-mono">Engineering</span>. Looking for a dynamic and progressive company where my skills are utilized in the maximum way possible.
              </p>
            </div>

            {/* Social Links with enhanced styling */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-4">
          <a href="https://github.com/Prem-Ray" target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-2xl border-4 rounded-full p-2 hover:border-green-600 hover:text-white">
            <FaGithub />
          </a>
          <a href="https://x.com/RayPremanshu" target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-2xl border-4 rounded-full p-2 hover:border-orange-600 hover:text-blue-600">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/iampremray/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-2xl border-4 rounded-full p-2 hover:border-blue-600 hover:text-pink-700">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/premanshuray/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-2xl border-4 rounded-full p-2 hover:border-pink-600 hover:text-blue-600">
            <FaLinkedin />
          </a>
        </div>

            {/* CTA Button */}
          {/* <div className="mt-6">
            <HashLink to="/about" className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-cyan-600 hover:to-blue-600 transition duration-300">
              Read more
            </HashLink>
          </div> */}


            <div className="mt-6">
  <HashLink
    to="/about"
    className="
      inline-flex items-center gap-2 px-8 py-3
      bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
      text-white font-bold rounded-xl shadow-xl
      hover:from-blue-500 hover:via-purple-600 hover:to-pink-500
      hover:scale-105 active:scale-95
      transition-all duration-300 ease-in-out
      ring-2 ring-cyan-300 focus:outline-none focus:ring-4 focus:ring-blue-200
      animate-gradient-x
    "
    style={{
      backgroundSize: '200% 200%',
      animation: 'gradient-x 3s ease infinite',
    }}
  >
    Read more
    <FaArrowRight className="ml-2 text-lg transition-transform group-hover:translate-x-1" />
  </HashLink>
</div>

<style>
{`
@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`}
</style>





          </div>
        </div>
      </section>
    </>
  );
};

export default Home;