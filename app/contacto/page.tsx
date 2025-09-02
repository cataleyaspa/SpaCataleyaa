
'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Contacto() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-fade-in-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50/30 to-white">
      <Header />
      <WhatsAppButton />
      
      <main className="pt-20 pb-12 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-200/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-to-br from-yellow-300/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-gradient-to-br from-yellow-100/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Hero Section */}
        <section className={`px-4 md:px-8 lg:px-16 py-16 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6 animate-gradient">
              Contacto
            </h1>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto backdrop-blur-sm bg-white/40 rounded-2xl p-6 shadow-lg">
              Estamos aquí para atenderte. Contáctanos y agenda tu cita para una experiencia única de belleza
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="px-4 md:px-8 lg:px-16 py-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "ri-whatsapp-fill", 
                  title: "WhatsApp",
                  description: "Chatea con nosotros",
                  contact: "Mensaje directo",
                  action: "https://wa.me/51927066998",
                  gradient: "from-green-400 to-green-600",
                  bgGradient: "from-green-50/80 to-green-100/80"
                },
                {
                  icon: "ri-instagram-fill",
                  title: "Instagram", 
                  description: "Síguenos en Instagram",
                  contact: "@cataleyastudio",
                  action: "https://instagram.com/cataleyastudiodebelleza",
                  gradient: "from-pink-400 to-pink-600",
                  bgGradient: "from-pink-50/80 to-pink-100/80"
                },
                {
                  icon: "ri-tiktok-fill",
                  title: "TikTok", 
                  description: "Síguenos en TikTok",
                  contact: "@cataleyaestudio1",
                  action: "https://www.tiktok.com/@cataleyaestudio1?is_from_webapp=1&sender_device=pc",
                  gradient: "from-gray-800 to-gray-900",
                  bgGradient: "from-gray-50/80 to-gray-100/80"
                },
                {
                  icon: "ri-facebook-fill",
                  title: "Facebook", 
                  description: "Síguenos en Facebook",
                  contact: "Cataleya Estudio",
                  action: "https://www.facebook.com/spadeunascataleya",
                  gradient: "from-blue-500 to-blue-700",
                  bgGradient: "from-blue-50/80 to-blue-100/80"
                }
              ].map((method, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll group hover:scale-105 transition-all duration-300"
                  style={{animationDelay: `${index * 100}ms`}}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`bg-gradient-to-br ${method.bgGradient} backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 h-full relative overflow-hidden`}>
                    {/* Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto`}>
                        <i className={`${method.icon} text-white text-2xl`}></i>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="font-bold text-gray-800 text-xl mb-2">{method.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                        <a 
                          href={method.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-block bg-gradient-to-r ${method.gradient} text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm`}
                        >
                          {method.contact}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 relative z-10">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-yellow-200/30 to-yellow-400/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-yellow-300/30 to-yellow-500/30 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <i className="ri-time-fill text-white text-3xl"></i>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                    Horarios de Atención
                  </h2>
                  <p className="text-gray-600 text-base">Te esperamos en nuestros horarios de atención</p>
                </div>
                
                <div className="max-w-lg mx-auto space-y-6">
                  {[
                    { days: "Lunes - Sábado", hours: "9:00 am - 8:00 pm", icon: "ri-calendar-fill" },
                    { days: "Domingos", hours: "10:00 am - 5:00 pm", icon: "ri-calendar-2-fill" }
                  ].map((schedule, index) => (
                    <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <i className={`${schedule.icon} text-white text-lg`}></i>
                          </div>
                          <span className="text-gray-800 font-medium text-lg">{schedule.days}</span>
                        </div>
                        <span className="text-gray-600 font-medium">{schedule.hours}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50/80 to-yellow-100/80 rounded-2xl border border-yellow-200/50">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-information-fill text-white text-lg"></i>
                    </div>
                    <p className="text-yellow-800 font-medium text-center">
                      Atención solo con previa cita - ¡Reserva tu espacio!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 relative z-10">
          <div className="max-w-6xl mx-auto animate-on-scroll">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500">
              {/* Map Container */}
              <div className="relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3234567890123!2d-76.9356912!3d-12.2149971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bbc227dbd61b%3A0xfaf5a73a96fb85ee!2sCataleya%20Estudio%20de%20belleza!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="md:h-96 lg:h-[500px] filter hover:saturate-110 transition-all duration-300"
                ></iframe>
                
                {/* Floating Location Card */}
                <div className="absolute bottom-6 left-6 right-6 md:left-6 md:right-auto md:max-w-sm">
                  <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/40">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <i className="ri-map-pin-fill text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg">Nuestra Ubicación</h3>
                        <p className="text-gray-600 text-sm">Lima, Perú</p>
                      </div>
                    </div>
                    <a 
                      href="https://www.google.com/maps/place/Cataleya+Estudio+de+belleza/@-12.2149971,-76.9356912,20z/data=!4m6!3m5!1s0x9105bbc227dbd61b:0xfaf5a73a96fb85ee!8m2!3d-12.2149009!4d-76.9356861!16s%2Fg%2F11ks4fx1bh?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm"
                    >
                      <i className="ri-navigation-fill mr-2"></i>
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 relative z-10">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-lg rounded-3xl p-6 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 via-transparent to-yellow-600/20"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                  Síguenos en Redes Sociales
                </h2>
                <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                  Mantente al día con nuestros últimos trabajos, tips de belleza y promociones especiales
                </p>
                
                <div className="grid grid-cols-3 gap-4 md:flex md:justify-center md:space-x-6 md:gap-0">
                  {[
                    {
                      platform: "Instagram",
                      icon: "ri-instagram-fill",
                      url: "https://instagram.com/cataleyastudiodebelleza",
                      gradient: "from-pink-500 via-red-500 to-yellow-500",
                      handle: "@cataleyastudio"
                    },
                    {
                      platform: "TikTok", 
                      icon: "ri-tiktok-fill",
                      url: "https://www.tiktok.com/@cataleyaestudio1?is_from_webapp=1&sender_device=pc",
                      gradient: "from-gray-900 to-gray-800",
                      handle: "@cataleyaestudio1"
                    },
                    {
                      platform: "Facebook", 
                      icon: "ri-facebook-fill",
                      url: "https://www.facebook.com/spadeunascataleya",
                      gradient: "from-blue-500 to-blue-700",
                      handle: "Cataleya Estudio"
                    }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group hover:scale-105 md:hover:scale-110 transition-all duration-300 flex flex-col items-center"
                    >
                      <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 mb-3 md:mb-4`}>
                        <i className={`${social.icon} text-white text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300`}></i>
                      </div>
                      <p className="text-white font-medium text-sm md:text-base">{social.platform}</p>
                      <p className="text-gray-400 text-xs md:text-sm truncate max-w-full px-1">{social.handle}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 md:px-8 lg:px-16 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <div className="bg-gradient-to-br from-yellow-400/10 via-white/80 to-yellow-600/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                ¿Lista para agendar tu cita?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                No esperes más para vivir una experiencia única de belleza. Contáctanos y reserva tu cita hoy mismo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/51927066998?text=Hola%2C%20quisiera%20agendar%20una%20cita%20en%20Cataleya%20Estudio%20de%20Belleza." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-medium shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  <i className="ri-whatsapp-fill mr-2 text-xl"></i>
                  Agendar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
