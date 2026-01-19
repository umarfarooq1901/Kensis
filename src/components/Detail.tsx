
export default function Detail() {
    return (
        <>
            <div className="flex flex-col lg:flex-row p-4 items-center justify-center bg-gradient-to-r from-neutral-900 to-zinc-950">
                <div className="flex flex-col lg:flex-row text-center lg:max-w-7xl items-center">
                    <div className="w-2/6">
                        <img
                            className="size-full mx-auto my-2 lg:my-8"
                            src="/imgs/logos/logo-notext.png"
                            alt="Logo"
                        />
                    </div>
                    <div className="w-6/6 lg:w-4/6 lg:px-8">
                        <h2 className="test-glow lg:py-8 text-white font-bold text-3xl lg:text-7xl">
                            Power That Lasts
                        </h2>
                        <p className="text-zinc-200 text-xl text-center">
                            Meet KENESIS Mark 1, a new cutting-edge clean energy technology
                            that will revolutionize the way renewable energy is perceived. With
                            our proprietary magnetic generator powered system, users can expect
                            100kW electricity output for 24 hours,7 days a week, independent of
                            sunlight, wind or water. From the outside it might look like magic
                            but inside packs a meticulously designed system with efficiency
                            level that nears perpetual energy generation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="section bg-zinc-950 py-12 lg:py-24" id="about">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur hover:bg-zinc-900 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-[#00DC82]">
                                Psuedo-Perpetual
                                <br />
                                Magnetic Generator
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Inspired by this natural force, we have developed the Magnetic
                                Power Generator, a revolutionary technology that converts
                                magnetic energy into clean, reliable electricity. Unlike solar or
                                wind power, which depend on weather conditions, our generator
                                harnesses a constant, omnipresent force, ensuring a stable and
                                sustainable energy supply.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur hover:bg-zinc-900 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-[#00DC82]">
                                Mobile, Versatile,
                                <br />
                                Weather Resistant
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Our solution requires the least set up; only a short
                                commissioning process and testing at the site. Installation is
                                non-permanent, relocation is easy and takes up much less physical
                                space than any other solutions.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur hover:bg-zinc-900 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-[#00DC82]">
                                24/7 Clean Energy
                                <br />
                                Generation
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                With our proprietary magnetic generator powered system, users can
                                expect 100kW electricity output for 24 hours, 7 days a week,
                                independent of sunlight, wind or water.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
