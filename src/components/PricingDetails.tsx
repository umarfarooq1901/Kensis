import AnimationWrapper from "./AnimationWrapper";

export default function PricingDetails() {
    return (
        <section className="bg-slate-950 py-20 lg:py-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00DC82]/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <AnimationWrapper className="lg:w-2/3 space-y-6 text-center lg:text-left">
                        <p className="text-2xl lg:text-4xl text-zinc-400 font-bold tracking-widest uppercase">
                            Available At
                        </p>
                        <div className="relative inline-block">
                            {/* Text Glow */}
                            <div className="absolute -inset-4 bg-[#00DC82]/20 blur-2xl rounded-full" />
                            <p className="relative text-5xl lg:text-8xl text-white font-black tracking-tight drop-shadow-[0_0_15px_rgba(0,220,130,0.5)]">
                                ฿ 7,200,000
                            </p>
                        </div>

                        <div className="pt-8 space-y-4">
                            <p className="text-2xl lg:text-4xl text-white font-bold leading-tight">
                                2 Years Service <br />
                                <span className="text-[#00DC82]">Inclusive Guarantee</span>
                            </p>

                            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center lg:justify-start pt-4">
                                <li className="px-6 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-semibold text-sm lg:text-base">
                                    BATTERY 5 YEARS
                                </li>
                                <li className="px-6 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-semibold text-sm lg:text-base">
                                    MAGNETIC GENERATOR 3 YEARS
                                </li>
                            </ul>
                        </div>
                    </AnimationWrapper>

                    <AnimationWrapper className="lg:w-1/3 w-full max-w-sm" direction="left" delay={0.2}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#00DC82] blur-[80px] opacity-30 rounded-full animate-pulse" />
                            <img
                                className="w-full relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                src="/imgs/logos/shield.png"
                                alt="Security Shield"
                            />
                        </div>
                    </AnimationWrapper>
                </div>
            </div>
        </section>
    );
}
