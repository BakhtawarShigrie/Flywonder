export default function WhyTravelWithUsSection() {
  const features = [
    {
      title: "Expert Planners",
      desc: "Our specialists have firsthand knowledge of the destinations we offer.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
    {
      title: "Fully Customized",
      desc: "Your trip is designed around your interests, budget, and schedule.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      ),
    },
    {
      title: "Exclusive Access",
      desc: "We provide unique experiences and upgrades not available to the public.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5L2 9l10 12L22 9l-3-6zM9.62 8l1.5-3h1.76l1.5 3H9.62zM11 10v6.68L5.44 10H11zm2 0h5.56L13 16.68V10zm6.26-2h-2.65l-1.5-3h2.65l1.5 3zM6.24 5h2.65l-1.5 3H4.74l1.5-3z" />
        </svg>
      ),
    },
    {
      title: "24/7 Support",
      desc: "Travel with peace of mind knowing we're here for you anytime, anywhere.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-24 px-4 text-slate-900 relative overflow-hidden">
      {/* Subtle Bright Ambient Accents */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-sky-100/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="inline-block bg-sky-50 border border-sky-200 text-sky-600 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          The Fly Wonder Advantage
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f1926] mb-4">
          Why Travel With <span className="text-sky-600">Fly Wonder Travel &amp; Tours?</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          We go beyond booking flights and hotels. We craft experiences that resonate with you long after you&apos;ve returned home.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-sky-400 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_6px_24px_rgba(14,165,233,0.06)] hover:shadow-[0_16px_36px_rgba(14,165,233,0.14)] transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white shadow-md shadow-sky-500/25 group-hover:scale-110 flex items-center justify-center mb-5 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0f1926] group-hover:text-sky-600 transition-colors mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}