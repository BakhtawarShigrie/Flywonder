import VisaHeroSlider from "../components/visa/VisaHeroSlider";
import VisaCountriesSection from "../components/visa/VisaCountriesSection";
import VisaProcessSection from "../components/visa/VisaProcessSection";
import Footer from "../components/Footer";

export default function VisaServicesPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-hidden bg-slate-50">
      
      {/* 1. Hero Slider Section (Looping, Centered, Right-to-Left Sliding) */}
      <VisaHeroSlider />
      <VisaCountriesSection />
      <VisaProcessSection />
      {/* Mazeed Visa ke sections yahan aayenge */}
      
      <Footer />
    </main>
  );
}