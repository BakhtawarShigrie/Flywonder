import Link from "next/link";
import Image from "next/image";

const WHATSAPP_NUMBER = "923097879999";

interface HomeUmrahTier {
  id: string;
  badge: string;
  title: string;
  duration: string;
  img: string;
  featured?: boolean;
  highlights: string[];
  whatsappText: string;
}

const UMRAH_TIERS: HomeUmrahTier[] = [
  {
    id: "group-economy",
    badge: "Lahore Departures",
    title: "Group & Economy Umrah",
    duration: "14 / 21 Nights Package",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795423295/Madina.jpg",
    highlights: [
      "Umrah Visa & Mandatory Saudi Insurance",
      "Comfortable Hotels with 24/7 Shuttle Service",
      "Jeddah – Makkah – Madinah Group Transport",
      "Guided Makkah & Madinah Ziyarat Tours",
    ],
    whatsappText:
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! Please share Group & Economy Umrah package dates from Lahore and per-person rates.",
  },
  {
    id: "family-comfort",
    badge: "Most Popular • Family Choice",
    title: "4-Star Family Comfort",
    duration: "10 / 14 / 15 Nights Package",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795425660/Kaba-madina.jpg",
    featured: true,
    highlights: [
      "Walking Distance Hotels in Makkah & Madinah",
      "Private Car / HiAce Family Airport & City Transfers",
      "Daily Buffet Breakfast & Custom Room Sharing",
      "Dedicated On-Ground Support Team in KSA",
    ],
    whatsappText:
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! I want details and rates for the 4-Star Family Comfort Umrah Package.",
  },
  {
    id: "vip-luxury",
    badge: "Haram View • Executive",
    title: "5-Star VIP & Luxury Umrah",
    duration: "7 / 10 / 14 Nights Custom",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795423296/Kaba.jpg",
    highlights: [
      "5-Star Clock Tower / Markazia Haram-Front Hotels",
      "Private GMC Yukon / Haramain High-Speed Train",
      "Flexible Flight Dates & Priority Check-In",
      "Personalized Ziyarat & 24/7 VIP Concierge",
    ],
    whatsappText:
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! Please send a quote for the 5-Star VIP & Luxury Umrah Package.",
  },
];

const INCLUDED_PERKS = [
  "Umrah Visa & Insurance",
  "Direct & Connecting Flights",
  "Makkah & Madinah Hotels",
  "Private Transport & Ziyarat",
];

export default function UmrahSection() {
  return (
    <section className="bg-gradient-to-b from-[#16273b] via-[#0f1926] to-[#121f2f] py-24 px-4 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Subtle Ambient Gold & Sky Glow */}
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[540px] h-[260px] bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#C89B3C]/15 border border-[#C89B3C]/40 text-[#F4C150] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F4C150] animate-pulse" />
            <span>Sacred Journey • Umrah Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Premium <span className="text-[#F4C150]">Umrah Packages</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Thoughtfully planned group and private family Umrah packages from Lahore with close-to-Haram hotels, private transport, and dedicated on-ground support in Makkah &amp; Madinah.
          </p>
        </div>

        {/* 3-Card Full-Size Package Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {UMRAH_TIERS.map((tier) => {
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              tier.whatsappText
            )}`;

            return (
              <div
                key={tier.id}
                className={`group rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  tier.featured
                    ? "bg-[#19293e] border-2 border-[#C89B3C] shadow-[0_20px_50px_rgba(200,155,60,0.2)] lg:-translate-y-2"
                    : "bg-[#172538] border border-slate-700/70 hover:border-[#C89B3C]/60 shadow-xl"
                }`}
              >
                <div>
                  {/* Full-Height Card Image Container */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden">
                    <Image
                      src={tier.img}
                      alt={tier.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#172538] via-transparent to-black/20" />

                    {/* Top Badge */}
                    <span
                      className={`absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md ${
                        tier.featured
                          ? "bg-[#C89B3C] text-slate-950 shadow-md"
                          : "bg-slate-950/75 text-[#F4C150] border border-white/15"
                      }`}
                    >
                      {tier.badge}
                    </span>

                    {/* Duration Pill at Bottom of Image */}
                    <div className="absolute bottom-3 left-5">
                      <span className="text-xs font-semibold text-sky-300 bg-slate-950/75 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                        {tier.duration}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F4C150] transition-colors">
                      {tier.title}
                    </h3>

                    <ul className="space-y-3">
                      {tier.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-slate-300"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#C89B3C]/15 text-[#F4C150] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                            ✓
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom WhatsApp CTA */}
                <div className="p-6 sm:p-7 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 font-bold text-sm py-3.5 px-5 rounded-xl transition-all duration-300 ${
                      tier.featured
                        ? "bg-[#C89B3C] hover:bg-[#d8aa49] text-slate-950 shadow-[0_8px_20px_rgba(200,155,60,0.3)]"
                        : "bg-slate-900/90 hover:bg-[#C89B3C] text-white hover:text-slate-950 border border-slate-700 hover:border-[#C89B3C]"
                    }`}
                  >
                    <span>Get Quote on WhatsApp</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* All-Inclusive Strip + Explore Full Umrah Page Button */}
        <div className="bg-[#172538]/90 border border-slate-700/70 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            {INCLUDED_PERKS.map((perk) => (
              <div
                key={perk}
                className="flex items-center gap-2 bg-[#0f1926] border border-slate-700/80 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-200"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{perk}</span>
              </div>
            ))}
          </div>

          <Link
            href="/UMRAH-Service"
            className="inline-flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-[0_8px_25px_rgba(14,165,233,0.4)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap flex-shrink-0"
          >
            <span>Explore All Umrah Packages</span>
            <span className="text-lg leading-none">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}