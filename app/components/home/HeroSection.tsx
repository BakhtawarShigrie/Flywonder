"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
    {
      id: 1,
      image: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198600/visa.avif", 
      pill: "Fast Processing",
      title: "Get Your Visas\nHassle-Free & Quickly",
      buttonText: "CHECK VISAS",
      link: "/VISA-Services",
      bottomText1: "Expert visa assistance for tourist, business, and transit visas globally.",
      bottomText2: "Skip the paperwork stress and let our experts handle your application end-to-end."
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198601/Umrah.jpg", // Nayi Umrah Image
        pill: "Spiritual Journeys",
        title: "Perform Umrah With\nUltimate Peace of Mind",
        buttonText: "VIEW PACKAGES",
    link: "/UMRAH-Service",
    bottomText1: "Premium Umrah packages with luxury transit and hotels near the Haram.",
    bottomText2: "Dedicated ground support and guided spiritual tours in Makkah and Madinah."
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198601/ziaraat.webp", // Nayi Ziyarat Image
    pill: "Sacred Ziaraat",
    title: "Embark On A Blessed\nZiaraat Journey",
    buttonText: "EXPLORE ZIARAAT",
    link: "/Ziaraat",
    bottomText1: "Well-organized spiritual journeys to the holy sites of Iran & Iraq.",
    bottomText2: "Comfortable transport, guided groups, and completely hassle-free visa processing."
},
{
  id: 4,
  image: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198600/tours.avif", 
  pill: "Discover The World",
  title: "Explore The Majestic\nGlobal Landscape Now",
  buttonText: "GET STARTED",
  link: "/TOUR-Services",
  bottomText1: "Affordable international tours to top destinations worldwide with 5-star accommodations.",
  bottomText2: "Experience seamless ticketing, expert guidance, and unforgettable holiday packages."
}
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center">
      
      {/* Background Images with Blur Cross-fade & Zoom Effect */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
              isActive ? "opacity-100 blur-0 z-0" : "opacity-0 blur-md z-0"
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-out"
              style={{ 
                backgroundImage: `url('${slide.image}')`,
                transform: isActive ? "scale(1)" : "scale(1.1)" 
              }}
            ></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        );
      })}

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-[95%] xl:max-w-7xl mx-auto px-4 mt-20">
        
        {/* CSS Grid for Overlapping Text Animations */}
        <div className="grid grid-cols-1 grid-rows-1 max-w-3xl">
          {slides.map((slide, index) => {
            const isActive = index === current;
            return (
              <div 
                key={slide.id} 
                className={`col-start-1 row-start-1 transition-all duration-[1200ms] ease-in-out ${
                  isActive 
                    ? "opacity-100 blur-0 translate-y-0 pointer-events-auto" 
                    : "opacity-0 blur-md translate-y-12 pointer-events-none"
                }`}
              >
                
                <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-1.5 rounded-full text-sm font-medium mb-6 tracking-wide">
                  {slide.pill}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-lg">
                  {slide.title.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h1>

                <Link 
                  href={slide.link}
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:bg-gray-200 mb-12 shadow-xl"
                >
                  {slide.buttonText} <span>→</span>
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl border-t border-white/20 pt-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">{slide.bottomText1}</p>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">{slide.bottomText2}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Social Icons - Facebook, Instagram, WhatsApp */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-4">
        {/* Facebook */}
        <a href="https://www.facebook.com/flywondertravel.pk/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all backdrop-blur-sm hover:scale-110 shadow-lg">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/flywonder.pk/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-pink-600 hover:border-pink-600 transition-all backdrop-blur-sm hover:scale-110 shadow-lg">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
        {/* WhatsApp */}
        <a href="https://wa.me/923097879999" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-[#25D366] bg-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all backdrop-blur-sm hover:scale-110 shadow-[0_0_15px_rgba(37,211,102,0.5)]">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
      </div>

    </section>
  );
}