import Link from "next/link";
import Image from "next/image";

const popularVisas = [
  { name: "UK", code: "gb" },
  { name: "USA", code: "us" },
  { name: "Canada", code: "ca" },
  { name: "Schengen", code: "eu" },
  { name: "Dubai", code: "ae" },
  { name: "Turkey", code: "tr" },
  { name: "Malaysia", code: "my" },
  { name: "Azerbaijan", code: "az" },
];

export default function VisaSection() {
  return (
    <section className="bg-white py-24 px-4 text-slate-900 relative overflow-hidden">
      {/* Subtle Light Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-100/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visa Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.12)] group">
              <Image
                src="https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795421415/visa_section.jpg"
                alt="Global Visa and Passport Services - Fly Wonder Travel & Tours"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Top Left Tag on Image */}
              <div className="absolute top-5 left-5 bg-slate-950/75 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-white">
                  E-Visa &amp; Sticker Visa Assistance
                </span>
              </div>

              {/* Bottom Floating Visa Card Preview */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#172538]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-sky-400 font-bold">
                      Worldwide Visa Desk
                    </p>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      35+ Countries Visit &amp; Business Visas
                    </h4>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>

                {/* Popular Flags Strip */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-700/60">
                  {popularVisas.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-1.5 bg-slate-900/85 border border-slate-700/70 px-2.5 py-1 rounded-full"
                    >
                      <Image
                        src={`https://flagcdn.com/w40/${item.code}.png`}
                        alt={item.name}
                        width={16}
                        height={12}
                        unoptimized
                        className="rounded-[2px] object-cover"
                      />
                      <span className="text-xs font-medium text-slate-200">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visa Details & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-600 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
              </svg>
              Visa Services
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-slate-900">
              Hassle-Free Global <span className="text-sky-600">Visa Processing</span> &amp; Consultancy
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Whether you are planning a family holiday, business trip, or international tour, Fly Wonder Travel &amp; Tours handles your complete visa documentation, embassy appointments, and file preparation with precision.
            </p>

            {/* Key Visa Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 border border-slate-200/80 hover:border-sky-300 rounded-2xl p-4 flex items-start gap-3.5 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Complete File Preparation</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                    Cover letters, bank statement review &amp; hotel/flight bookings.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 hover:border-sky-300 rounded-2xl p-4 flex items-start gap-3.5 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Fast E-Visa &amp; Appointments</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                    Quick turnaround for UAE, Asia, UK, USA &amp; Schengen visas.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button -> Navigates to /VISA-Services */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/VISA-Services"
                className="inline-flex items-center gap-2.5 bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-[0_8px_25px_rgba(2,132,199,0.3)] hover:-translate-y-0.5"
              >
                Explore All Visa Countries
                <span className="text-lg leading-none">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}