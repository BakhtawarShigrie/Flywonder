"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TourSlide {
  id: string;
  title: string;
  subtitle: string;
  img: string;
}

const HERO_SLIDES: TourSlide[] = [
  {
    id: "skardu",
    title: "Skardu & Northern Peaks",
    subtitle: "Serene valleys, alpine lakes, and breathtaking mountain escapes.",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795431689/Skardu.jpg",
  },
  {
    id: "turkey",
    title: "Turkey & Cappadocia",
    subtitle: "Hot-air balloons, historic Istanbul, and Bosphorus sunsets.",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198262/Turkey.jpg",
  },
  {
    id: "dubai",
    title: "Dubai & Arabian Luxury",
    subtitle: "Iconic skylines, desert safaris, and world-class family leisure.",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198260/Dubai.jpg",
  },
  {
    id: "thailand",
    title: "Thailand & Tropical Islands",
    subtitle: "Crystal waters of Phuket, Pattaya beaches, and vibrant Bangkok.",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198262/Thailand.jpg",
  },
  {
    id: "europe",
    title: "Europe & Scenic Capitals",
    subtitle: "Timeless architecture, cultural landmarks, and unforgettable journeys.",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198259/France.jpg",
  },
];

export default function ToursHeroSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(2);

  return (
    <section className="h-screen min-h-[640px] w-full bg-white pt-28 sm:pt-32 lg:pt-36 pb-8 px-4 sm:px-6 lg:px-10 flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        {/* Full-Screen Expanding Accordion Container */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-3 sm:gap-3.5 flex-1 w-full">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={slide.id}
                onClick={() => setActiveIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                aria-label={`View ${slide.title}`}
                className={`relative overflow-hidden rounded-xl cursor-pointer select-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-slate-200/80 shadow-[0_12px_35px_rgba(15,23,42,0.12)] ${
                  isActive
                    ? "flex-[6] lg:flex-[6]"
                    : "flex-[1] lg:flex-[0.65] hover:opacity-95"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  priority={index === 2}
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className={`object-cover object-center transition-transform duration-700 ease-out ${
                    isActive ? "scale-100" : "scale-105"
                  }`}
                />

                {/* Subtle Gradient Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-black/80 via-black/20 to-black/10 opacity-100"
                      : "bg-black/30 opacity-75"
                  }`}
                />

                {/* Active Panel Bottom-Left Icon + Title + Subtitle */}
                <div
                  className={`absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 flex items-center gap-3.5 sm:gap-4 transition-all duration-500 ${
                    isActive
                      ? "opacity-100 translate-y-0 delay-150"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  {/* White Circular Mountain Icon Badge */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-slate-900 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
                    </svg>
                  </div>

                  {/* Text Details */}
                  <div className="min-w-0">
                    <h1 className="text-lg sm:text-2xl font-bold text-white leading-tight truncate drop-shadow">
                      {slide.title}
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-200/95 truncate mt-0.5 drop-shadow">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}