
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PricingPage() {
    return (
        <main className="bg-zinc-950 min-h-screen text-white">
            <Navbar />
            <div className="pt-24 container mx-auto px-4 min-h-[60vh] flex flex-col justify-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-center mb-8">
                    Investment & <span className="text-[#00DC82]">Savings</span>
                </h1>
                <PricingSection />

                <div className="mt-12 text-center bg-zinc-100 p-8 rounded-3xl border border-zinc-200 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-zinc-900">Ready to start saving?</h2>
                    <p className="text-zinc-600 mb-6">Contact us for a detailed quote and installation plan tailored to your needs.</p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#00DC82] text-black font-bold py-3 px-8 rounded-full hover:bg-[#00c574] transition-colors"
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
