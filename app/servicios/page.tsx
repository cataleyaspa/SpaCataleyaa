
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Servicios() {
  const handleReservarClick = (servicio: string) => {
    const message = `Hola, quisiera información y agendar una cita para ${servicio} en Cataleya.`;
    const whatsappUrl = `https://wa.me/51927066998?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />

      <main className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 bg-gradient-to-b from-yellow-50/30 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h1>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-sm md:max-w-lg mx-auto">
              Descubre nuestros tratamientos especializados para realzar tu belleza natural
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="px-4 md:px-8 lg:px-16 py-8">
          <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
            {/* Microblading */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden lg:flex lg:items-center lg:gap-8">
              <img
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/724834b8f616605935e1c9d5d2e0476c.png"
                alt="Microblading de Cejas"
                className="w-full lg:w-1/2 h-56 md:h-64 lg:h-80 object-cover object-top"
              />
              <div className="p-6 md:p-8 lg:flex-1">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">Microblading de Cejas</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  El microblading es una técnica de micropigmentación que crea cejas pelo a pelo de forma natural y duradera. 
                  Perfecto para quienes buscan definir, rellenar o reconstruir sus cejas con un resultado completamente natural.
                </p>

                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3 text-sm md:text-base">Beneficios:</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Resultado natural pelo a pelo</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Duración de 12 a 18 meses</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Ahorra tiempo en tu rutina diaria</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Forma personalizada según tu rostro</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleReservarClick('Microblading')}
                  className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Reservar Cita para Microblading
                </button>
              </div>
            </div>

            {/* Extensiones y Lifting de Pestañas */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden lg:flex lg:flex-row-reverse lg:items-center lg:gap-8">
              <img 
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/0a599353c432ffa516cfdff289e4d5cd.png"
                alt="Extensiones y Lifting de Pestañas"
                className="w-full lg:w-1/2 h-56 md:h-64 lg:h-80 object-cover object-top"
              />
              <div className="p-6 md:p-8 lg:flex-1">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">Extensiones y Lifting de Pestañas</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  Mejora tu mirada con un look natural o glam, ya sea con extensiones resistentes o con el lifting que curva y realza tus pestañas naturales. 
                  Perfectas para lograr una mirada impactante y expresiva sin necesidad de máscara de pestañas.
                </p>

                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3 text-sm md:text-base">Beneficios:</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Look natural o glam personalizado</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Extensiones resistentes y duraderas</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Lifting que curva pestañas naturales</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Mirada más expresiva e impactante</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleReservarClick('Extensiones y Lifting de Pestañas')}
                  className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Reservar Cita para Pestañas
                </button>
              </div>
            </div>

            {/* Limpieza Facial */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden lg:flex lg:items-center lg:gap-8">
              <img 
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/43a3b09db62bd26aa9d2f2e77616a866.png"
                alt="Limpieza Facial"
                className="w-full lg:w-1/2 h-56 md:h-64 lg:h-80 object-cover object-top"
              />
              <div className="p-6 md:p-8 lg:flex-1">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">Limpieza Facial</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  Tratamiento especializado para purificar la piel, remover impurezas y revitalizar el rostro. 
                  Proceso completo que incluye limpieza profunda, exfoliación e hidratación para una piel radiante y saludable.
                </p>

                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3 text-sm md:text-base">Beneficios:</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Purifica la piel profundamente</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Remueve impurezas y toxinas</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Revitaliza y rejuvenece el rostro</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Piel suave, limpia y radiante</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleReservarClick('Limpieza Facial')}
                  className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Reservar Cita para Limpieza Facial
                </button>
              </div>
            </div>

            {/* Manicure & Pedicure */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden lg:flex lg:flex-row-reverse lg:items-center lg:gap-8">
              <img 
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/0d392a6fe7af63619c1849f3223044d7.png"
                alt="Manicure & Pedicure"
                className="w-full lg:w-1/2 h-56 md:h-64 lg:h-80 object-cover object-top"
              />
              <div className="p-6 md:p-8 lg:flex-1">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">Manicure & Pedicure</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  Cuidado completo para tus manos y pies con técnicas profesionales y productos de alta calidad. 
                  Desde el cuidado básico hasta diseños artísticos personalizados que reflejen tu estilo único.
                </p>

                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3 text-sm md:text-base">Beneficios:</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Diseños personalizados y únicos</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Productos premium de larga duración</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Cuidado integral de cutículas</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Relajación y bienestar</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleReservarClick('Manicure & Pedicure')}
                  className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Reservar Cita para Manicure & Pedicure
                </button>
              </div>
            </div>

            {/* Depilación Láser */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden lg:flex lg:items-center lg:gap-8">
              <img 
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/9f4378c4437beb2fc32f5cc5166b6f2e.png"
                alt="Depilación Láser"
                className="w-full lg:w-1/2 h-56 md:h-64 lg:h-80 object-cover object-top"
              />
              <div className="p-6 md:p-8 lg:flex-1">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">Depilación Láser</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  Tecnología láser de última generación para una depilación segura, efectiva y progresiva. 
                  Olvídate del vello no deseado de forma permanente con resultados visibles desde las primeras sesiones.
                </p>

                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3 text-sm md:text-base">Beneficios:</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Resultados permanentes y seguros</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Tecnología láser avanzada</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Procedimiento rápido y cómodo</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-checkbox-circle-fill text-yellow-600 text-sm"></i>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Piel suave y libre de irritaciones</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleReservarClick('Depilación Láser')}
                  className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Reservar Cita para Depilación Láser
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 md:px-8 lg:px-16 py-12 bg-gradient-to-b from-yellow-50/30 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">¿Lista para tu transformación?</h2>
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed max-w-xs md:max-w-lg mx-auto">
              Agenda tu cita y descubre cómo podemos realzar tu belleza natural
            </p>
            <a 
              href="https://wa.me/51927066998?text=Hola%2C%20quisiera%20información%20sobre%20los%20servicios%20de%20Cataleya%20Estudio%20de%20Belleza." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-3 md:px-12 md:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
