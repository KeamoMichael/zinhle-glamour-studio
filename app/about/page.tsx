import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutContent from "../components/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Zinhle Glamour Studio",
    description: "Learn about Zinhle Glamour Studio — our story, our values, and the passion that drives every appointment.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <AboutHero />
            <AboutContent />
            <Footer />
        </main>
    );
}
