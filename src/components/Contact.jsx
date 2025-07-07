import React, { useState, useEffect } from 'react';
import { MapPin, Mail, X, CheckCircle, AlertCircle, Info } from 'lucide-react';

function Contact() {
  const [matrixChars, setMatrixChars] = useState([]);
  const [glitchActive, setGlitchActive] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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

  // Toast notification system
  const showToast = (message, type = 'info') => {
    const id = Date.now();
    const newToast = { id, message, type };
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove toast after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  function getEmailBody(formData) {
    return `Hello,

I'm reaching out to you through your contact form. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

Best regards,
${formData.name}`;
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      showToast('⚠️ All fields are required!', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{3,14}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      showToast('Please enter a valid phone number', 'error');
      return;
    }

    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 500);

    const recipientEmail = 'premanshuray981@gmail.com';
    const emailSubject = formData.subject;
    const emailBody = getEmailBody(formData);
    
    // Create Gmail compose URL
    const gmailURL = `https://mail.google.com/mail/?view=cm&to=${recipientEmail}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    try {
      window.open(gmailURL, '_blank');
      showToast('Gmail opened successfully! Please send your email.', 'success');
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        showToast('Form cleared successfully', 'info');
      }, 1000);
    } catch (error) {
      showToast('Failed to open Gmail. Please try again.', 'error');
    }
  };

  const glitchKeyframes = `
    @keyframes glitch {
      0%, 100% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
    }
    
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @media (max-width: 768px) {
      @keyframes slideIn {
        from {
          transform: translateY(-100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;

  const getToastIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-red-400" />;
      case 'info':
      default:
        return <Info className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />;
    }
  };

  const getToastStyles = (type) => {
    switch (type) {
      case 'success':
        return 'border-green-500 bg-green-900 bg-opacity-90';
      case 'error':
        return 'border-red-500 bg-red-900 bg-opacity-90';
      case 'info':
      default:
        return 'border-blue-500 bg-blue-900 bg-opacity-90';
    }
  };

  return (
    <div className="min-h-screen pt-16 md:pt-8 bg-black relative overflow-hidden">
      <style>{glitchKeyframes}</style>
      
      {/* Toast Container */}
      <div className="fixed top-4 right-4 left-4 md:left-auto z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg border backdrop-blur-sm font-mono text-xs md:text-sm w-full md:min-w-80 md:max-w-96 ${getToastStyles(toast.type)}`}
            style={{
              animation: 'slideIn 0.3s ease-out'
            }}
          >
            <div className="flex-shrink-0 mt-0.5">
              {getToastIcon(toast.type)}
            </div>
            <span className="text-white flex-1 leading-relaxed break-words">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-gray-400 hover:text-white transition-all duration-300 flex-shrink-0 mt-0.5 p-1 rounded-full hover:bg-white hover:bg-opacity-20 backdrop-blur-sm border border-transparent hover:border-white hover:border-opacity-30"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      
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
                        placeholder="PHONE_NUMBER*"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent border border-cyan-500 border-opacity-50 rounded text-cyan-400 placeholder-cyan-400 placeholder-opacity-50 font-mono focus:border-cyan-400 focus:outline-none transition-all duration-300"
                        onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(34, 211, 238, 0.3)'}
                        onBlur={(e) => e.target.style.boxShadow = 'none'}
                      />
                    </div>
                    <div>
                      <input
                        name="subject"
                        type="text"
                        placeholder="EMAIL_SUBJECT*"
                        value={formData.subject}
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
                    className="relative w-full overflow-hidden group border-2 border-cyan-400 bg-transparent text-white font-bold py-4 px-8 rounded-lg transition-all duration-500 transform hover:scale-105 font-mono text-lg"
                    style={{
                      background: 'linear-gradient(45deg, rgba(34, 211, 238, 0.1), rgba(236, 72, 153, 0.1))',
                      animation: glitchActive ? 'glitch 0.5s linear, borderGlow 2s infinite' : 'borderGlow 3s infinite',
                      boxShadow: '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.animation = 'neonPulse 1s infinite, borderGlow 2s infinite';
                      e.target.style.background = 'linear-gradient(45deg, rgba(34, 211, 238, 0.2), rgba(236, 72, 153, 0.2))';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.animation = glitchActive ? 'glitch 0.5s linear, borderGlow 2s infinite' : 'borderGlow 3s infinite';
                      e.target.style.background = 'linear-gradient(45deg, rgba(34, 211, 238, 0.1), rgba(236, 72, 153, 0.1))';
                    }}
                  >
                    {/* Animated background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    
                    {/* Shine effect */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                        animation: 'textShine 2s infinite'
                      }}
                    ></div>
                    
                    {/* Button content */}
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent font-black tracking-wider">
                        SEND VIA GMAIL
                      </span>
                      <span className="text-2xl animate-pulse">📧</span>
                    </div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-60"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-400 opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pink-400 opacity-60"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-60"></div>
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
                  <a href="mailto:premanshuray981@gmail.com">premanshuray981@gmail.com</a>
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