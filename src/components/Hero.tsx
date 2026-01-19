import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[90vh] lg:min-h-screen bg-zinc-950 overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_40%)] opacity-5 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center px-4 max-w-7xl mx-auto text-center space-y-8">
                <div className="space-y-2">
                    <h1 className="text-white font-bold text-4xl lg:text-7xl tracking-tight">
                        KENESIS Mark 1
                    </h1>
                    <p className="text-zinc-400 text-xl lg:text-2xl font-medium tracking-wide">
                        Power the future.
                    </p>
                </div>

                <div className="relative w-full max-w-4xl flex justify-center py-8">
                    {/* 
                        Ideally use next/image here. 
                        For now, keeping img tag but ensuring responsiveness.
                        Added a subtle drop shadow/glow.
                     */}
                    <img
                        className="w-full h-auto drop-shadow-2xl"
                        src="/imgs/kenesis render/Kenesis Mark .png"
                        alt="Kenesis Mark 1 Device"
                    />
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-black text-xl py-3 px-10 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(0,220,130,0.3)]">
                        BUY NOW
                    </button>
                    <span className="text-zinc-500 text-sm lg:text-lg">
                        Available at <span className="text-white font-semibold">฿7,200,000</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
