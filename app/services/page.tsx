import Navbar from "../components/Navbar";
import ServiceHero from "../components/ServiceHero";
import ServiceCategoryNav from "../components/ServiceCategoryNav";
import ServiceList from "../components/ServiceList";
import OurWork from "../components/OurWork";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <ServiceHero />
            <ServiceCategoryNav />
            <ServiceList />
            <OurWork />
            <BookingForm />
            <Footer />
        </main>
    );
}
