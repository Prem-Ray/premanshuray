import React from "react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Louisa AI",
    subtitle: "Goldman Sachs–incubated startup",
    position: "Present",
    summary:
      "Worked across production support, debugging, release coordination, and feature development throughout the software development lifecycle.",
    points: [
      "Resolved production issues through debugging, log analysis, and root cause analysis, improving system stability and reliability.",
      "Developed feature enhancements and bug fixes, including implementation, testing, and deployment support.",
      "Managed release activities by creating Git tags, cherry-picking across branches, coordinating merges, and maintaining version control.",
      "Executed and monitored Airflow DAG workflows to support release and deployment processes.",
      "Collaborated with cross-functional teams to ensure smooth integration of features and fixes.",
      "Used AI tools such as ChatGPT, GitHub Copilot, and Claude to accelerate development, debugging, and testing workflows."
    ],
    skills: [
      "React",
      "TypeScript",
      "Material UI",
      "Kotlin",
      "Spring Boot",
      "REST API",
      "Debugging",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Airflow",
      "Cross-team Collaboration"
    ],
    theme: "light",
    logo: "/louisaai.png"
  },
  {
    title: "Professional Training",
    company: "Prasar Bharati",
    subtitle: "All India Radio (Akashvani), Kolkata",
    position: "Training Program",
    type: "Broadcasting Technology",
    summary:
      "Completed hands-on professional training in broadcasting technology, working with real-world transmission systems, studio installations, and satellite communication infrastructure.",
    points: [
      "Gained practical exposure to AM/FM transmission systems and broadcasting infrastructure.",
      "Worked with studio installation processes and broadcast engineering equipment.",
      "Observed high-power MW and FM transmitters in operational environments.",
      "Learned the basics of satellite-based broadcasting and communication workflows.",
      "Built a stronger technical foundation in electronics, electrical systems, and broadcasting technology."
    ],
    skills: [
      "AM/FM Transmission Systems",
      "Studio Installation",
      "MW Transmitters",
      "FM Transmitters",
      "Broadcast Engineering",
      "Satellite Communication"
    ],
    theme: "dark",
    logo: "/akashvani.png",
    certificate:
      "https://drive.google.com/file/d/10MtDp_dGMDhRXGQnXzfMVh8eL6A_he4I/view"
  }
];

const ExperienceCard = ({ exp, index }) => {
  const dark = exp.theme === "dark";

  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-24 ${
        dark
          ? "bg-zinc-950 text-white"
          : "bg-neutral-50 text-zinc-900"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 left-0 h-px w-full ${
            dark ? "bg-white/10" : "bg-black/10"
          }`}
        />
        <div
          className={`absolute -top-24 right-0 h-72 w-72 rounded-full blur-3xl ${
            dark ? "bg-white/5" : "bg-black/[0.04]"
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                  dark
                    ? "border border-white/15 bg-white/5 text-white"
                    : "border border-black/10 bg-white text-black"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <p
                className={`text-xs font-medium uppercase tracking-[0.28em] ${
                  dark ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                Experience
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="mb-6 h-14 w-auto object-contain sm:h-16"
                />

                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {exp.title}
                </h2>

                <h3
                  className={`mt-3 text-xl font-medium sm:text-2xl ${
                    dark ? "text-zinc-200" : "text-zinc-800"
                  }`}
                >
                  {exp.company}
                </h3>

                <p
                  className={`mt-2 text-base sm:text-lg ${
                    dark ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {exp.subtitle}
                </p>

                <div
                  className={`mt-5 flex flex-wrap items-center gap-3 text-sm ${
                    dark ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {exp.position && (
                    <span
                      className={`rounded-full px-4 py-2 ${
                        dark
                          ? "border border-white/10 bg-white/5"
                          : "border border-black/10 bg-white"
                      }`}
                    >
                      {exp.position}
                    </span>
                  )}

                  {exp.type && (
                    <span
                      className={`rounded-full px-4 py-2 ${
                        dark
                          ? "border border-white/10 bg-white/5"
                          : "border border-black/10 bg-white"
                      }`}
                    >
                      {exp.type}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-8 max-w-3xl text-base leading-8 sm:text-lg ${
                    dark ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  {exp.summary}
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="mb-6 text-lg font-semibold sm:text-xl">
                Key Contributions
              </h4>

              <div className="grid gap-4">
                {exp.points.map((point, pointIndex) => (
                  <div
                    key={pointIndex}
                    className={`group rounded-2xl p-5 transition-all duration-300 ${
                      dark
                        ? "border border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
                        : "border border-black/10 bg-white hover:shadow-sm"
                    }`}
                  >
                    <div className="flex gap-4">
                      <span
                        className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full ${
                          dark ? "bg-white/70" : "bg-zinc-900"
                        }`}
                      />
                      <p
                        className={`leading-7 ${
                          dark ? "text-zinc-300" : "text-zinc-700"
                        }`}
                      >
                        {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside>
            <div
              className={`sticky top-24 rounded-3xl p-6 sm:p-7 ${
                dark
                  ? "border border-white/10 bg-white/[0.04]"
                  : "border border-black/10 bg-white shadow-sm"
              }`}
            >
              <h4 className="text-lg font-semibold sm:text-xl">Skills & Tools</h4>

              <div className="mt-6 flex flex-wrap gap-3">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`rounded-full px-4 py-2 text-sm ${
                      dark
                        ? "border border-white/10 bg-white/5 text-zinc-200"
                        : "border border-black/10 bg-neutral-100 text-zinc-700"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-300 ${
                    dark
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-black text-white hover:bg-zinc-800"
                  }`}
                >
                  View Certificate
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <div>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} exp={exp} index={index} />
      ))}
    </div>
  );
};

export default Experience;