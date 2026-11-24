"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Region =
  | "America & Canada"
  | "Central Asia"
  | "Europe"
  | "East & Southeast Asia"
  | "Middle East";

interface VisaCountry {
  id: string;
  name: string;
  region: Region;
  code: string;
  visaType: string;
  processingTime: string;
  details: string;
  keywords?: string[];
}

const REGIONS: Region[] = [
  "America & Canada",
  "Central Asia",
  "Europe",
  "East & Southeast Asia",
  "Middle East",
];

const VISA_COUNTRIES: VisaCountry[] = [
  // 1. America & Canada
  {
    id: "usa",
    name: "USA",
    region: "America & Canada",
    code: "us",
    visaType: "B1/B2 Visit Visa",
    processingTime: "Appointment Based",
    details: "Complete DS-160 form filling, embassy appointment scheduling, and interview preparation guidance.",
    keywords: ["united states", "united states of america", "america", "new york", "washington"],
  },
  {
    id: "canada",
    name: "Canada",
    region: "America & Canada",
    code: "ca",
    visaType: "Visitor Visa (TRV)",
    processingTime: "15–30 Working Days",
    details: "End-to-end documentation review, cover letter drafting, and biometric appointment support.",
    keywords: ["toronto", "vancouver", "ontario"],
  },

  // 2. Central Asia
  {
    id: "uzbekistan",
    name: "Uzbekistan",
    region: "Central Asia",
    code: "uz",
    visaType: "Tourist E-Visa",
    processingTime: "3–5 Working Days",
    details: "Fast online E-Visa processing for tourism and heritage tours with minimal documentation.",
    keywords: ["tashkent", "samarkand", "bukhara"],
  },
  {
    id: "azerbaijan",
    name: "Azerbaijan",
    region: "Central Asia",
    code: "az",
    visaType: "ASAN E-Visa",
    processingTime: "3–4 Working Days",
    details: "Quick Baku visit visa approval with optional hotel booking and airport transfer packages.",
    keywords: ["baku"],
  },

  // 3. Europe
  {
    id: "uk",
    name: "UK",
    region: "Europe",
    code: "gb",
    visaType: "Standard Visitor Visa",
    processingTime: "15–20 Working Days",
    details: "Comprehensive UK visit visa file preparation, UKVI form submission, and VFS appointment booking.",
    keywords: ["united kingdom", "england", "london", "britain", "great britain", "scotland", "manchester", "birmingham"],
  },
  {
    id: "austria",
    name: "Austria",
    region: "Europe",
    code: "at",
    visaType: "Schengen Visit Visa",
    processingTime: "15 Working Days",
    details: "Complete Schengen tourist visa assistance including travel insurance, itinerary, and appointment.",
    keywords: ["schengen", "vienna"],
  },
  {
    id: "ireland",
    name: "Ireland",
    region: "Europe",
    code: "ie",
    visaType: "Short Stay 'C' Visit Visa",
    processingTime: "15–25 Working Days",
    details: "Expert guidance for Irish tourist and family visit visa applications and supporting documents.",
    keywords: ["dublin"],
  },
  {
    id: "belgium",
    name: "Belgium",
    region: "Europe",
    code: "be",
    visaType: "Schengen Visit Visa",
    processingTime: "15 Working Days",
    details: "Hassle-free Schengen file preparation, hotel reservations, and embassy appointment support.",
    keywords: ["schengen", "brussels"],
  },
  {
    id: "czech-republic",
    name: "Czech Republic",
    region: "Europe",
    code: "cz",
    visaType: "Schengen Visit Visa",
    processingTime: "15 Working Days",
    details: "Full assistance for Prague & Czech Republic visit visas with verified travel documentation.",
    keywords: ["schengen", "prague", "czechia"],
  },
  {
    id: "denmark",
    name: "Denmark",
    region: "Europe",
    code: "dk",
    visaType: "Schengen Visit Visa",
    processingTime: "15 Working Days",
    details: "Accurate application review, cover letter drafting, and VFS appointment scheduling for Denmark.",
    keywords: ["schengen", "copenhagen"],
  },
  {
    id: "estonia",
    name: "Estonia",
    region: "Europe",
    code: "ee",
    visaType: "Schengen Visit Visa",
    processingTime: "15 Working Days",
    details: "Professional Schengen tourist visa guidance with travel insurance and flight reservation support.",
    keywords: ["schengen", "tallinn"],
  },
  {
    id: "finland",
    name: "Finland",
    region: "Europe",
    code: "fi",
    visaType: "Schengen Visit Visa",
    processingTime: "15 Working Days",
    details: "End-to-end visit visa file preparation for Finland and Nordic Schengen travel.",
    keywords: ["schengen", "helsinki"],
  },
  {
    id: "france",
    name: "France",
    region: "Europe",
    code: "fr",
    visaType: "Schengen Visit Visa",
    processingTime: "15 Working Days",
    details: "Complete France tourist visa assistance including France-Visas form, insurance, and appointment.",
    keywords: ["schengen", "paris"],
  },
  {
    id: "germany",
    name: "Germany",
    region: "Europe",
    code: "de",
    visaType: "Schengen Visit / Business Visa",
    processingTime: "15 Working Days",
    details: "Thorough document verification and appointment booking for Germany tourist and trade fair visits.",
    keywords: ["schengen", "berlin", "munich", "frankfurt"],
  },
  {
    id: "greece",
    name: "Greece",
    region: "Europe",
    code: "gr",
    visaType: "Schengen Visit Visa",
    processingTime: "15 Working Days",
    details: "Smooth Schengen holiday visa processing for Athens, Santorini, and Greek islands.",
    keywords: ["schengen", "athens", "santorini"],
  },
  {
    id: "hungary",
    name: "Hungary",
    region: "Europe",
    code: "hu",
    visaType: "Schengen Visit Visa",
    processingTime: "15 Working Days",
    details: "Complete Budapest tourist visa documentation, cover letter, and appointment assistance.",
    keywords: ["schengen", "budapest"],
  },
  {
    id: "italy",
    name: "Italy",
    region: "Europe",
    code: "it",
    visaType: "Schengen Visit Visa",
    processingTime: "15 Working Days",
    details: "Dedicated Italy visit visa file preparation with confirmed itinerary and travel insurance.",
    keywords: ["schengen", "rome", "milan", "venice"],
  },
  {
    id: "lithuania",
    name: "Lithuania",
    region: "Europe",
    code: "lt",
    visaType: "Schengen Visit Visa",
    processingTime: "15 Working Days",
    details: "Reliable Schengen visa documentation and application guidance for Lithuania.",
    keywords: ["schengen", "vilnius"],
  },
  {
    id: "luxembourg",
    name: "Luxembourg",
    region: "Europe",
    code: "lu",
    visaType: "Schengen Visit Visa",
    processingTime: "15 Working Days",
    details: "Complete file verification and appointment support for Luxembourg tourist and business visits.",
    keywords: ["schengen"],
  },
  {
    id: "netherlands",
    name: "Netherlands",
    region: "Europe",
    code: "nl",
    visaType: "Schengen Visit Visa",
    processingTime: "15 Working Days",
    details: "Hassle-free Netherlands visit visa processing with complete document and insurance support.",
    keywords: ["schengen", "amsterdam", "holland"],
  },

  // 4. East & Southeast Asia
  {
    id: "hong-kong",
    name: "Hong Kong",
    region: "East & Southeast Asia",
    code: "hk",
    visaType: "Visit / Tourist Visa",
    processingTime: "7–10 Working Days",
    details: "Hassle-free tourist and business visit visa assistance with complete file verification.",
  },
  {
    id: "south-korea",
    name: "South Korea",
    region: "East & Southeast Asia",
    code: "kr",
    visaType: "C-3 Short-Term Visit Visa",
    processingTime: "10–15 Working Days",
    details: "Professional embassy file preparation, itinerary planning, and visa submission support.",
    keywords: ["korea", "seoul"],
  },
  {
    id: "china",
    name: "China",
    region: "East & Southeast Asia",
    code: "cn",
    visaType: "L Tourist / M Business Visa",
    processingTime: "5–7 Working Days",
    details: "Sticker visa processing for tourism, Canton Fair, and business visits with full documentation help.",
    keywords: ["beijing", "shanghai", "guangzhou"],
  },
  {
    id: "cambodia",
    name: "Cambodia",
    region: "East & Southeast Asia",
    code: "kh",
    visaType: "Tourist E-Visa",
    processingTime: "3–5 Working Days",
    details: "Fast and convenient online tourist visa processing for a 30-day stay in Cambodia.",
  },
  {
    id: "indonesia",
    name: "Indonesia",
    region: "East & Southeast Asia",
    code: "id",
    visaType: "Tourist E-Visa (Bali)",
    processingTime: "4–7 Working Days",
    details: "Smooth visit visa processing for Bali holidays and Indonesian tourist destinations.",
    keywords: ["bali", "jakarta"],
  },
  {
    id: "malaysia",
    name: "Malaysia",
    region: "East & Southeast Asia",
    code: "my",
    visaType: "Tourist E-Visa",
    processingTime: "3–5 Working Days",
    details: "Quick Malaysian E-Visa approval with confirmed return ticket and hotel reservation support.",
    keywords: ["kuala lumpur"],
  },
  {
    id: "singapore",
    name: "Singapore",
    region: "East & Southeast Asia",
    code: "sg",
    visaType: "Tourist E-Visa",
    processingTime: "4–6 Working Days",
    details: "Authorized Singapore visit visa processing with rapid turnaround and zero hassle.",
  },
  {
    id: "thailand",
    name: "Thailand",
    region: "East & Southeast Asia",
    code: "th",
    visaType: "Tourist E-Visa",
    processingTime: "5–8 Working Days",
    details: "Complete Thailand visit visa assistance for Bangkok, Phuket, and Pattaya holidays.",
    keywords: ["bangkok", "phuket", "pattaya"],
  },
  {
    id: "japan",
    name: "Japan",
    region: "East & Southeast Asia",
    code: "jp",
    visaType: "Temporary Visitor Visa",
    processingTime: "7–12 Working Days",
    details: "Expert day-by-day travel itinerary, bank statement review, and embassy submission guidance.",
    keywords: ["tokyo", "osaka"],
  },
  {
    id: "philippines",
    name: "Philippines",
    region: "East & Southeast Asia",
    code: "ph",
    visaType: "9(a) Temporary Visitor Visa",
    processingTime: "7–10 Working Days",
    details: "Complete document checklist and application processing for Philippine tourist visits.",
    keywords: ["manila"],
  },
  {
    id: "vietnam",
    name: "Vietnam",
    region: "East & Southeast Asia",
    code: "vn",
    visaType: "Tourist E-Visa",
    processingTime: "3–5 Working Days",
    details: "Fast single and multiple-entry Vietnam E-Visa processing for leisure travelers.",
    keywords: ["hanoi", "ho chi minh"],
  },

  // 5. Middle East
  {
    id: "turkey",
    name: "Turkey",
    region: "Middle East",
    code: "tr",
    visaType: "Sticker / E-Visa",
    processingTime: "7–12 Working Days",
    details: "Complete Turkey tourist visa assistance through Anatolia/embassy with hotel and flight bookings.",
    keywords: ["turkiye", "istanbul", "ankara"],
  },
  {
    id: "iran",
    name: "Iran",
    region: "Middle East",
    code: "ir",
    visaType: "Visit / Ziaraat Visa",
    processingTime: "3–5 Working Days",
    details: "Fast Iran tourist and Ziaraat visa processing with guided group and family options.",
    keywords: ["tehran", "mashhad", "ziaraat"],
  },
  {
    id: "bahrain",
    name: "Bahrain",
    region: "Middle East",
    code: "bh",
    visaType: "Visit E-Visa",
    processingTime: "3–5 Working Days",
    details: "Quick 14-day and 30-day Bahrain E-Visa processing with minimal paperwork.",
    keywords: ["manama"],
  },
  {
    id: "iraq",
    name: "Iraq",
    region: "Middle East",
    code: "iq",
    visaType: "Visit / Ziaraat Visa",
    processingTime: "4–7 Working Days",
    details: "Hassle-free Iraq Ziaraat and visit visa processing with complete ground coordination.",
    keywords: ["baghdad", "karbala", "najaf", "ziaraat"],
  },
  {
    id: "dubai",
    name: "Dubai (UAE)",
    region: "Middle East",
    code: "ae",
    visaType: "30 / 60 Days Tourist E-Visa",
    processingTime: "24–48 Hours",
    details: "Express UAE single & multiple-entry visit visas with instant online processing.",
    keywords: ["uae", "united arab emirates", "abu dhabi", "sharjah"],
  },
];

