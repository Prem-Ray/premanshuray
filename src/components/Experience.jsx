import React, { useState, useEffect } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(true);
  const [terminalText, setTerminalText] = useState("");
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [matrixChars, setMatrixChars] = useState([]);
  const [codeLines, setCodeLines] = useState([]);
  const [glitchEffect, setGlitchEffect] = useState(false);

  const commands = [
    "ssh user@prasar-bharati.in",
    "Connecting to training server...",
    "Authentication successful ✓",
    "Loading professional training data...",
    "Initializing broadcast systems...",
    "Training module loaded successfully ✓"
  ];

  const matrixCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;':\",./<>?";
  const codeSnippets = [
    "transmit(frequency, power);",
    "if (signal.strength > threshold) {",
    "broadcast.start(AM_FM);",
    "studio.connect(antenna);",
    "modulate(carrier, signal);",
    "amplify(transmitter.power);",
    "tune(frequency.band);",
    "console.log('Broadcasting...');",
    "} catch (error) {",
    "signal.process(audio);",
    "equipment.calibrate();",
    "transmission.optimize();"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Initialize matrix effect
    const initMatrix = () => {
      const chars = [];
      const charCount = window.innerWidth < 768 ? 15 : 30; // Fewer on mobile
      for (let i = 0; i < charCount; i++) {
        chars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          char: matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)],
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
      setMatrixChars(chars);
    };

    initMatrix();
    setCodeLines(codeSnippets);

    // Infinite terminal typing effect
    const typeCommand = () => {
      if (currentCommand < commands.length) {
        let currentText = "";
        let charIndex = 0;
        
        const typeInterval = setInterval(() => {
          if (charIndex < commands[currentCommand].length) {
            currentText += commands[currentCommand][charIndex];
            setTerminalText(prev => prev + commands[currentCommand][charIndex]);
            charIndex++;
          } else {
            clearInterval(typeInterval);
            setTerminalText(prev => prev + "\n");
            setTimeout(() => {
              setCurrentCommand(prev => prev + 1);
            }, 500);
          }
        }, 50);
      } else {
        // Reset for infinite loop
        setTimeout(() => {
          setTerminalText("");
          setCurrentCommand(0);
          setSkillsVisible(true);
        }, 2000);
      }
    };

    const timeout = setTimeout(typeCommand, 1000);

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Matrix animation
    const matrixInterval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => ({
        ...char,
        y: (char.y + char.speed) % 100,
        char: matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)]
      })));
    }, 150);

    // Handle window resize
    const handleResize = () => {
      initMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
      clearInterval(matrixInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentCommand]);

  const skills = [
    "AM/FM Transmission Systems",
    "Studio Installation",
    "High Power Medium Wave Transmitters",
    "FM Transmitters",
    "Electronic & Electrical Equipment",
    "Broadcasting Technology",
    "Satellite Broadcasting"
  ];

  return (
    <section
      id="experience"
      className="min-h-screen pt-12 md:pt-5 bg-gray-900 relative overflow-hidden"
    >
      {/* Subtle matrix background */}
      <div className="absolute inset-0">
        {matrixChars.map((char) => (
          <div
            key={char.id}
            className="absolute text-slate-400 font-mono text-xs sm:text-sm"
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              opacity: char.opacity,
              textShadow: "0 0 3px rgba(148, 163, 184, 0.3)"
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Subtle falling code lines */}
      <div className="absolute inset-0 pointer-events-none">
        {codeLines.slice(0, window.innerWidth < 768 ? 6 : 12).map((line, i) => (
          <div
            key={i}
            className="absolute text-slate-500 font-mono text-xs opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              textShadow: "0 0 2px rgba(100, 116, 139, 0.2)"
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Subtle scanning lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-10"
             style={{ top: "20%", animationDuration: "4s" }}></div>
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-8"
             style={{ top: "60%", animationDuration: "5s", animationDelay: "2s" }}></div>
      </div>

      {/* Subtle circuit board lines */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          {[...Array(window.innerWidth < 768 ? 3 : 6)].map((_, i) => (
            <g key={i}>
              <line
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#subtleGradient)"
                strokeWidth="1"
                style={{ animationDelay: `${i * 0.8}s` }}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="subtleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-block mb-6 sm:mb-8 relative">
            <div className="bg-gray-800 border-2 border-slate-600 rounded-lg p-3 sm:p-4 lg:p-6 font-mono shadow-xl shadow-slate-700/20">
              <div className="text-slate-400 mb-1 sm:mb-2 text-xs sm:text-sm">
                <span>●</span> SYSTEM ONLINE
              </div>
              <div className="text-white text-xs sm:text-sm">
                <span className="text-slate-400">root@developer:</span>
                <span className="text-blue-400">~/training$</span>
                <span className="ml-2 break-all">initialize_session</span>
              </div>
              <div className="text-blue-300 mt-2 h-24 sm:h-32 overflow-hidden text-xs sm:text-sm">
                <pre className="whitespace-pre-wrap break-words">{terminalText}</pre>
                {showCursor && <span className="bg-slate-400 text-gray-800">█</span>}
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-3 relative leading-tight">
            <span className="text-slate-400">&lt;</span>
            <span className="bg-gradient-to-r from-slate-300 to-blue-300 bg-clip-text text-transparent">
              PROFESSIONAL
            </span>
            <span className="text-slate-400">/&gt;</span>
            <br />
            <span className="text-blue-400">&lt;</span>
            <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              TRAINING
            </span>
            <span className="text-blue-400">/&gt;</span>
          </h2>
          <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-slate-400 to-blue-400 mx-auto"></div>
        </div>

        {/* Main Experience Card */}
        <div className={`max-w-6xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative group">
            {/* Subtle glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-500 via-blue-500 to-slate-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            
            {/* Main terminal card */}
            <div className="relative bg-gray-800 border-2 border-slate-600 rounded-lg shadow-xl shadow-slate-700/30 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border-b-2 border-slate-600">
                <div className="flex space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full shadow-sm"></div>
                </div>
                <span className="text-slate-400 font-mono text-xs sm:text-sm hidden sm:block">~/training/broadcast_systems</span>
                <div className="text-blue-300 font-mono text-xs hidden lg:block">
                  CPU: 100% | RAM: 8GB | STATUS: ACTIVE
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8 xl:p-12 relative">
                {/* Company section */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                  <div className="relative group">
                    <div className="w-20 h-11 sm:w-24 sm:h-14 lg:w-32 lg:h-16 xl:w-36 xl:h-24  rounded-xl lg:rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                      <img src="/prasarbharati.jpg" alt="" />
                      {/* 
                      <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl font-mono">PB</span> */}
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-mono text-slate-300 mb-2 sm:mb-3">
                      PRASAR_BHARATI
                    </h3>
                    <p className="text-blue-300 text-sm sm:text-base lg:text-lg xl:text-xl font-mono">// India's Public Service Broadcaster</p>
                    <p className="text-slate-400 font-mono text-xs sm:text-sm lg:text-base">location: Akashvani, Kolkata</p>
                  </div>
                </div>

                {/* Code description */}
                <div className="bg-gray-700 border-2 border-slate-600 rounded-lg p-3 sm:p-4 lg:p-6 mb-6 sm:mb-8 font-mono relative overflow-hidden hover:border-slate-500 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400 to-blue-400 opacity-60"></div>
                  <div className="text-slate-400 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
                    <span className="text-slate-500">/**</span>
                    <br />
                    <span className="text-slate-500"> * Professional Training Overview</span>
                    <br />
                    <span className="text-slate-500"> * Comprehensive vocational training program</span>
                    <br />
                    <span className="text-slate-500"> * Focus: Radio Communication Systems</span>
                    <br />
                    <span className="text-slate-500"> */</span>
                  </div>
                  <div className="text-slate-300 leading-relaxed text-xs sm:text-sm lg:text-base">
                    <span className="text-blue-300">const</span> <span className="text-white">training</span> <span className="text-slate-400">=</span> <span className="text-yellow-300">&#123;</span><br />
                    &nbsp;&nbsp;<span className="text-red-300">institution</span><span className="text-slate-400">:</span> <span className="text-emerald-300">'Prasar Bharati'</span><span className="text-white">,</span><br />
                    &nbsp;&nbsp;<span className="text-red-300">specialization</span><span className="text-slate-400">:</span> <span className="text-emerald-300">'Broadcasting Technology'</span><span className="text-white">,</span><br />
                    &nbsp;&nbsp;<span className="text-red-300">location</span><span className="text-slate-400">:</span> <span className="text-emerald-300">'Akashvani, Kolkata'</span><span className="text-white">,</span><br />
                    &nbsp;&nbsp;<span className="text-red-300">status</span><span className="text-slate-400">:</span> <span className="text-emerald-300">'completed'</span><br />
                    <span className="text-yellow-300">&#125;</span><span className="text-white">;</span>
                  </div>
                </div>

                {/* Skills array */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-300 mb-4 sm:mb-6 font-mono">
                    <span className="text-blue-300">const</span> skills <span className="text-slate-400">=</span> <span className="text-yellow-300">[</span>
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 ml-2 sm:ml-4">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className={`transform transition-all duration-700 hover:scale-105 ${
                          skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                      >
                        <div className="bg-gray-700 border-2 border-slate-600 rounded-lg p-3 sm:p-4 hover:border-slate-500 transition-all duration-300 hover:shadow-lg hover:shadow-slate-600/20 relative overflow-hidden group">
                          <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-slate-500/10 to-blue-500/10 group-hover:w-full transition-all duration-500"></div>
                          <div className="flex items-center space-x-2 sm:space-x-3 relative z-10">
                            <span className="text-slate-400 font-mono text-xs sm:text-sm">{String(index).padStart(2, '0')}:</span>
                            <span className="text-slate-200 font-mono text-xs sm:text-sm group-hover:text-white transition-colors break-words">'{skill}'</span>
                            <span className="text-white font-mono text-xs sm:text-sm">,</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 sm:mt-4 text-yellow-300 font-mono text-lg sm:text-xl lg:text-2xl">];</div>
                </div>

               

                {/* Certificate button */}
                <div className="text-center">
                  <a
                    href="https://drive.google.com/file/d/10MtDp_dGMDhRXGQnXzfMVh8eL6A_he4I/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-slate-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 font-mono relative overflow-hidden group text-sm sm:text-base"
                  >
                    <span className="text-base sm:text-xl">📋</span>
                    <span>viewCertificate()</span>
                    <span className="text-base sm:text-lg">⚡</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle floating elements - responsive positioning */}
      <div className="absolute top-16 sm:top-20 right-4 sm:right-10 opacity-20">
        <div className="text-slate-400 font-mono text-2xl sm:text-3xl lg:text-4xl">{ }</div>
      </div>
      
      <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-10 opacity-20">
        <div className="text-blue-400 font-mono text-lg sm:text-xl lg:text-2xl">&lt;/dev&gt;</div>
      </div>

      <div className="absolute top-1/3 left-4 sm:left-10 opacity-15">
        <div className="text-slate-400 font-mono text-2xl sm:text-3xl lg:text-4xl">⚙️</div>
      </div>

      <div className="absolute top-1/2 right-8 sm:right-20 opacity-15">
        <div className="text-blue-400 font-mono text-xl sm:text-2xl lg:text-3xl">🔧</div>
      </div>
    </section>
  );
};

export default Experience;