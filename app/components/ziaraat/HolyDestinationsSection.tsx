interface HolyDestination {
  city: string;
  country: "Iraq" | "Iran";
  description: string;
}

const HOLY_DESTINATIONS: HolyDestination[] = [
  // Iraq Holy Destinations
  {
    city: "KARBALA",
    country: "Iraq",
    description:
      "Visit the holy shrines of Imam Hussain (A.S) and Hazrat Abbas (A.S).",
  },
  {
    city: "NAJAF",
    country: "Iraq",
    description:
      "Ziarat of Imam Ali (A.S) at the holy shrine in Najaf, Masjid-e-Kufa & Sahla.",
  },
  {
    city: "KAZMAIN",
    country: "Iraq",
    description:
      "Ziarat of Imam Musa Kazim (A.S) and Imam Muhammad Jawad (A.S).",
  },
  {
    city: "SAMARRA",
    country: "Iraq",
    description:
      "Visit the shrine of Imam Ali al-Naqi (A.S), Imam Hasan Askari (A.S) & Sardab-e-Imam Mahdi (A.J).",
  },
  // Iran Holy Destinations
  {
    city: "MASHHAD",
    country: "Iran",
    description:
      "Ziarat of Imam Ali al-Rida (A.S) at the sacred Haram in Mashhad.",
  },
  {
    city: "QOM",
    country: "Iran",
    description:
      "Visit the holy shrine of Hazrat Fatima Masooma (S.A) and Masjid-e-Jamkaran.",
  },
  {
    city: "SHIRAZ",
    country: "Iran",
    description:
      "Ziarat of Hazrat Shah Cheragh (A.S) (Syed Mir Ahmad, brother of Imam Reza A.S).",
  },
  {
    city: "TEHRAN / RAY",
    country: "Iran",
    description:
      "Visit the holy shrine of Hazrat Shah Abdul Azim al-Hasani (A.S) & Bibi Shahrbano (S.A).",
  },
];

export default function HolyDestinationsSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f1926] tracking-tight uppercase">
            HOLY DESTINATIONS
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Sacred shrines across Iraq and Iran covered in our guided Ziaraat itineraries
          </p>
        </div>

        {/* 8 Holy Destination Cards (4 Iraq + 4 Iran) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {HOLY_DESTINATIONS.map((item) => (
            <div
              key={item.city}
              className="bg-white border border-slate-200/85 hover:border-[#C89B3C]/60 rounded-2xl p-6 sm:p-7 text-center flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1"
            >
              <span
                className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-3 ${
                  item.country === "Iraq"
                    ? "bg-slate-100 text-slate-600"
                    : "bg-[#C89B3C]/12 text-[#B8892C]"
                }`}
              >
                {item.country}
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f1926] tracking-wide uppercase mb-2.5">
                {item.city}
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}