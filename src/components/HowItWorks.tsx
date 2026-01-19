import AnimationWrapper from "./AnimationWrapper";

export default function HowItWorks() {
    return (
        <section className="bg-zinc-950 py-12 lg:py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00DC82]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <AnimationWrapper className="space-y-8 text-center">
                    <h2 className="text-3xl font-bold lg:text-6xl text-white tracking-tight">
                        How It <span className="text-[#00DC82]">Works</span>
                    </h2>

                    <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm max-w-7xl mx-auto shadow-2xl">
                        <div className="p-4 lg:p-8">
                            <img
                                className="w-full h-auto rounded-xl border border-white/5"
                                src="/imgs/specificaiton/how it work.jpg"
                                alt="How Kenesis Works Diagram"
                            />
                        </div>
                        <div className="p-6 lg:p-10 pt-0 text-left">
                            <p className="text-zinc-200 font-medium max-w-2xl text-xl lg:text-3xl leading-snug">
                                Revolutionary magnetic technology harnessing constant energy forces.
                            </p>
                        </div>
                    </div>
                </AnimationWrapper>
            </div>
        </section>
    );
}
