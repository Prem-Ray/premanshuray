import React, { useState, useEffect } from 'react';

function Projects() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(0);

  const projectData = [
    {
      title: "🏥 Smart & Early Abnormality Diagnosis System",
      description: "Developing an IoT-based health monitoring system for real-time SpO₂, heart rate, BMI, and ECG tracking and also booking appointment for Doctor.",
      link: "https://ecegroup2.github.io/",
      github: "https://github.com/ecegroup2/ecegroup2.github.io",
      tech: ["IoT", "React", "JavaScript", "HTML/CSS"],
      color: "from-red-400 to-pink-400",
      icon: "🏥",
      image: "/smarthelth.jpg"
    },
    {
      title: "🌐 FindGit",
      description: "Explore GitHub profiles effortlessly. View detailed information about repositories, followers, and more.",
      link: "https://findgitcoder.netlify.app/",
      github: "https://github.com/Prem-Ray/FindGit",
      tech: ["React", "GitHub API", "CSS"],
      color: "from-purple-400 to-violet-400",
      icon: "🔍",
      image: "/git.png"
    },
    {
      title: "🌟 Quiz Application",
      description: "The application dynamically displays questions, evaluates responses in real-time, and showcases scores at the end of the quiz.",
      link: "https://kheloquiz.netlify.app/",
      github: "https://github.com/Prem-Ray/quizapplication",
      tech: ["JavaScript", "HTML", "CSS"],
      color: "from-indigo-400 to-purple-400",
      icon: "❓",
      image: "/quiz.png"
    },
    {
      title: "🔑 Password Generator",
      description: "Generate secure, customizable passwords with this web tool.",
      link: "https://paswordgeneratorapplication.netlify.app/",
      github: "https://github.com/Prem-Ray/Password-Generator",
      tech: ["JavaScript", "HTML", "CSS"],
      color: "from-green-400 to-emerald-400",
      icon: "🔐",
      image: "/password.png"
    },
    {
      title: "✈️ Select Your Trip",
      description: "A dynamic travel website using React and Tailwind CSS, enabling users to explore various destinations with key details such as name, price, and description.",
      link: "https://select-your-trip.netlify.app/",
      github: "https://github.com/Prem-Ray/Select-Your-Trip",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      color: "from-blue-400 to-cyan-400",
      icon: "🌍",
      image: "/trip.png"
    },
    {
      title: "🎙️ Text to Speech Generator",
      description: "A simple yet powerful Text-to-Speech Converter using SpeechSynthesisUtterance() API.",
      link: "https://texttospeechgenerator.netlify.app/",
      github: "https://github.com/Prem-Ray/texttospeechgenerator",
      tech: ["JavaScript", "Web Speech API", "HTML/CSS"],
      color: "from-orange-400 to-yellow-400",
      icon: "🔊",
      image: "/text.png"
    },
    {
      title: "🌤️ Dynamic Weather Application",
      description: "A Weather Application designed to make accessing real-time weather information intuitive, reliable, and effortless.",
      link: "https://searchanyweather.netlify.app/",
      github: "https://github.com/Prem-Ray/weatherapplication",
      tech: ["JavaScript", "Weather API", "CSS"],
      color: "from-teal-400 to-blue-400",
      icon: "🌦️",
      image: "/weather.png"
    },
    {
      title: "🎮 Tic-Tac-Toe Game with Built-In Stopwatch",
      description: "A responsive Tic-Tac-Toe game with a dynamic stopwatch, seamless gameplay, and engaging UX/UI.",
      link: "https://tictactoe-game-in2025.netlify.app/",
      github: "https://github.com/Prem-Ray/tictactoegame/tree/main",
      tech: ["JavaScript", "HTML", "CSS", "Game Logic"],
      color: "from-pink-400 to-red-400",
      icon: "🎯",
      image: "/tictoc.png"
    }
  ];

  useEffect(() => {
  const timer = setInterval(() => {
    setLoadingProgress(prev => Math.min(prev + 1.5, 100));
  }, 80);
  return () => clearInterval(timer);
}, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleProjects(prev => (prev < projectData.length ? prev + 1 : prev));
    }, 300);
    return () => clearInterval(timer);
  }, [projectData.length]);

  const CodeBlock = ({ children, className = "" }) => (
    <div className={`bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 font-mono text-sm border border-cyan-400/30 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-cyan-400 text-xs ml-2">~/projects</span>
      </div>
      {children}
    </div>
  );

  return (
    <section id="projects" className="min-h-screen bg-black relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>

      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <div className="text-center mb-16">
          <CodeBlock className="max-w-4xl mx-auto mb-8">
            <div className="text-cyan-400">
              <span className="text-gray-500">1</span> <span className="text-purple-400">import</span> <span className="text-cyan-400">*</span> <span className="text-purple-400">as</span> <span className="text-blue-400">Projects</span> <span className="text-purple-400">from</span> <span className="text-green-400">'./premanshu-portfolio'</span>;
            </div>
            <div className="text-cyan-400">
              <span className="text-gray-500">2</span> <span className="text-purple-400">const</span> <span className="text-blue-400">showcase</span> = <span className="text-cyan-400">await</span> <span className="text-blue-400">Projects</span>.<span className="text-cyan-400">getAllProjects</span>();
            </div>
            <div className="text-cyan-400">
              <span className="text-gray-500">3</span> <span className="text-blue-400">showcase</span>.<span className="text-cyan-400">render</span>(<span className="text-green-400">'incredible-applications'</span>);
            </div>
          </CodeBlock>

          <h2 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
            <i className="fa-solid fa-clipboard-list mr-4"></i>
            Latest <span className="text-orange-400 animate-pulse">Projects</span>
          </h2>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-cyan-400 text-sm font-mono mb-2">
              <span>Deploying Projects...</span>
              <span>{loadingProgress.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`project-card w-full max-w-sm mx-auto transform transition-all duration-700 ${
                index < visibleProjects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg border border-cyan-400/30 overflow-hidden h-full flex flex-col min-h-[600px]">
                <div className="h-48 bg-gray-800/50 overflow-hidden">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className={`text-lg font-bold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-1 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="text-cyan-400 text-xs font-mono mb-2">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-gray-800/50 text-gray-300 px-2 py-1 rounded border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 rounded-lg text-xs"
                    >
                      🚀 Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 rounded-lg text-xs"
                    >
                      📂 GitHub
                    </a>
                  </div>
                  <div className="text-center mt-auto text-green-400 text-xs font-mono">
                    <div className="inline-flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Production Ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CodeBlock className="max-w-5xl mx-auto">
            <div className="text-cyan-400 space-y-1">
              <div><span className="text-gray-500">$</span> git commit -m <span className="text-yellow-400">"Added amazing projects to portfolio"</span></div>
              <div className="text-green-400">✅ Successfully deployed {projectData.length} projects to production! 🎉</div>
              <div className="text-cyan-400">🔗 Each project represents hours of coding, debugging, and innovation ⚡</div>
              <div className="text-purple-400">🚀 Ready to build the next big thing together! Let's collaborate! 💫</div>
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
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Projects;
