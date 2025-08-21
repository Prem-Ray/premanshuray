import React, { useState, useEffect } from "react";

const appleFontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

function Education() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText =
    "Education is not the learning of facts, but the training of the mind to think.";

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setTimeout(() => {
          setTypedText("");
          setCurrentIndex(0);
        }, 1500);
      }
    }, 40);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section
      id="education"
      className="min-h-screen bg-white text-[#1d1d1f] flex flex-col items-center justify-center py-12 sm:py-24 px-4 sm:px-12 md:px-24 relative overflow-hidden"
      style={{ fontFamily: appleFontFamily }}
    >
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-24 fade-in mt-8 sm:mt-1">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-tight mb-6">
          My <span className="font-light italic">Education</span>
        </h1>
        <p className="text-base sm:text-xl text-[#6e6e73] leading-relaxed max-w-2xl mx-auto fade-in">
          {typedText}
          <span className="animate-pulse text-black">|</span>
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-16 max-w-6xl mx-auto w-full">
        {/* Bachelor's Degree */}
        <div className="bg-[#f5f5f7] rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-700 fade-in flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Left side: Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 tracking-tight text-[#1d1d1f]">
              Bachelor of Technology
            </h3>
            <p className="text-base sm:text-lg text-[#1d1d1f] mb-1 sm:mb-2">
              <span className="font-medium text-[#6e6e73]">Field:</span>{" "}
              Electronics & Communication Engineering
            </p>
            <p className="text-base sm:text-lg text-[#1d1d1f] mb-1 sm:mb-2">
              <span className="font-medium text-[#6e6e73]">Institution:</span>{" "}
              St. Thomas' College of Engineering & Technology
            </p>
            <p className="text-base sm:text-lg text-[#1d1d1f] mb-4 sm:mb-5">
              <span className="font-medium text-[#6e6e73]">Duration:</span>{" "}
              2021–2025 |{" "}
              <span className="text-green-600 font-semibold">✓ Completed</span>
            </p>
            <div className="inline-block mt-3 px-6 py-2 bg-black text-white rounded-full text-sm font-medium tracking-wide">
              STATUS: COMPLETED
            </div>
          </div>

          {/* Right side: Image */}
          <div className="w-full max-w-xs md:w-64 flex-shrink-0">
            <img
              src="/stcet.jpg"
              alt="St. Thomas' College logo"
              className="w-full h-auto rounded-xl shadow-md shadow-black/60"
            />
          </div>
        </div>

        {/* Higher Secondary */}
        <div className="bg-[#f5f5f7] rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-700 fade-in flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Left side: Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 tracking-tight text-[#1d1d1f]">
              Higher Secondary Education
            </h3>
            <p className="text-base sm:text-lg text-[#1d1d1f] mb-1 sm:mb-2">
              <span className="font-medium text-[#6e6e73]">Stream:</span> 12th
              Science
            </p>
            <p className="text-base sm:text-lg text-[#1d1d1f] mb-1 sm:mb-2">
              <span className="font-medium text-[#6e6e73]">Institution:</span>{" "}
              Saora Union High School | WBCHSE
            </p>
            <p className="text-base sm:text-lg text-[#1d1d1f] mb-4 sm:mb-5">
              <span className="font-medium text-[#6e6e73]">Duration:</span>{" "}
              2019–2021 |{" "}
              <span className="text-green-600 font-semibold">✓ Completed</span>
            </p>
            <div className="inline-block mt-3 px-6 py-2 bg-black text-white rounded-full text-sm font-medium tracking-wide">
              STATUS: COMPLETED
            </div>
          </div>

          {/* Right side: Image */}
          <div className="w-full max-w-xs md:w-64 flex-shrink-0">
            <img
              src="/saorahs.jpg"
              alt="Saora Union High School logo"
              className="w-full h-auto rounded-xl shadow-md shadow-black/60"
            />
          </div>
        </div>
      </div>

      {/* Bottom Terminal */}
      <div className="mt-20 w-full max-w-lg sm:max-w-3xl mx-auto flex justify-center">
        <div className="text-white/90 bg-black/95 border border-white/20 p-6 rounded-2xl shadow-lg backdrop-blur-lg w-full">
          <div className="font-mono text-lg">
            <span className="text-green-400">$</span> <span>git</span>{" "}
            <span className="text-pink-400">commit</span> -m{" "}
            <span className="ml-1 text-yellow-300">
              "Education journey in progress... 🚀"
            </span>
          </div>
          <div className="mt-3 text-white/80 italic">
            Ready to code amazing things! 💻
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .fade-in {
          opacity: 0;
          animation: fadeIn 1.5s ease forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Education;
