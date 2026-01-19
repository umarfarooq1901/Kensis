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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        <img
                            className="w-full object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-105"
                            src="/imgs/specificaiton/how it work.jpg"
                            alt="How Kenesis Works"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-left">
                            <p className="text-zinc-300 max-w-2xl text-lg lg:text-xl drop-shadow-md">
                                Revolutionary magnetic technology harnessing constant energy forces.
                            </p>
                        </div>
                    </div>
                </AnimationWrapper>
            </div>
        </section>
    );
}
