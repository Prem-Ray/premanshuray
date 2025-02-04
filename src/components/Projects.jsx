import React from 'react';

function Projects() {
  const projectData = [
    {
      title: "🌐 FindGit",
      description: "Explore GitHub profiles effortlessly. View detailed information about repositories, followers, and more.",
      link: "https://findgitcoder.netlify.app/",
      github: "https://github.com/Prem-Ray/FindGit"
    },
    {
      title: "Password Generator💻 🔑",
      description: "Generate secure, customizable passwords with this web tool.",
      link: "https://paswordgeneratorapplication.netlify.app/",
      github: "https://github.com/Prem-Ray/Password-Generator"
    },
    {
      title: "Rural Area Health Monitoring System",
      description: "A remote solution for tracking patients' vital signs in rural regions.",
      link: "https://github.com/ecegroup2/frontend", // You can add a live demo link if available
      github: "https://github.com/Prem-Ray/frontend"
    },
    {
      title: "🌍 Select Your Trip ✈️",
      description: "A dynamic travel website using React and Tailwind CSS, enabling users to explore various destinations with key details such as name, price, and description.",
      link: "https://select-your-trip.netlify.app/", // You can add a live demo link if available
      github: "https://github.com/Prem-Ray/Select-Your-Trip"
    },
    {
      title: "Text to Speech Generator",
      description: "A simple yet powerful Text-to-Speech Converter using SpeechSynthesisUtterance() API. It’s designed to turn your written words into spoken speech with just a click.",
      link: "https://texttospeechgenerator.netlify.app/", // You can add a live demo link if available
      github: "https://github.com/Prem-Ray/texttospeechgenerator"
    },
    {
      title: "Dynamic Weather Application 🌤️",
      description: "A Weather Application designed to make accessing real-time weather information intuitive, reliable, and effortless. 🌍✨",
      link: "https://searchanyweather.netlify.app/", // You can add a live demo link if available
      github: "https://github.com/Prem-Ray/weatherapplication"
    },
    {
      title: "Quiz Application 🌟",
      description: "The application dynamically displays questions, evaluates responses in real-time, and showcases scores at the end of the quiz. Whether you're testing knowledge or just having fun, this quiz app offers a smooth and intuitive interface!",
      link: "https://kheloquiz.netlify.app/", // You can add a live demo link if available
      github: "https://github.com/Prem-Ray/quizapplication"
    },
    {
      title: "🎮 Tic-Tac-Toe Game with Built-In Stopwatch 🕒",
      description: "A responsive Tic-Tac-Toe game designed with HTML, CSS, and JavaScript featuring a dynamic stopwatch, seamless gameplay, and engaging UX/UI.",
      link: "https://tictactoe-game-in2025.netlify.app/", // You can add a live demo link if available
      github: "https://github.com/Prem-Ray/tictactoegame/tree/main"
    }
  ];

  return (
    <section id="projects" className="portbox py-20 px-10 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-500 text-black">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        <i className="fa-solid fa-clipboard-list text-orange-900"></i> Latest{" "}
        <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 text-blue-700">Projects</span>
      </h2>
      <div className="mt-10 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-blue-50 transition duration-300"
          >
            <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
            <p className="mt-3 text-gray-600">{project.description}</p>
            <div className="mt-5 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-pink-700 hover:font-bold"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-pink-700 hover:font-bold"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
