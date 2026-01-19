import AnimationWrapper from "./AnimationWrapper";

export default function PowerSection() {
    return (
        <section className="relative py-20 lg:py-40 overflow-hidden">
            {/* Background Image logic - utilizing public asset if suitable, or gradient fallback */}
            <div className="absolute inset-0 bg-zinc-950 z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 z-10 opacity-90" />

            <div className="container mx-auto px-6 lg:px-12 relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <AnimationWrapper className="w-full lg:w-1/3 flex justify-center" direction="right">
                        <div className="relative w-64 h-64 lg:w-96 lg:h-96">
                            {/* Logo Glow Effect */}
                            <div className="absolute inset-0 bg-[#00DC82] blur-[80px] opacity-20 rounded-full animate-pulse" />
                            <img
                                className="relative w-full h-full object-contain drop-shadow-2xl"
                                src="/imgs/logos/logo-notext.png"
                                alt="Kenesis Emblem"
                            />
                        </div>
                    </AnimationWrapper>

                    <AnimationWrapper className="w-full lg:w-2/3 text-center lg:text-left" direction="left" delay={0.2}>
                        <h2 className="text-4xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                            Power That <span className="text-[#00DC82]">Lasts</span>
                        </h2>
                        <div className="space-y-6 text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            <p>
                                Meet <span className="text-white font-semibold">KENESIS Mark 1</span>, a new cutting-edge clean energy technology
                                that revolutionizes how renewable energy is perceived.
                            </p>
                            <p>
                                From the outside it might look like magic, but inside packs a
                                meticulously designed system with efficiency levels that near
                                perpetual energy generation.
                            </p>
                        </div>
                    </AnimationWrapper>
                </div>
            </div>
        </section>
    );
}
