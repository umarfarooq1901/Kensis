const FOOTER_LINKS = [
    {
        title: "Product",
        links: [
            { label: "Features", href: "#" },
            { label: "Specification", href: "#" },
            { label: "Output rate", href: "#" },
            { label: "Test result", href: "#" },
            { label: "Energy storage", href: "#" },
            { label: "Report & System", href: "#" },
        ],
    },
    {
        title: "Pricing",
        links: [
            { label: "Price & Plan", href: "/pricing" },
            { label: "Maintenance", href: "#" },
            { label: "Certificates", href: "#" },
            { label: "Warranty", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Team", href: "/about#team" },
            { label: "Business Model", href: "#" },
            { label: "Investment", href: "#" },
            { label: "Partners", href: "#" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "FAQ", href: "#" },
            { label: "Contact", href: "/contact" },
            { label: "More Solutions", href: "#" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="relative bg-zinc-950 border-t border-zinc-900">
            {/* Gradient glow effect for "creative" feel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50" />

            <div className="container mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-3">
                            {/* Keep using img for now as requested by user file structure, but ideally next/image */}
                            <img
                                className="h-10 w-auto"
                                src="/imgs/logos/logo kenesis-herizon.png"
                                alt="Kenesis One Logo"
                            />
                            <span className="text-2xl font-bold tracking-wider text-white">KENESIS</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                            Empowering the future with clean, sustainable energy solutions.
                            Advanced technology for a greener planet.
                        </p>
                    </div>

                    {/* Links Interface */}
                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {FOOTER_LINKS.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-white font-semibold mb-4 text-base tracking-tight">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="text-zinc-400 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-xs gap-4">
                    <p>© {new Date().getFullYear()} KENESIS ONE. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
