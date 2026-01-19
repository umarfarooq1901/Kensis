"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationWrapper from "@/components/AnimationWrapper";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsLoading(false);
        setIsSuccess(true);
        // Reset success state after 5 seconds to allow sending another message
        setTimeout(() => setIsSuccess(false), 5000);
        (e.target as HTMLFormElement).reset();
    }

    return (
        <main className="bg-zinc-950 min-h-screen text-white overflow-hidden">
            <Navbar />
            <div className="pt-32 container mx-auto px-4 pb-20 relative">
                {/* Background decorative element */}
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <AnimationWrapper>
                        <h1 className="text-4xl lg:text-7xl font-bold text-center mb-6 tracking-tight">
                            Get in <span className="text-[#00DC82]">Touch</span>
                        </h1>
                        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16 text-lg">
                            Have questions about our technology or investment opportunities?
                            We're here to help you power the future.
                        </p>
                    </AnimationWrapper>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        <AnimationWrapper direction="right" delay={0.2} className="space-y-8">
                            <div className="bg-zinc-900/50 p-10 rounded-[2rem] border border-zinc-800/50 backdrop-blur-xl hover:border-[#00DC82]/30 transition-colors duration-500">
                                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                                <div className="space-y-8 text-zinc-300">
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-3 bg-zinc-800 rounded-2xl group-hover:bg-[#00DC82]/20 group-hover:text-[#00DC82] transition-colors">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <strong className="text-white block mb-1 text-lg">Email</strong>
                                            <a href="mailto:info@kenesisone.com" className="hover:text-[#00DC82] transition-colors">info@kenesisone.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-3 bg-zinc-800 rounded-2xl group-hover:bg-[#00DC82]/20 group-hover:text-[#00DC82] transition-colors">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <strong className="text-white block mb-1 text-lg">Phone</strong>
                                            <a href="tel:+66123456789" className="hover:text-[#00DC82] transition-colors">+66 123 456 789</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-3 bg-zinc-800 rounded-2xl group-hover:bg-[#00DC82]/20 group-hover:text-[#00DC82] transition-colors">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <strong className="text-white block mb-1 text-lg">Office</strong>
                                            <span>
                                                123 Green Energy Way,<br />
                                                Bangkok, Thailand
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper direction="left" delay={0.4}>
                            <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/10 p-2 md:p-0 rounded-3xl">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2 pl-2">Name</label>
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#00DC82] focus:ring-1 focus:ring-[#00DC82] transition-all"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2 pl-2">Email</label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#00DC82] focus:ring-1 focus:ring-[#00DC82] transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2 pl-2">Message</label>
                                    <textarea
                                        required
                                        id="message"
                                        rows={5}
                                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#00DC82] focus:ring-1 focus:ring-[#00DC82] transition-all resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    disabled={isLoading || isSuccess}
                                    type="submit"
                                    className={`
                                        w-full font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2
                                        ${isSuccess ? "bg-green-500 text-black hover:bg-green-400" : "bg-[#00DC82] text-black hover:bg-[#00c574] hover:shadow-[0_0_20px_rgba(0,220,130,0.4)]"}
                                        ${isLoading ? "opacity-80 cursor-wait" : ""}
                                    `}
                                >
                                    {isLoading ? (
                                        <> <Loader2 className="animate-spin" /> Sending... </>
                                    ) : isSuccess ? (
                                        "Message Sent Successfully!"
                                    ) : (
                                        <> Send Message <Send size={18} /> </>
                                    )}
                                </button>
                            </form>
                        </AnimationWrapper>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
