import React, { useState, useEffect } from 'react';

function Education() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Education is not the learning of facts, but the training of the mind to think.';

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        // Pause before restarting
        setTimeout(() => {
          setTypedText('');
          setCurrentIndex(0);
        }, 1000); // 1 second pause before restarting
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [currentIndex]);







  const CodeBlock = ({ children, className = "" }) => (
    <div className={`bg-gray-900 rounded-lg p-4 font-mono text-sm border border-cyan-400/30 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      {children}
    </div>
  );

  return (
    <section 
      id='education' 
      className="min-h-screen bg-black relative overflow-hidden py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      
      {/* Matrix-like particles */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-400/30 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-pink-400/30 rotate-12 animate-pulse"></div>
      </div>

      <div className="container mx-auto text-center px-6 sm:px-10 md:px-16 relative z-10">
        {/* Header with terminal styling */}
        <div className="mb-12">
          <CodeBlock className="max-w-2xl mx-auto mb-8">
            <div className="text-cyan-400">
              <span className="text-gray-500">1</span> <span className="text-purple-400">console</span>.<span className="text-cyan-400">log</span>(<span className="text-green-400">'Welcome to Education Portal! 🎓'</span>);
            </div>
            <div className="text-cyan-400">
              <span className="text-gray-500">2</span> <span className="text-purple-400">const</span> <span className="text-blue-400">student</span> = <span className="text-green-400">'Premanshu Ray'</span>;
            </div>
            <div className="text-cyan-400">
              <span className="text-gray-500">3</span> <span className="text-purple-400">return</span> <span className="text-blue-400">amazingEducation</span>();
            </div>
          </CodeBlock>

          <h1 className="text-4xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            <i className="fas fa-graduation-cap mr-4"></i>
            My <span className="text-pink-400 animate-bounce">Education</span>
          </h1>
          
          <div className="text-lg sm:text-xl text-cyan-300 mb-4 font-mono">
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
        </div>

        {/* Education Cards */}
        <div className="space-y-8 max-w-6xl mx-auto">
          
          {/* Bachelor's Degree */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                
                {/* Terminal Window for Image */}
                <div className="lg:w-1/3">
                  <div className="bg-gray-800 rounded-lg p-4 border border-cyan-400/30">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-cyan-400 text-xs font-mono ml-2">~/college</span>
                    </div>
                    <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20"></div>
                       <img src="./stcet.jpg" alt="" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3 text-left">
                  <div className="mb-4">
                    <span className="text-cyan-400 font-mono text-sm">// Bachelor Education</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-4">
                    Bachelor of Technology
                  </h3>
                  <div className="space-y-2 font-mono">
                    <p className="text-cyan-300">
                      <span className="text-purple-400">Field:</span> <span className="text-green-400">Electronics & Communication Engineering</span>
                    </p>
                    <p className="text-cyan-300">
                      <span className="text-purple-400">Institution:</span> <span className="text-green-400">St. Thomas' College of Engineering & Technology</span>
                    </p>
                    <p className="text-cyan-300">
                      <span className="text-purple-400">Duration:</span> <span className="text-yellow-400">2021-2025</span> | <span className="text-green-400 animate-pulse">✓ Completed</span>
                    </p>
                  </div>

                  {/* Status Badge */}
                  <div className="mt-6">
                    <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 font-mono text-sm">STATUS: COMPLETED</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  {/* <div className="mt-6">
                    <div className="flex justify-between text-sm text-cyan-400 mb-2">
                      <span>Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Higher Secondary */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 border border-blue-400/30 hover:border-blue-400 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                
                {/* Terminal Window for Image */}
                <div className="lg:w-1/3">
                  <div className="bg-gray-800 rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-blue-400 text-xs font-mono ml-2">~/school</span>
                    </div>
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20"></div>
                      <img src="./saorahs.jpg" alt="" />
                      {/* <div className="text-6xl text-white/80">🎓</div> */}
                      {/* <div className="absolute bottom-2 left-2 text-xs text-blue-400 font-mono">SAORAHS.jpg</div> */}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3 text-left">
                  <div className="mb-4">
                    <span className="text-blue-400 font-mono text-sm">// Higher Secondary Education</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-4">
                    Higher Secondary Education
                  </h3>
                  <div className="space-y-2 font-mono">
                    <p className="text-blue-300">
                      <span className="text-purple-400">Stream:</span> <span className="text-green-400">12th Science</span>
                    </p>
                    <p className="text-blue-300">
                      <span className="text-purple-400">Institution:</span> <span className="text-green-400">Saora Union High School | WBCHSE</span>
                    </p>
                    <p className="text-blue-300">
                      <span className="text-purple-400">Duration:</span> <span className="text-yellow-400">2019-2021</span> | <span className="text-green-400">✓ Completed</span>
                    </p>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="mt-6">
                    <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 font-mono text-sm">STATUS: COMPLETED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Terminal */}
        <div className="mt-16">
          <CodeBlock className="max-w-3xl mx-auto">
            <div className="text-cyan-400">
              <span className="text-gray-500">$</span> <span className="text-purple-400">git</span> <span className="text-cyan-400">commit</span> <span className="text-green-400">-m</span> <span className="text-yellow-400">"Education journey in progress... 🚀"</span>
            </div>
            <div className="text-green-400 mt-2">
              <span className="text-gray-500"></span> Ready to code amazing things! 💻
            </div>
          </CodeBlock>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Education;