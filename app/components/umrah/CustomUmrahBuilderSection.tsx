"use client";

import React, { useState } from "react";

const WHATSAPP_NUMBER = "923097879999";

export default function CustomUmrahBuilderSection() {
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [travelMonth, setTravelMonth] = useState("December 2026");
  const [totalNights, setTotalNights] = useState("14 Nights (7 Makkah + 7 Madinah)");
  const [hotelLevel, setHotelLevel] = useState("4-Star (Close to Haram)");
  const [transportType, setTransportType] = useState("Private Car / GMC");
  const [travellersCount, setTravellersCount] = useState("2 Adults");
  const [extras, setExtras] = useState<string[]>([
    "Umrah Visa",
    "Ziarat & City Tours",
  ]);

  const toggleExtra = (item: string) => {
    setExtras((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const handleSendCustomPackage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! I want a custom Umrah package quote for the following details:",
      "",
      `*Travel Month / Dates:* ${travelMonth}`,
      `*Duration:* ${totalNights}`,
      `*Hotel Category:* ${hotelLevel}`,
      `*Transport:* ${transportType}`,
      `*Travellers:* ${travellersCount}`,
      `*Extras Included:* ${extras.length > 0 ? extras.join(", ") : "None"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="custom-umrah-builder"
      className="bg-white py-20 px-4 text-[#111111] border-t border-neutral-100"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Top Header */}
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B8862D] mb-2">
          UMRAH PACKAGES
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] mb-3">
          A package for your dates
        </h2>
        <p className="text-sm sm:text-base text-[#555555] mb-10">
          Tell us your dates and we&rsquo;ll send you a package today, with the price on WhatsApp.
        </p>

        {/* Custom Package Box */}
        <div className="bg-[#FCFBF8] border border-[#E6DFD1] rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B8862D] mb-2">
            CUSTOM PACKAGE
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-3">
            Choose your dates, hotels and extras
          </h3>
          <p className="text-sm sm:text-base text-[#555555] max-w-xl mx-auto leading-relaxed mb-7">
            Pick your month, nights, hotel level, transport and extras such as flights, visa and Ziarat/City Tours.
            <br className="hidden sm:inline" /> We&apos;ll price the package and send it to you on WhatsApp.
          </p>

          {!isBuilderOpen ? (
            <button
              type="button"
              onClick={() => setIsBuilderOpen(true)}
              className="inline-flex items-center gap-2 bg-[#C89B3C] hover:bg-[#b5892e] text-[#111111] font-bold text-sm px-7 py-3.5 rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
            >
              <span>Build your own package</span>
              <span>→</span>
            </button>
          ) : (
            <form
              onSubmit={handleSendCustomPackage}
              className="mt-8 pt-8 border-t border-[#E6DFD1] text-left space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Travel Month */}
                <div>
                  <label className="block text-xs font-bold text-[#333333] mb-1.5">
                    Preferred Month / Dates
                  </label>
                  <input
                    type="text"
                    required
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                    placeholder="e.g. January 2027"
                    className="w-full h-11 px-3.5 rounded-xl border border-[#DCD4C4] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#C89B3C]"
                  />
                </div>

                {/* Nights */}
                <div>
                  <label className="block text-xs font-bold text-[#333333] mb-1.5">
                    Total Nights
                  </label>
                  <select
                    value={totalNights}
                    onChange={(e) => setTotalNights(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#DCD4C4] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#C89B3C]"
                  >
                    <option>7 Nights (4 Makkah + 3 Madinah)</option>
                    <option>10 Nights (5 Makkah + 5 Madinah)</option>
                    <option>14 Nights (7 Makkah + 7 Madinah)</option>
                    <option>21 Nights (11 Makkah + 10 Madinah)</option>
                    <option>28 Nights (Full Month)</option>
                  </select>
                </div>

                {/* Hotel Level */}
                <div>
                  <label className="block text-xs font-bold text-[#333333] mb-1.5">
                    Hotel Level
                  </label>
                  <select
                    value={hotelLevel}
                    onChange={(e) => setHotelLevel(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#DCD4C4] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#C89B3C]"
                  >
                    <option>Economy (Shuttle Service)</option>
                    <option>3-Star (Walking Distance)</option>
                    <option>4-Star (Close to Haram)</option>
                    <option>5-Star (Haram View / Clock Tower)</option>
                  </select>
                </div>

                {/* Transport */}
                <div>
                  <label className="block text-xs font-bold text-[#333333] mb-1.5">
                    Transport
                  </label>
                  <select
                    value={transportType}
                    onChange={(e) => setTransportType(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#DCD4C4] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#C89B3C]"
                  >
                    <option>Private Car / GMC</option>
                    <option>Private HiAce Van (Family)</option>
                    <option>Haramain High-Speed Train</option>
                    <option>Shared Group Bus</option>
                  </select>
                </div>

                {/* Travellers */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#333333] mb-1.5">
                    Travellers
                  </label>
                  <input
                    type="text"
                    required
                    value={travellersCount}
                    onChange={(e) => setTravellersCount(e.target.value)}
                    placeholder="e.g. 2 Adults, 2 Children"
                    className="w-full h-11 px-3.5 rounded-xl border border-[#DCD4C4] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#C89B3C]"
                  />
                </div>
              </div>

              {/* Extras Checkboxes */}
              <div>
                <span className="block text-xs font-bold text-[#333333] mb-2">
                  Select Extras
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Return Flights (from Lahore)",
                    "Umrah Visa",
                    "Ziarat & City Tours",
                    "Breakfast / Meals",
                  ].map((item) => {
                    const active = extras.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleExtra(item)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                          active
                            ? "bg-[#111111] text-white border-[#111111]"
                            : "bg-white text-[#444444] border-[#DCD4C4] hover:border-[#111111]"
                        }`}
                      >
                        {active ? "✓ " : "+ "}
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#C89B3C] hover:bg-[#b5892e] text-[#111111] font-bold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <span>Send package details to WhatsApp</span>
                  <span>→</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsBuilderOpen(false)}
                  className="text-xs font-semibold text-[#666666] hover:text-[#111111] px-4 py-2 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}