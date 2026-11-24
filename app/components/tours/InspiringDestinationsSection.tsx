import Image from "next/image";

const WHATSAPP_NUMBER = "923097879999";

interface TourPackage {
  id: string;
  title: string;
  duration: string;
  tag: string;
  img: string;
  highlights: string[];
}

const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "skardu-5n6d",
    title: "SKARDU 5 NIGHT 6 DAYS TOUR PACKAGE",
    duration: "5 Nights / 6 Days",
    tag: "Northern Pakistan • Domestic",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795431689/Skardu.jpg",
    highlights: [
      "Shangrila Resort, Upper Kachura & Shigar Fort",
      "Deosai Plains, Cold Desert & Manthoka Waterfall",
      "Private Transport, Standard/Deluxe Hotels & Breakfast",
    ],
  },
  {
    id: "uzbekistan-4d5n",
    title: "Uzbekistan Group Tour | 4 Days / 5 Nights",
    duration: "4 Days / 5 Nights",
    tag: "Central Asia • Group Departure",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198260/Dubai.jpg",
    highlights: [
      "Tashkent City Tour, Amir Timur Square & Chimgan Mountains",
      "E-Visa Assistance, 4-Star Hotel Stay & Daily Breakfast",
      "Airport Transfers & Guided Sightseeing Included",
    ],
  },
  {
    id: "uzbekistan-8d7n",
    title: "Uzbekistan Group Tour | 8 Days / 7 Nights",
    duration: "8 Days / 7 Nights",
    tag: "Silk Road Explorer • Group Tour",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198262/Turkey.jpg",
    highlights: [
      "Tashkent, Samarkand (Registan) & Historic Bukhara",
      "Afrosiyob High-Speed Bullet Train & 4-Star Hotels",
      "Complete Visa, Transfers & English-Speaking Guide",
    ],
  },
  {
    id: "china-6n7d",
    title: "China Group Tour | 6 Nights / 7 Days",
    duration: "6 Nights / 7 Days",
    tag: "East Asia • Cultural & Modern",
    img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      "Beijing Great Wall, Forbidden City & Shanghai Skyline",
      "4-Star Hotel Accommodation, Breakfast & Inter-City Train",
      "China Visa File Support & Guided Group Excursions",
    ],
  },
  {
    id: "thailand-ny-2027",
    title: "Thailand New Year Tour 2027 - Pattaya & Bangkok",
    duration: "New Year 2027 Special",
    tag: "Southeast Asia • Celebration Tour",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198262/Thailand.jpg",
    highlights: [
      "Coral Island Speedboat Tour, Alcazar Show & Safari World",
      "Bangkok City & Temple Tour + Chao Phraya Dinner Cruise",
      "4-Star Hotels, Airport Transfers & Thailand Visa Help",
    ],
  },
  {
    id: "japan-6d5n",
    title: "Japan Tokyo & Osaka Tour | 6 Days / 5 Nights",
    duration: "6 Days / 5 Nights",
    tag: "Far East • Signature Tour",
    img: "https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795198261/Japan.jpg",
    highlights: [
      "Tokyo Asakusa, Shibuya, Mount Fuji & Osaka Castle",
      "Bullet Train Experience, Central Hotels & Daily Breakfast",
      "Complete Japan Tourist Visa Documentation Support",
    ],
  },
];

export default function InspiringDestinationsSection() {
  return (
    <section className="bg-[#0f1926] py-24 px-4 text-white border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-sky-500/10 border border-sky-400/30 text-sky-400 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Handpicked Itineraries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Inspiring Destinations
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Explore our featured group departures and holiday packages from Lahore. Connect directly with our tour specialist on WhatsApp for dates, itinerary PDF, and pricing.
          </p>
        </div>

        {/* 6 Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {TOUR_PACKAGES.map((tour) => {
            const whatsappMessage = `Assalam-o-Alaikum Fly Wonder Travel & Tours! I want to book / get details for the "${tour.title}" (${tour.duration}). Please share dates and package rates.`;
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              whatsappMessage
            )}`;

            return (
              <div
                key={tour.id}
                className="group bg-[#172538] border border-slate-700/60 hover:border-sky-400/60 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_16px_40px_rgba(14,165,233,0.16)] transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Card Top Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={tour.img}
                      alt={tour.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#172538] via-transparent to-black/25" />

                    {/* Top Tag */}
                    <span className="absolute top-4 left-4 bg-slate-950/75 backdrop-blur-md text-sky-300 text-[11px] font-semibold px-3.5 py-1 rounded-full border border-white/10">
                      {tour.tag}
                    </span>

                    {/* Duration Pill */}
                    <span className="absolute bottom-3 right-4 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-lg shadow">
                      {tour.duration}
                    </span>
                  </div>

                  {/* Card Details */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-4 group-hover:text-sky-400 transition-colors">
                      {tour.title}
                    </h3>

                    <ul className="space-y-2.5">
                      {tour.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                        >
                          <span className="w-4 h-4 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA -> WhatsApp with Tour Details */}
                <div className="p-6 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm py-3.5 px-5 rounded-xl shadow-md hover:shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>Call Agent to Book Tour</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}