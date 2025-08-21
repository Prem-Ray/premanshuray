import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <style>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          background-color: #000;
        }

        h1, h2, h3 {
          font-weight: 600; /* Apple rarely uses very bold */
          line-height: 1.1;
          letter-spacing: -0.02em; /* tighter tracking for display */
        }

        p, a, span, div {
          font-weight: 400;
          line-height: 1.6;
          letter-spacing: -0.01em;
        }

        .subheading {
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em; /* Apple-like spacing */
        }

        .fade-in {
          animation: fadeIn 1.2s ease-in-out forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        id="home"
        className="py-4 pt-16 relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center"
      >
        {/* Hero Avatar */}
        <img
          src="/premanshuray.png"
          alt="Premanshu Ray"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-60 md:h-60 object-cover rounded-full shadow-2xl fade-in mb-6 mt-2"
        />

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold fade-in">
          Premanshu Ray
        </h1>

        <p className="text-lg sm:text-2xl text-gray-300 mt-3 fade-in">
          Front‑End Developer & Software Engineer
        </p>

        {/* CTA Button */}
        <HashLink
          to="/about"
          className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 fade-in"
        >
          Read more
          <FaArrowRight className="ml-2 text-lg" />
        </HashLink>

        <div className="my-8 flex flex-col items-center space-y-6">
          {/* Coding Profiles */}
          <div className="flex flex-row items-center gap-6">
            <h3 className="subheading text-gray-400">Coding Profiles</h3>
            <div className="flex gap-6">
              <a
                href="https://codolio.com/profile/premray"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                <img src="./codolio.svg" alt="Codolio" className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Prem-Ray"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:opacity-70 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-row items-center gap-6">
            <h3 className="subheading text-gray-400">Socials</h3>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/premanshuray/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:opacity-70 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/RayPremanshu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:opacity-70 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/iampremray/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:opacity-70 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Tagline Section */}
        <div className="max-w-2xl mt-12 text-gray-300 text-xl sm:text-2xl leading-relaxed fade-in">
          Passionate about creating modern, intuitive, and user‑friendly web
          applications. Inspired by clean design and seamless experiences.
        </div>
      </section>
    </>
  );
};

export default Home;
