import React from 'react';

function Skills() {
  return (
    <section id="skills" className="portbox min-h-[70vh] pt-14 pb-14 lg:pt-24 lg:pb-10 bg-transparent bg-cover bg-center bg-no-repeat px-4 sm:px-8 md:px-12 lg:px-20" style={{ backgroundImage: "url('/bluesky.jpg')" }}>
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        <i className="fa-solid fa-laptop-code"></i> My <span className="text-orange-500">Skills</span>
      </h2>
      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {[
          { name: "C++", color: "from-blue-100 via-blue-200 to-blue-300" },
          { name: "OOPS", color: "from-red-100 via-red-200 to-red-300" },
          { name: "JavaScript", color: "from-green-100 via-green-200 to-green-300" },
          { name: "React", color: "from-yellow-100 via-yellow-200 to-yellow-300" },
          { name: "HTML & CSS", color: "from-pink-100 via-pink-200 to-pink-300" },
          { name: "Tailwind CSS", color: "from-purple-100 via-purple-200 to-purple-300" },
          { name: "SQL", color: "from-red-100 via-red-200 to-red-300" },
        ].map((skill, index) => (
          <li key={index} className={`bg-gradient-to-r ${skill.color} p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300`}>
            <span className="text-xl font-bold text-gray-800">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
