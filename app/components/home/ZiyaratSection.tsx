import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "923097879999";

const ZIARAAT_PACKAGES = [
  {
    country: "Iraq Ziaraat",
    cities: "Najaf • Karbala • Kazmain • Samarra",
    summary: "Direct flights, Iraq visa, near-Haram hotels & experienced group guides.",
    whatsappMsg:
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! I want details and rates for your Iraq Ziaraat Package (Najaf, Karbala, Kazmain & Samarra).",
  },
  {
    country: "Iran Ziaraat",
    cities: "Mashhad • Qom • Jamkaran • Shiraz",
    summary: "Complete Iran visa, comfortable hotels, overland transport & guided Ziarat.",
    whatsappMsg:
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! I want details and rates for your Iran Ziaraat Package (Mashhad, Qom, Jamkaran & Shiraz).",
  },
];

export default function HomeZiaraatSection() {
  return (
    <section className="relative w-full bg-[#0f1926] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      {/* Subtle Ambient Gold & Sky Glow */}
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-[#C89B3C]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-sky-500/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ================= LEFT: Layered Shrine Visual Showcase ================= */}
          <div className="lg:col-span-6">
            <div className="relative max-w-[560px] mx-auto">
              {/* Main Shrine Image */}
              <div className="relative h-[340px] sm:h-[450px] w-full rounded-3xl overflow-hidden border border-slate-700/70 shadow-[0_22px_60px_rgba(0,0,0,0.55)] group">
                <Image
                  src="https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795441344/1.webp"
                  alt="Sacred Ziaraat to Iran and Iraq"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1926] via-[#0f1926]/20 to-transparent" />

                {/* Top-Left Gold Pill */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-[#C89B3C]/40 text-[#F4C150] text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                  Group &amp; Family Departures
                </div>

                {/* Bottom Overlay Info Bar */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-[#121e2e]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#F4C150]">
                      All-Inclusive Pilgrimage
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                      Visa • Flights • Near-Haram Hotels • Guided Ziarat
                    </p>
                  </div>
                  <Link
                    href="/Ziaraat"
                    className="w-10 h-10 rounded-xl bg-[#F4C150] hover:bg-[#ffd06b] text-[#0f1926] flex items-center justify-center font-extrabold flex-shrink-0 transition-transform hover:scale-105"
                    aria-label="Explore Ziaraat Packages"
                  >
                    →
                  </Link>
                </div>
              </div>

              {/* Floating Secondary Shrine Card (Desktop & Tablet) */}
              <div className="hidden sm:block absolute -bottom-6 -right-5 w-44 h-32 rounded-2xl overflow-hidden border-2 border-[#0f1926] shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795441346/4.jpg"
                  alt="Holy Shrine Pilgrimage"
                  fill
                  sizes="180px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT: Content & Iran/Iraq Quick Cards ================= */}
          <div className="lg:col-span-6 space-y-6">
            {/* Gold Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C89B3C]/15 border border-[#C89B3C]/35 text-[#F4C150] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#F4C150]" />
              <span>Spiritual Journeys • Lahore</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Sacred Ziaraat to{" "}
              <span className="text-[#F4C150]">Iran &amp; Iraq</span>
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Embark on a peaceful, spiritually fulfilling pilgrimage to the holy shrines of the Ahlulbayt (A.S). Fly Wonder Travel &amp; Tours arranges end-to-end Ziaraat packages from Pakistan with dedicated religious guides and comfortable accommodations near the Haram.
            </p>

            {/* Separate Iraq & Iran Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {ZIARAAT_PACKAGES.map((pkg) => {
                const pkgWhatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  pkg.whatsappMsg
                )}`;

                return (
                  <div
                    key={pkg.country}
                    className="bg-[#162436] border border-slate-700/75 hover:border-[#C89B3C]/60 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-extrabold text-white">
                          {pkg.country}
                        </h3>
                        <span className="w-2 h-2 rounded-full bg-sky-400" />
                      </div>
                      <p className="text-xs font-bold text-[#F4C150] tracking-wide mb-2">
                        {pkg.cities}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {pkg.summary}
                      </p>
                    </div>

                    <a
                      href={pkgWhatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>Inquire {pkg.country}</span>
                      <span>→</span>
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                href="/Ziaraat"
                className="inline-flex items-center justify-center gap-2 bg-[#F4C150] hover:bg-[#ffd06b] text-[#0f1926] font-extrabold text-sm px-8 py-3.5 rounded-full shadow-[0_8px_24px_rgba(244,193,80,0.28)] hover:-translate-y-0.5 transition-all"
              >
                <span>View Ziaraat Details</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}