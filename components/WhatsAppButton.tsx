'use client';

import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = "Hola, me gustaría obtener más información sobre los servicios de Cataleya Estudio de Belleza.";
    const whatsappUrl = `https://wa.me/51927066998?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-700 transform ${
      isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-50'
    }`}>
      {/* Floating Animation Rings */}
      <div className="absolute inset-0 animate-ping">
        <div className="w-16 h-16 bg-green-400/30 rounded-full"></div>
      </div>
      <div className="absolute inset-0 animate-pulse">
        <div className="w-16 h-16 bg-green-400/20 rounded-full animate-ping delay-75"></div>
      </div>
      
      {/* Main Button */}
      <button
        onClick={handleClick}
        className="relative group w-16 h-16 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center overflow-hidden"
        aria-label="Contactar por WhatsApp"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        
        {/* Icon */}
        <i className="ri-whatsapp-fill text-white text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300"></i>
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 bg-white/20 group-active:animate-ping"></div>
      </button>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <div className="bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap shadow-xl border border-gray-700/50">
          ¡Contáctanos por WhatsApp!
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-l-8 border-l-gray-900/95 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
        </div>
      </div>

      {/* Floating Message Indicator */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
        <span className="text-white text-xs font-bold">1</span>
      </div>
    </div>
  );
}