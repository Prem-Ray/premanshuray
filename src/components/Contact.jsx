import React, { useState, useEffect } from 'react';
import { MapPin, Mail } from 'lucide-react';

function Contact() {
  const [matrixChars, setMatrixChars] = useState([]);
  const [glitchActive, setGlitchActive] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    message: ''
  });

  useEffect(() => {
    const chars = '01010110100101001011010010110100101101001011010010110100ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newChars = [];
    const charCount = window.innerWidth < 768 ? 25 : 50;

    for (let i = 0; i < charCount; i++) {
      newChars.push({
        char: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
    setMatrixChars(newChars);

    const interval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => ({
        ...char,
        y: char.y > 100 ? -5 : char.y + char.speed,
        char: Math.random() < 0.02 ? chars[Math.floor(Math.random() * chars.length)] : char.char
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  function getWhatsappMessage(formData) {
    return `🚀 *NEW CONTACT FORM SUBMISSION* 🚀

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
📝 *Profession:* ${formData.profession}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 *Message:*
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ Sent: ${new Date().toLocaleString()}`;
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.profession || !formData.message) {
      alert('⚠️ All fields are required!');
      return;
    }

    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 500);

    const whatsappNumber = '917047466142';
    const whatsappMessage = getWhatsappMessage(formData);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        profession: '',
        message: ''
      });
    }, 1000);
  };

  const glitchKeyframes = `
    @keyframes glitch {
      0%, 100% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
    }
  `;

  return (
    <div className="min-h-screen pt-16 md:pt-8 bg-black relative overflow-hidden">
      <style>{glitchKeyframes}</style>
      
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 pointer-events-none">
        {matrixChars.map((char, index) => (
          <div
            key={index}
            className="absolute text-green-400 font-mono text-xs"
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              opacity: char.opacity,
              transform: `translateY(${char.y}px)`
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
              CONTACT
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-cyan-500 border-opacity-30 rounded-lg p-6 md:p-8">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-cyan-400 font-mono text-sm">SECURE_CHANNEL_ACTIVE</span>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        name="name"
                        type="text"
                        placeholder="FULL_NAME*"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent border border-cyan-500 border-opacity-50 rounded text-cyan-400 placeholder-cyan-400 placeholder-opacity-50 font-mono focus:border-cyan-400 focus:outline-none focus:shadow-cyan transition-all duration-300"
                        style={{
                          boxShadow: 'none'
                        }}
                        onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(34, 211, 238, 0.3)'}
                        onBlur={(e) => e.target.style.boxShadow = 'none'}
                      />
                    </div>
                    <div>
                      <input
                        name="email"
                        type="email"
                        placeholder="EMAIL_ADDRESS*"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent border border-cyan-500 border-opacity-50 rounded text-cyan-400 placeholder-cyan-400 placeholder-opacity-50 font-mono focus:border-cyan-400 focus:outline-none transition-all duration-300"
                        onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(34, 211, 238, 0.3)'}
                        onBlur={(e) => e.target.style.boxShadow = 'none'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="MOBILE_NUMBER*"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent border border-cyan-500 border-opacity-50 rounded text-cyan-400 placeholder-cyan-400 placeholder-opacity-50 font-mono focus:border-cyan-400 focus:outline-none transition-all duration-300"
                        onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(34, 211, 238, 0.3)'}
                        onBlur={(e) => e.target.style.boxShadow = 'none'}
                      />
                    </div>
                    <div>
                      <input
                        name="profession"
                        type="text"
                        placeholder="Profession*"
                        value={formData.profession}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent border border-cyan-500 border-opacity-50 rounded text-cyan-400 placeholder-cyan-400 placeholder-opacity-50 font-mono focus:border-cyan-400 focus:outline-none transition-all duration-300"
                        onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(34, 211, 238, 0.3)'}
                        onBlur={(e) => e.target.style.boxShadow = 'none'}
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="YOUR_MESSAGE*"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-transparent border border-cyan-500 border-opacity-50 rounded text-cyan-400 placeholder-cyan-400 placeholder-opacity-50 font-mono focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none"
                      onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(34, 211, 238, 0.3)'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-purple-500 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 font-mono text-lg"
                    style={{
                      boxShadow: glitchActive ? '0 0 20px rgba(34, 211, 238, 0.5)' : 'none',
                      animation: glitchActive ? 'glitch 0.5s linear' : 'none'
                    }}
                    onMouseEnter={(e) => e.target.style.boxShadow = '0 0 20px rgba(34, 211, 238, 0.5)'}
                    onMouseLeave={(e) => e.target.style.boxShadow = glitchActive ? '0 0 20px rgba(34, 211, 238, 0.5)' : 'none'}
                  >
                    SEND_TO_WHATSAPP 📱
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Location */}
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-pink-500 border-opacity-30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-pink-500 w-6 h-6" />
                  <h3 className="text-pink-500 font-bold text-lg">LOCATION</h3>
                </div>
                <div className="text-cyan-400 font-mono text-sm space-y-1">
                  <p>Arambagh,</p>
                  <p>West Bengal, India</p>
                  <p>PIN: 712616</p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-green-500 border-opacity-30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="text-green-500 w-6 h-6" />
                  <h3 className="text-green-500 font-bold text-lg">CONTACT</h3>
                </div>
                <div className="text-cyan-400 font-mono text-sm space-y-2">
                  <p>+91 7047466142</p>
                  <p>premanshuray981@gmail.com</p>
                </div>
              </div>

              {/* Status */}
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-green-500 border-opacity-30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-green-500 font-bold text-lg">ONLINE</h3>
                </div>
                <div className="text-cyan-400 font-mono text-sm">
                  <p>Response time: &lt; 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;