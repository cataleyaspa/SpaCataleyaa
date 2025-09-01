
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Contacto() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      
      <main className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 bg-gradient-to-b from-yellow-50/30 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Contacto</h1>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-sm md:max-w-lg mx-auto">
              Estamos aquí para atenderte. Contáctanos y agenda tu cita
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="px-4 md:px-8 lg:px-16 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Phone */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-phone-fill text-yellow-600 text-xl md:text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm md:text-base mb-1">Teléfono</h3>
                    <a 
                      href="tel:+51927066998" 
                      className="text-sm md:text-base text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      +51 927 066 998
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-whatsapp-fill text-green-600 text-xl md:text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm md:text-base mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/51927066998" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Chatear ahora
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="md:col-span-2 lg:col-span-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-800 text-sm md:text-base mb-4">Síguenos en redes sociales</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/cataleyastudiodebelleza" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-14 md:h-14 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors"
                  >
                    <i className="ri-instagram-fill text-pink-600 text-xl md:text-2xl"></i>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@cataleyaestudio1?is_from_webapp=1&sender_device=pc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-14 md:h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
                  >
                    <i className="ri-tiktok-fill text-white text-xl md:text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="px-4 md:px-8 lg:px-16 py-8 bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">Horarios de Atención</h2>
              
              <div className="max-w-md mx-auto space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm md:text-base font-medium text-gray-700">Lunes - Sábado</span>
                  <span className="text-sm md:text-base text-gray-600">9:00 am - 8:00 pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm md:text-base font-medium text-gray-700">Domingos</span>
                  <span className="text-sm md:text-base text-gray-600">10:00 am - 5:00 pm</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-xl">
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-information-fill text-yellow-600"></i>
                  </div>
                  <p className="text-sm md:text-base text-yellow-700 font-medium text-center">
                    Atención solo con previa cita
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="px-4 md:px-8 lg:px-16 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3234567890123!2d-76.9356912!3d-12.2149971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bbc227dbd61b%3A0xfaf5a73a96fb85ee!2sCataleya%20Estudio%20de%20belleza!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="md:h-80 lg:h-96"
              ></iframe>
              
              <div className="p-6 md:p-8">
                <h3 className="font-medium text-gray-800 text-sm md:text-base mb-3">Ubicación</h3>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-map-pin-line text-yellow-600"></i>
                  </div>
                  <a 
                    href="https://www.google.com/maps/place/Cataleya+Estudio+de+belleza/@-12.2149971,-76.9356912,20z/data=!4m6!3m5!1s0x9105bbc227dbd61b:0xfaf5a73a96fb85ee!8m2!3d-12.2149009!4d-76.9356861!16s%2Fg%2F11ks4fx1bh?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    Lima, Perú
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
