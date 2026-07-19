import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import WeightLoss from "@/components/WeightLoss";
import ProductCarousel from "@/components/ProductCarousel";
import ScienceNature from "@/components/ScienceNature";
import FAQ from "@/components/FAQ";
import HealthGuide from "@/components/HealthGuide";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProductsGrid />
        <WeightLoss />
        <ProductCarousel />
        <ScienceNature />
        <FAQ />
        <HealthGuide />
      </main>
      <Footer />
    </div>
  );
}
