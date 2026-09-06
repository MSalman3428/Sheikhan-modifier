"use client";

import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import { Shield, Gauge, Cpu, Wrench, Zap, Flame, Activity } from "lucide-react";

export default function EngineeringPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      {/* Background Engine Idle Video Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <video
          src="/assets/videos/engine-idle.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090b] via-transparent to-[#08090b]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs text-[var(--theme-accent)] uppercase tracking-widest bg-[var(--theme-accent)]/10 px-4 py-1.5 rounded-full border border-[var(--theme-accent)]/30 inline-block shadow-sm shadow-[var(--theme-glow)]">
            Mechanical Specifications &amp; Blueprint
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white uppercase tracking-tight">
            Precision Engineering
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-sans max-w-xl mx-auto">
            Every vehicle undergoes complete chassis reinforcement, custom roll-cage fabrication, and rigorous dyno-tuned power delivery testing under extreme simulated workloads.
          </p>
        </div>

        {/* Technical Modules Grid with TiltCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Module 1: Powertrain */}
          <TiltCard>
            <div className="glass-panel p-8 rounded-3xl space-y-4 border border-white/10 h-full flex flex-col justify-between group hover:border-[var(--theme-accent)] transition-all">
              <div>
                <div className="relative h-60 rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-4">
                  <Image
                    src="/assets/specs/boss429-engine-jukebox.png"
                    alt="Engine Spec"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 font-mono text-[10px] text-[var(--theme-accent)] uppercase">
                    POWERTRAIN ARCHITECTURE
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Boss 429 V8 Stroker</h3>
                <p className="text-xs text-gray-400 font-mono leading-relaxed mt-2">
                  Fully rebuilt forged internals, custom aluminum cylinder heads, and precision electronic fuel mapping delivering up to 950 horsepower reliably under extreme track conditions.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-gray-500">BOOST: 22 PSI</span>
                <span className="text-[var(--theme-accent)] font-bold">FORGED BILLET SPEC</span>
              </div>
            </div>
          </TiltCard>

          {/* Module 2: Driver Interface */}
          <TiltCard>
            <div className="glass-panel p-8 rounded-3xl space-y-4 border border-white/10 h-full flex flex-col justify-between group hover:border-[var(--theme-accent)] transition-all">
              <div>
                <div className="relative h-60 rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-4">
                  <Image
                    src="/assets/specs/mustang-interior.jpeg"
                    alt="Interior Spec"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 font-mono text-[10px] text-[var(--theme-accent)] uppercase">
                    DRIVER INTERFACE
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Tactical Cockpit Suite</h3>
                <p className="text-xs text-gray-400 font-mono leading-relaxed mt-2">
                  Hand-stitched leather upholstery, custom digital telemetry gauges, integrated roll cage, and minimalist racing-spec switches built for raw driver connection.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-gray-500">HARNESS: 4-POINT FIA</span>
                <span className="text-[var(--theme-accent)] font-bold">BESPOKE ALCANTARA</span>
              </div>
            </div>
          </TiltCard>

          {/* Module 3: Exhaust & Backfire Acoustic Tuning */}
          <TiltCard>
            <div className="glass-panel p-8 rounded-3xl space-y-4 border border-white/10 h-full flex flex-col justify-between group hover:border-[var(--theme-accent)] transition-all">
              <div>
                <div className="relative h-60 rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-4">
                  <video
                    src="/assets/videos/exhaust-backfire.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 font-mono text-[10px] text-[var(--theme-accent)] uppercase">
                    ACOUSTIC EXHAUST
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Titanium Exhaust &amp; Tuning</h3>
                <p className="text-xs text-gray-400 font-mono leading-relaxed mt-2">
                  Custom mandrel-bent stainless steel headers paired with active valve mufflers, engineered to produce a aggressive deep-idle tone and controlled overrun crackles.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-gray-500">FLOW: 3.5-INCH QUAD</span>
                <span className="text-[var(--theme-accent)] font-bold">ACTIVE VALVED</span>
              </div>
            </div>
          </TiltCard>

          {/* Module 4: Subframe Reinforcement */}
          <TiltCard>
            <div className="glass-panel p-8 rounded-3xl space-y-4 border border-white/10 h-full flex flex-col justify-between group hover:border-[var(--theme-accent)] transition-all">
              <div>
                <div className="relative h-60 rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-4 flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--theme-accent)]/10 to-transparent" />
                  <div className="w-16 h-16 rounded-2xl bg-[var(--theme-accent)]/20 border border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)] relative z-10">
                    <Shield className="w-8 h-8" />
                  </div>
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 font-mono text-[10px] text-[var(--theme-accent)] uppercase z-10">
                    CHASSIS INTEGRITY
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Subframe Reinforcement</h3>
                <p className="text-xs text-gray-400 font-mono leading-relaxed mt-2">
                  Custom tubular subframe connectors welded directly to rocker channels, preventing torsional chassis flex under hard cornering and massive launch torque.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-gray-500">RIGIDITY</span>
                <span className="text-[var(--theme-accent)] font-bold">+340% VS OEM</span>
              </div>
            </div>
          </TiltCard>

          {/* Module 5: Suspension & Braking */}
          <TiltCard>
            <div className="glass-panel p-8 rounded-3xl space-y-4 border border-white/10 h-full flex flex-col justify-between group hover:border-[var(--theme-accent)] transition-all">
              <div>
                <div className="relative h-60 rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-4 flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--theme-accent)]/10 to-transparent" />
                  <div className="w-16 h-16 rounded-2xl bg-[var(--theme-accent)]/20 border border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)] relative z-10">
                    <Gauge className="w-8 h-8" />
                  </div>
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 font-mono text-[10px] text-[var(--theme-accent)] uppercase z-10">
                    DYNAMICS &amp; STOPPING
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Suspension &amp; Braking</h3>
                <p className="text-xs text-gray-400 font-mono leading-relaxed mt-2">
                  Adjustable coilovers paired with massive multi-piston Brembo disc brakes ensuring stopping force that matches your straight-line acceleration capability.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-gray-500">STOPPING POWER</span>
                <span className="text-[var(--theme-accent)] font-bold">6-PISTON CALIPERS</span>
              </div>
            </div>
          </TiltCard>

          {/* Module 6: Dyno & Telemetry Testing */}
          <TiltCard>
            <div className="glass-panel p-8 rounded-3xl space-y-4 border border-white/10 h-full flex flex-col justify-between group hover:border-[var(--theme-accent)] transition-all">
              <div>
                <div className="relative h-60 rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-4 flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--theme-accent)]/10 to-transparent" />
                  <div className="w-16 h-16 rounded-2xl bg-[var(--theme-accent)]/20 border border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)] relative z-10">
                    <Activity className="w-8 h-8" />
                  </div>
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 font-mono text-[10px] text-[var(--theme-accent)] uppercase z-10">
                    VALIDATION &amp; QA
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Dyno Calibration Suite</h3>
                <p className="text-xs text-gray-400 font-mono leading-relaxed mt-2">
                  Every build undergoes 48 hours of continuous load testing on our in-house dyno to calibrate air-fuel ratios, boost curves, and thermal dissipation thresholds.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-gray-500">LOAD TEST</span>
                <span className="text-[var(--theme-accent)] font-bold">100% CERTIFIED</span>
              </div>
            </div>
          </TiltCard>

        </div>

      </div>
    </div>
  );
}