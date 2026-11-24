"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WHATSAPP_INQUIRY_URL = `https://wa.me/923097879999?text=${encodeURIComponent(
  "Assalam-o-Alaikum Fly Wonder Travel & Tours! I would like to inquire about your Visa, Umrah, or Tour packages."
)}`;

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=LandMark+Plaza+Jail+Road+Lahore";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<"none" | "about" | "contact" | "call">("none");
  const [isClosingModal, setIsClosingModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // World-Tours aur Ziaraat page per by default scrolled navbar dikhane ke liye
  const isSolidNav =
    isScrolled ||
    pathname?.toLowerCase() === "/world-tours" ||
    pathname?.toLowerCase() === "/ziaraat";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal Open karne ka function
  const openModal = (modal: "about" | "contact" | "call") => {
    setIsClosingModal(false);
    setActiveModal(modal);
  };

  // Smooth Exit Animation ke sath Modal Close karne ka function
  const closeModal = () => {
    setIsClosingModal(true);
    setTimeout(() => {
      setActiveModal("none");
      setIsClosingModal(false);
    }, 300);
  };

  const navTextClass = `font-medium text-sm transition-colors cursor-pointer ${
    isSolidNav ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
  }`;

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isSolidNav ? "bg-white shadow-md border-b border-gray-100 py-0" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[95%] xl:max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20 relative">
            {/* 1. Text Logo */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span
                  className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${
                    isSolidNav ? "text-slate-900" : "text-white"
                  }`}
                >
                  Flywonder.pk
                </span>
              </Link>
            </div>

            {/* 2. Desktop Center Links */}
            <div
              className={`hidden lg:flex items-center space-x-6 px-8 py-2.5 rounded-full backdrop-blur-md transition-all border ${
                isSolidNav ? "bg-gray-100/80 border-gray-200" : "bg-black/20 border-white/20"
              }`}
            >
              <Link href="/" className={navTextClass}>Home</Link>
              <Link href="/VISA-Services" className={navTextClass}>Visa</Link>
              <Link href="/UMRAH-Service" className={navTextClass}>Umrah</Link>
              <Link href="/World-Tours" className={navTextClass}>Tours</Link>
              <Link href="/Ziaraat" className={navTextClass}>Ziaraat</Link>
              <button onClick={() => openModal("about")} className={navTextClass}>About Us</button>
              <button onClick={() => openModal("contact")} className={navTextClass}>Contact</button>
            </div>

            {/* 3. Desktop Call Now Button */}
            <div className="flex-1 hidden lg:flex justify-end">
              <button
                onClick={() => openModal("call")}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer ${
                  isSolidNav
                    ? "bg-slate-900 hover:bg-blue-600 text-white"
                    : "bg-white text-slate-900 hover:bg-blue-600 hover:text-white"
                }`}
              >
                CALL NOW <span>→</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center flex-1 justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`focus:outline-none p-2 transition-colors ${isSolidNav ? "text-gray-800" : "text-white"}`}
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* ================= MOBILE BLUR MENU ================= */}
            <div
              className={`lg:hidden absolute top-[100%] left-0 right-0 transition-all duration-300 ease-in-out origin-top ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-5 invisible pointer-events-none"
              }`}
            >
              <div className="mt-2 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                <div className="px-6 py-8 flex flex-col items-center space-y-5">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">Home</Link>
                  <Link href="/VISA-Services" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">Visa Services</Link>
                  <Link href="/UMRAH-Service" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">Umrah Packages</Link>
                  <Link href="/World-Tours" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">World Tours</Link>
                  <Link href="/Ziaraat" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">Ziaraat</Link>
                  <button onClick={() => { openModal("about"); setIsMobileMenuOpen(false); }} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">About Us</button>
                  <button onClick={() => { openModal("contact"); setIsMobileMenuOpen(false); }} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">Contact</button>

                  <div className="w-3/4 border-t border-white/20 my-2"></div>

                  {/* Social Icons */}
                  <div className="flex items-center gap-5 pt-1">
                    <a href="https://www.facebook.com/flywondertravel.pk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/flywonder.pk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-600 hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </a>
                    <a href={WHATSAPP_INQUIRY_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#25D366] hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,211,102,0.5)]">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= PREMIUM MODALS (Theme-Matched Navy, Sky-Blue & Gold) ================= */}
      {activeModal !== "none" && (
        <div
          onClick={closeModal}
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#060b12]/75 backdrop-blur-md transition-opacity duration-300 ${
            isClosingModal ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* 1. Theme-Matched About Us Modal (Compact on Mobile) */}
          {activeModal === "about" && (
            <div
              onClick={(e) => e.stopPropagation()}
              className={`bg-[#0f1926] border border-slate-700/80 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.65)] w-full max-w-2xl overflow-hidden relative text-white transition-all duration-300 transform ${
                isClosingModal ? "scale-95 opacity-0 translate-y-4" : "scale-100 opacity-100 translate-y-0"
              }`}
            >
              {/* Top Navy/Gold Header */}
              <div className="bg-gradient-to-r from-[#16273b] via-[#1b314b] to-[#16273b] p-6 sm:p-8 border-b border-slate-800 relative overflow-hidden">
                <div className="absolute -top-14 -right-14 w-44 h-44 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-14 -left-14 w-44 h-44 bg-[#C89B3C]/15 rounded-full blur-2xl pointer-events-none" />

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 z-20 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-full p-2.5 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="relative z-10 pr-10">
                  <div className="inline-flex items-center gap-2 bg-[#C89B3C]/15 border border-[#C89B3C]/35 text-[#F4C150] px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4C150]" />
                    <span>Trusted Travel Partner</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    Fly Wonder Travel &amp; Tours
                  </h2>
                  <p className="text-sky-300 text-xs sm:text-sm font-medium mt-1">
                    Worldwide Visas • Umrah &amp; Ziaraat • International Tours • Ticketing
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-[#121e2e] space-y-4">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Located at <strong className="text-white">LandMark Plaza, Jail Road, Lahore</strong>, Fly Wonder Travel &amp; Tours delivers reliable, end-to-end travel services — from sacred <strong className="text-[#F4C150]">Umrah &amp; Ziaraat</strong> packages to global visit visas and customized holidays.
                </p>

                <p className="hidden md:block text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our experienced consultants manage visa documentation, airline reservations, close-to-Haram hotels, and airport transfers with complete transparency so every journey stays stress-free.
                </p>

                {/* Compact Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-[#172538] border border-slate-700/80 p-3.5 sm:p-4 rounded-2xl flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-400/25 text-sky-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs sm:text-sm">Expert Desk</h4>
                      <p className="text-[11px] sm:text-xs text-slate-400">Visas &amp; Umrah</p>
                    </div>
                  </div>

                  <div className="bg-[#172538] border border-slate-700/80 p-3.5 sm:p-4 rounded-2xl flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#C89B3C]/15 border border-[#C89B3C]/30 text-[#F4C150] flex items-center justify-center font-bold text-sm flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs sm:text-sm">24/7 Support</h4>
                      <p className="text-[11px] sm:text-xs text-slate-400">Always Available</p>
                    </div>
                  </div>
                </div>

                {/* Desktop Quick Action Footer */}
                <div className="hidden md:flex items-center justify-between pt-3 border-t border-slate-800/90">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-300 hover:text-[#F4C150] transition-colors"
                  >
                    📍 Office # LG-28, LandMark Plaza, Jail Road, Lahore
                  </a>
                  <a
                    href={WHATSAPP_INQUIRY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors"
                  >
                    <span>Talk to Our Team</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 2. Theme-Matched Premium Contact Us Modal */}
          {activeModal === "contact" && (
            <div
              onClick={(e) => e.stopPropagation()}
              className={`bg-[#0f1926] border border-slate-700/80 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.65)] w-full max-w-4xl overflow-hidden relative flex flex-col md:flex-row transition-all duration-300 transform ${
                isClosingModal ? "scale-95 opacity-0 translate-y-4" : "scale-100 opacity-100 translate-y-0"
              }`}
            >
              {/* Left Column: Dark Navy & Gold Brand Info */}
              <div className="md:w-5/12 bg-gradient-to-b from-[#16273b] via-[#122032] to-[#0f1926] p-6 sm:p-8 text-white relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-800">
                <div className="absolute -top-16 -left-16 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#C89B3C]/15 rounded-full blur-3xl pointer-events-none" />

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                  aria-label="Close modal"
                  className="md:hidden absolute top-4 right-4 z-20 text-slate-300 hover:text-white bg-slate-800/90 border border-slate-700 rounded-full p-2.5 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="relative z-10 pr-10 md:pr-0">
                  <div className="inline-flex items-center gap-2 bg-[#C89B3C]/15 border border-[#C89B3C]/35 text-[#F4C150] px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4C150]" />
                    <span>Fly Wonder Travel Desk</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                    Get In Touch
                  </h2>
                  <p className="hidden md:block text-slate-300 text-xs sm:text-sm leading-relaxed mb-7">
                    Visit our Lahore head office or connect directly with our Visa, Umrah &amp; World Tour advisors.
                  </p>

                  <div className="space-y-4 sm:space-y-5 mt-4 md:mt-0">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-500/15 border border-sky-400/25 flex items-center justify-center text-sky-400 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Helpline &amp; Landline</p>
                        <a href="tel:+923097879999" className="block text-sm font-semibold text-white hover:text-sky-400 transition-colors">
                          0309 787 9999
                        </a>
                        <a href="tel:+922397879999" className="block text-sm font-semibold text-slate-300 hover:text-sky-400 transition-colors">
                          0239 787 9999
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-500/15 border border-sky-400/25 flex items-center justify-center text-sky-400 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Official Email</p>
                        <a href="mailto:info@flywonder.pk" className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">
                          info@flywonder.pk
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#C89B3C]/15 border border-[#C89B3C]/30 flex items-center justify-center text-[#F4C150] flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Head Office</p>
                        <a
                          href={GOOGLE_MAPS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-slate-200 hover:text-[#F4C150] transition-colors leading-snug block"
                        >
                          Office # LG-28, LandMark Plaza,<br />Jail Road, Lahore
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Instant Action Cards */}
              <div className="md:w-7/12 p-6 sm:p-10 relative bg-[#121e2e] flex flex-col justify-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                  aria-label="Close modal"
                  className="hidden md:flex absolute top-5 right-5 z-20 text-slate-400 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-full p-2 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Hidden on Mobile Screens as Requested */}
                <span className="hidden md:block text-xs font-bold uppercase tracking-widest text-sky-400 mb-1.5">
                  Fast Response Support
                </span>
                <h3 className="hidden md:block text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Connect Instantly
                </h3>
                <p className="hidden md:block text-slate-300 text-sm mb-7 leading-relaxed">
                  Skip the wait — message our travel consultants on WhatsApp or call directly for flight fares, visa guidance, and Umrah quotes.
                </p>

                <div className="space-y-3 sm:space-y-3.5">
                  {/* WhatsApp Primary CTA */}
                  <a
                    href={WHATSAPP_INQUIRY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3.5 sm:py-4 rounded-2xl transition-all shadow-[0_10px_25px_rgba(37,211,102,0.28)] hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                      </div>
                      <div className="text-left">
                        <span className="block text-base font-extrabold leading-tight">Chat on WhatsApp</span>
                        <span className="block text-xs text-emerald-50 font-medium">Instant replies from our Lahore team</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold group-hover:translate-x-1 transition-transform">→</span>
                  </a>

                  {/* Direct Mobile Call */}
                  <a
                    href="tel:+923097879999"
                    className="w-full flex items-center justify-between bg-sky-500 hover:bg-sky-400 text-white px-5 py-3.5 sm:py-4 rounded-2xl transition-all shadow-[0_10px_25px_rgba(14,165,233,0.28)] hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      </div>
                      <div className="text-left">
                        <span className="block text-base font-extrabold leading-tight">Call 0309 787 9999</span>
                        <span className="block text-xs text-sky-50 font-medium">Direct Mobile &amp; Booking Helpline</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold group-hover:translate-x-1 transition-transform">→</span>
                  </a>

                  {/* Secondary Grid: Landline & Google Map */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <a
                      href="tel:+922397879999"
                      className="flex items-center justify-center gap-2 bg-[#172538] hover:bg-[#1e3048] border border-slate-700/80 hover:border-sky-400/50 text-slate-200 hover:text-white py-3 px-3 rounded-xl text-xs font-bold transition-colors"
                    >
                      <span>☎ 0239 787 9999</span>
                    </a>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#172538] hover:bg-[#1e3048] border border-slate-700/80 hover:border-[#C89B3C]/60 text-[#F4C150] py-3 px-3 rounded-xl text-xs font-bold transition-colors"
                    >
                      <span>📍 Office Map</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. Theme-Matched CALL NOW Quick-Connect Modal */}
          {activeModal === "call" && (
            <div
              onClick={(e) => e.stopPropagation()}
              className={`bg-[#0f1926] border border-slate-700/80 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.65)] w-full max-w-md overflow-hidden relative text-white transition-all duration-300 transform ${
                isClosingModal ? "scale-95 opacity-0 translate-y-4" : "scale-100 opacity-100 translate-y-0"
              }`}
            >
              {/* Top Navy/Gold Header */}
              <div className="bg-gradient-to-r from-[#16273b] via-[#1b314b] to-[#16273b] px-7 pt-7 pb-6 border-b border-slate-800 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />

                <button
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 text-slate-300 hover:text-white bg-slate-900/70 hover:bg-slate-800 border border-slate-700 rounded-full p-2 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>

                <div className="inline-flex items-center gap-2 bg-[#C89B3C]/15 border border-[#C89B3C]/35 text-[#F4C150] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Direct Travel Desk • Lahore</span>
                </div>

                <h2 className="text-2xl font-extrabold text-white tracking-tight">
                  Connect Instantly
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Speak with our travel agents for flights, visas, Umrah &amp; tour packages.
                </p>
              </div>

              {/* Action Buttons Body */}
              <div className="p-7 space-y-3.5 bg-[#121e2e]">
                {/* Primary Mobile Helpline */}
                <a
                  href="tel:+923097879999"
                  className="w-full flex items-center justify-between bg-sky-500 hover:bg-sky-400 text-white px-5 py-3.5 rounded-2xl shadow-[0_8px_22px_rgba(14,165,233,0.3)] hover:-translate-y-0.5 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div className="text-left">
                      <span className="block text-[11px] uppercase tracking-wider text-sky-100 font-semibold">Mobile Helpline</span>
                      <span className="block text-base font-extrabold tracking-wide">0309 787 9999</span>
                    </div>
                  </div>
                  <span className="text-base font-bold group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* Office Landline */}
                <a
                  href="tel:+922397879999"
                  className="w-full flex items-center justify-between bg-[#172538] hover:bg-[#1d2f47] border border-slate-700/80 hover:border-[#C89B3C]/60 text-white px-5 py-3.5 rounded-2xl transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#C89B3C]/15 border border-[#C89B3C]/30 text-[#F4C150] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" /></svg>
                    </div>
                    <div className="text-left">
                      <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Lahore Office Landline</span>
                      <span className="block text-base font-extrabold tracking-wide">0239 787 9999</span>
                    </div>
                  </div>
                  <span className="text-base font-bold text-[#F4C150] group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* WhatsApp Chat Button */}
                <a
                  href={WHATSAPP_INQUIRY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-5 rounded-2xl text-base font-extrabold shadow-[0_8px_22px_rgba(37,211,102,0.28)] hover:-translate-y-0.5 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  <span>Message on WhatsApp</span>
                </a>

                <p className="text-center text-[11px] text-slate-400 pt-1">
                  Office # LG-28, LandMark Plaza, Jail Road, Lahore
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}