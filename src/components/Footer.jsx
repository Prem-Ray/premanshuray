import React, { useState, useEffect } from "react";

function FloatingContacts() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const contacts = [
    {
      id: "emergency",
      icon: "📞",
      label: "Call Now",
      href: "tel:+917047466142",
      color: "bg-green-500 hover:bg-green-600 shadow-green-500/50",
      delay: "delay-100",
    },
    {
      id: "whatsapp",
      icon: "💬",
      label: "WhatsApp",
      href: "https://wa.me/917047466142?text=Hello%20Premanshu!",
      color: "bg-green-600 hover:bg-green-700 shadow-green-600/50",
      delay: "delay-300",
    },
  ];

  return (
    <div
      className={`fixed right-3 bottom-3 sm:right-4 sm:bottom-4 md:right-6 md:bottom-6 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Contact Buttons */}
      <div
        className={`flex flex-col items-end space-y-3 mb-4 transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`transform transition-all duration-500 ${
              contact.delay
            } ${
              isOpen
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-75 pointer-events-none"
            }`}
          >
            <div className="flex items-center space-x-3 group">
              <div
                className={`hidden sm:flex items-center px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 text-gray-800 font-semibold text-sm whitespace-nowrap transform transition-all duration-300 ${
                  isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
                } group-hover:scale-105 group-hover:shadow-2xl`}
              >
                {contact.id === "emergency" && (
                  <span className="mr-2 text-red-500 font-bold">⚠️</span>
                )}
                {contact.label}
              </div>
              <div className="sm:hidden relative group">
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {contact.label}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
                </div>
              </div>
              <a
                href={contact.href}
                target={contact.id === "whatsapp" ? "_blank" : "_self"}
                rel={contact.id === "whatsapp" ? "noopener noreferrer" : ""}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${
                  contact.color
                } rounded-full shadow-2xl flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 ${
                  contact.id === "emergency"
                    ? "ring-2 ring-red-300 animate-pulse"
                    : ""
                }`}
                title={contact.label}
              >
                {contact.icon}
                {contact.id === "emergency" && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full animate-ping"></div>
                )}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button with background ping animation properly aligned */}
      <div className="relative flex justify-center items-center">
        {!isOpen && (
          <div className="absolute w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-orange-400 rounded-full animate-ping opacity-20"></div>
        )}
        <button
          onClick={toggleMenu}
          className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 ${
            isOpen ? "rotate-45 scale-105" : "rotate-0"
          }`}
          aria-label="Toggle contact menu"
        >
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-bounce">
              <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

function Footer() {
  const [matrixChars, setMatrixChars] = useState([]);
  const [glitchText, setGlitchText] = useState("Premanshu Ray");

  useEffect(() => {
    const chars = "01₹♦♣♠♥◆◇○●◎◉☆★▲▼◄►";
    const newChars = [];
    for (let i = 0; i < 15; i++) {
      newChars.push({
        id: i,
        char: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * 100,
        animationDelay: Math.random() * 2,
        animationDuration: 2 + Math.random() * 3,
      });
    }
    setMatrixChars(newChars);
  }, []);

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const originalText = "Premanshu Ray";
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.08) {
        const glitched = originalText
          .split("")
          .map((char) =>
            Math.random() < 0.1
              ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
              : char
          )
          .join("");
        setGlitchText(glitched);
        setTimeout(() => setGlitchText(originalText), 150);
      }
    }, 300);
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="bg-gray-100">
      <footer className="relative bg-black text-orange-400 py-6 sm:py-8 px-4 sm:px-6 overflow-hidden border-t border-orange-500/30">
        <div className="absolute inset-0 pointer-events-none">
          {matrixChars.map((item) => (
            <div
              key={item.id}
              className="absolute text-orange-300/20 font-mono text-xs sm:text-sm animate-pulse"
              style={{
                left: `${item.x}%`,
                animationDelay: `${item.animationDelay}s`,
                animationDuration: `${item.animationDuration}s`,
                animation: `matrix-fall ${item.animationDuration}s linear infinite`,
                animationDelay: `${item.animationDelay}s`,
              }}
            >
              {item.char}
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/10 to-transparent animate-scan"></div>

        <div className="relative z-10 flex flex-col items-center space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center space-x-1 sm:space-x-2 flex-wrap justify-center">
              <span className="text-orange-300 font-mono text-xs sm:text-sm tracking-wider">
                [<span className="animate-pulse text-white">©</span>]
              </span>
              <span className="text-orange-200 font-mono text-xs sm:text-sm">
                2025
              </span>
              <span className="text-white font-mono font-bold tracking-wide glitch-text text-xs sm:text-sm">
                {glitchText}
              </span>
            </div>
          </div>

          <div className="text-orange-300 font-mono text-xs sm:text-sm">
            <span className="typing-text">All rights reserved</span>
            <span className="animate-pulse text-white ml-1">█</span>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50"></div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-xs font-mono text-center">
            <div className="flex items-center justify-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300">SYSTEM_ONLINE</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
              <span className="text-orange-300">INDIA_SERVER</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-300">EMERGENCY_READY</span>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes matrix-fall {
            0% { transform: translateY(-100vh); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }

          @keyframes scan {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes typing {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }

          .animate-scan {
            animation: scan 3s linear infinite;
          }

          .typing-text {
            animation: typing 2s infinite;
          }

          .glitch-text {
            text-shadow: 
              0.05em 0 0 rgba(255, 165, 0, 0.75),
              -0.05em -0.025em 0 rgba(255, 69, 0, 0.75),
              -0.025em 0.05em 0 rgba(255, 255, 255, 0.75);
          }

          .glitch-text:hover {
            animation: glitch 0.3s infinite;
          }

          @keyframes glitch {
            0%, 100% {
              text-shadow: 
                0.05em 0 0 rgba(255, 165, 0, 0.75),
                -0.05em -0.025em 0 rgba(255, 69, 0, 0.75),
                -0.025em 0.05em 0 rgba(255, 255, 255, 0.75);
            }
            16%, 49% {
              text-shadow: 
                -0.05em -0.025em 0 rgba(255, 165, 0, 0.75),
                0.025em 0.025em 0 rgba(255, 69, 0, 0.75),
                -0.05em -0.05em 0 rgba(255, 255, 255, 0.75);
            }
            50%, 99% {
              text-shadow: 
                0.025em 0.05em 0 rgba(255, 165, 0, 0.75),
                0.05em 0 0 rgba(255, 69, 0, 0.75),
                0 -0.05em 0 rgba(255, 255, 255, 0.75);
            }
          }
        `}</style>
      </footer>

      {/* Floating Button */}
      <FloatingContacts />
    </div>
  );
}

export default Footer;
