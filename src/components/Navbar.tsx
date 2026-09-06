"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gauge, Sliders, Shield, Wrench, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Showroom", href: "/showroom", icon: Gauge },
  { name: "Configurator", href: "/configurator", icon: Sliders },
  { name: "Engineering", href: "/engineering", icon: Shield },
  { name: "Commission", href: "/commission", icon: Wrench },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 bg-[#08090b]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Unique Logo Typography */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-mono font-black text-lg sm:text-2xl tracking-tighter text-white uppercase group-hover:text-[var(--theme-accent)] transition-colors">
            SH<span className="text-[var(--theme-accent)]">E</span>IKHAN<span className="text-[var(--theme-accent)]">.</span>MOD
          </span>
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* Desktop Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/configurator"
            className="hidden sm:inline-flex items-center justify-center px-4 lg:px-6 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider bg-[var(--theme-accent)] text-white font-extrabold hover:scale-105 transition-all shadow-lg shadow-[var(--theme-glow)]"
          >
            Build Spec
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl glass-panel text-white border border-white/10 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5 text-[var(--theme-accent)]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-6 py-6 space-y-4 animate-fade-in bg-[#08090b]/95">
          <nav className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 text-xs font-mono uppercase tracking-widest px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-[var(--theme-accent)]/20 text-[var(--theme-accent)] border border-[var(--theme-accent)]/40 font-bold"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <Link
              href="/configurator"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-wider bg-[var(--theme-accent)] text-white font-extrabold shadow-lg shadow-[var(--theme-glow)]"
            >
              Build Spec
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}