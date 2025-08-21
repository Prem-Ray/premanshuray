import React, { useState, useEffect } from "react";

const Experience = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = `In 2024, I completed my professional training at Prasar Bharati (All India Radio, Kolkata). 
  This hands-on program allowed me to work with real-world broadcast systems — from AM/FM transmitters and 
  studio installations to satellite-based communication. 
  The experience strengthened my technical foundation while exposing me to high-power transmission systems, 
  broadcasting infrastructure, and advanced electronic equipment.`;

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    "AM/FM Transmission Systems",
    "Studio Installation",
    "High Power MW Transmitters",
    "FM Transmitters",
    "Electronic & Electrical Equipment",
    "Broadcasting Technology",
    "Satellite Broadcasting",
  ];

  return (
    <>
      <style>{`
        /* Apple-like typography */
        section, h1, h2, p, a, div {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        h1, h2 {
          font-weight: 600;
          letter-spacing: 0.015em;
          color: #000000;
        }
        p {
          font-weight: 400;
          letter-spacing: 0.02em;
          color: #3C3C4399;
          line-height: 1.5;
        }
        a {
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        .fade-in {
          animation: fadeIn 1.2s ease-in-out forwards;
          opacity: 0;
        }
        .fade-in.delay-1 { animation-delay: 0.2s; }
        .fade-in.delay-2 { animation-delay: 0.4s; }
        .fade-in.delay-3 { animation-delay: 0.6s; }
        .fade-in.delay-4 { animation-delay: 0.8s; }
        .fade-in.delay-5 { animation-delay: 1s; }
        .fade-in.delay-6 { animation-delay: 1.2s; }
        .fade-in.delay-7 { animation-delay: 1.4s; }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Button hover shadow */
        .btn-shadow:hover {
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.4);
          transform: translateY(-3px);
          transition: all 0.3s ease-in-out;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
        {/* Logo */}
        <img
          src="/akashvani.png"
          alt="Akashvani"
          className="w-40 sm:w-48 md:w-60 h-auto object-contain rounded-full shadow-2xl mb-10 bg-white/90 p-4 fade-in delay-100"
        />

        {/* Title */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight fade-in delay-200">
          Professional Training
        </h1>

        {/* Sub-title */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-400 fade-in delay-300">
          Broadcasting Technology at Prasar Bharati
        </p>

        {/* Description */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed fade-in delay-400">
          Prasar Bharati, India's largest public broadcasting agency, operates
          All India Radio (Akashvani) and Doordarshan. Akashvani has been a
          cornerstone of India's communication network since 1936, delivering
          news, cultural programs, and education across the nation through AM/FM
          and satellite transmissions.
          <br />
          <br />
          This training provided me hands-on experience with cutting-edge
          broadcast technologies and deep insights into large-scale transmission
          systems, studio setup, and satellite communication — strengthening my
          technical expertise in the broadcasting domain.
        </p>
      </section>

      {/* Experience Text */}
      <section className="bg-white text-black py-20 px-6 sm:px-12 md:px-24 text-center md:text-left">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6 tracking-wide fade-in delay-1">
            My Experience
          </h2>
          <p
            className="text-xl sm:text-2xl leading-relaxed fade-in delay-2"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {typewriterText}
            {typewriterText.length < fullText.length && (
              <span className="animate-pulse">|</span>
            )}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 text-black py-24 text-center px-6">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-6 tracking-wide fade-in delay-1">
          Key Skills Acquired
        </h2>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6 text-xl text-gray-700">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 fade-in delay-${
                index + 2
              } cursor-default font-medium tracking-wide`}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-black py-24 flex flex-col items-center text-center px-6">
        <h2
          className="text-white text-5xl sm:text-6xl font-semibold mb-10 tracking-wide max-w-3xl leading-tight fade-in delay-1"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          }}
        >
          Want to see my training certificate?
        </h2>
        <a
          href="https://drive.google.com/file/d/10MtDp_dGMDhRXGQnXzfMVh8eL6A_he4I/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-5 bg-white text-black font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 btn-shadow tracking-wider uppercase text-lg"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            letterSpacing: "0.05em",
            userSelect: "none",
          }}
        >
          View Certificate
        </a>
      </section>
    </>
  );
};

export default Experience;
