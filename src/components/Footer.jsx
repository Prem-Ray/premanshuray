import React, { useState } from "react";
import { Phone, MessageSquare, Plus, X } from "lucide-react";

function FloatingContacts() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      id: "call",
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      label: "Call Now",
      href: "tel:+917047466142",
    },
    {
      id: "whatsapp",
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      label: "WhatsApp",
      href: "https://wa.me/917047466142?text=Hello%20Premanshu!",
    },
  ];

  return (
    <div
      className="
        fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8
        z-50 transition-all duration-500
        flex flex-col items-end
      "
    >
      {/* Contact Items */}
      <div
        className={`
          flex flex-col sm:flex-row-reverse 
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
          transition-all duration-300
          space-y-2 sm:space-y-0 sm:space-x-reverse sm:space-x-3 lg:space-x-4
          mb-2 sm:mb-0 sm:ml-4
          items-end sm:items-center
          ${
            isOpen
              ? "translate-y-0 sm:translate-x-0"
              : "translate-y-4 sm:translate-x-6"
          }
        `}
      >
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.href}
            target={contact.id === "whatsapp" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="
              flex items-center space-x-2 sm:space-x-3 lg:space-x-4 rounded-full
              bg-white dark:bg-black shadow-lg 
              px-3 sm:px-4 lg:px-5 py-2 lg:py-3
              hover:shadow-xl hover:scale-105
              transition-all border border-gray-200 dark:border-gray-800 w-fit
            "
          >
            <span className="text-gray-900 dark:text-white font-medium text-xs sm:text-sm lg:text-base whitespace-nowrap">
              {contact.label}
            </span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-black shadow-md hover:scale-110 transition">
              {contact.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16
          flex items-center justify-center 
          rounded-full
          bg-black dark:bg-white text-white dark:text-black 
          shadow-xl
          hover:scale-110 transition transform
          active:scale-95
        "
        aria-label="Toggle contact options"
      >
        {isOpen ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
        ) : (
          <Plus className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
        )}
      </button>
    </div>
  );
}

export default FloatingContacts;
