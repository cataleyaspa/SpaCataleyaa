
'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Servicios() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

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

  const handleReservarClick = (servicio: string) => {
    const message = `Hola, quisiera información y agendar una cita para ${servicio} en Cataleya.`;
    const whatsappUrl = `https://wa.me/51927066998?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCursoClick = () => {
    const message = "Hola, quisiera información sobre el Curso de Microblading en Cataleya Estudio de Belleza.";
    const whatsappUrl = `https://wa.me/51927066998?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
              Nuestros Servicios
            </h1>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto backdrop-blur-sm bg-white/40 rounded-2xl p-6 shadow-lg">
              Descubre nuestros tratamientos especializados para realzar tu belleza natural con técnicas de vanguardia
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="px-4 md:px-8 lg:px-16 py-8 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Curso de Microblading - DESTACADO */}
            <div className="animate-on-scroll bg-gradient-to-br from-yellow-400/10 via-white/90 to-yellow-600/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden relative border border-white/20 hover:shadow-3xl transition-all duration-500 group">
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
                  <i className="ri-fire-fill mr-1"></i>
                  ¡NUEVO!
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden order-1 md:order-1">
                  <img
                    src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/c89db0116aa671a35505a4e54ad734ae.jfif"
                    alt="Curso de Microblading"
                    className="w-full h-80 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-8 md:p-10 relative order-2 md:order-2 min-h-[500px] flex flex-col justify-center">
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-200/30 to-yellow-400/30 rounded-full blur-2xl"></div>
                  
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4 shadow-xl">
                      <i className="ri-graduation-cap-fill text-white text-xl"></i>
                    </div>
                    <h2 className="font-bold text-gray-800 text-xl md:text-2xl">Curso de Microblading Profesional</h2>
                  </div>
                  
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    Aprende las técnicas más demandadas en belleza de la mano de profesionales certificados. Curso completo con certificación 
                    que incluye teoría, práctica en modelos reales y todo el material necesario.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center">
                        <i className="ri-book-open-fill text-yellow-600 mr-2"></i>
                        Aprenderás:
                      </h4>
                      <div className="space-y-2">
                        {['Nanoblading', 'Microblading', 'Microshading'].map((technique, index) => (
                          <div key={index} className="flex items-center">
                            <i className="ri-check-line text-yellow-600 mr-2"></i>
                            <span className="text-gray-700 text-sm">{technique}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center">
                        <i className="ri-gift-fill text-yellow-600 mr-2"></i>
                        Incluye:
                      </h4>
                      <div className="space-y-2">
                        {['Certificado profesional', 'Práctica en modelos', 'Manual completo', 'Asesoramiento post-curso'].map((item, index) => (
                          <div key={index} className="flex items-center">
                            <i className="ri-check-line text-yellow-600 mr-2"></i>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCursoClick}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-full font-medium shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
                  >
                    <i className="ri-whatsapp-fill mr-2"></i>
                    Más Información
                  </button>
                </div>
              </div>
            </div>

            {/* Microblading */}
            <div className="animate-on-scroll bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500 group lg:flex lg:items-center">
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/724834b8f616605935e1c9d5d2e0476c.png"
                  alt="Microblading de Cejas"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

                {/* Floating Icon */}
                <div className={`absolute top-6 ${activeService === 0 ? 'left-6' : 'right-6'} w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl transform ${activeService === 0 ? 'scale-110 rotate-6' : ''} transition-all duration-300`}>
                  <i className="ri-eye-fill text-white text-2xl"></i>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 md:p-10 relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-yellow-400/20 rounded-full blur-2xl"></div>
                
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                  Microblading de Cejas
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  El microblading es una técnica de micropigmentación que crea cejas pelo a pelo de forma natural y duradera. Perfecto para quienes buscan definir, rellenar o reconstruir sus cejas.
                </p>

                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <i className="ri-star-fill text-yellow-500 mr-2"></i>
                    Beneficios:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['Resultado natural pelo a pelo', 'Duración de 12 a 18 meses', 'Ahorra tiempo en rutina diaria', 'Forma personalizada según rostro'].map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start group/benefit">
                        <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/benefit:scale-110 transition-transform duration-200">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed flex-1">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleReservarClick('Microblading')}
                  className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-4 px-8 rounded-full font-medium shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  <i className="ri-calendar-check-fill mr-2"></i>
                  Reservar Cita
                </button>
              </div>
            </div>

            {/* Extensiones y Lifting de Pestañas */}
            <div className="animate-on-scroll bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500 group lg:flex-row-reverse lg:flex lg:items-center">
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/0a599353c432ffa516cfdff289e4d5cd.png"
                  alt="Extensiones y Lifting de Pestañas"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>

                {/* Floating Icon */}
                <div className={`absolute top-6 ${activeService === 1 ? 'left-6' : 'right-6'} w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform ${activeService === 1 ? 'scale-110 rotate-6' : ''} transition-all duration-300`}>
                  <i className="ri-eye-2-fill text-white text-2xl"></i>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 md:p-10 relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-yellow-400/20 rounded-full blur-2xl"></div>
                
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                  Extensiones y Lifting de Pestañas
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  Mejora tu mirada con un look natural o glam, ya sea con extensiones resistentes o con el lifting que curva y realza tus pestañas naturales.
                </p>

                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <i className="ri-star-fill text-yellow-500 mr-2"></i>
                    Beneficios:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['Look natural o glam personalizado', 'Extensiones resistentes y duraderas', 'Lifting que curva pestañas naturales', 'Mirada más expresiva e impactante'].map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start group/benefit">
                        <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/benefit:scale-110 transition-transform duration-200">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed flex-1">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleReservarClick('Extensiones y Lifting de Pestañas')}
                  className="w-full md:w-auto bg-gradient-to-r from-purple-400 to-purple-600 text-white py-4 px-8 rounded-full font-medium shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  <i className="ri-calendar-check-fill mr-2"></i>
                  Reservar Cita
                </button>
              </div>
            </div>

            {/* Limpieza Facial */}
            <div className="animate-on-scroll bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500 group lg:flex lg:items-center">
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/43a3b09db62bd26aa9d2f2e77616a866.png"
                  alt="Limpieza Facial"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

                {/* Floating Icon */}
                <div className={`absolute top-6 ${activeService === 2 ? 'left-6' : 'right-6'} w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl transform ${activeService === 2 ? 'scale-110 rotate-6' : ''} transition-all duration-300`}>
                  <i className="ri-drop-fill text-white text-2xl"></i>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 md:p-10 relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-yellow-400/20 rounded-full blur-2xl"></div>
                
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                  Limpieza Facial
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  Tratamiento especializado para purificar la piel, remover impurezas y revitalizar el rostro. Proceso completo que incluye limpieza profunda, exfoliación e hidratación.
                </p>

                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <i className="ri-star-fill text-yellow-500 mr-2"></i>
                    Beneficios:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['Purifica la piel profundamente', 'Remueve impurezas y toxinas', 'Revitaliza y rejuvenece el rostro', 'Piel suave, limpia y radiante'].map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start group/benefit">
                        <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/benefit:scale-110 transition-transform duration-200">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed flex-1">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleReservarClick('Limpieza Facial')}
                  className="w-full md:w-auto bg-gradient-to-r from-blue-400 to-blue-600 text-white py-4 px-8 rounded-full font-medium shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  <i className="ri-calendar-check-fill mr-2"></i>
                  Reservar Cita
                </button>
              </div>
            </div>

            {/* Manicure & Pedicure */}
            <div className="animate-on-scroll bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500 group lg:flex-row-reverse lg:flex lg:items-center">
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/495ed0254957d34d78972cd38669a7f1.png"
                  alt="Manicure & Pedicure"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>

                {/* Floating Icon */}
                <div className={`absolute top-6 ${activeService === 3 ? 'left-6' : 'right-6'} w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl transform ${activeService === 3 ? 'scale-110 rotate-6' : ''} transition-all duration-300`}>
                  <i className="ri-hand-heart-fill text-white text-2xl"></i>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 md:p-10 relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-yellow-400/20 rounded-full blur-2xl"></div>
                
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                  Manicure & Pedicure
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  Cuidado completo para tus manos y pies con técnicas profesionales y productos de alta calidad. Desde el cuidado básico hasta diseños artísticos personalizados.
                </p>

                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <i className="ri-star-fill text-yellow-500 mr-2"></i>
                    Beneficios:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['Diseños personalizados y únicos', 'Productos premium de larga duración', 'Cuidado integral de cutículas', 'Relajación y bienestar'].map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start group/benefit">
                        <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/benefit:scale-110 transition-transform duration-200">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed flex-1">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleReservarClick('Manicure & Pedicure')}
                  className="w-full md:w-auto bg-gradient-to-r from-green-400 to-green-600 text-white py-4 px-8 rounded-full font-medium shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  <i className="ri-calendar-check-fill mr-2"></i>
                  Reservar Cita
                </button>
              </div>
            </div>

            {/* Depilación Láser */}
            <div className="animate-on-scroll bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500 group lg:flex lg:items-center">
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/9f4378c4437beb2fc32f5cc5166b6f2e.png"
                  alt="Depilación Láser"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

                {/* Floating Icon */}
                <div className={`absolute top-6 ${activeService === 4 ? 'left-6' : 'right-6'} w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl transform ${activeService === 4 ? 'scale-110 rotate-6' : ''} transition-all duration-300`}>
                  <i className="ri-flashlight-fill text-white text-2xl"></i>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 md:p-10 relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-yellow-400/20 rounded-full blur-2xl"></div>
                
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                  Depilación Láser
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  Tecnología láser de última generación para una depilación segura, efectiva y progresiva. Olvídate del vello no deseado de forma permanente.
                </p>

                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <i className="ri-star-fill text-yellow-500 mr-2"></i>
                    Beneficios:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['Resultados permanentes y seguros', 'Tecnología láser avanzada', 'Procedimiento rápido y cómodo', 'Piel suave y libre de irritaciones'].map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start group/benefit">
                        <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/benefit:scale-110 transition-transform duration-200">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed flex-1">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleReservarClick('Depilación Láser')}
                  className="w-full md:w-auto bg-gradient-to-r from-red-400 to-red-600 text-white py-4 px-8 rounded-full font-medium shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  <i className="ri-calendar-check-fill mr-2"></i>
                  Reservar Cita
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 md:px-8 lg:px-16 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <div className="bg-gradient-to-br from-yellow-400/10 via-white/80 to-yellow-600/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                ¿Lista para tu transformación?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                Agenda tu cita y descubre cómo podemos realzar tu belleza natural con nuestros servicios profesionales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/51927066998?text=Hola%2C%20quisiera%20información%20sobre%20los%20servicios%20de%20Cataleya%20Estudio%20de%20Belleza." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-medium shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  <i className="ri-whatsapp-fill mr-2 text-xl"></i>
                  Contactar por WhatsApp
                </a>
                <a 
                  href="tel:+51927066998"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-full font-medium shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  <i className="ri-phone-fill mr-2 text-xl"></i>
                  Llamar Ahora
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
