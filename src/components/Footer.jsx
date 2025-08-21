import React, { useState } from "react";
import { Phone, MessageSquare, Plus, X } from "lucide-react";

function FloatingContacts() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      id: "call",
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Call Now",
      href: "tel:+917047466142",
    },
    {
      id: "whatsapp",
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "WhatsApp",
      href: "https://wa.me/917047466142?text=Hello%20Premanshu!",
    },
  ];

  return (
    <div className="fixed right-4 bottom-4 sm:right-5 sm:bottom-5 z-50 transition-all duration-500">
      {/* Contact Items */}
      <div
        className={`flex flex-col items-end space-y-3 mb-4 transition-all ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.href}
            target={contact.id === "whatsapp" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex items-center space-x-2 sm:space-x-3 rounded-full bg-white dark:bg-black shadow-lg px-3 sm:px-4 py-2 hover:shadow-xl hover:scale-105 transition-all border border-gray-200 dark:border-gray-800 w-fit"
          >
            <span className="text-gray-900 dark:text-white font-medium text-xs sm:text-sm whitespace-nowrap">
              {contact.label}
            </span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-black shadow-md hover:scale-110 transition">
              {contact.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black shadow-xl hover:scale-110 transition transform"
      >
        {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Plus className="w-5 h-5 sm:w-6 sm:h-6" />}
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center space-y-3 sm:space-y-4">
        {/* Brand Name */}
        <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 tracking-tight">
          Premanshu Ray
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Premanshu Ray. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <a href="#privacy" className="hover:text-black dark:hover:text-white transition">Privacy Policy</a>
          <a href="#terms" className="hover:text-black dark:hover:text-white transition">Terms of Service</a>
          <a href="#support" className="hover:text-black dark:hover:text-white transition">Support</a>
        </div>
      </div>

      {/* Floating Contacts */}
      <FloatingContacts />
    </footer>
  );
}

export default Footer;
