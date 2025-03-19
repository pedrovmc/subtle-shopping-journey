
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  backgroundColor: string;
}

const banners: BannerItem[] = [
  {
    id: 1,
    title: "Ofertas especiais Maratá",
    subtitle: "Até 30% de desconto em produtos selecionados",
    image: "/public/lovable-uploads/068317e3-04cc-4553-b1f8-cd3405e6a66b.png", // Placeholder
    link: "/ofertas/marata",
    backgroundColor: "bg-gradient-to-r from-shop-blue/10 to-shop-blue/5"
  },
  {
    id: 2,
    title: "Promoção relâmpago",
    subtitle: "Aproveite descontos por tempo limitado",
    image: "https://via.placeholder.com/800x300?text=Promocao+Relampago",
    link: "/promocoes/relampago",
    backgroundColor: "bg-gradient-to-r from-shop-red/10 to-shop-red/5"
  },
  {
    id: 3,
    title: "Bebidas em oferta",
    subtitle: "Refrigerantes, sucos e bebidas alcoólicas",
    image: "https://via.placeholder.com/800x300?text=Bebidas+em+Oferta",
    link: "/categorias/bebidas",
    backgroundColor: "bg-gradient-to-r from-shop-yellow/10 to-shop-yellow/5"
  }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg h-[300px] md:h-[320px] lg:h-[360px]">
      <div 
        className="flex transition-transform ease-out duration-500 h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div 
            key={banner.id} 
            className={`flex-none w-full h-full ${banner.backgroundColor}`}
          >
            <div className="container-custom h-full flex flex-col md:flex-row items-center justify-between">
              <div className="text-left space-y-4 pt-8 md:pt-0 max-w-md animate-slide-up">
                <span className="bg-shop-red/90 text-white text-xs uppercase tracking-wide py-1 px-3 rounded-full font-medium">
                  Oferta especial
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-shop-blue">
                  {banner.title}
                </h2>
                <p className="text-gray-600 md:text-lg">
                  {banner.subtitle}
                </p>
                <Link 
                  to={banner.link}
                  className="inline-block bg-shop-blue text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-button"
                >
                  Ver ofertas
                </Link>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2 h-full flex items-center justify-center animate-fade-in">
                <img 
                  src={banner.image} 
                  alt={banner.title} 
                  className="max-h-[180px] md:max-h-[220px] lg:max-h-[260px] object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10 focus:outline-none"
        aria-label="Previous banner"
      >
        <ArrowLeft size={20} className="text-shop-blue" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10 focus:outline-none"
        aria-label="Next banner"
      >
        <ArrowRight size={20} className="text-shop-blue" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-shop-blue" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
