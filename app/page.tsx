import HeroSection from "./components/home/HeroSection";
import VisaSection from "./components/home/VisaSection";
import UmrahSection from "./components/home/UmrahSection";
import TourSection from "./components/home/TourSection";
import ZiyaratSection from "./components/home/ZiyaratSection";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials";
import FaqSection from "./components/home/FaqSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-hidden bg-slate-50">
      <HeroSection />
      <VisaSection />
      <UmrahSection />
      <TourSection />
      <ZiyaratSection />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <Footer />
    </main>
  );
}