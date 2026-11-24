const WHATSAPP_NUMBER = "923097879999";

const HOTEL_TIERS = [
  { label: "5-star hotels", stars: 5 },
  { label: "4-star hotels", stars: 4 },
  { label: "3-star hotels", stars: 3 },
];

export default function B2BHotelRatesSection() {
  const b2bWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Assalam-o-Alaikum Fly Wonder Travel & Tours! I am a travel agent and would like to receive your B2B Makkah & Madinah hotel rates."
  )}`;

  return (
    <section className="bg-[#F6F4EF] py-20 px-4 text-[#111111] border-t border-[#EAE5DA]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8862D]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>FOR TRAVEL AGENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] leading-tight tracking-tight">
            Are you a travel agent?
            <br />
            Get our B2B hotel rates
          </h2>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-lg">
            Special B2B rates on 3, 4 and 5-star hotels in Makkah and Madinah, for single bookings and for groups. Transport, Ziyarat and visa assistance for your groups on request.
          </p>

          <div className="pt-2">
            <a
              href={b2bWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#111111] hover:bg-neutral-800 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Get B2B hotel rates</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Dark B2B Card */}
        <div className="lg:col-span-6 flex lg:justify-end">
          <div className="w-full max-w-md bg-[#111111] text-white rounded-3xl p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C89B3C] mb-5">
              MAKKAH AND MADINAH
            </p>

            <div className="space-y-3">
              {HOTEL_TIERS.map((tier) => {
                const tierUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Assalam-o-Alaikum Fly Wonder Travel & Tours! Please share B2B ${tier.label} rates for Makkah and Madinah.`
                )}`;

                return (
                  <a
                    key={tier.label}
                    href={tierUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-[#222222] hover:bg-[#2c2c2c] px-5 py-3.5 rounded-xl transition-colors"
                  >
                    <span className="text-sm font-bold text-white">
                      {tier.label}
                    </span>
                    <span className="text-[#C89B3C] text-sm tracking-wider">
                      {"★".repeat(tier.stars)}
                    </span>
                  </a>
                );
              })}
            </div>

            <p className="text-xs text-neutral-400 mt-5">
              Rates for your dates, on WhatsApp or by email.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}