const WHATSAPP_NUMBER = "923097879999";

export default function VisaCountriesSection() {
  const [selectedRegion, setSelectedRegion] = useState<Region>("Europe");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Bahar click karne per search input ko smoothly wapas andar close karna
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleToggleSearch = () => {
    if (!isSearchOpen) {
      setIsSearchOpen(true);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 150);
    } else {
      setIsSearchOpen(false);
    }
  };

  const handleRegionClick = (region: Region) => {
    setSelectedRegion(region);
    setSearchQuery("");
  };

  // Search query ko country name, region, aur keywords/aliases ke against match karna
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;
  const filteredCountries = isSearching
    ? VISA_COUNTRIES.filter((country) => {
        const matchesName = country.name.toLowerCase().includes(normalizedQuery);
        const matchesRegion = country.region.toLowerCase().includes(normalizedQuery);
        const matchesKeyword = country.keywords?.some((kw) => {
          const lowerKw = kw.toLowerCase();
          return (
            lowerKw.includes(normalizedQuery) ||
            (lowerKw.length >= 4 && normalizedQuery.includes(lowerKw))
          );
        });
        return matchesName || matchesRegion || matchesKeyword;
      })
    : VISA_COUNTRIES.filter((country) => country.region === selectedRegion);

  return (
    <section className="bg-[#0f1926] py-20 px-4 text-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-sky-500/10 border border-sky-400/30 text-sky-400 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Global Destinations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Explore Visa Countries
          </h2>
          <p className="text-slate-300 text-base md:text-lg">
            Select a region below or search your destination to view visit visa details and connect directly with our visa specialists.
          </p>
        </div>

        {/* 5 Regions Filter Bar + Animated Slide-Out Search */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {REGIONS.map((region) => {
            const isActive = !isSearching && selectedRegion === region;
            return (
              <button
                key={region}
                onClick={() => handleRegionClick(region)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-sky-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.45)] scale-105"
                    : "bg-[#1a293d] text-slate-300 hover:bg-[#243752] hover:text-white border border-slate-700/60"
                }`}
              >
                {region}
              </button>
            );
          })}

          {/* Animated Search Button & Sliding Input */}
          <div
            ref={searchContainerRef}
            className="flex items-center bg-[#1a293d] border border-slate-700/80 rounded-full p-1 shadow-lg"
          >
            <button
              type="button"
              onClick={handleToggleSearch}
              aria-label="Search country"
              className="w-9 h-9 rounded-full bg-sky-500 hover:bg-sky-400 text-white flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out flex items-center ${
                isSearchOpen
                  ? "w-56 sm:w-64 opacity-100 pl-3 pr-2"
                  : "w-0 opacity-0 pl-0 pr-0"
              }`}
            >
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country..."
                className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-slate-400 hover:text-white text-xs ml-1 cursor-pointer"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Active Search Indicator */}
        {isSearching && (
          <div className="flex items-center justify-center gap-3 mb-8 text-sm text-slate-300">
            <span>
              Showing results for <strong className="text-sky-400">&quot;{searchQuery}&quot;</strong>
            </span>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-white px-3 py-1 rounded-full border border-slate-600 transition-colors cursor-pointer"
            >
              Reset
            </button>
          </div>
        )}

        {/* Country Cards Grid */}
        {filteredCountries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCountries.map((country) => {
              const whatsappMessage = `Assalam-o-Alaikum Fly Wonder Travel & Tours! I want details and assistance for the ${country.name} Visit Visa.`;
              const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                whatsappMessage
              )}`;

              return (
                <div
                  key={country.id}
                  className="group bg-[#172538] border border-slate-700/60 hover:border-sky-400/60 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_12px_30px_rgba(14,165,233,0.15)] transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div>
                    {/* 1. Country Flag Image */}
                    <div className="relative h-40 w-full bg-slate-900 overflow-hidden border-b border-slate-700/50">
                      <Image
                        src={`https://flagcdn.com/w320/${country.code}.png`}
                        alt={`${country.name} Flag`}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#172538] via-transparent to-black/20"></div>
                      <span className="absolute top-3 right-3 bg-slate-950/75 backdrop-blur-md text-sky-300 text-[11px] font-semibold px-3 py-1 rounded-full border border-white/10">
                        {country.visaType}
                      </span>
                    </div>

                    {/* 2. Country Name & Visit Visa Details */}
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                          {country.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-sky-300/90 font-medium mb-3">
                        <svg
                          className="w-4 h-4 text-sky-400 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Processing: {country.processingTime}</span>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {country.details}
                      </p>
                    </div>
                  </div>

                  {/* 3. Contact Agent Button (Redirects to WhatsApp with Visa Name) */}
                  <div className="p-5 pt-0">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md hover:shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Contact Agent
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#172538]/60 rounded-2xl border border-slate-700/50">
            <p className="text-slate-300 text-lg mb-3">
              No country found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              Show All {selectedRegion} Visas
            </button>
          </div>
        )}
      </div>
    </section>
  );
}