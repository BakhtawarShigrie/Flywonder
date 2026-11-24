"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface DestinationHighlight {
  id: string;
  label: string;
  title: string;
  duration: string;
  tag: string;
  summary: string;
  img: string;
}

const DESTINATIONS: DestinationHighlight[] = [
  {
    id: "turkey-dubai",
    label: "Turkey & Dubai",
    title: "Istanbul, Cappadocia & Dubai Getaways",
    duration: "6 to 10 Days",
    tag: "Most Booked from Lahore",
    summary:
      "Bosphorus cruises, hot-air balloon views, desert safaris, and central 4 & 5-star stays with private airport transfers.",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198262/Turkey.jpg",
  },
  {
    id: "central-asia",
    label: "Baku & Tashkent",
    title: "Azerbaijan & Uzbekistan Heritage Tours",
    duration: "5 to 8 Days",
    tag: "Short Flight • E-Visa Ready",
    summary:
      "Explore Baku’s Flame Towers, Shahdag mountains, and the historic Silk Road architecture of Samarkand & Bukhara.",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198260/Dubai.jpg",
  },
  {
    id: "southeast-asia",
    label: "Thailand, Malaysia & Bali",
    title: "Tropical Islands & Honeymoon Escapes",
    duration: "7 to 12 Days",
    tag: "Couples & Families",
    summary:
      "Island hopping in Phuket & Bali, Kuala Lumpur city tours, beach resorts, and seamless inter-city flights.",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198262/Thailand.jpg",
  },
  {
    id: "europe",
    label: "Europe & UK",
    title: "Paris, Switzerland, Italy & London",
    duration: "10 to 15 Days",
    tag: "Multi-Country Itineraries",
    summary:
      "Scenic rail journeys, iconic European landmarks, centrally located hotels, and complete Schengen tour planning.",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198259/France.jpg",
  },
];

export default function TourSection() {
  const [activeTab, setActiveTab] = useState<string>(DESTINATIONS[0].id);

  const current =
    DESTINATIONS.find((item) => item.id === activeTab) || DESTINATIONS[0];

  return (
    <section className="bg-white py-24 px-4 text-slate-900 relative overflow-hidden border-t border-slate-100">
      {/* Subtle Ambient Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-100/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Info + Interactive Region Tabs + CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-600 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>World Tours &amp; Holidays</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              Exclusive <span className="text-sky-600">Tour Packages</span> Tailored For You
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              From family vacations and honeymoon escapes to fixed-date international group tours from Lahore — Fly Wonder Travel &amp; Tours curates flights, handpicked hotels, and guided sightseeing in one seamless plan.
            </p>

            {/* Interactive Destination Switcher Pills (No Cards) */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Preview Popular Regions
              </p>
              <div className="flex flex-wrap gap-2.5">
                {DESTINATIONS.map((dest) => {
                  const isActive = dest.id === activeTab;
                  return (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => setActiveTab(dest.id)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-slate-900 text-white shadow-md scale-[1.02]"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
                      }`}
                    >
                      {dest.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Clean Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                  ✓
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Custom &amp; Group Departures
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                    Flexible private family trips or scheduled group tours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                  ✓
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    End-to-End Arrangements
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                    Return tickets, hotels, transfers &amp; daily tours covered.
                  </p>
                </div>
              </div>
            </div>

            {/* Primary CTA -> Navigates to Tours Page */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/World-Tours"
                className="inline-flex items-center gap-2.5 bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-[0_10px_25px_rgba(2,132,199,0.3)] hover:-translate-y-0.5"
              >
                <span>Explore All Tour Packages</span>
                <span className="text-lg leading-none">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Spotlight Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[400px] sm:h-[470px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.16)] bg-slate-950">
              {DESTINATIONS.map((dest) => {
                const isActive = dest.id === activeTab;
                return (
                  <div
                    key={dest.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={dest.img}
                      alt={dest.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-black/15" />
                  </div>
                );
              })}

              {/* Top Badges */}
              <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between gap-2">
                <span className="bg-slate-950/75 backdrop-blur-md border border-white/15 text-sky-300 text-xs font-bold px-4 py-1.5 rounded-full">
                  {current.tag}
                </span>
                <span className="bg-white/95 text-slate-900 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow">
                  {current.duration}
                </span>
              </div>

              {/* Bottom Glassmorphic Destination Spotlight Overlay */}
              <div className="absolute bottom-5 left-5 right-5 z-20 bg-[#0f1926]/85 backdrop-blur-xl border border-white/15 rounded-2xl p-5 text-white shadow-2xl">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#F4C150] mb-1">
                  Featured Region • {current.label}
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {current.summary}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}