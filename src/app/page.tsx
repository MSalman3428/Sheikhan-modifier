"use client";

import Image from "next/image";
import Link from "next/link";
import ThreeCanvas from "@/components/ThreeCanvas";
import { Gauge, Shield, Award } from "lucide-react";
import { useTheme, FLEET_VEHICLES } from "@/context/ThemeContext";

export default function Home() {
  const { selectedIndex, setSelectedIndex, currentCar } = useTheme();

  return (
    <div className="relative overflow-hidden pb-24">
      {/* Background Ambient Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <video
          src="/assets/videos/garage-smoke.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090b] via-transparent to-[#08090b]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 relative z-10 space-y-16">
        
        {/* HERO SECTION */}
        <div key={selectedIndex} className="space-y-8 animate-fade-in">
          
          <div className="text-center space-y-3 max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-5xl font-display font-extrabold uppercase tracking-tight leading-tight text-white">
              Elite Muscle Cars & <span className="text-[var(--theme-accent)] bg-white/10 px-2 py-0.5 rounded-xl">Custom Service</span> In Your City
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 font-sans max-w-xl mx-auto">
              Engineered with absolute mechanical mastery. Hand-fabricated structural body panels paired with modern supercharged powerplants.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* LEFT SIDE */}
            <div className="lg:col-span-3 flex flex-col space-y-4 order-2 lg:order-1">
              <div className="flex flex-col gap-2.5">
                <Link
                  href="/configurator"
                  className="w-full px-5 py-3.5 rounded-xl text-center text-xs font-mono uppercase tracking-widest bg-[var(--theme-accent)] text-white font-extrabold hover:scale-105 transition-all shadow-xl shadow-[var(--theme-glow)]"
                >
                  Order Now
                </Link>
                <Link
                  href="/showroom"
                  className="w-full px-5 py-3.5 rounded-xl text-center text-xs font-mono uppercase tracking-widest glass-panel text-white hover:border-[var(--theme-accent)] transition-colors"
                >
                  View More
                </Link>
              </div>

              <div className="glass-panel p-4 rounded-xl space-y-3 font-mono border border-white/10 shadow-lg">
                <span className="block text-[10px] text-gray-400 uppercase tracking-widest border-b border-white/10 pb-1.5">
                  Performance Specs
                </span>
                <div className="space-y-2.5">
                  <div>
                    <span className="block text-gray-400 text-[10px]">0-60 MPH</span>
                    <span className="text-sm font-bold text-white">{currentCar["0_60"]}</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-[10px]">OUTPUT</span>
                    <span className="text-sm font-bold text-white">{currentCar.hp}</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-[10px]">TORQUE</span>
                    <span className="text-sm font-bold text-[var(--theme-accent)]">{currentCar.torque}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER CAR STAGE */}
            <div className="lg:col-span-6 relative w-full flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px] order-1 lg:order-2">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <ThreeCanvas accentColor={currentCar.accentColor} />
              </div>

              <div className="relative w-full max-w-2xl h-[320px] sm:h-[420px] flex items-center justify-center z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--theme-accent)]/30 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-700" />
                <Image
                  src={currentCar.asset}
                  alt={currentCar.name}
                  width={1000}
                  height={580}
                  priority
                  className="object-contain car-3d-shadow animate-float max-h-[380px] sm:max-h-[460px] transition-all duration-700 relative z-10 scale-110 sm:scale-125"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-3 flex flex-col space-y-4 text-center lg:text-left order-3">
              <div className="glass-panel p-5 rounded-xl space-y-3 border border-white/10 shadow-lg">
                <span className="font-mono text-[10px] uppercase tracking-widest bg-[var(--theme-accent)]/20 px-3 py-1 rounded-full border border-[var(--theme-accent)]/40 text-white inline-block shadow-sm shadow-[var(--theme-glow)]">
                  {currentCar.tagline}
                </span>

                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">Active Build Model</span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-wider">
                    {currentCar.name}
                  </h3>
                </div>

                <div className="space-y-0.5 pt-2 border-t border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">Powerplant</span>
                  <span className="text-xs sm:text-sm font-mono text-[var(--theme-accent)] font-semibold block">
                    {currentCar.engine}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* FLEET SELECTOR PILLS */}
          <div className="w-full pt-2 relative z-20">
            <p className="text-center font-mono text-xs uppercase tracking-widest text-gray-400 mb-2.5">
              Select Fleet Edition (Changes Entire Website Theme)
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 max-h-36 overflow-y-auto">
              {FLEET_VEHICLES.map((car, idx) => (
                <button
                  key={car.name}
                  onClick={() => setSelectedIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-mono uppercase transition-all duration-300 border ${
                    selectedIndex === idx
                      ? "bg-[var(--theme-accent)] text-white font-bold border-[var(--theme-accent)] scale-105 shadow-md shadow-[var(--theme-glow)]"
                      : "glass-panel text-gray-400 hover:text-white border-white/10"
                  }`}
                >
                  {car.category} {idx + 1}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* PILLARS OF EXCELLENCE */}
        <div className="space-y-10 pt-12 border-t border-[var(--theme-accent)]/30">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono text-xs text-[var(--theme-accent)] uppercase tracking-widest">
              Master Craftsmanship
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
              The Engineering Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl space-y-3 group hover:border-[var(--theme-accent)] transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--theme-accent)]/15 border border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Reinforced Chassis</h3>
              <p className="text-xs text-gray-400 font-mono leading-relaxed">
                Full subframe connectors and integrated roll cages engineered to handle massive torque output without chassis flex.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl space-y-3 group hover:border-[var(--theme-accent)] transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--theme-accent)]/15 border border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)]">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Dyno-Tuned Powerplants</h3>
              <p className="text-xs text-gray-400 font-mono leading-relaxed">
                Supercharged HEMI and twin-turbo blocks custom-calibrated for optimal air-fuel ratios and relentless power delivery.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl space-y-3 group hover:border-[var(--theme-accent)] transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--theme-accent)]/15 border border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Bespoke Aesthetics</h3>
              <p className="text-xs text-gray-400 font-mono leading-relaxed">
                Hand-sprayed multi-stage tactical paint finishes paired with carbon fiber aerodynamic components and custom interior suites.
              </p>
            </div>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-[var(--theme-accent)]/40 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--theme-accent)]/15 via-transparent to-[var(--theme-accent)]/15 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <span className="font-mono text-xs text-[var(--theme-accent)] uppercase tracking-widest bg-[var(--theme-accent)]/15 px-3.5 py-1 rounded-full border border-[var(--theme-accent)]/40">
              Limited Allocation
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white uppercase tracking-tight">
              Ready to Commission Your Spec?
            </h2>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/commission"
                className="px-7 py-3.5 rounded-xl text-xs font-mono uppercase tracking-widest bg-[var(--theme-accent)] text-white font-extrabold hover:scale-105 transition-all shadow-xl shadow-[var(--theme-glow)]"
              >
                Start Commission
              </Link>
              <Link
                href="/engineering"
                className="px-7 py-3.5 rounded-xl text-xs font-mono uppercase tracking-widest glass-panel text-white hover:border-[var(--theme-accent)] transition-colors"
              >
                View Engineering Specs
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}