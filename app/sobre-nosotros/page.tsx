
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      
      <main className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 bg-gradient-to-b from-yellow-50/30 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/889394fc7f3ae0182519e695c029b2c2.png" 
              alt="Cataleya Estudio de Belleza" 
              className="h-20 md:h-24 lg:h-32 w-auto mx-auto mb-6"
            />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Sobre Nosotros</h1>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-sm md:max-w-lg mx-auto">
              Conoce nuestra historia y misión de realzar tu belleza natural
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="px-4 md:px-8 lg:px-16 py-12">
          <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Nuestra Misión</h2>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
                En Cataleya Estudio de Belleza, creemos que cada persona merece sentirse segura y radiante. 
                Nuestra misión es brindar confianza y bienestar a través de servicios de belleza especializados 
                en un ambiente acogedor y profesional.
              </p>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                Utilizamos técnicas modernas y productos de la más alta calidad para garantizar resultados 
                excepcionales que realcen tu belleza natural y potencien tu autoestima.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6">¿Por qué elegir Cataleya?</h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    <i className="ri-checkbox-circle-fill text-yellow-600 text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm md:text-base mb-1">Profesionalismo</h3>
                    <p className="text-xs md:text-sm text-gray-600">Especialistas certificados con años de experiencia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    <i className="ri-checkbox-circle-fill text-yellow-600 text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm md:text-base mb-1">Calidad Premium</h3>
                    <p className="text-xs md:text-sm text-gray-600">Productos y equipos de última generación</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    <i className="ri-checkbox-circle-fill text-yellow-600 text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm md:text-base mb-1">Ambiente Acogedor</h3>
                    <p className="text-xs md:text-sm text-gray-600">Espacio diseñado para tu relajación y bienestar</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    <i className="ri-checkbox-circle-fill text-yellow-600 text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm md:text-base mb-1">Atención Personalizada</h3>
                    <p className="text-xs md:text-sm text-gray-600">Cada servicio adaptado a tus necesidades únicas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 lg:flex lg:items-center lg:gap-8">
              <img 
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/d27128bd7fdc3c37a0e22fe74f1d4b99.png"
                alt="Nuestro Estudio"
                className="w-full lg:w-1/2 h-48 md:h-64 lg:h-80 object-cover object-top"
              />
              <div className="p-6 md:p-8 lg:flex-1">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">Nuestro Espacio</h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Hemos creado un ambiente elegante y relajante donde te sentirás como en casa. 
                  Cada detalle ha sido cuidadosamente pensado para ofrecerte una experiencia única 
                  de belleza y bienestar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 md:px-8 lg:px-16 py-12 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">Nuestros Valores</h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-heart-3-fill text-yellow-600 text-xl md:text-2xl"></i>
                </div>
                <h3 className="font-medium text-gray-800 text-sm md:text-base mb-2">Pasión</h3>
                <p className="text-xs md:text-sm text-gray-600">Por realzar tu belleza natural</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-shield-check-fill text-yellow-600 text-xl md:text-2xl"></i>
                </div>
                <h3 className="font-medium text-gray-800 text-sm md:text-base mb-2">Confianza</h3>
                <p className="text-xs md:text-sm text-gray-600">En cada servicio que ofrecemos</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-star-fill text-yellow-600 text-xl md:text-2xl"></i>
                </div>
                <h3 className="font-medium text-gray-800 text-sm md:text-base mb-2">Excelencia</h3>
                <p className="text-xs md:text-sm text-gray-600">En resultados y atención</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-user-heart-fill text-yellow-600 text-xl md:text-2xl"></i>
                </div>
                <h3 className="font-medium text-gray-800 text-sm md:text-base mb-2">Cuidado</h3>
                <p className="text-xs md:text-sm text-gray-600">Personal y profesional</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
