'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (pathname !== href) {
      setIsTransitioning(true);
      setIsMenuOpen(false);
      
      // Smooth page transition
      document.body.style.opacity = '0.9';
      document.body.style.transform = 'translateY(-10px)';
      document.body.style.transition = 'all 0.3s ease-out';
      
      setTimeout(() => {
        router.push(href);
        setTimeout(() => {
          document.body.style.opacity = '1';
          document.body.style.transform = 'translateY(0)';
          setIsTransitioning(false);
        }, 100);
      }, 200);
    } else {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/contacto', label: 'Contacto' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50' 
        : 'bg-white/80 backdrop-blur-sm border-b border-gray-100/50'
    }`}>
      <div className="px-4 md:px-8 lg:px-16 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div 
            onClick={() => handleNavigation('/')}
            className="flex items-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/889394fc7f3ae0182519e695c029b2c2.png" 
              alt="Cataleya Estudio de Belleza" 
              className="h-16 md:h-20 lg:h-24 w-auto drop-shadow-lg"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`relative text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium px-2 py-1 rounded-lg hover:bg-yellow-50 group ${
                  pathname === item.href ? 'text-yellow-600' : ''
                }`}
                disabled={isTransitioning}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transform transition-transform duration-300 ${
                  pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
            
            <a 
              href="https://wa.me/51927066998" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <i className="ri-whatsapp-line mr-2"></i>
                Reservar Cita
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-yellow-50 transition-colors duration-300 group"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-gray-700 rounded-full transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}></span>
              <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-4 left-0 w-6 h-0.5 bg-gray-700 rounded-full transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-2xl transition-all duration-500 transform ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 scale-y-100' 
            : 'opacity-0 -translate-y-4 scale-y-95 pointer-events-none'
        }`}>
          <nav className="px-4 py-6 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`block w-full text-left text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300 font-medium py-3 px-4 rounded-xl transform hover:translate-x-2 ${
                  pathname === item.href ? 'text-yellow-600 bg-yellow-50' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
                disabled={isTransitioning}
              >
                <div className="flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                    pathname === item.href ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}></span>
                  {item.label}
                </div>
              </button>
            ))}
            
            <div className="pt-4 border-t border-gray-200/50">
              <a 
                href="https://wa.me/51927066998" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg text-center transform hover:scale-105 transition-all duration-500"
              >
                <i className="ri-whatsapp-line mr-2"></i>
                Reservar Cita
              </a>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}