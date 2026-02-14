import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import TestimonialSlider from "@/components/TestimonialSlider";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppModal from "@/components/WhatsAppModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <TestimonialSlider />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppModal />
    </>
  );
}
