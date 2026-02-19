import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesPreview from "./components/ServicesPreview";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <Booking />
      <Footer />
    </main>
  );
}