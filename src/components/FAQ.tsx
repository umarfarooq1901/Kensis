"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";

const ITEMS = [
    { label: '1. What is the warranty details and duration??', content: 'Total Service Included Warranty for 2 years, magnet generators for 3 years and battery for 5 years.' },
    { label: '2. What is the included service?', content: 'Professional team to check up and tune up every 6 months.' },
    { label: '3. What is the lead time?', content: '90 days after 50% deposit is received.' },
    { label: '4. What is the operation noise level?', content: 'Below 80 dB, under noise pollution regulation.' },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 lg:py-32 bg-zinc-950 border-t border-zinc-900">
            <div className="container mx-auto max-w-4xl px-4">
                <AnimationWrapper className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                </AnimationWrapper>

                <div className="space-y-4">
                    {ITEMS.map((item, index) => (
                        <AnimationWrapper key={index} delay={index * 0.1}>
                            <div
                                className={`
                                    rounded-2xl border transition-all duration-300 overflow-hidden
                                    ${openIndex === index
                                        ? "bg-zinc-900 border-[#00DC82]/50 shadow-[0_0_20px_rgba(0,220,130,0.1)]"
                                        : "bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900/50"
                                    }
                                `}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`text-lg lg:text-xl font-semibold transition-colors ${openIndex === index ? 'text-white' : 'text-zinc-400'}`}>
                                        {item.label}
                                    </span>
                                    {openIndex === index ? (
                                        <Minus className="text-[#00DC82] shrink-0 ml-4" />
                                    ) : (
                                        <Plus className="text-zinc-500 shrink-0 ml-4" />
                                    )}
                                </button>

                                <div
                                    className={`
                                        grid transition-all duration-300 ease-in-out
                                        ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                                    `}
                                >
                                    <div className="overflow-hidden">
                                        <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
