
import Navbar from "@/components/Navbar";
import PowerSection from "@/components/PowerSection";
import AboutSection from "@/components/AboutSection";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="bg-zinc-950 min-h-screen text-white">
            <Navbar />
            <div className="pt-20"> {/* Add padding top for fixed navbar */}
                <PowerSection />
                <AboutSection />
                <Team />
            </div>
            <Footer />
        </main>
    );
}
