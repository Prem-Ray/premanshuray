import React, { useState, useEffect } from "react";

const About = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const fullText =
    "Graduated in 2025 from St. Thomas' College of Engineering & Technology with a degree in Electronics & Communication Engineering, I thrive on solving real-world problems through innovation and hands-on execution. I have designed and delivered impactful projects and actively engaged in industry-level training to sharpen my practical understanding. I aim to contribute to forward-thinking teams, embrace new challenges, and continuously evolve through learning and collaboration.";

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

  return (
    <>
      <style>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          margin: 0;
          padding: 0;
          background: #fff;
          color: #111;
          -webkit-font-smoothing: antialiased;
        }

        h1, h2 {
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        h1 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          line-height: 1.15;
        }

        h2 {
          font-size: clamp(2rem, 4vw, 2.5rem);
          line-height: 1.25;
        }

        p {
          font-size: clamp(1rem, 1.25vw, 1.125rem);
          line-height: 1.6;
          color: #444;
          font-weight: 400;
        }

        .fade-in {
          animation: fadeIn 1.2s ease-in-out forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .hero img {
          transition: transform 0.8s ease, opacity 1s ease;
        }
        .hero img:hover {
          transform: scale(1.05);
        }

        .cta-btn {
          font-size: 1.125rem;
          padding: 0.9rem 2.2rem;
          border-radius: 9999px;
          transition: background 0.3s ease;
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero relative min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
        <img
          src="/premam.jpg"
          alt="Premanshu Ray"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full shadow-2xl fade-in mb-8"
        />
        <h1 className="fade-in">Premanshu Ray</h1>
        <p className="text-lg sm:text-xl text-gray-400 mt-4 fade-in">
          Electronics & Communication Engineer
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-10">
          <a
            href="/PREMANSHU_RAY_RESUME.pdf"
            download="Premanshu_Ray_Resume.pdf"
            className="cta-btn bg-white text-black hover:bg-gray-200 px-6 py-3 rounded font-medium text-center"
          >
            Download Resume
          </a>

          <a
            href="https://drive.google.com/file/d/1Es_OCpw7VYoEwX35l3oiRcyI2NMpX2Ed/view"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn bg-white text-black hover:bg-gray-200 px-6 py-3 rounded font-medium text-center"
          >
            View Resume
          </a>
        </div>
      </section>

      {/* About Text */}
      <section className="bg-white text-black py-20 px-6 sm:px-12 md:px-24 text-center md:text-left">
        <div className="max-w-4xl mx-auto">
          <h2 className="fade-in">About Me</h2>
          <p className="fade-in mt-4">
            {typewriterText}
            {typewriterText.length < fullText.length && (
              <span className="animate-pulse">|</span>
            )}
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gray-100 text-black py-24 text-center px-6">
        <h2 className="fade-in">My Philosophy</h2>
        <p className="max-w-3xl mx-auto fade-in mt-4">
          Great engineering is about designing simple solutions for complex
          problems. I believe in the power of focus, clarity, and
          seamless user experience.
        </p>
      </section>

      {/* Call-to-Action */}
      <section className="bg-black text-white py-24 text-center">
        <h2>Let’s build something amazing.</h2>
        <a
          href="/contact"
          className="cta-btn bg-white text-black hover:bg-gray-200 mt-6 inline-block"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
};

export default About;
