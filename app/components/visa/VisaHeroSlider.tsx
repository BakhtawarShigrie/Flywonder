"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// 17 Cloudinary Optimized HD Visa Destinations (Odd number for exact center alignment)
const countriesData = [
  {
    id: 1,
    name: "United States",
    caption: "B1/B2 Tourist & Business Visa File Preparation",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198263/US.jpg",
  },
  {
    id: 2,
    name: "Canada",
    caption: "Visitor & Family Super Visa Consultancy",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198259/canada.jpg",
  },
  {
    id: 3,
    name: "United Kingdom",
    caption: "Standard Visitor & Family Visa Assistance",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198263/UK.jpg",
  },
  {
    id: 4,
    name: "France",
    caption: "Schengen Tourist Visa & Travel Documentation",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198259/France.jpg",
  },
  {
    id: 5,
    name: "Italy",
    caption: "Schengen Visit Visa & Appointment Support",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198260/Italy.jpg",
  },
  {
    id: 6,
    name: "Germany",
    caption: "Business & Tourist Schengen Visa Guidance",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198260/Germany.jpg",
  },
  {
    id: 7,
    name: "Turkey",
    caption: "Sticker & Conditional E-Visa Processing",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198262/Turkey.jpg",
  },
  {
    id: 8,
    name: "Dubai",
    caption: "30 & 60 Days Express UAE Visit E-Visa",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198260/Dubai.jpg",
  },
  {
    id: 9,
    name: "Vietnam",
    caption: "Fast Tourist E-Visa & Holiday Support",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198263/Vietnam.jpg",
  },
  {
    id: 10,
    name: "Japan",
    caption: "Complete Japan Tourist Visa File Guidance",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198261/Japan.jpg",
  },
  {
    id: 11,
    name: "South Korea",
    caption: "Tourist & Business Visa Documentation",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198261/South_Korea.jpg",
  },
  {
    id: 12,
    name: "Singapore",
    caption: "Quick Tourist E-Visa Processing",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198261/Singapure.jpg",
  },
  {
    id: 13,
    name: "Thailand",
    caption: "Holiday E-Visa & Travel Arrangements",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198262/Thailand.jpg",
  },
  {
    id: 14,
    name: "Malaysia",
    caption: "Express E-Visa & Family Trip Support",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198261/Malaysia.jpg",
  },
  {
    id: 15,
    name: "Greece",
    caption: "Schengen Holiday Visa & Itinerary Support",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198260/Greece.jpg",
  },
  {
    id: 16,
    name: "Indonesia",
    caption: "Bali Tourist Visa & Travel Documentation",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198260/Indonesia.jpg",
  },
  {
    id: 17,
    name: "China",
    caption: "Tourist & Business Visa File Preparation",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198260/China.jpg",
  },
];

// Start slider directly from Malaysia (index 13)
const INITIAL_INDEX = countriesData.findIndex((c) => c.name === "Malaysia");

