const WHATSAPP_NUMBER = "923097879999";

interface UmrahPackageCard {
  title: string;
  desc: string;
  featured?: boolean;
  whatsappText: string;
}

const PACKAGES: UmrahPackageCard[] = [
  {
    title: "Group Umrah from Lahore",
    desc: "Group Umrah packages on fixed dates with flights from Lahore: the departure dates, hotels in Makkah and Madinah, and the price per person for each room sharing.",
    featured: true,
    whatsappText:
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! Please share upcoming Group Umrah departure dates from Lahore, hotel details, and per-person room sharing rates.",
  },
  {
    title: "Family Umrah packages",
    desc: "Umrah packages planned for families with children and elderly parents: room plans, pace, private transport and help on the ground.",
    whatsappText:
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! I am looking for a Family Umrah Package with private transport and comfortable hotels near Haram.",
  },
  {
    title: "First time Umrah guide",
    desc: "A plain guide for a first Umrah, from booking to coming home, with an enquiry form for a first-timer package.",
    whatsappText:
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! We are planning our first Umrah and need complete guidance and package options.",
  },
  {
    title: "5-star Umrah packages",
    desc: "5-star hotels in Makkah and Madinah close to the Haram, what changes a 5-star price, and a written quote for your dates.",
    whatsappText:
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! Please send 5-Star Umrah package details with Haram-view / close-distance hotels in Makkah and Madinah.",
  },
  {
    title: "VIP and luxury Umrah packages",
    desc: "A VIP or luxury Umrah is a private trip: private car or van for every journey, the hotels and rooms you choose, and a trip planned around your family.",
    whatsappText:
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! I want a quote for a VIP & Luxury Private Umrah Package with private GMC/car transfers.",
  },
  {
    title: "Ramadan Umrah 2027",
    desc: "Umrah in Ramadan 2027 (expected to begin around 08/02/2027, subject to moon sighting): dates, the last ten nights, crowds and booking early.",
    whatsappText:
      "Assalam-o-Alaikum Fly Wonder Travel & Tours! Please share Ramadan Umrah 2027 package details, dates, and early booking rates.",
  },
];

export default function UmrahPackagesSection() {
  const allPackagesUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Assalam-o-Alaikum Fly Wonder Travel & Tours! Please share all available Umrah packages and current rates."
  )}`;

  return (
    <section className="bg-white py-20 px-4 text-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Top Accent Line & Heading */}
        <div className="w-10 h-0.5 bg-[#C89B3C] mb-4" />
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] mb-10">
          Our Umrah packages and group departures
        </h2>

        {/* 6 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => {
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              pkg.whatsappText
            )}`;

            return (
              <a
                key={pkg.title}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-2xl p-7 flex flex-col justify-between min-h-[235px] transition-all duration-300 hover:-translate-y-1 ${
                  pkg.featured
                    ? "bg-[#0D0D0D] text-white shadow-xl hover:shadow-2xl"
                    : "bg-[#F6F4EF] text-[#111111] hover:bg-[#EFECE4] border border-transparent hover:border-[#C89B3C]/40"
                }`}
              >
                <div>
                  <h3
                    className={`text-lg font-bold mb-3 ${
                      pkg.featured ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {pkg.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      pkg.featured ? "text-neutral-300" : "text-[#555555]"
                    }`}
                  >
                    {pkg.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[#C89B3C] text-lg font-semibold inline-block transform group-hover:translate-x-1.5 transition-transform duration-200">
                    →
                  </span>
                  <span
                    className={`text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                      pkg.featured ? "text-[#F4C150]" : "text-[#9A7020]"
                    }`}
                  >
                    Get quote on WhatsApp
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Underlined Action Links */}
        <div className="mt-10 flex flex-wrap items-center gap-7 text-sm font-bold text-[#111111]">
          <a
            href={allPackagesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-[#111111] pb-1 hover:text-[#B8862D] hover:border-[#B8862D] transition-colors"
          >
            <span>See all Umrah packages</span>
            <span>→</span>
          </a>

          <a
            href="#custom-umrah-builder"
            className="inline-flex items-center gap-2 border-b border-[#111111] pb-1 hover:text-[#B8862D] hover:border-[#B8862D] transition-colors"
          >
            <span>Build your own package</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}