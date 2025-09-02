'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative z-10 px-4 md:px-8 lg:px-16 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/889394fc7f3ae0182519e695c029b2c2.png" 
                  alt="Cataleya Estudio de Belleza" 
                  className="h-16 w-auto mr-4 drop-shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                    Cataleya
                  </h3>
                  <p className="text-gray-300 text-sm">Estudio de Belleza</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Realzamos tu belleza natural con técnicas profesionales y productos de la más alta calidad. 
                Tu bienestar y confianza son nuestra prioridad.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/cataleyastudiodebelleza" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <i className="ri-instagram-fill text-white text-xl group-hover:scale-110 transition-transform duration-300"></i>
                </a>
                <a 
                  href="https://www.tiktok.com/@cataleyaestudio1?is_from_webapp=1&sender_device=pc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-gray-800/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <i className="ri-tiktok-fill text-white text-xl group-hover:scale-110 transition-transform duration-300"></i>
                </a>
                <a 
                  href="https://wa.me/51927066998" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <i className="ri-whatsapp-fill text-white text-xl group-hover:scale-110 transition-transform duration-300"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {[
                  { href: '/', label: 'Inicio' },
                  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
                  { href: '/servicios', label: 'Servicios' },
                  { href: '/contacto', label: 'Contacto' }
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-yellow-500/30 transition-colors duration-300">
                    <i className="ri-map-pin-line text-yellow-400 text-lg"></i>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">Lima, Perú</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <i className="ri-phone-line text-blue-400 text-lg"></i>
                  </div>
                  <div>
                    <a 
                      href="tel:+51927066998" 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      +51 927 066 998
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-500/30 transition-colors duration-300">
                    <i className="ri-whatsapp-line text-green-400 text-lg"></i>
                  </div>
                  <div>
                    <a 
                      href="https://wa.me/51927066998" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Highlight */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <h4 className="text-lg font-semibold mb-4 text-center text-white">Nuestros Servicios</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Microblading', 
                'Extensiones de Pestañas', 
                'Limpieza Facial', 
                'Manicure & Pedicure', 
                'Depilación Láser',
                'Curso de Microblading'
              ].map((service) => (
                <span 
                  key={service}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30 hover:border-yellow-400 transition-colors duration-300"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Cataleya Estudio de Belleza. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center text-gray-400 text-sm">
              <span>Hecho con</span>
              <i className="ri-heart-fill text-red-400 mx-2 animate-pulse"></i>
              <span>en Lima, Perú</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-400/5 to-transparent rounded-full blur-3xl"></div>
    </footer>
  );
}