export default function VisaHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(
    INITIAL_INDEX >= 0 ? INITIAL_INDEX : 0
  );

  // Auto-Slider (Moves right-to-left infinitely every 4.5 seconds; resets on manual navigation)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, [activeIndex]);

  // Keyboard ArrowRight (Next) & ArrowLeft (Previous) Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        setActiveIndex((prev) => prev + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActiveIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Thumbnail Click handler
  const handleThumbnailClick = (offset: number) => {
    if (offset !== 0) {
      setActiveIndex((prev) => prev + offset);
    }
  };

  // Infinite Loop Centering Math
  const getOffset = (index: number) => {
    const N = countriesData.length;
    let mod = activeIndex % N;
    if (mod < 0) mod += N;
    let diff = index - mod;
    if (diff < -Math.floor(N / 2)) diff += N;
    if (diff > Math.floor(N / 2)) diff -= N;
    return diff;
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950">
      {/* ================= 1. Crystal-Clear HD Background Image Slider ================= */}
      {countriesData.map((country, index) => {
        const offset = getOffset(index);
        const isActive = offset === 0;
        const isRight = offset > 0;

        return (
          <div
            key={country.id}
            className={`absolute inset-0 transition-all duration-[1100ms] ease-in-out ${
              isActive
                ? "translate-x-0 opacity-100 z-10"
                : isRight
                ? "translate-x-full opacity-0 z-0"
                : "-translate-x-full opacity-0 z-0"
            }`}
          >
            <div
              className="relative w-full h-full transition-transform duration-[8000ms] ease-linear"
              style={{
                transform: isActive ? "scale(1.04)" : "scale(1)",
              }}
            >
              <Image
                src={country.img}
                alt={country.name}
                fill
                priority={index === INITIAL_INDEX}
                quality={95}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            {/* Clean dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35"></div>
          </div>
        );
      })}

      {/* ================= 2. Mobile Place & Caption + Infinite Centered Thumbnails ================= */}
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-30 pointer-events-none">
        {/* Mobile-Only Active Image Place & Caption (Transparent Background, Left-Aligned, Larger Font) */}
        <div className="md:hidden px-5 mb-4">
          <div className="relative h-[76px] w-full overflow-hidden">
            {countriesData.map((country, index) => {
              const isActive = getOffset(index) === 0;
              return (
                <div
                  key={country.id}
                  className={`absolute bottom-0 left-0 right-0 text-left transition-all duration-500 ease-out ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[#F4C150] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.4}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.4}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <h2 className="text-2xl font-extrabold tracking-tight text-white leading-tight">
                      {country.name}
                    </h2>
                  </div>
                  <p className="text-sm text-slate-100 font-medium leading-snug mt-1 line-clamp-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {country.caption}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Thumbnails Track */}
        <div className="w-full overflow-hidden">
          <div className="relative h-[180px] md:h-[300px] w-full flex justify-center items-end [--slide-gap:112px] md:[--slide-gap:175px] [--active-margin-left:34px] md:[--active-margin-left:52px] [--active-margin-right:4px] md:[--active-margin-right:4px]">
            {countriesData.map((country, index) => {
              const offset = getOffset(index);
              const isActive = offset === 0;

              // Left side ke liye ziada margin aur Right side ke liye kam margin
              const extraMargin =
                offset === 0
                  ? "0px"
                  : offset > 0
                  ? "var(--active-margin-right)"
                  : "calc(-1 * var(--active-margin-left))";

              // Edge wrap-around cards ko hide rakhne ke liye
              const isVisible = Math.abs(offset) <= (countriesData.length - 3) / 2;

              return (
                <div
                  key={country.id}
                  onClick={() => handleThumbnailClick(offset)}
                  className={`absolute bottom-2 left-1/2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out origin-bottom pointer-events-auto
                    w-[92px] h-[130px] md:w-[148px] md:h-[205px]
                    ${isVisible ? "" : "opacity-0 pointer-events-none"}
                    ${
                      isActive
                        ? "z-30 scale-125 opacity-100 border-2 border-white shadow-[0_12px_35px_rgba(0,0,0,0.65)]"
                        : "z-10 scale-95 opacity-60 hover:opacity-100 border border-white/25 hover:border-white/70"
                    }
                  `}
                  style={{
                    transform: `translateX(calc(-50% + ${offset} * var(--slide-gap) + ${extraMargin}))`,
                  }}
                >
                  <Image
                    src={country.img}
                    alt={country.name}
                    fill
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 768px) 120px, 200px"
                  />

                  {/* Gradient Overlay - Sirf active card per ease-in/out ke sath */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-500 ease-in-out ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>

                  {/* Country Name - Sirf active card ke andar smooth ease-in/out animation ke sath */}
                  <div
                    className={`absolute bottom-3 left-0 right-0 text-center px-1.5 transition-all duration-500 ease-in-out transform ${
                      isActive ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-3"
                    }`}
                  >
                    <h3 className="text-white font-bold tracking-wide text-[11px] md:text-base leading-tight drop-shadow-md">
                      {country.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}