"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => pathname === path;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 py-6`}
        >
            <div
                className={`
                    flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
                    bg-white/5 backdrop-blur-md border border-white/10
                    w-full max-w-[90%] md:w-auto md:min-w-[600px] 
                    ${scrolled ? "bg-black/40 shadow-lg border-white/5" : ""}
                `}
            >
                {/* Logo Area */}
                <Link href="/" className="group flex items-center gap-2 mr-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        className={`transition-colors duration-300 text-white group-hover:text-[var(--color-primary)]`}
                    >
                        {/* SVG Paths kept same */}
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M 6.957031 2.9375 L 2.015625 5.824219 L 2.042969 12 L 2.078125 18.164062 L 6.871094 20.949219 C 9.503906 22.488281 11.773438 23.746094 11.910156 23.746094 C 12.050781 23.761719 14.332031 22.488281 16.992188 20.9375 L 21.808594 18.113281 L 21.808594 5.835938 L 17.433594 3.265625 C 15.023438 1.851562 12.792969 0.542969 12.480469 0.367188 L 11.910156 0.0390625 Z M 15.820312 4.097656 C 17.558594 5.128906 19.273438 6.136719 19.636719 6.351562 L 20.292969 6.730469 L 20.292969 17.207031 L 16.273438 19.5625 C 14.066406 20.863281 12.164062 21.957031 12.0625 22.007812 C 11.9375 22.046875 11.015625 21.578125 9.679688 20.796875 C 8.484375 20.078125 6.820312 19.109375 5.988281 18.617188 C 5.15625 18.136719 4.261719 17.609375 3.996094 17.445312 L 3.53125 17.144531 L 3.53125 6.71875 L 7.726562 4.261719 L 11.910156 1.789062 L 12.289062 2.015625 C 12.503906 2.128906 14.09375 3.0625 15.820312 4.097656 Z M 15.820312 4.097656 "
                            clipRule="evenodd"
                        />
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M 10.589844 3.921875 C 9.265625 4.476562 8.925781 4.753906 8.269531 5.847656 C 6.820312 8.269531 7.132812 10.929688 9.101562 12.882812 L 9.894531 13.675781 L 9.957031 11.785156 L 10.019531 9.882812 L 10.449219 9.339844 C 11.003906 8.632812 11.699219 8.144531 12.554688 7.816406 C 13.171875 7.589844 13.539062 7.5625 15.820312 7.5625 C 17.242188 7.5625 18.402344 7.511719 18.402344 7.460938 C 18.402344 7.398438 18.136719 7.070312 17.8125 6.71875 C 17.117188 5.976562 16.460938 5.710938 15.039062 5.585938 C 13.296875 5.445312 11.558594 6.023438 10.273438 7.199219 L 9.578125 7.839844 L 9.328125 7.550781 C 9.1875 7.386719 9.089844 7.210938 9.074219 7.160156 C 9.074219 7.121094 9.367188 6.820312 9.71875 6.503906 C 10.613281 5.699219 12.175781 4.953125 13.425781 4.753906 L 14.433594 4.574219 L 13.183594 3.996094 C 12.503906 3.667969 11.898438 3.402344 11.863281 3.414062 C 11.824219 3.414062 11.242188 3.644531 10.589844 3.921875 Z M 10.589844 3.921875 "
                            clipRule="evenodd"
                        />
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M 6.152344 6.453125 C 5.078125 7.789062 4.539062 9.011719 4.539062 10.148438 C 4.539062 10.867188 5.46875 12.71875 6.226562 13.5 L 6.792969 14.09375 L 6.480469 14.382812 C 6.175781 14.660156 6.175781 14.660156 5.910156 14.421875 C 5.761719 14.292969 5.421875 13.902344 5.15625 13.574219 L 4.664062 12.957031 L 4.664062 13.964844 C 4.664062 14.519531 4.703125 15.152344 4.738281 15.367188 L 4.828125 15.757812 L 7.664062 15.757812 C 9.464844 15.757812 10.675781 15.707031 10.992188 15.605469 C 11.558594 15.441406 12.53125 14.632812 12.808594 14.09375 C 12.996094 13.726562 12.984375 13.714844 12.339844 12.96875 L 11.683594 12.214844 L 11.269531 12.617188 C 10.914062 12.957031 10.839844 13.121094 10.839844 13.574219 L 10.839844 14.117188 L 10.183594 14.117188 C 9.328125 14.105469 8.632812 13.789062 8.042969 13.132812 C 6.945312 11.925781 6.65625 10.800781 6.707031 7.992188 C 6.730469 6.855469 6.707031 5.925781 6.667969 5.925781 C 6.617188 5.925781 6.390625 6.164062 6.152344 6.453125 Z M 6.152344 6.453125 "
                            clipRule="evenodd"
                        />
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M 13.148438 8.507812 C 12.402344 8.734375 11.558594 9.253906 11.167969 9.71875 C 10.878906 10.058594 10.839844 10.210938 10.839844 11.105469 C 10.839844 11.648438 10.878906 12.101562 10.941406 12.101562 C 10.992188 12.101562 11.457031 11.671875 11.976562 11.144531 L 12.921875 10.183594 L 13.589844 10.246094 C 14.746094 10.363281 15.679688 11.078125 16.335938 12.367188 C 16.867188 13.425781 17.015625 14.28125 17.015625 16.261719 L 17.03125 18.089844 L 17.609375 17.457031 C 18.429688 16.5625 19.058594 15.203125 19.121094 14.144531 C 19.183594 13.347656 19.148438 13.234375 18.667969 12.289062 C 18.390625 11.734375 17.898438 10.980469 17.585938 10.613281 L 16.992188 9.957031 L 17.292969 9.707031 L 17.585938 9.453125 L 18.378906 10.273438 L 19.160156 11.09375 L 19.160156 10.097656 C 19.160156 9.554688 19.121094 8.925781 19.085938 8.710938 L 19.007812 8.320312 L 16.335938 8.332031 C 14.507812 8.332031 13.511719 8.382812 13.148438 8.507812 Z M 13.148438 8.507812 "
                            clipRule="evenodd"
                        />
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M 13.132812 11.257812 C 12.84375 11.558594 12.605469 11.835938 12.605469 11.898438 C 12.605469 11.960938 12.894531 12.328125 13.234375 12.730469 L 13.878906 13.476562 L 13.675781 13.941406 C 13.273438 14.910156 12.542969 15.707031 11.632812 16.160156 L 10.789062 16.574219 L 5.421875 16.652344 L 5.960938 17.28125 C 6.414062 17.8125 6.617188 17.949219 7.3125 18.152344 C 9.71875 18.855469 11.796875 18.414062 13.449219 16.867188 C 14.105469 16.234375 14.128906 16.222656 14.371094 16.449219 C 14.734375 16.789062 14.683594 16.929688 13.980469 17.570312 C 12.871094 18.566406 12 18.96875 10.019531 19.386719 L 9.515625 19.488281 L 10.652344 20.03125 C 11.28125 20.332031 11.875 20.570312 12 20.570312 C 12.113281 20.570312 12.644531 20.382812 13.199219 20.15625 C 14.421875 19.652344 15.113281 18.984375 15.71875 17.699219 C 16.449219 16.148438 16.425781 14.40625 15.628906 12.855469 C 15.367188 12.328125 14.496094 11.320312 14.003906 10.980469 L 13.652344 10.726562 Z M 13.132812 11.257812 "
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="font-bold text-lg tracking-wider text-white">KENESIS</span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className={`text-sm tracking-wide transition-colors duration-200 ${isActive('/') ? 'text-[var(--color-primary)]' : 'text-zinc-300 hover:text-white'}`}
                    >
                        HOME
                    </Link>
                    <Link
                        href="/about"
                        className={`text-sm tracking-wide transition-colors duration-200 ${isActive('/about') ? 'text-[var(--color-primary)]' : 'text-zinc-300 hover:text-white'}`}
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="/pricing"
                        className={`text-sm tracking-wide transition-colors duration-200 ${isActive('/pricing') ? 'text-[var(--color-primary)]' : 'text-zinc-300 hover:text-white'}`}
                    >
                        PRICING
                    </Link>
                    <Link
                        href="/contact"
                        className={`text-sm tracking-wide transition-colors duration-200 ${isActive('/contact') ? 'text-[var(--color-primary)]' : 'text-zinc-300 hover:text-white'}`}
                    >
                        CONTACT
                    </Link>
                </div>

                {/* Right Side / CTA */}
                <div className="flex items-center gap-4 ml-8">
                    <Link href="/contact" className="hidden md:flex bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-[var(--color-primary)] transition-colors duration-300">
                        GET STARTED
                    </Link>
                    {/* Mobile menu button placeholder for future implementation if needed */}
                </div>
            </div>
        </nav>
    );
}
