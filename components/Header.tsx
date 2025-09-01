
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="px-4 md:px-8 lg:px-16 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/889394fc7f3ae0182519e695c029b2c2.png" 
              alt="Cataleya Estudio de Belleza" 
              className="h-12 md:h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link 
              href="/sobre-nosotros" 
              className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
            >
              Sobre Nosotros
            </Link>
            <Link 
              href="/servicios" 
              className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
            >
              Servicios
            </Link>
            <Link 
              href="/contacto" 
              className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
            >
              Contacto
            </Link>
            <a 
              href="https://wa.me/51927066998" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Reservar Cita
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu-3'}-line text-xl text-gray-700`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="/" 
                className="block text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/sobre-nosotros" 
                className="block text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link 
                href="/servicios" 
                className="block text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                href="/contacto" 
                className="block text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <a 
                href="https://wa.me/51927066998" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 rounded-full font-medium shadow-md text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservar Cita
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
