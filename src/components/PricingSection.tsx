
export default function PricingSection() {
    return (
        <div className="section bg-zinc-950 py-16" id="pricing">
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
    );
}
