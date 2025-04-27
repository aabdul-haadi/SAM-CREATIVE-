import React from 'react';
import {  Instagram, Mail } from 'lucide-react';

const StickyIcons = () => {
  return (
    <div className="fixed bottom-40 right-6 flex flex-col items-center space-y-4 z-50">
      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
        aria-label="Instagram"
      >
        <Instagram size={24} className="text-white" />
      </a>

      {/* Gmail Icon */}
      <a
        href="mailto:example@gmail.com"
        className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
        aria-label="Gmail"
      >
        <Mail size={24} className="text-white" />
      </a>

      {/* Chatbot Icon */}
      {/* <button
        onClick={() => window.location.href = "#chatbot-section"} // Trigger the chatbot section visibility or scroll to the section
        className="w-12 h-12 bg-white border border-gray-300 rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all"
        aria-label="Chatbot"
      >
        <Bot size={24} className="text-primary" />
      </button> */}
    </div>
  );
};

export default StickyIcons;
