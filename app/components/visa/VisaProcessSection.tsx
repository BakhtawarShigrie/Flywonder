export default function VisaProcessSection() {
  const steps = [
    {
      num: "1",
      title: "Consultation",
      desc: "We assess your profile and travel goals to advise the best visa strategy.",
    },
    {
      num: "2",
      title: "Documentation",
      desc: "Our experts help you prepare and verify all required documents accurately.",
    },
    {
      num: "3",
      title: "Application",
      desc: "We handle the submission process, ensuring all protocols are followed.",
    },
    {
      num: "4",
      title: "Approval",
      desc: "We track your application and notify you upon a successful visa grant.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#121f2f] to-[#16273b] border-t border-slate-800/80 py-24 px-4 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Theme Matching Badge */}
        <span className="inline-block bg-sky-500/10 border border-sky-400/30 text-sky-400 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          How It Works
        </span>

        {/* Heading & Subtitle */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
          Our Simple 4-Step Visa Process
        </h2>
        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          We&apos;ve streamlined the visa application process to make it as smooth and transparent as possible for you.
        </p>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#172538] border border-slate-700/60 hover:border-sky-400/60 rounded-2xl p-8 flex flex-col items-center group transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_12px_30px_rgba(14,165,233,0.15)]"
            >
              {/* Number Circle */}
              <div className="w-20 h-20 bg-[#0f1926] rounded-full flex items-center justify-center mb-6 border border-sky-400/30 group-hover:border-sky-400 group-hover:bg-sky-500/10 shadow-[0_0_25px_rgba(14,165,233,0.15)] group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl font-bold text-sky-400">
                  {step.num}
                </span>
              </div>

              {/* Step Title & Description */}
              <h3 className="text-xl font-bold mb-3 tracking-wide text-white group-hover:text-sky-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}