"use client";

import { useEffect, useState } from "react";
import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function ComingSoonPage() {
    // Target Date for Launch
    const targetDate = new Date("2025-10-20T00:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 text-white px-6 text-center relative overflow-hidden">
            {/* Subtle background effect */}
            {/* <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" /> */}

            {/* 🔹 Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/bg-coming-soon.jpg')" }}
            />

            {/* 🔹 Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Logo */}
            <div className="relative z-10 mb-8">
                <h1 className="text-4xl md:text-5xl font-bold tracking-wide">NeurologicX</h1>
                <p className="text-lg text-blue-200 mt-2">Get your Business To Next Level with A.I. & Automation.</p>
            </div>

            {/* Heading */}
            <h2 className="relative z-10 text-3xl md:text-4xl font-semibold mb-4">
                🚀 We’re Launching Soon!
            </h2>
            <p className="text-blue-200 mb-10 max-w-xl">
                Our team is working hard to bring you something amazing. Stay tuned!
            </p>

            {/* Countdown Timer */}
            <div className="flex gap-6 md:gap-10 mb-12 z-10">
                {Object.entries(timeLeft).map(([label, value]) => (
                    <div
                        key={label}
                        className="flex flex-col items-center justify-center w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm"
                    >
                        <span className="text-3xl font-semibold">{value}</span>
                        <span className="text-sm uppercase text-blue-300">{label}</span>
                    </div>
                ))}
            </div>

            {/* Email Subscription */}
            {/* <div className="relative z-10 flex w-full max-w-md items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                <Mail className="text-white w-5 h-5 mr-3" />
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent text-white placeholder-blue-300 outline-none"
                />
                <button className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-full hover:bg-blue-100 transition">
                    Notify Me
                </button>
            </div> */}

            {/* Social Icons */}
            <div className="flex gap-6 mt-4 z-10">
                {[
                    { icon: Facebook, href: "https://www.facebook.com/nurologicx/" },
                    // { icon: Twitter, href: "https://www." },
                    { icon: Instagram, href: "https://www.instagram.com/neurologicx/" },
                    { icon: Linkedin, href: "https://www.linkedin.com/c/neurologicx/" },
                ].map(({ icon: Icon, href }, i) => (
                    <a
                        key={i}
                        href={href}
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
                    >
                        <Icon className="w-5 h-5 text-white" />
                    </a>
                ))}
            </div>

            {/* Footer */}
            <p className="text-blue-300 text-sm mt-10 relative z-10">
                © {new Date().getFullYear()} NeurologicX. All rights reserved.
            </p>
        </main>
    );
}
