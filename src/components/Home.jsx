import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center"
    >
      {/* Hero Avatar */}
      <img
        src="/premanshuray.png"
        alt="Premanshu Ray"
        className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full shadow-xl mb-8 animate-fadeIn mt-20"
      />

      {/* Title */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-tight animate-fadeIn">
        Premanshu Ray
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-2xl text-gray-300 mt-4 animate-fadeIn">
        Front‑End Developer & Software Engineer
      </p>

      {/* CTA Button */}
      <HashLink
        to="/about"
        className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full shadow hover:bg-gray-200 transition duration-300 animate-fadeIn"
      >
        Learn more <FaArrowRight className="text-lg" />
      </HashLink>

      {/* Coding + Socials */}
      <div className="my-10 flex flex-col items-center space-y-8 font-[system-ui] text-white">
        {/* Coding Profiles */}
        <div className="flex items-center gap-10">
          <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400">
            Coding Profiles
          </h3>
          <div className="flex gap-6">
            {/* Codolio */}
            <a
              href="https://codolio.com/profile/premray"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <img
                src="./codolio.svg"
                alt="Codolio"
                className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-neutral-900 px-3 py-1 text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none whitespace-nowrap">
                Codolio
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Prem-Ray"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-2xl"
            >
              <FaGithub className="transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-neutral-900 px-3 py-1 text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none whitespace-nowrap">
                GitHub
              </span>
            </a>
          </div>
        </div>

        {/* Social Profiles */}
        <div className="flex items-center gap-6">
          <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400">
            Socials
          </h3>
          <div className="flex gap-8 text-2xl">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/premanshuray/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <FaLinkedin className="transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-neutral-900 px-3 py-1 text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none whitespace-nowrap">
                LinkedIn
              </span>
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/RayPremanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <FaTwitter className="transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-neutral-900 px-3 py-1 text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none whitespace-nowrap">
                X (Twitter)
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/iampremray/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <FaInstagram className="transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-neutral-900 px-3 py-1 text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none whitespace-nowrap">
                Instagram
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="max-w-2xl mb-8 mt-8 text-gray-300 text-xl sm:text-2xl leading-relaxed animate-fadeIn">
        Creative Frontend Developer passionate about crafting experiences that
        unite clean design and seamless performance.
      </div>
    </section>
  );
};

export default Home;
