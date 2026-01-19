import AnimationWrapper from "./AnimationWrapper";

const TEAM_MEMBERS = [
    { name: "Peeraphon Intuphuti", role: "Chief Executive Officer", img: "/imgs/Team/Peeraphon.jpg" },
    { name: "Teetan Chuttanapattaawee", role: "Chief Technology Officer", img: "/imgs/Team/Teetan.jpg" },
    { name: "York Sookby", role: "Investor Relations Director", img: "/imgs/Team/york.jpg" },
    { name: "Chaiyapat Chuenglertsiri", role: "Business Development Director", img: "/imgs/Team/Chayaphat.jpg" },
];

export default function Team() {
    return (
        <section className="py-20 lg:py-32 relative overflow-hidden" id="team">
            <div className="container mx-auto px-4 lg:px-8">
                <AnimationWrapper>
                    <h2 className="text-4xl lg:text-5xl text-white font-bold text-center mb-16 tracking-tight">
                        Meet the <span className="text-[#00DC82]">Team</span>
                    </h2>
                </AnimationWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <AnimationWrapper key={member.name} delay={index * 0.1} direction="up">
                            <div className="group relative bg-zinc-900/40 border border-white/5 rounded-3xl p-4 overflow-hidden hover:bg-zinc-900/80 transition-all duration-500 hover:-translate-y-2">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="text-center space-y-2 pb-4">
                                    <h3 className="text-white text-lg font-bold leading-tight group-hover:text-[#00DC82] transition-colors">{member.name}</h3>
                                    <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">{member.role}</p>
                                </div>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}

