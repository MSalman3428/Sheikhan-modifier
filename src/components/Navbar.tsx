"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gauge, Sliders, Shield, Wrench } from "lucide-react";

const NAV_ITEMS = [
  { name: "Showroom", href: "/showroom", icon: Gauge },
  { name: "Configurator", href: "/configurator", icon: Sliders },
  { name: "Engineering", href: "/engineering", icon: Shield },
  { name: "Commission", href: "/commission", icon: Wrench },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 bg-[#08090b]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Unique Logo Typography */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-mono font-black text-xl sm:text-2xl tracking-tighter text-white uppercase group-hover:text-[var(--theme-accent)] transition-colors">
            SH<span className="text-[var(--theme-accent)]">E</span>IKHAN<span className="text-[var(--theme-accent)]">.</span>MOD
          </span>
        </Link>

        {/* Responsive Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-all duration-300 py-2 border-b-2 ${
                  isActive
                    ? "text-[var(--theme-accent)] border-[var(--theme-accent)]"
                    : "text-gray-400 hover:text-white border-transparent"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Dynamic Action Button */}
        <Link
          href="/configurator"
          className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider bg-[var(--theme-accent)] text-white font-extrabold hover:scale-105 transition-all shadow-lg shadow-[var(--theme-glow)]"
        >
          Build Spec
        </Link>
      </div>
    </header>
  );
}