import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', symbol: '🏠' },
    { name: 'About', href: '/about', symbol: '👨‍💻' },
    { name: 'Education', href: '/education', symbol: '🎓' },
    { name: 'Experience', href: '/experience', symbol: '💼' },
    { name: 'Skills', href: '/skills', symbol: '⚡' },
    { name: 'Projects', href: '/projects', symbol: '🚀' },
    { name: 'Contact', href: '/contact', symbol: '📬' },
  ];

  return (
    <nav
      className={`fixed top-[2vh] left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-black/5 backdrop-blur-md shadow-lg py-1'
          : 'backdrop-blur-md bg-black/5 py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative group flex-shrink-0">
            <div className="cyber-border bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 p-0.5 rounded-lg">
              <div className="bg-black px-3 py-1.5 rounded-lg">
                <div className="text-white text-xl font-bold font-mono cursor-pointer relative overflow-hidden whitespace-nowrap">
                  <span className="glitch-text" data-text="ray">ray</span>
                  <span className="glitch-text" data-text="Premanshu">Premanshu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop menu (only visible on lg and above) */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-mono font-medium flex items-center space-x-1.5 transition-colors duration-300 ease-in-out ${
                  location.pathname === item.href
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>{item.symbol}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Hamburger (visible on md and below) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-sm font-bold rounded-full focus:outline-none"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Menu (md & below) */}
        {isOpen && (
          <div className="lg:hidden mt-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded text-sm font-mono transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white hover:bg-cyan-500/20'
                }`}
              >
                <span>{item.symbol}</span> {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
