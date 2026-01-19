import AnimationWrapper from "./AnimationWrapper";
import { Zap, ShieldCheck, RefreshCcw } from "lucide-react";

const FEATURES = [
    {
        title: "Psuedo-Perpetual Magnetic Generator",
        icon: <Zap className="w-8 h-8 text-[#00DC82]" />,
        description:
            "Inspired by this natural force, we have developed the Magnetic Power Generator, a revolutionary technology that converts magnetic energy into clean, reliable electricity. Unlike solar or wind power, which depend on weather conditions, our generator harnesses a constant, omnipresent force, ensuring a stable and sustainable energy supply.",
    },
    {
        title: "Mobile, Versatile, Weather Resistant",
        icon: <RefreshCcw className="w-8 h-8 text-[#00DC82]" />,
        description:
            "Our solution requires the least set up; only a short commissioning process and testing at the site. Installation is non-permanent, relocation is easy and takes up much less physical space than any other solutions.",
    },
    {
        title: "24/7 Clean Energy Generation",
        icon: <ShieldCheck className="w-8 h-8 text-[#00DC82]" />,
        description:
            "With our proprietary magnetic generator powered system, users can expect 100kW electricity output for 24 hours, 7 days a week, independent of sunlight, wind or water.",
    },
];

export default function AboutSection() {
    return (
        <section className="bg-zinc-950 py-16 lg:py-32 relative" id="about">
            {/* Background blur spot */}
            <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#00DC82]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12">
                <AnimationWrapper className="mb-16 text-center lg:text-left">
                    <span className="text-[#00DC82] text-sm font-bold tracking-widest uppercase mb-2 block">Why Kenesis?</span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white">Innovation meets <br /> Sustainability.</h2>
                </AnimationWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => (
                        <AnimationWrapper key={index} delay={index * 0.15}>
                            <div className="h-full p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/80 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00DC82]/5">
                                <div className="mb-6 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 w-fit group-hover:border-[#00DC82]/50 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00DC82] transition-colors leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
