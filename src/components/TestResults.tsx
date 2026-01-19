import AnimationWrapper from "./AnimationWrapper";

const RESULTS = [
    {
        img: "/imgs/Test result/test1.jpg",
        text: "Load Bank test by 3rd Party company “Multiphase”."
    },
    {
        img: "/imgs/Test result/test2.jpg",
        text: "Connecting our generator to the load bank to test the output at 95% maximum capacity."
    },
    {
        img: "/imgs/Test result/test3.jpg",
        text: "Results show output at expected level with normal loss through resistance in the wiring."
    }
];

export default function TestResults() {
    return (
        <section className="bg-zinc-950 py-16 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
                <AnimationWrapper className="text-center mb-16">
                    <h2 className="text-4xl font-bold lg:text-5xl text-white mb-4">
                        Official <span className="text-white box-decoration-clone bg-gradient-to-r from-[#00DC82] to-[#009E5E] text-transparent bg-clip-text">Test Results</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        Proven performance verified by independent third-party testing.
                    </p>
                </AnimationWrapper>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {RESULTS.map((item, index) => (
                        <AnimationWrapper key={index} delay={index * 0.2} direction="up">
                            <div className="group space-y-4">
                                <div className="aspect-square text-left rounded-3xl overflow-hidden border border-zinc-800 relative bg-zinc-900">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        src={item.img}
                                        alt={`Test Result ${index + 1}`}
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                                        <p className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            Verified Result
                                        </p>
                                    </div>
                                </div>
                                <p className="text-lg text-zinc-300 group-hover:text-[#00DC82] transition-colors duration-300">
                                    {item.text}
                                </p>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
