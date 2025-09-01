'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51927066998"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 md:bottom-8 md:right-6 lg:bottom-10 lg:right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
    >
      <i className="ri-whatsapp-fill text-2xl md:text-3xl"></i>
    </a>
  );
}