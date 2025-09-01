
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4 md:pt-12 md:pb-6">
      <div className="px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
            <div className="text-center md:text-left">
              <img 
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/889394fc7f3ae0182519e695c029b2c2.png" 
                alt="Cataleya Estudio de Belleza" 
                className="h-16 md:h-20 w-auto mx-auto md:mx-0 mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Realza tu belleza natural con nuestros servicios especializados
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-bold text-white mb-4 text-base md:text-lg">Enlaces Rápidos</h3>
              <div className="space-y-2">
                <a href="/" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm md:text-base">Inicio</a>
                <a href="/sobre-nosotros" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm md:text-base">Sobre Nosotros</a>
                <a href="/servicios" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm md:text-base">Servicios</a>
                <a href="/contacto" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm md:text-base">Contacto</a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-bold text-white mb-4 text-base md:text-lg">Contacto</h3>
              <div className="space-y-2">
                <a href="tel:+51927066998" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm md:text-base">
                  <i className="ri-phone-line mr-2"></i>+51 927 066 998
                </a>
                <a href="https://wa.me/51927066998" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm md:text-base">
                  <i className="ri-whatsapp-line mr-2"></i>WhatsApp
                </a>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <a href="https://instagram.com/cataleyastudiodebelleza" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                    <i className="ri-instagram-fill text-xl md:text-2xl"></i>
                  </a>
                  <a href="https://www.tiktok.com/@cataleyaestudio1?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors">
                    <i className="ri-tiktok-fill text-xl md:text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4">
            <p className="text-center text-gray-500 text-xs md:text-sm">
              © 2024 Cataleya Estudio de Belleza. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
