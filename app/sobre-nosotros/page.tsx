
'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function SobreNosotros() {
  const [isVisible, setIsVisible] = useState(false);

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
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-200/20 to-yellow-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-to-br from-yellow-300/20 to-yellow-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-gradient-to-br from-yellow-100/20 to-yellow-300/20 rounded-full blur-3xl animate-float"></div>
        </div>

        {/* Hero Section */}
        <section className={`px-4 md:px-8 lg:px-16 py-16 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6 animate-gradient">
              Sobre Nosotros
            </h1>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto backdrop-blur-sm bg-white/40 rounded-2xl p-6 shadow-lg">
              Conoce la historia y pasión detrás de Cataleya Estudio de Belleza, tu destino de confianza para realzar tu belleza natural
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="px-4 md:px-8 lg:px-16 py-16 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Mission Card */}
            <div className="animate-on-scroll bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-heart-3-fill text-white text-2xl"></i>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Nuestra Misión
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                      En Cataleya Estudio de Belleza, creemos que cada persona merece sentirse segura y radiante. 
                      Nuestra misión es brindar confianza y bienestar a través de servicios de belleza especializados 
                      en un ambiente acogedor y profesional.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      Utilizamos técnicas modernas y productos de la más alta calidad para garantizar resultados 
                      excepcionales que realcen tu belleza natural y potencien tu autoestima.
                    </p>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/5d2f26b97ebcc112b543b560dd4c1760.png"
                      alt="Nuestro ambiente profesional"
                      className="w-full h-80 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="animate-on-scroll bg-gradient-to-br from-yellow-50/80 via-white/80 to-yellow-50/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12">
                  ¿Por qué elegir Cataleya?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: "ri-award-fill",
                      title: "Profesionalismo",
                      description: "Especialistas certificados con años de experiencia en técnicas avanzadas",
                      color: "from-yellow-400 to-yellow-600"
                    },
                    {
                      icon: "ri-vip-crown-fill",
                      title: "Calidad Premium",
                      description: "Productos y equipos de última generación importados directamente",
                      color: "from-yellow-500 to-yellow-700"
                    },
                    {
                      icon: "ri-home-heart-fill",
                      title: "Ambiente Acogedor",
                      description: "Espacio diseñado para tu relajación y bienestar total",
                      color: "from-yellow-400 to-yellow-600"
                    },
                    {
                      icon: "ri-user-star-fill",
                      title: "Atención Personalizada",
                      description: "Cada servicio adaptado a tus necesidades únicas y preferencias",
                      color: "from-yellow-500 to-yellow-700"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group/item hover:scale-105 transition-all duration-300">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/40">
                        <div className="flex items-start">
                          <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover/item:scale-110 transition-transform duration-300`}>
                            <i className={`${item.icon} text-white text-xl`}></i>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Space */}
            <div className="animate-on-scroll bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 group">
              <div className="lg:flex lg:items-center">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img 
                    src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/6a80b6c9f6a86beb2fc014aaaeb5fee6.png"
                    alt="Nuestro Estudio"
                    className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:from-transparent lg:to-black/30"></div>
                </div>
                <div className="lg:w-1/2 p-8 md:p-12 relative">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-yellow-400/30 rounded-full blur-xl"></div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                    Nuestro Espacio
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    Hemos creado un ambiente elegante y relajante donde te sentirás como en casa. 
                    Cada detalle ha sido cuidadosamente pensado para ofrecerte una experiencia única 
                    de belleza y bienestar.
                  </p>
                  <div className="flex items-center text-yellow-600">
                    <i className="ri-star-fill mr-2"></i>
                    <span className="font-medium">Ambiente premium diseñado para tu comodidad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 md:px-8 lg:px-16 py-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Nuestros Valores
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Los pilares que guían cada servicio y experiencia en nuestro estudio
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "ri-heart-3-fill",
                  title: "Pasión",
                  description: "Por realzar tu belleza natural",
                  color: "from-red-400 to-pink-500",
                  bgColor: "from-red-50 to-pink-50"
                },
                {
                  icon: "ri-shield-check-fill",
                  title: "Confianza",
                  description: "En cada servicio que ofrecemos",
                  color: "from-blue-400 to-blue-600",
                  bgColor: "from-blue-50 to-blue-100"
                },
                {
                  icon: "ri-star-fill",
                  title: "Excelencia",
                  description: "En resultados y atención",
                  color: "from-yellow-400 to-yellow-600",
                  bgColor: "from-yellow-50 to-yellow-100"
                },
                {
                  icon: "ri-user-heart-fill",
                  title: "Cuidado",
                  description: "Personal y profesional",
                  color: "from-green-400 to-green-600",
                  bgColor: "from-green-50 to-green-100"
                }
              ].map((value, index) => (
                <div key={index} className="animate-on-scroll group hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 100}ms`}}>
                  <div className={`bg-gradient-to-br ${value.bgColor} backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/40 h-full`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <i className={`${value.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 md:px-8 lg:px-16 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <div className="bg-gradient-to-br from-yellow-400/10 via-white/80 to-yellow-600/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                ¿Lista para conocernos?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                Ven y descubre por qué somos el estudio de belleza preferido. Te esperamos con los brazos abiertos.
              </p>
              <a 
                href="https://wa.me/51927066998?text=Hola%2C%20quisiera%20conocer%20más%20sobre%20Cataleya%20Estudio%20de%20Belleza." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-12 py-4 rounded-full font-medium shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
              >
                <i className="ri-whatsapp-fill mr-2"></i>
                Contáctanos
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
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
