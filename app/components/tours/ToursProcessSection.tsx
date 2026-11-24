export default function ToursProcessSection() {
  const steps = [
    {
      title: "1. Share Your Dream",
      desc: "Tell us about your travel style, interests, and where you want to go.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
        </svg>
      ),
    },
    {
      title: "2. We Craft Your Itinerary",
      desc: "Our experts design a unique plan with handpicked accommodations and experiences.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 3v2m0 0l-5 14m5-14l5 14M6.5 14h11" />
        </svg>
      ),
    },
    {
      title: "3. Book & Embark",
      desc: "We handle all bookings. You just pack your bags and create lasting memories.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-20 px-4 text-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f1926] mb-3">
          Your Adventure in 3 Simple Steps
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-14">
          We make planning your dream vacation effortless and enjoyable from start to finish.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center">
              {/* Double-Ring Circle Icon */}
              <div className="w-20 h-20 rounded-full border-2 border-sky-600 p-1.5 flex items-center justify-center mb-6 shadow-sm">
                <div className="w-full h-full rounded-full bg-sky-600 text-white flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0f1926] mb-2.5">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}