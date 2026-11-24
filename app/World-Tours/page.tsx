import ToursHeroSlider from "../components/tours/ToursHeroSlider";
import ToursProcessSection from "../components/tours/ToursProcessSection";
import InspiringDestinationsSection from "../components/tours/InspiringDestinationsSection";
import WhyTravelWithUsSection from "../components/tours/WhyTravelWithUsSection";
import ToursCtaSection from "../components/tours/ToursCtaSection";
import Footer from "../components/Footer";

export default function WorldToursPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-hidden bg-[#0f1926]">
      {/* 1. Expanding Pill Hero Slider */}
      <ToursHeroSlider />

      {/* 2. Your Adventure in 3 Simple Steps */}
      <ToursProcessSection />

      {/* 3. Inspiring Destinations (6 Tour Cards) */}
      <InspiringDestinationsSection />

      {/* 4. Why Travel With Fly Wonder Travel & Tours */}
      <WhyTravelWithUsSection />

      {/* 5. Your Next Great Story Begins Here CTA */}
      <ToursCtaSection />

      <Footer />
    </main>
  );
}