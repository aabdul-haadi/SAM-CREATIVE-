import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const StickyIcons = () => {
  return (
    <div className="fixed bottom-40 right-6 flex flex-col items-center space-y-4 z-50">
      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com/sam.creative.animation/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>

      {/* Email Icon */}
      <a
        href="mailto:samcreativeoficial@gmail.com"
        className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
        aria-label="Email"
      >
        <Mail size={24} />
      </a>

      {/* Chatbot Icon (commented out for future use) */}
      {/*
      <button
        onClick={() => window.location.href = "#chatbot-section"} // Scroll to chatbot section
        className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
        aria-label="Chatbot"
      >
        <Bot size={24} className="text-primary" />
      </button>
      */}
    </div>
  );
};

export default StickyIcons;
