const WHATSAPP_NUMBER = "923097879999";

interface ZiaratTour {
  id: string;
  countryBadge: string;
  title: string;
  subtitle: string;
  description: string;
  cities: string;
  whatsappText: string;
}

const ZIARAT_TOURS: ZiaratTour[] = [
  {
    id: "iraq-ziarat",
    countryBadge: "Iraq Pilgrimage",
    title: "IRAQ ZIARAT TOUR",
    subtitle: "A Sacred Journey to the Land of the Ahlulbayt (A.S)",
    description:
      "Experience a deeply spiritual pilgrimage visiting the holy shrines of Karbala, Najaf, Kazmain, and Samarra with complete visa, flights, near-Haram hotels, and guided Ziarat.",
    cities: "Najaf • Karbala • Kazmain • Samarra",
    whatsappText:
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! I want to book the *IRAQ ZIARAT TOUR* (Najaf, Karbala, Kazmain & Samarra). Please share upcoming group dates, hotel details, and package rates.",
  },
  {
    id: "iran-ziarat",
    countryBadge: "Iran Pilgrimage",
    title: "IRAN ZIARAT TOUR",
    subtitle: "A Blessed Spiritual Journey to Mashhad & Qom",
    description:
      "Embark on a peaceful pilgrimage to the holy shrines of Imam Ali al-Rida (A.S) in Mashhad, Hazrat Fatima Masooma (S.A) in Qom, Masjid-e-Jamkaran, and Shiraz.",
    cities: "Mashhad • Qom • Jamkaran • Shiraz",
    whatsappText:
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! I want to book the *IRAN ZIARAT TOUR* (Mashhad, Qom, Jamkaran & Shiraz). Please share upcoming group dates, hotel details, and package rates.",
  },
];

export default function ZiaraatToursSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-slate-100 border border-slate-200/80 text-[#B8892C] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            Sacred Pilgrimage Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1926] tracking-tight">
            IRAN &amp; IRAQ ZIARAT TOURS
          </h2>
        </div>

        {/* Separate Iraq & Iran Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ZIARAT_TOURS.map((tour) => {
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              tour.whatsappText
            )}`;

            return (
              <div
                key={tour.id}
                className="bg-white border border-slate-200/90 hover:border-[#C89B3C]/70 rounded-3xl p-8 sm:p-11 text-center flex flex-col items-center justify-between shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)] transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8892C] bg-[#C89B3C]/10 border border-[#C89B3C]/25 px-3.5 py-1 rounded-full mb-4">
                    {tour.countryBadge}
                  </span>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0f1926] tracking-tight uppercase mb-2.5">
                    {tour.title}
                  </h3>

                  <p className="text-sm sm:text-base font-medium text-slate-700 mb-4">
                    {tour.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md mb-5">
                    {tour.description}
                  </p>

                  <p className="text-xs font-bold tracking-wider uppercase text-slate-700 mb-8">
                    {tour.cities}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#0f1926] hover:bg-[#1a2b42] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  BOOK YOUR ZIARAT NOW
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}