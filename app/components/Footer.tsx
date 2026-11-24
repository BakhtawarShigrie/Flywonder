import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=LandMark+Plaza+Jail+Road+Lahore";

  return (
    <footer className="bg-[#091019] border-t border-slate-800/80 text-slate-300 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* 1. Brand & Logo Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-14">
                <Image
                  src="https://res.cloudinary.com/pvnhgx8n/image/upload/f_auto,q_auto/v1795425941/logo-white.png"
                  alt="Fly Wonder Travel & Tours"
                  fill
                  sizes="192px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted travel partner in Lahore for worldwide air ticketing, visit &amp; e-visas, customized Umrah packages, sacred Iran &amp; Iraq Ziaraat, and international tours.
            </p>
          </div>

          {/* 2. Quick Links (All Main Website Pages) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              {/* <li>
                <Link href="/air-ticketing" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Air Ticketing
                </Link>
              </li> */}
              <li>
                <Link href="/VISA-Services" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Visa Services
                </Link>
              </li>
              <li>
                <Link href="/UMRAH-Service" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Umrah Packages
                </Link>
              </li>
              <li>
                <Link href="/World-Tours" className="text-slate-400 hover:text-sky-400 transition-colors">
                  World Tours
                </Link>
              </li>
              <li>
                <Link href="/Ziaraat" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Ziaraat
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Our Services (Aligned with Whole Website) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {/* <li>
                <Link href="/air-ticketing" className="hover:text-sky-400 transition-colors">
                  Domestic &amp; International Air Ticketing
                </Link>
              </li> */}
              <li>
                <Link href="/VISA-Services" className="hover:text-sky-400 transition-colors">
                  UK, USA, Canada &amp; Schengen Visas
                </Link>
              </li>
              <li>
                <Link href="/VISA-Services" className="hover:text-sky-400 transition-colors">
                  UAE, Turkey &amp; Asian E-Visas
                </Link>
              </li>
              <li>
                <Link href="/UMRAH-Service" className="hover:text-sky-400 transition-colors">
                  Group &amp; Family Umrah Packages
                </Link>
              </li>
              <li>
                <Link href="/Ziaraat" className="hover:text-sky-400 transition-colors">
                  Sacred Iran &amp; Iraq Ziaraat Tours
                </Link>
              </li>
              <li>
                <Link href="/World-Tours" className="hover:text-sky-400 transition-colors">
                  International &amp; Northern Holiday Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact & Office Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Visit Our Office
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Office Number LG-28, LandMark Plaza, Jail Road, Lahore
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col space-y-1">
                  <a href="tel:+923097879999" className="hover:text-white transition-colors">
                    0309 787 9999
                  </a>
                  <a href="tel:+922397879999" className="hover:text-white transition-colors">
                    0239 787 9999
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-sky-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@flywonder.pk" className="hover:text-white transition-colors">
                  info@flywonder.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
  <p>© {new Date().getFullYear()} Fly Wonder Travel &amp; Tours. All rights reserved.</p>
  <p>
    Developed by{" "}
    <a
      href="https://wa.me/447951575203?text=Hey!"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-slate-400 hover:text-white transition-colors"
    >
      Shigrony (Pvt) Ltd.
    </a>
  </p>
</div>
      </div>
    </footer>
  );
}