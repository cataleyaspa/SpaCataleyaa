'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const galleryImages = [
    "https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/936aa059738e344f6eafa761f07602a9.jfif",
    "https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/3acb6e251d76c13d8f840237e6134010.jfif",
    "https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/e25b78565b8291df6a03e7e25da5198b.jfif",
    "https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/14564d8f6498799073ad8a1d6599b157.png",
    "https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/3b65152cf755176380362b664dc18d44.jfif",
    "https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/e73bb32ede4da870080d70b8bd531758.png"
  ];

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.indexOf(selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 via-white to-yellow-50/20"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * -0.5}px)`
          }}
        ></div>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
      </div>

      <div className={`relative z-10 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <Header />
        <WhatsAppButton />

        {/* Hero Section with Enhanced Design */}
        <section className="pt-28 pb-16 px-4 md:px-8 lg:px-16 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center relative">
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-yellow-300/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-4 -right-12 w-32 h-32 bg-gradient-to-br from-yellow-100/20 to-yellow-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              
              <div className="transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/889394fc7f3ae0182519e695c029b2c2.png" 
                  alt="Cataleya Estudio de Belleza" 
                  className="h-40 md:h-52 lg:h-64 w-auto mx-auto mb-8 drop-shadow-2xl"
                />
              </div>

              <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  <span className="block transform hover:scale-105 transition-transform duration-300">Realza tu belleza,</span>
                  <span className="block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300 delay-1000">
                    resalta tu confianza
                  </span>
                </h1>

                <p className="text-gray-600 mb-10 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-light">
                  Descubre la mejor versión de ti en nuestro estudio especializado en realzar tu belleza natural con técnicas de vanguardia
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => {
                      const message = "Hola, quisiera reservar una cita en Cataleya Estudio de Belleza.";
                      const whatsappUrl = `https://wa.me/51927066998?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="group bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-8 py-4 md:px-12 md:py-5 lg:px-16 lg:py-6 rounded-full font-semibold shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 text-base md:text-lg transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10">Reservar Ahora</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <Link href="/servicios">
                    <button className="group bg-white/80 backdrop-blur-sm text-yellow-600 px-8 py-4 md:px-12 md:py-5 lg:px-16 lg:py-6 rounded-full font-semibold border-2 border-yellow-300 hover:border-yellow-500 shadow-lg hover:shadow-xl transition-all duration-500 text-base md:text-lg transform hover:-translate-y-1">
                      <span className="group-hover:text-yellow-700 transition-colors duration-300">Ver Servicios</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Cards with Enhanced Animation */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent to-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {/* Curso de Microblading - Enhanced */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-700 md:col-span-2 lg:col-span-3 relative hover:-translate-y-2">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                  <span className="flex items-center">
                    <i className="ri-star-fill mr-1 animate-pulse"></i>
                    ¡NUEVO!
                  </span>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/c89db0116aa671a35505a4e54ad734ae.jfif"
                      alt="Curso de Microblading"
                      className="w-full h-[32rem] md:h-[32rem] lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                        <i className="ri-graduation-cap-fill text-white text-lg md:text-xl lg:text-2xl"></i>
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg md:text-xl lg:text-2xl leading-tight">Curso de Microblading Profesional</h3>
                    </div>
                    
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed font-light">
                      Aprende las técnicas más demandadas en belleza. Conviértete en especialista certificada con nuestro curso intensivo completo.
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-3">Aprenderás:</h4>
                      <div className="space-y-2">
                        {['Nanoblading', 'Microblading', 'Microshading'].map((item, index) => (
                          <div key={item} className="flex items-center group/item">
                            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                            <span className="text-gray-700 text-sm md:text-base group-hover/item:text-yellow-600 transition-colors duration-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {['4 días intensivos', 'Certificado', 'Cupos limitados', 'Práctica real'].map((feature) => (
                        <div key={feature} className="flex items-center bg-yellow-50 p-2 rounded-lg">
                          <i className="ri-check-line text-yellow-600 mr-2"></i>
                          <span className="text-xs md:text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => {
                        const message = "Hola, quisiera más información sobre el Curso de Microblading Profesional en Cataleya.";
                        const whatsappUrl = `https://wa.me/51927066998?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-base md:text-lg"
                    >
                      Más Información
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Service Cards */}
              {[
                {
                  title: "Microblading de Cejas",
                  image: "https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/7dcd3ec9d4f3a7076b69a9e14750eb4d.png",
                  description: "Técnica de cejas pelo a pelo para un resultado natural y duradero. Define y realza tu mirada con la forma perfecta para tu rostro.",
                  features: ["Natural y duradero", "Técnica profesional"]
                },
                {
                  title: "Extensiones y Lifting de Pestañas",
                  image: "https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/775d72e8711df7c004dce866a6f41610.png",
                  description: "Mejora tu mirada con un look natural o glam. Extensiones resistentes o lifting que curva y realza tus pestañas naturales.",
                  features: ["Look natural o glam", "Resistentes y duraderas"]
                },
                {
                  title: "Limpieza Facial",
                  image: "https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/faf749c763f01ed1012ef8873d1c17c5.png",
                  description: "Tratamiento para purificar la piel, remover impurezas y revitalizar el rostro. Piel limpia, suave y radiante.",
                  features: ["Purifica la piel", "Revitaliza el rostro"]
                },
                {
                  title: "Manicure & Pedicure",
                  image: "https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/7610683a85c8133e67920a3ef780bc3c.png",
                  description: "Cuidado completo para tus manos y pies con diseños personalizados. Productos de alta calidad para un acabado perfecto.",
                  features: ["Diseños personalizados", "Productos premium"]
                },
                {
                  title: "Depilación Láser",
                  image: "https://static.readdy.ai/image/6874aa987404632b096ca2c8b71ac343/3ef7d470e6c5a4ac53291f93b1b0358f.png",
                  description: "Tecnología láser de última generación para resultados seguros y progresivos. Piel suave y libre de vello de forma permanente.",
                  features: ["Resultados seguros", "Tecnología avanzada"]
                }
              ].map((service, index) => (
                <div key={service.title} className={`group bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-56 md:h-64 lg:h-72 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg md:text-xl group-hover:text-yellow-600 transition-colors duration-300">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed font-light">
                      {service.description}
                    </p>
                    <div className="mb-6 space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mr-3"></div>
                          <p className="text-sm text-yellow-600 font-medium">{feature}</p>
                        </div>
                      ))}
                    </div>
                    <Link href="/servicios">
                      <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                        Ver Más
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery with Parallax Effect */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/20 to-transparent"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Nuestros Resultados</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg font-light">Testimonios visuales de nuestro trabajo profesional</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {galleryImages.map((src, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => openImageModal(src)}
                >
                  <img 
                    src={src}
                    alt={`Resultado ${index + 1}`}
                    className="w-full h-40 md:h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <p className="text-xs font-medium text-gray-700 flex items-center">
                        <i className="ri-eye-line mr-1"></i>
                        Click para ampliar
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-yellow-50/30 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Lo que dicen nuestras clientas</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "María Carmen",
                  initials: "MC",
                  text: "El microblading fue perfecto, mis cejas se ven naturales y me ahorro mucho tiempo en mi rutina diaria. Totalmente recomendado.",
                  color: "from-pink-400 to-pink-600"
                },
                {
                  name: "Ana Lucía",
                  initials: "AL",
                  text: "Excelente atención y profesionalismo. La depilación láser ha sido muy efectiva y el ambiente es súper acogedor.",
                  color: "from-purple-400 to-purple-600"
                }
              ].map((testimonial, index) => (
                <div key={testimonial.name} className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-lg">{testimonial.name}</p>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="ri-star-fill text-lg"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base font-light italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Visit Us Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Visítanos</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg font-light">Encuentra nuestro estudio de belleza</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50">
              <div className="relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.318!2d-76.935!3d-12.215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bbc227dbd61b%3A0xfaf5a73a96fb85ee!2sCataleya%20Estudio%20de%20belleza!5e0!3m2!1ses!2spe!4v1703123456789!5m2!1ses!2spe"
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="md:h-96 lg:h-[28rem] hover:scale-105 transition-transform duration-700"
                  suppressHydrationWarning={true}
                ></iframe>
              </div>

              <div className="p-8 lg:p-10">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: "ri-map-pin-line",
                      label: "Ubicación",
                      value: "Lima, Perú",
                      link: "https://www.google.com/maps/place/Cataleya+Estudio+de+belleza/@-12.2149971,-76.9356912,20z/data=!4m6!3m5!1s0x9105bbc227dbd61b:0xfaf5a73a96fb85ee!8m2!3d-12.2149009!4d-76.9356861!16s%2Fg%2F11ks4fx1bh?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D",
                      color: "text-red-500"
                    },
                    {
                      icon: "ri-phone-line",
                      label: "Teléfono",
                      value: "+51 927 066 998",
                      link: "tel:+51927066998",
                      color: "text-blue-500"
                    },
                    {
                      icon: "ri-whatsapp-line",
                      label: "WhatsApp",
                      value: "Contactar",
                      link: "https://wa.me/51927066998",
                      color: "text-green-500"
                    }
                  ].map((contact) => (
                    <div key={contact.label} className="group flex items-center p-4 rounded-2xl bg-gray-50/50 hover:bg-yellow-50 transition-all duration-500 transform hover:-translate-y-1">
                      <div className={`w-12 h-12 flex items-center justify-center mr-4 rounded-xl bg-white shadow-md group-hover:shadow-lg transition-all duration-300`}>
                        <i className={`${contact.icon} ${contact.color} text-xl`}></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">{contact.label}</p>
                        <a 
                          href={contact.link}
                          target={contact.link.startsWith('http') ? '_blank' : undefined}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-base font-semibold text-gray-700 hover:text-yellow-600 transition-colors duration-300"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Simple Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img 
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              <i className="ri-close-line text-gray-700 text-xl"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}