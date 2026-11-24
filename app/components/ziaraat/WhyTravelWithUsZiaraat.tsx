const REASONS = [
  "EXPERIENCED ZIARAT GUIDES",
  "COMFORTABLE HOTELS",
  "TRANSPORT INCLUDED",
  "AFFORDABLE PACKAGES",
  "GROUP & FAMILY FRIENDLY",
  "24/7 SUPPORT",
];

export default function WhyTravelWithUsZiaraat() {
  return (
    <section className="w-full bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f1926] text-center tracking-tight uppercase mb-12 sm:mb-14">
          WHY TRAVEL WITH US
        </h2>

        {/* Top Row: 4 Cards | Bottom Row: 2 Centered Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {REASONS.map((title, index) => (
            <div
              key={title}
              className={`rounded-2xl px-6 py-7 min-h-[104px] flex items-center justify-center text-center transition-all duration-300 cursor-pointer bg-slate-50/70 hover:bg-[#0f1926] text-[#0f1926] hover:text-white border border-slate-200/80 hover:border-[#0f1926] shadow-sm hover:shadow-[0_12px_28px_rgba(15,23,42,0.2)] ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-snug">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}