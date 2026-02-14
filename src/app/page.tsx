import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductCarousel from "@/components/ProductCarousel";
import StatsSection from "@/components/StatsSection";
import StorySection from "@/components/StorySection";
import Gallery from "@/components/Gallery";
import TestimonialSlider from "@/components/TestimonialSlider";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppModal from "@/components/WhatsAppModal";
import FloatingCart from "@/components/FloatingCart";


export default function Home() {
  return (
    <div className="bg-abstract min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Marquee />
        <ProductCarousel />
        <StatsSection />
        <StorySection />
        <Gallery />
        <TestimonialSlider />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppModal />
      <FloatingCart />

    </div>
  );
}
