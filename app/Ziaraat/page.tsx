import ZiaraatHeroSection from "../components/ziaraat/ZiaraatHeroSection";
import ZiaraatToursSection from "../components/ziaraat/ZiaraatToursSection";
import HolyDestinationsSection from "../components/ziaraat/HolyDestinationsSection";
import WhyTravelWithUsZiaraat from "../components/ziaraat/WhyTravelWithUsZiaraat";
import Footer from "../components/Footer";

export default function ZiaraatPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-hidden bg-white">
      <ZiaraatHeroSection />
      <ZiaraatToursSection />
      <HolyDestinationsSection />
      <WhyTravelWithUsZiaraat />
      <Footer />
    </main>
  );
}