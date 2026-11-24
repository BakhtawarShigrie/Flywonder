import Image from "next/image";

const WHATSAPP_NUMBER = "923097879999";

const ZIARAAT_IMAGES = {
  topLeft:
    "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795441344/1.webp",
  topRight:
    "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795441348/2.jpg",
  bottomLeft:
    "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795441348/3.jpg",
  bottomRight:
    "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795441346/4.jpg",
};

const HIGHLIGHTS = [
  "Iran & Iraq visa assistance and complete travel documentation",
  "Airline bookings, Ziarat flights, and luxury overland transfers",
  "Comfortable hotel accommodations walking distance from holy shrines",
  "Guided Ziaraat tours to Najaf, Karbala, Kazmain, Samarra, Mashhad & Qom",
  "Flexible group departures and customized family packages",
];

export default function ZiaraatHeroSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Assalam-o-Alaikum Fly Wonder Travel & Tours! I want details and rates for your Iran & Iraq Ziaraat packages."
  )}`;

  return (
    <section className="w-full bg-white pt-24 sm:pt-28 lg:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ================= LEFT: 4-Image Asymmetric Leaf Collage ================= */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-3 sm:gap-4 max-w-[560px] mx-auto">
              {/* Left Column (Narrower: 5 cols) */}
              <div className="col-span-5 flex flex-col justify-center gap-3 sm:gap-4">
                {/* Image 1: Top-Left (Sharp Bottom-Right Corner) */}
                <div className="relative w-full h-[165px] sm:h-[215px] rounded-[46px] sm:rounded-[68px] rounded-br-xl sm:rounded-br-2xl overflow-hidden shadow-[0_12px_30px_rgba(15,23,42,0.12)] group">
                  <Image
                    src={ZIARAAT_IMAGES.topLeft}
                    alt="Holy Shrine Ziaraat in Iraq and Iran"
                    fill
                    priority
                    sizes="(max-width: 640px) 42vw, 240px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Image 3: Bottom-Left (Sharp Top-Right Corner) */}
                <div className="relative w-full h-[135px] sm:h-[175px] rounded-[42px] sm:rounded-[62px] rounded-tr-xl sm:rounded-tr-2xl overflow-hidden shadow-[0_12px_30px_rgba(15,23,42,0.12)] group">
                  <Image
                    src={ZIARAAT_IMAGES.bottomLeft}
                    alt="Aerial View of Holy Haram"
                    fill
                    priority
                    sizes="(max-width: 640px) 42vw, 240px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Column (Wider: 7 cols) */}
              <div className="col-span-7 flex flex-col justify-center gap-3 sm:gap-4">
                {/* Image 2: Top-Right (Sharp Bottom-Left Corner) */}
                <div className="relative w-full h-[155px] sm:h-[205px] rounded-[46px] sm:rounded-[68px] rounded-bl-xl sm:rounded-bl-2xl overflow-hidden shadow-[0_12px_30px_rgba(15,23,42,0.12)] group">
                  <Image
                    src={ZIARAAT_IMAGES.topRight}
                    alt="Direct Ziaraat Flights to Najaf and Mashhad"
                    fill
                    priority
                    sizes="(max-width: 640px) 58vw, 320px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Image 4: Bottom-Right (Sharp Top-Left Corner) */}
                <div className="relative w-full h-[195px] sm:h-[255px] rounded-[52px] sm:rounded-[78px] rounded-tl-xl sm:rounded-tl-2xl overflow-hidden shadow-[0_12px_30px_rgba(15,23,42,0.12)] group">
                  <Image
                    src={ZIARAAT_IMAGES.bottomRight}
                    alt="Sacred Roza-e-Mubarak Ziaraat Tour"
                    fill
                    priority
                    sizes="(max-width: 640px) 58vw, 320px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: Iran & Iraq Ziaraat Details ================= */}
          <div className="lg:col-span-6 space-y-5">
            {/* Top Pill Badge */}
            <div className="inline-block bg-slate-100 border border-slate-200/80 px-4 py-1.5 rounded-full">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#B8892C]">
                Spiritual Journeys to Holy Cities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f1926] leading-[1.15] tracking-tight">
              Affordable and <br />
              Comprehensive <br />
              <span className="text-[#C89B3C]">Iran &amp; Iraq Packages</span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Visiting the sacred shrines in <strong className="text-slate-800">Iraq and Iran</strong> is a deeply spiritual journey.{" "}
              <strong className="text-[#0f1926]">Fly Wonder Travel &amp; Tours</strong> offers well-organized, peaceful Ziaraat packages from Pakistan, including:
            </p>

            {/* Checkmark Feature List */}
            <ul className="space-y-3 pt-1">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 font-medium"
                >
                  <span className="text-[#0f1926] font-extrabold mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Direct Booking Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#0f1926] hover:bg-[#1b2d44] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <span>Inquire on WhatsApp</span>
                <span className="text-[#F4C150]">→</span>
              </a>

              <a
                href="tel:+923097879999"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-[#0f1926] font-bold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                <span>Call: 0309 787 9999</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}