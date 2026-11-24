interface PilgrimReview {
  quote: string;
  author: string;
}

const REVIEWS: PilgrimReview[] = [
  {
    quote:
      "“I truly appreciate their cooperation, professionalism, guidance, and dedication to serving the pilgrims.”",
    author: "Nisar A.",
  },
  {
    quote:
      "“Exceptional Umrah services and a truly wonderful experience for the entire family. They provide fully customized Umrah packages with excellent on-ground support, making the whole journey smooth, comfortable, and stress-free. Highly recommended, especially for families. I would definitely encourage everyone to give them a chance!”",
    author: "SSPA T.",
  },
  {
    quote:
      "“Great Experience. The team has been very supportive and cooperative. Highly Recommended.”",
    author: "Adnan R.",
  },
  {
    quote: "“Exceptional services. Committed and well planned.”",
    author: "SHUJAAT C.",
  },
  {
    quote:
      "“Best for Customized Umrah Packages. Transport vehicles are also up model and clean. Ziarat tours are proper guided. 24/7 Active Coordination Support and also check-in host.”",
    author: "Muhammad F.",
  },
];

function GoogleBadgeIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.49 12.275c0-.85-.075-1.675-.215-2.475H12v4.685h6.445c-.28 1.495-1.125 2.765-2.395 3.615v3.005h3.875c2.265-2.085 3.565-5.16 3.565-8.83z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.955-1.075 7.94-2.91l-3.875-3.005c-1.075.72-2.45 1.15-4.065 1.15-3.125 0-5.77-2.11-6.715-4.945H1.28v3.1C3.255 21.31 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.285 14.29c-.24-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29v-3.1H1.28A11.986 11.986 0 000 12c0 1.935.465 3.765 1.28 5.39l4.005-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.76 0 3.34.605 4.585 1.795l3.435-3.435C17.95 1.19 15.235 0 12 0 7.31 0 3.255 2.69 1.28 6.61l4.005 3.1c.945-2.835 3.59-4.96 6.715-4.96z"
      />
    </svg>
  );
}

export default function PilgrimReviewsSection() {
  return (
    <section className="bg-[#F6F4EF] py-20 px-4 text-[#111111]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center tracking-tight text-[#111111] mb-12">
          What our pilgrims say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EAE5DA] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[235px]"
            >
              <p className="text-sm text-[#333333] leading-relaxed mb-6">
                {review.quote}
              </p>

              <div>
                <p className="text-[11px] font-medium text-[#777777] pb-3 border-b border-neutral-100">
                  Rated 5 out of 5
                </p>
                <div className="pt-3 flex items-center gap-2 text-xs">
                  <GoogleBadgeIcon />
                  <span className="font-bold text-[#111111]">{review.author},</span>
                  <span className="text-[#666666]">Google review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}