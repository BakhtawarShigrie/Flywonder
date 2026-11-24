import UmrahHeroSection from "../components/umrah/UmrahHeroSection";
import WhyFlyWonderSection from "../components/umrah/WhyFlyWonderSection";
import UmrahPackagesSection from "../components/umrah/UmrahPackagesSection";
import CustomUmrahBuilderSection from "../components/umrah/CustomUmrahBuilderSection";
import PilgrimReviewsSection from "../components/umrah/PilgrimReviewsSection";
import B2BHotelRatesSection from "../components/umrah/B2BHotelRatesSection";
import UmrahOfficeSection from "../components/umrah/UmrahOfficeSection";
import UmrahFaqSection from "../components/umrah/UmrahFaqSection";
import Footer from "../components/Footer";

export default function UmrahServicePage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-hidden bg-white">
      {/* 1. Umrah Hero Section */}
      <UmrahHeroSection />

      {/* 2. Why Fly Wonder Travel & Tours */}
      <WhyFlyWonderSection />

      {/* 3. Our Umrah Packages and Group Departures */}
      <UmrahPackagesSection />

      {/* 4. A Package For Your Dates (Custom Package Builder) */}
      <CustomUmrahBuilderSection />

      {/* 5. What Our Pilgrims Say */}
      <PilgrimReviewsSection />

      {/* 6. Are You a Travel Agent? Get Our B2B Hotel Rates */}
      <B2BHotelRatesSection />

      {/* 7. Our Office and How to Reach Us */}
      <UmrahOfficeSection />

      {/* 8. Frequently Asked Questions */}
      <UmrahFaqSection />

      <Footer />
    </main>
  );
}