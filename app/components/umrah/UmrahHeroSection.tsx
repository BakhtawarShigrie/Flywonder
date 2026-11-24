"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const umrahSlides = [
  {
    id: 1,
    alt: "Masjid al-Haram Makkah - Umrah Packages",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795423296/Kaba.jpg",
  },
  {
    id: 2,
    alt: "Masjid an-Nabawi Madinah - Umrah Packages",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795423295/Madina.jpg",
  },
];

const TRAVELLER_OPTIONS = [
  "1 adult",
  "2 adults",
  "3 adults",
  "4 adults",
  "5 adults",
  "6 adults",
  "7–10 adults (Family)",
  "10+ travellers (Group)",
];

const WHATSAPP_NUMBER = "923097879999";

export default function UmrahHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [travellers, setTravellers] = useState("2 adults");

  // Background Images Blurry Ease-In-Out Auto Transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === umrahSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleClaimDiscount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const messageLines = [
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! I want to claim the 10k PKR per person Umrah discount.",
      "",
      `*Full Name:* ${fullName.trim()}`,
      `*Email:* ${email.trim()}`,
      whatsapp.trim() ? `*WhatsApp Number:* ${whatsapp.trim()}` : null,
      `*Total Travellers:* ${travellers}`,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      messageLines.join("\n")
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex flex-col justify-between pt-28 pb-12 px-4">
      
      {/* ================= 1. Background Images (Blurry Ease-In-Out + Zoom) ================= */}
      {umrahSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[1800ms] ease-in-out ${
              isActive
                ? "opacity-100 blur-0 z-0"
                : "opacity-0 blur-md z-0"
            }`}
          >
            <div
              className="relative w-full h-full transition-transform duration-[7000ms] ease-in-out"
              style={{
                transform: isActive ? "scale(1)" : "scale(1.08)",
              }}
            >
              <Image
                src={slide.img}
                alt={slide.alt}
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            {/* Dark Gradient Overlay for Crisp Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#0f1926]" />
          </div>
        );
      })}

      {/* ================= 2. Hero Heading & Subtitle ================= */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto pt-6 pb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.12] tracking-tight drop-shadow-lg">
            Your Umrah, planned by{" "}
            <span className="block text-[#F4C150] mt-1">
              our own team
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-100/95 max-w-lg leading-relaxed font-normal drop-shadow">
            Hassle-free Umrah made for families, with on-ground support from start to finish.
          </p>
        </div>
      </div>

      {/* ================= 3. Discount Claim Form Card ================= */}
      <div className="relative z-20 max-w-6xl mx-auto w-full mt-4">
        
        {/* Top Overlapping Dark Green Discount Badge */}
        <div className="flex justify-center -mb-4 relative z-30 px-3">
          <div className="bg-[#124229] text-white text-xs sm:text-sm font-medium px-5 sm:px-7 py-2 rounded-xl shadow-lg border border-emerald-700/40 text-center">
            <span className="text-[#F4C150] font-bold">
              Claim your 10k PKR discount
            </span>{" "}
            <span className="text-emerald-100">
              · per person, on all packages
            </span>
          </div>
        </div>

        {/* White Form Container */}
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-5 sm:p-7 pt-8 sm:pt-9">
          <form
            onSubmit={handleClaimDiscount}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end"
          >
            {/* Full Name */}
            <div className="lg:col-span-3">
              <label
                htmlFor="umrah-full-name"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Full name
              </label>
              <input
                id="umrah-full-name"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Lead traveller's name"
                className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-[#cfa049] focus:ring-2 focus:ring-[#cfa049]/25 transition-all"
              />
            </div>

            {/* Email */}
            <div className="lg:col-span-3">
              <label
                htmlFor="umrah-email"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Email
              </label>
              <input
                id="umrah-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-[#cfa049] focus:ring-2 focus:ring-[#cfa049]/25 transition-all"
              />
            </div>

            {/* WhatsApp Number */}
            <div className="lg:col-span-2">
              <label
                htmlFor="umrah-whatsapp"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                WhatsApp number
              </label>
              <input
                id="umrah-whatsapp"
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="+92 300 1234567"
                className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-[#cfa049] focus:ring-2 focus:ring-[#cfa049]/25 transition-all"
              />
            </div>

            {/* Travellers Dropdown */}
            <div className="lg:col-span-2">
              <label
                htmlFor="umrah-travellers"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Travellers
              </label>
              <div className="relative">
                <select
                  id="umrah-travellers"
                  value={travellers}
                  onChange={(e) => setTravellers(e.target.value)}
                  className="w-full h-12 pl-4 pr-9 rounded-xl border-2 border-[#d8b467] bg-white text-slate-900 text-sm font-medium appearance-none focus:outline-none focus:border-[#cfa049] cursor-pointer transition-all"
                >
                  {TRAVELLER_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <svg
                  className="w-4 h-4 text-slate-600 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 lg:col-span-2">
              <button
                type="submit"
                className="w-full h-12 bg-[#cfa049] hover:bg-[#be8e36] text-slate-950 font-bold text-sm px-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                Claim my discount
              </button>
            </div>
          </form>

          {/* Bottom Disclaimer Line */}
          <p className="text-xs text-slate-500 mt-3.5">
            We will be in touch with you shortly.{" "}
            <span className="underline text-slate-700 font-medium">
              Terms and conditions
            </span>{" "}
            apply.
          </p>
        </div>
      </div>

    </section>
  );
}