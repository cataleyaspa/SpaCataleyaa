
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleReservarClick = (servicio: string) => {
    const message = `Hola, quisiera información y agendar una cita para ${servicio} en Cataleya.`;
    const whatsappUrl = `https://wa.me/51927066998?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleReservarAhora = () => {
    const message = "Hola, quisiera reservar una cita en Cataleya Estudio de Belleza.";
    const whatsappUrl = `https://wa.me/51927066998?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://readdy.ai/api/search-image?query=Elegant%20feminine%20spa%20background%20texture%2C%20soft%20botanical%20patterns%2C%20delicate%20floral%20motifs%2C%20warm%20beige%20and%20cream%20tones%2C%20luxury%20beauty%20salon%20atmosphere%2C%20subtle%20gold%20accents%2C%20romantic%20and%20sophisticated%20design%2C%20high-end%20wellness%20aesthetic&width=1920&height=1080&seq=bg3&orientation=landscape"
          alt="Background"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-yellow-50/60 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <img 
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/889394fc7f3ae0182519e695c029b2c2.png" 
                alt="Cataleya Estudio de Belleza" 
                className="h-36 md:h-48 lg:h-56 w-auto mx-auto mb-8"
              />

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Realza tu belleza,<br />
                <span className="text-yellow-600">resalta tu confianza</span>
              </h1>

              <p className="text-gray-600 mb-8 text-sm md:text-base lg:text-lg leading-relaxed max-w-xs md:max-w-md lg:max-w-2xl mx-auto">
                Descubre la mejor versión de ti en nuestro estudio especializado en realzar tu belleza natural
              </p>

              <button
                onClick={handleReservarAhora}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-3 md:px-12 md:py-4 lg:px-16 lg:py-5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base lg:text-lg"
              >
                Reservar Ahora
              </button>
            </div>
          </div>
        </section>

        {/* Services Cards */}
        <section className="py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">Nuestros Servicios</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Microblading */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200/50 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/7dcd3ec9d4f3a7076b69a9e14750eb4d.png"
                  alt="Microblading de Cejas"
                  className="w-full h-48 md:h-56 lg:h-64 object-cover object-top"
                />
                <div className="p-5 md:p-6">
                  <h3 className="font-bold text-gray-800 mb-2 text-base md:text-lg">Microblading de Cejas</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 leading-relaxed">
                    Técnica de cejas pelo a pelo para un resultado natural y duradero. Define y realza tu mirada con la forma perfecta para tu rostro.
                  </p>
                  <div className="mb-4">
                    <p className="text-xs md:text-sm text-yellow-600 font-medium">✓ Natural y duradero</p>
                    <p className="text-xs md:text-sm text-yellow-600 font-medium">✓ Técnica profesional</p>
                  </div>
                  <Link href="/servicios">
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300">
                      Ver Más
                    </button>
                  </Link>
                </div>
              </div>

              {/* Extensiones y Lifting de Pestañas */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200/50 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/775d72e8711df7c004dce866a6f41610.png"
                  alt="Extensiones y Lifting de Pestañas"
                  className="w-full h-48 md:h-56 lg:h-64 object-cover object-top"
                />
                <div className="p-5 md:p-6">
                  <h3 className="font-bold text-gray-800 mb-2 text-base md:text-lg">Extensiones y Lifting de Pestañas</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 leading-relaxed">
                    Mejora tu mirada con un look natural o glam. Extensiones resistentes o lifting que curva y realza tus pestañas naturales.
                  </p>
                  <div className="mb-4">
                    <p className="text-xs md:text-sm text-yellow-600 font-medium">✓ Look natural o glam</p>
                    <p className="text-xs md:text-sm text-yellow-600 font-medium">✓ Resistentes y duraderas</p>
                  </div>
                  <Link href="/servicios">
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300">
                      Ver Más
                    </button>
                  </Link>
                </div>
              </div>

              {/* Limpieza Facial */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200/50 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/faf749c763f01ed1012ef8873d1c17c5.png"
                  alt="Limpieza Facial"
                  className="w-full h-48 md:h-56 lg:h-64 object-cover object-top"
                />
                <div className="p-5 md:p-6">
                  <h3 className="font-bold text-gray-800 mb-2 text-base md:text-lg">Limpieza Facial</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 leading-relaxed">
                    Tratamiento para purificar la piel, remover impurezas y revitalizar el rostro. Piel limpia, suave y radiante.
                  </p>
                  <div className="mb-4">
                    <p className="text-xs md:text-sm text-yellow-600 font-medium">✓ Purifica la piel</p>
                    <p className="text-xs md:text-sm text-yellow-600 font-medium">✓ Revitaliza el rostro</p>
                  </div>
                  <Link href="/servicios">
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300">
                      Ver Más
                    </button>
                  </Link>
                </div>
              </div>

              {/* Manicure & Pedicure */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200/50 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/7610683a85c8133e67920a3ef780bc3c.png"
                  alt="Manicure & Pedicure"
                  className="w-full h-48 md:h-56 lg:h-64 object-cover object-top"
                />
                <div className="p-5 md:p-6">
                  <h3 className="font-bold text-gray-800 mb-2 text-base md:text-lg">Manicure & Pedicure</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 leading-relaxed">
                    Cuidado completo para tus manos y pies con diseños personalizados. Productos de alta calidad para un acabado perfecto.
                  </p>
                  <div className="mb-4">
                    <p className="text-xs md:text-sm text-yellow-600 font-medium">✓ Diseños personalizados</p>
                    <p className="text-xs md:text-sm text-yellow-600 font-medium">✓ Productos premium</p>
                  </div>
                  <Link href="/servicios">
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300">
                      Ver Más
                    </button>
                  </Link>
                </div>
              </div>

              {/* Depilación Láser */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200/50 overflow-hidden hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                <img 
                  src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/3ef7d470e6c5a4ac53291f93b1b0358f.png"
                  alt="Depilación Láser"
                  className="w-full h-48 md:h-56 lg:h-64 object-cover object-top"
                />
                <div className="p-5 md:p-6">
                  <h3 className="font-bold text-gray-800 mb-2 text-base md:text-lg">Depilación Láser</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 leading-relaxed">
                    Tecnología láser de última generación para resultados seguros y progresivos. Piel suave y libre de vello de forma permanente.
                  </p>
                  <div className="mb-4">
                    <p className="text-xs md:text-sm text-yellow-600 font-medium">✓ Resultados seguros</p>
                    <p className="text-xs md:text-sm text-yellow-600 font-medium">✓ Tecnología avanzada</p>
                  </div>
                  <Link href="/servicios">
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300">
                      Ver Más
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">Nuestros Resultados</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
              <img 
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/936aa059738e344f6eafa761f07602a9.jfif"
                alt="Resultado Microblading"
                className="w-full h-32 md:h-40 lg:h-48 object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/936aa059738e344f6eafa761f07602a9.jfif")}
              />
              <img 
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/3acb6e251d76c13d8f840237e6134010.jfif"
                alt="Resultado Manicure"
                className="w-full h-32 md:h-40 lg:h-48 object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/3acb6e251d76c13d8f840237e6134010.jfif")}
              />
              <img 
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/e25b78565b8291df6a03e7e25da5198b.jfif"
                alt="Resultado Depilación"
                className="w-full h-32 md:h-40 lg:h-48 object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/e25b78565b8291df6a03e7e25da5198b.jfif")}
              />
              <img 
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/14564d8f6498799073ad8a1d6599b157.png"
                alt="Cliente Satisfecha"
                className="w-full h-32 md:h-40 lg:h-48 object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/14564d8f6498799073ad8a1d6599b157.png")}
              />
              <img 
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/3b65152cf755176380362b664dc18d44.jfif"
                alt="Resultado Pedicure"
                className="w-full h-32 md:h-40 lg:h-48 object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/3b65152cf755176380362b664dc18d44.jfif")}
              />
              <img 
                src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/e73bb32ede4da870080d70b8bd531758.png"
                alt="Nuestro Estudio"
                className="w-full h-32 md:h-40 lg:h-48 object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal("https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/e73bb32ede4da870080d70b8bd531758.png")}
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">Lo que dicen nuestras clientas</h2>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-md border border-gray-200/50">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-600 font-bold text-sm md:text-base">MC</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm md:text-base">María Carmen</p>
                    <div className="flex text-yellow-400 text-xs md:text-sm">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  "El microblading fue perfecto, mis cejas se ven naturales y me ahorro mucho tiempo en mi rutina diaria. Totalmente recomendado."
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-md border border-gray-200/50">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-600 font-bold text-sm md:text-base">AL</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm md:text-base">Ana Lucía</p>
                    <div className="flex text-yellow-400 text-xs md:text-sm">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  "Excelente atención y profesionalismo. La depilación láser ha sido muy efectiva y el ambiente es súper acogedor."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Us */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">Visítanos</h2>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md border border-gray-200/50">
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

              <div className="p-5 md:p-6 lg:p-8">
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-map-pin-line text-yellow-600"></i>
                    </div>
                    <a 
                      href="https://www.google.com/maps/place/Cataleya+Estudio+de+belleza/@-12.2149971,-76.9356912,20z/data=!4m6!3m5!1s0x9105bbc227dbd61b:0xfaf5a73a96fb85ee!8m2!3d-12.2149009!4d-76.9356861!16s%2Fg%2F11ks4fx1bh?entry=ttu&g_ep=oyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      Lima, Perú
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-phone-line text-yellow-600"></i>
                    </div>
                    <a 
                      href="tel:+51927066998" 
                      className="text-sm md:text-base text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      +51 927 066 998
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-whatsapp-line text-yellow-600"></i>
                    </div>
                    <a 
                      href="https://wa.me/51927066998" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-sm md:max-w-md lg:max-w-lg max-h-full">
            <img 
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <i className="ri-close-line text-gray-700 text-lg md:text-xl"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
