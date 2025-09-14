import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectData = [
  {
    title: "🏥 Smart & Early Abnormality Diagnosis System",
    description:
      "IoT-based health monitoring with live tracking of SpO₂, heart rate, BMI, and ECG, plus doctor appointment features.",
    link: "https://ecegroup2.github.io/",
    github: "https://github.com/ecegroup2/ecegroup2.github.io",
    tech: ["IoT", "React", "JavaScript", "Tailwind", "HTML/CSS"],
    image: "/smarthelth.jpg",
  },
  {
    title: "🎬 Movie Point",
    description:
      "A sleek local movie app with search, filtering, favourites, and a dark glass UI.",
    link: "https://moviepointer.netlify.app/",
    github: "https://github.com/Prem-Ray/Movie-Point",
    tech: ["React", "Vite", "Tailwind CSS"],
    image: "/movie.png",
  },
  {
    title: "🌐 FindGit",
    description:
      "Explore GitHub profiles effortlessly. View repository, follower, and account insights.",
    link: "https://findgitcoder.netlify.app/",
    github: "https://github.com/Prem-Ray/FindGit",
    tech: ["JavaScript", "HTML", "Tailwind CSS", "GitHub API"],
    image: "/git.png",
  },
  {
    title: "🌟 Quiz Application",
    description:
      "A real-time quiz app with dynamic question rendering, instant validation, and score tracking.",
    link: "https://kheloquiz.netlify.app/",
    github: "https://github.com/Prem-Ray/quizapplication",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "/quiz.png",
  },
  {
    title: "🔑 Password Generator",
    description: "Customizable secure password generator with instant copy support.",
    link: "https://paswordgeneratorapplication.netlify.app/",
    github: "https://github.com/Prem-Ray/Password-Generator",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "/password.png",
  },
  {
    title: "✈️ Select Your Trip",
    description:
      "A React travel app showing destinations with pricing, description, and elegant layouts.",
    link: "https://select-your-trip.netlify.app/",
    github: "https://github.com/Prem-Ray/Select-Your-Trip",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: "/trip.png",
  },
  {
    title: "🎙️ Text to Speech Generator",
    description:
      "Simple and fast speech synthesis app using Web Speech API.",
    link: "https://texttospeechgenerator.netlify.app/",
    github: "https://github.com/Prem-Ray/texttospeechgenerator",
    tech: ["JavaScript", "Web Speech API", "HTML/CSS"],
    image: "/text.png",
  },
  {
    title: "🌤️ Dynamic Weather Application",
    description:
      "Minimal weather app for quick access to real-time weather reports worldwide.",
    link: "https://searchanyweather.netlify.app/",
    github: "https://github.com/Prem-Ray/weatherapplication",
    tech: ["JavaScript", "Weather API", "CSS"],
    image: "/weather.png",
  },
  {
    title: "🎮 Tic-Tac-Toe Game",
    description:
      "A responsive Tic-Tac-Toe web game with a timer and smooth UI.",
    link: "https://tictactoe-game-in2025.netlify.app/",
    github: "https://github.com/Prem-Ray/tictactoegame/tree/main",
    tech: ["JavaScript", "HTML", "CSS", "Game Logic"],
    image: "/tictoc.png",
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  hover: {
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

const Projects = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(0);

  // Fake loading bar
  useEffect(() => {
    let progress = 0;
    const timer = setInterval(() => {
      progress += Math.random() * 3;
      if (progress >= 100) {
        progress = 100;
        clearInterval(timer);
      }
      setLoadingProgress(progress);
    }, 70);
    return () => clearInterval(timer);
  }, []);

  // Reveal projects sequentially
  useEffect(() => {
    if (visibleProjects >= projectData.length) return;
    const timer = setTimeout(() => setVisibleProjects((prev) => prev + 1), 300);
    return () => clearTimeout(timer);
  }, [visibleProjects]);

  return (
    <section
      id="projects"
      className="min-h-screen bg-white text-gray-900 font-sans relative overflow-hidden px-4 py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[40px] md:text-[52px] lg:text-[64px] 
                         font-semibold tracking-tight text-gray-900 leading-[1.1]">
            <span className="mr-2">🗂️</span>
            Latest Projects
          </h2>

          {/* Progress bar */}
          <div className="max-w-md mx-auto mt-8">
            <div className="flex justify-between text-xs text-gray-500 font-mono mb-1">
              <span>Deploying Projects...</span>
              <span>{loadingProgress.toFixed(0)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-black"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 25 }}
              />
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {projectData.slice(0, visibleProjects).map((project) => (
              <motion.div
                key={project.title}
                className="flex flex-col bg-white rounded-2xl border border-gray-200 
                           overflow-hidden hover:shadow-md transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  y: 10,
                  transition: { duration: 0.3 },
                }}
                whileHover="hover"
              >
                {/* Image */}
                <div className="relative w-full aspect-video bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-6 space-y-3">
                  <h3 className="text-[22px] font-medium tracking-tight text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-[17px] leading-relaxed text-gray-600 flex-1">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div>
                    <span className="text-xs uppercase tracking-wide text-gray-400">
                      Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener"
                      className="flex-1 text-center bg-black text-white rounded-full py-2 
                                 font-medium text-sm md:text-base hover:bg-gray-800 transition"
                    >
                      🚀 Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener"
                      className="flex-1 text-center bg-gray-200 text-gray-900 rounded-full py-2 
                                 font-medium text-sm md:text-base hover:bg-gray-300 transition"
                    >
                      📂 GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Message */}
        <div className="mt-20 text-center text-[17px] leading-relaxed text-gray-600">
          Every project is carefully built with detail and precision.
          <span className="block mt-3 text-gray-900 font-medium text-[19px]">
            Let’s build something extraordinary together.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
