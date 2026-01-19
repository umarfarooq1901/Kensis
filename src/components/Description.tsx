
export default function Description() {
    return (
        <>
            <div className="bg-zinc-950 py-4 space-y-4 test-glow">
                <h2 className="text-center text-3xl font-bold lg:text-5xl">
                    How It Works
                </h2>
                <img
                    className="lg:max-w-7xl mx-auto w-full rounded-md lg:rounded-3xl"
                    src="/imgs/specificaiton/how it work.jpg"
                    alt="How It Works"
                />
            </div>

            <div className="bg-zinc-950 py-12 lg:py-24 space-y-8">
                <h2 className="text-center text-3xl font-bold lg:text-5xl text-white">
                    Technical Specifications
                </h2>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <img
                            className="w-full rounded-3xl border border-zinc-800"
                            src="/imgs/specificaiton/output specification.jpg"
                            alt="Output Spec 1"
                        />
                        <p className="text-center text-zinc-400">
                            Detailed output metrics under standard load.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <img
                            className="w-full rounded-3xl border border-zinc-800"
                            src="/imgs/specificaiton/output specification-2.jpg"
                            alt="Output Spec 2"
                        />
                        <p className="text-center text-zinc-400">
                            Efficiency curves and performance data.
                        </p>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                        <img
                            className="w-full md:w-2/3 mx-auto rounded-3xl border border-zinc-800"
                            src="/imgs/specificaiton/Energy storage.jpg"
                            alt="Energy Storage"
                        />
                        <p className="text-center text-zinc-400">
                            Integrated energy storage solutions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-950 py-4 space-y-4 p-4">
                <h2 className="text-center text-4xl font-bold lg:text-5xl py-4 test-glow ">
                    Official <br /> test results
                </h2>
                <div className="flex flex-col lg:flex-row md:flex-row lg:max-w-7xl mx-auto text-center px-4">
                    <div className="p-2 lg:w-1/3 space-y-4">
                        <img
                            className="lg:max-w-7xl mx-auto w-full h-4/5 rounded-md lg:rounded-3xl aspect-square object-cover"
                            src="/imgs/Test result/test1.jpg"
                            alt="Test 1"
                        />
                        <p className="text-xl">
                            Load Bank test by 3rd Party company “Multiphase”.
                        </p>
                    </div>
                    <div className="p-2 lg:w-1/3 space-y-4">
                        <img
                            className="lg:max-w-7xl mx-auto w-full h-4/5 rounded-md lg:rounded-3xl aspect-square object-cover"
                            src="/imgs/Test result/test2.jpg"
                            alt="Test 2"
                        />
                        <p className="text-xl">
                            Connecting our generator to the load bank to test the output at 95%
                            maximum capacity.
                        </p>
                    </div>
                    <div className="p-2 lg:w-1/3 space-y-4">
                        <img
                            className="lg:max-w-7xl mx-auto w-full h-4/5 rounded-md lg:rounded-3xl aspect-square object-cover"
                            src="/imgs/Test result/test3.jpg"
                            alt="Test 3"
                        />
                        <p className="text-xl">
                            Results show output at expected level with normal loss through
                            resistance in the wiring.
                        </p>
                    </div>
                </div>
            </div>

            <div className="section bg-zinc-950 py-16">
                <div className="lg:max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="lg:w-1/2 space-y-6">
                            <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                                Save up to{" "}
                                <span className="text-[#00DC82]">฿324,000 per month*</span>
                            </h3>
                            <p className="text-lg text-zinc-400 leading-relaxed">
                                At monthly capacity of 72,000 kWh, you can save up to ฿324,000
                                per month. Embrace sustainable energy with our Magnetic Power
                                Generator. Enjoy a 20-30% reduction in energy costs.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            {/* Placeholder for a cost-savings chart or image */}
                            <div className="w-full h-64 bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-zinc-800 flex items-center justify-center">
                                <span className="text-zinc-600 font-mono">
                                    Cost Savings Projection
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section bg-zinc-950 py-16 border-t border-zinc-900">
                <div className="container lg:max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Sustainable Green Energy
                        </h3>
                        <p className="text-zinc-400">
                            Revolutionize your energy use with our proprietary Magnetic Power
                            Generator. This cutting-edge technology provides continuous, clean
                            power, reducing reliance on traditional energy sources and lowering
                            your carbon footprint.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Reports and Analysis System
                        </h3>
                        <p className="text-zinc-400">
                            Our integrated Reports and Analysis System allows users to monitor
                            power output and other vital information in real time. With this
                            system, you can track performance metrics, ensure optimal
                            efficiency, and make data-driven decisions.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
