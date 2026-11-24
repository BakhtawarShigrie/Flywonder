const WHATSAPP_NUMBER = "923097879999";

export default function UmrahOfficeSection() {
  const contactWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Assalam-o-Alaikum Fly Wonder Travel & Tours! I would like to discuss an Umrah package with your team."
  )}`;

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=LandMark+Plaza+Jail+Road+Lahore";

  return (
    <section className="bg-[#0D0D0D] py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Top Accent Line & Heading */}
        <div className="w-10 h-0.5 bg-[#C89B3C] mb-4" />
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-12">
          Our office and how to reach us
        </h2>

        {/* 4 Contact Info Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Office in Lahore */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-2.5">
              <svg className="w-4 h-4 text-[#C89B3C] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Office in Lahore</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-3">
              Office Number LG-28, LandMark Plaza, Jail Road, Lahore
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-bold text-white border-b border-[#C89B3C] pb-0.5 hover:text-[#F4C150] transition-colors"
            >
              Open the map
            </a>
          </div>

          {/* In Makkah and Madinah */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-2.5">
              <svg className="w-4 h-4 text-[#C89B3C] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>In Makkah and Madinah</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We help you before you fly, and our team is with you in Makkah and Madinah.
            </p>
          </div>

          {/* Call or WhatsApp */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-2.5">
              <svg className="w-4 h-4 text-[#C89B3C] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call or WhatsApp</span>
            </div>
            <a
              href="tel:+923097879999"
              className="inline-block text-sm font-bold text-white border-b border-[#C89B3C] pb-0.5 hover:text-[#F4C150] transition-colors"
            >
              +92 309 787 9999
            </a>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-2.5">
              <svg className="w-4 h-4 text-[#C89B3C] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email</span>
            </div>
            <a
              href="mailto:info@flywonder.pk"
              className="inline-block text-sm font-bold text-white border-b border-[#C89B3C] pb-0.5 hover:text-[#F4C150] transition-colors"
            >
              info@flywonder.pk
            </a>
          </div>
        </div>

        {/* Contact Us Button -> WhatsApp */}
        <a
          href={contactWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#C89B3C] hover:bg-[#b5892e] text-[#111111] font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <span>Contact us</span>
          <span>→</span>
        </a>
      </div>
    </section>
  );
}