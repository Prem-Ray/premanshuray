import React, { useState } from "react";
import { MapPin, Mail } from "lucide-react";

const appleFontFamily =
  "font-sf, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <div
      className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500"
      style={{ fontFamily: appleFontFamily }}
    >
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold tracking-tight">Contact</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            We’d love to hear from you.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Form */}
          <form className="lg:col-span-2 space-y-6">
            {/* Inputs */}
            {["name", "email", "phone", "subject"].map((field) => (
              <input
                key={field}
                name={field}
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-xl bg-transparent focus:border-black focus:dark:border-white focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all outline-none text-base"
              />
            ))}

            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-xl bg-transparent focus:border-black focus:dark:border-white focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all outline-none text-base resize-none"
            />

            <button
              type="submit"
              className="w-full md:w-auto bg-black dark:bg-white text-white dark:text-black rounded-full px-10 py-4 text-lg font-semibold tracking-wide hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Sidebar */}
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-medium flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Location
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Arambagh, West Bengal, India<br />
                PIN: 712616
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Mail className="w-5 h-5" /> Contact
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                +91 7047466142 <br />
                <a
                  href="mailto:premanshuray981@gmail.com"
                  className="underline hover:text-black dark:hover:text-white"
                >
                  premanshuray981@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Availability</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Usually responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
