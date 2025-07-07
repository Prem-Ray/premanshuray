import React, { useState, useEffect } from 'react';

function Skills() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [visibleSkills, setVisibleSkills] = useState(0);

  const skills = [
    { 
      name: "C++", 
      level: 85, 
      color: "from-blue-400 to-cyan-400", 
      icon: "💻",
      description: "System Programming & DSA"
    },
    { 
      name: "JavaScript", 
      level: 90, 
      color: "from-yellow-400 to-orange-400", 
      icon: "⚡",
      description: "Modern ES6+ & DOM Manipulation"
    },
    { 
      name: "React", 
      level: 88, 
      color: "from-cyan-400 to-blue-400", 
      icon: "⚛️",
      description: "Hooks, Context & Component Design"
    },
    { 
      name: "HTML & CSS", 
      level: 92, 
      color: "from-pink-400 to-purple-400", 
      icon: "🎨",
      description: "Responsive Design & Animations"
    },
    { 
      name: "Tailwind CSS", 
      level: 87, 
      color: "from-purple-400 to-indigo-400", 
      icon: "🌈",
      description: "Utility-First CSS Framework"
    },
    { 
      name: "OOPs", 
      level: 84, 
      color: "from-emerald-400 to-teal-400", 
      icon: "🏗️",
      description: "Object-Oriented Programming Concepts"
    },
    { 
      name: "SQL", 
      level: 82, 
      color: "from-red-400 to-pink-400", 
      icon: "🗄️",
      description: "Database Design & Queries"
    },
    { 
      name: "Computer Network", 
      level: 78, 
      color: "from-green-400 to-teal-400", 
      icon: "🌐",
      description: "TCP/IP, Protocols & Network Security"
    },
    { 
      name: "Prompt Engineering", 
      level: 89, 
      color: "from-violet-400 to-purple-400", 
      icon: "🤖",
      description: "AI Model Optimization & Fine-tuning"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev < 100) return prev + 2;
        return prev;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSkills(prev => {
        if (prev < skills.length) return prev + 1;
        return prev;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [skills.length]);

  const CodeBlock = ({ children, className = "" }) => (
    <div className={`bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 font-mono text-sm border border-cyan-400/30 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-cyan-400 text-xs ml-2">~/skills</span>
      </div>
      {children}
    </div>
  );

  return (
    <section 
      id="skills" 
      className="min-h-screen bg-black relative overflow-hidden py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      
      {/* Matrix-like particles */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 60 }).map((_, i) => (
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

      {/* Floating code symbols */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-cyan-400/20 text-4xl font-mono animate-bounce">{`{}`}</div>
        <div className="absolute top-40 right-20 text-purple-400/20 text-3xl font-mono animate-pulse">{`</>`}</div>
        <div className="absolute bottom-32 left-20 text-pink-400/20 text-5xl font-mono animate-spin-slow">{`()`}</div>
        <div className="absolute bottom-20 right-32 text-yellow-400/20 text-4xl font-mono animate-bounce">{`[]`}</div>
      </div>

      <div className="container mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <CodeBlock className="max-w-3xl mx-auto mb-8">
            <div className="text-cyan-400">
              <span className="text-gray-500">1</span> <span className="text-purple-400">import</span> <span className="text-cyan-400">*</span> <span className="text-purple-400">as</span> <span className="text-blue-400">Skills</span> <span className="text-purple-400">from</span> <span className="text-green-400">'./premanshu-skills'</span>;
            </div>
            <div className="text-cyan-400">
              <span className="text-gray-500">2</span> <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-purple-400">new</span> <span className="text-cyan-400">FullStackDeveloper</span>();
            </div>
            <div className="text-cyan-400">
              <span className="text-gray-500">3</span> <span className="text-blue-400">developer</span>.<span className="text-cyan-400">loadSkills</span>().then(<span className="text-green-400">success</span>);
            </div>
          </CodeBlock>

          <h2 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
            <i className="fa-solid fa-laptop-code mr-4"></i>
            My <span className="text-orange-400 animate-pulse">Skills</span>
          </h2>

          {/* Loading Progress */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-cyan-400 text-sm font-mono mb-2">
              <span>Loading Skills...</span>
              <span>{loadingProgress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card w-full max-w-sm mx-auto transform transition-all duration-500 ${
                index < visibleSkills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse`}></div>
                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 h-full flex flex-col justify-between min-h-[320px]">
                  
                  {/* Terminal Header */}
                  <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                    <span className="text-cyan-400 text-xs font-mono ml-1 sm:ml-2 truncate">{skill.name.toLowerCase().replace(/\s+/g, '-')}.js</span>
                  </div>

                  <div className="flex-1 flex flex-col">
                    {/* Skill Icon */}
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">
                      <span className="hover:animate-bounce">{skill.icon}</span>
                    </div>

                    {/* Skill Name */}
                    <h3 className={`text-lg sm:text-xl font-bold text-center mb-2 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.name}
                    </h3>

                    {/* Description - Fixed height for consistency */}
                    <div className="text-gray-400 text-xs sm:text-sm text-center mb-3 sm:mb-4 font-mono flex-1 min-h-[2.5rem] flex items-center justify-center">
                      <p className="leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3 sm:mb-4">
                      <div className="flex justify-between text-xs text-cyan-400 mb-1">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: index < visibleSkills ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 200 + 500}ms`
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Code snippet - Fixed height */}
                    <div className="bg-gray-800/50 rounded p-2 font-mono text-xs mt-auto h-8 flex items-center">
                      <span className="text-gray-500">// </span>
                      <span className="text-cyan-400">Expert level</span>
                    </div>
                  </div>

                  {/* Hover effect indicator */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Terminal */}
        <div className="mt-16 text-center">
          <CodeBlock className="max-w-4xl mx-auto">
            <div className="text-cyan-400 space-y-1">
              <div>
                <span className="text-gray-500">$</span> <span className="text-purple-400">npm</span> <span className="text-cyan-400">run</span> <span className="text-green-400">build-awesome-projects</span>
              </div>
              <div className="text-green-400">
                <span className="text-gray-500"></span> Building incredible applications with these technologies... 🚀
              </div>
              <div className="text-yellow-400">
                <span className="text-gray-500"></span> Ready to collaborate and create something amazing! ✨
              </div>
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

export default Skills;