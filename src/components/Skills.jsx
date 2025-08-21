import React, { useState, useEffect, useRef } from "react";

function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isIntersecting;
}

function SkillCard({ skill, index }) {
  const ref = useRef();
  const isVisible = useOnScreen(ref, "-100px");

  return (
    <div
      ref={ref}
      className={`rounded-3xl px-8 py-12 bg-white shadow-xl border border-gray-200
        flex flex-col items-center text-center transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 135}ms` }}
    >
      <div className="text-2xl mb-5">{skill.image}</div>
      <h3 className="font-semibold text-2xl text-gray-900">{skill.name}</h3>
      <p className="text-gray-500 text-sm max-w-xs mt-3 leading-relaxed">
        {skill.description}
      </p>

      {/* Progress bar */}
      <div className="w-full mt-8">
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-1 bg-black transition-all duration-1000 rounded-full"
            style={{
              width: isVisible ? `${skill.level}%` : "0%",
              transitionDelay: `${index * 140 + 400}ms`,
            }}
          />
        </div>
        <p className="mt-3 text-xs font-medium text-gray-400">
          {skill.level}% Proficiency
        </p>
      </div>
    </div>
  );
}

function Skills() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  const skills = [
    { name: "C++", level: 85, image: <img src="/cpp.png"  width={90} alt="C++" />, description: "System Programming & DSA" },
    { name: "JavaScript", level: 90, image: <img src="/js.png" width={74} alt="JavaScript" />, description: "Modern ES6+ & DOM Manipulation" },
    { name: "React", level: 88, image: <img src="/react.png" width={74} alt="React" />, description: "Hooks, Context & Component Design" },
    { name: "HTML", level: 92, image: <img src="/html.png" width={74} alt="HTML" />, description: "Website Design" },
    { name: "CSS", level: 90, image: <img src="/css.png" width={74} alt="CSS" />, description: "Responsive Design & Animations" },
    { name: "Tailwind CSS", level: 87, image: <img src="/tailwind.png" width={74} alt="Tailwind CSS" />, description: "Utility-First CSS Framework" },
    { name: "OOPs", level: 84, image: <img src="/oops.png" width={74} alt="OOPs" />, description: "Object-Oriented Programming" },
    { name: "SQL", level: 82, image: <img src="/sql.png" width={104} alt="SQL" />, description: "Database Design & Queries" },
    { name: "Computer Network", level: 78, image: <img src="/network.png" width={74} alt="Computer Network" />, description: "Networking & Security" },
    { name: "Prompt Engineering", level: 89, image: <img src="/prompt.png" width={74} alt="Prompt Engineering" />, description: "AI Optimization & Tuning" }
  ];

  // Simulated loading bar
  useEffect(() => {
    if (loadingProgress < 100) {
      const timer = setTimeout(() => setLoadingProgress((prev) => prev + 2), 40);
      return () => clearTimeout(timer);
    }
  }, [loadingProgress]);

  return (
    <>
      {/* White Background Section */}
      <section id="skills" className="min-h-screen bg-white text-black font-[system-ui] pb-32 pt-28">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Hero Title */}
          <div className="text-center max-w-3xl mx-auto mb-28">
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-snug text-black">
              My <span className="bg-clip-text text-black">Skills</span>
            </h2>
            <p className="mt-6 text-gray-500 text-lg font-light leading-relaxed">
              A set of technologies I use to design and build seamless experiences.
            </p>

            {/* Progress bar Apple-like */}
            <div className="relative max-w-lg mx-auto mt-12">
              <div className="h-0.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-0.5 bg-black transition-all ease-in-out duration-500"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              <div className="mt-4 text-sm text-gray-500">{loadingProgress}% Loaded</div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {skills.map((skill, idx) => (
              <SkillCard key={skill.name} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Black Background Closing Section */}
      <section className="bg-black text-white py-32">
        <div className="text-center max-w-3xl mx-auto px-6">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-200">
            Skills are not just what I’ve learned,{" "}
            <span className="font-medium text-white">but how I solve problems,</span>{" "}
            <span className="font-medium text-white">adapt to challenges,</span> and{" "}
            <span className="font-medium text-white">create meaningful solutions</span> — Premanshu Ray
          </p>
        </div>
      </section>
    </>
  );
}

export default Skills;
