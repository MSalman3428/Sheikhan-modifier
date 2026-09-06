"use client";

import { useEffect, useState } from "react";
import { Gauge, Flame, Wrench } from "lucide-react";

const LOADING_QUips = [
  "Bribing dyno technicians with extra caffeine...",
  "Calibrating nitrous pressure and tire PSI...",
  "Checking for oil leaks that are 'just character'...",
  "Polishing carbon fiber splitters to maximum gloss...",
  "Convincing the twin-turbos to behave responsibly...",
  "Torque-wrenching wheel lugs to absolute perfection...",
];

export default function Loading() {
  const [quipIndex, setQuipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuipIndex((prev) => (prev + 1) % LOADING_QUips.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#08090b] px-6">
      {/* Background Video Atmosphere */}
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

      <div className="relative z-10 max-w-md w-full glass-panel p-8 sm:p-12 rounded-3xl text-center space-y-8 border border-[var(--theme-accent)]/30 shadow-2xl">
        
        {/* Animated Icon Ring */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[var(--theme-accent)]/20 border-t-[var(--theme-accent)] animate-spin" />
          <div className="absolute inset-3 rounded-full border border-dashed border-white/20 animate-spin-reverse" />
          <div className="w-12 h-12 rounded-xl bg-[var(--theme-accent)]/20 border border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)] shadow-lg shadow-[var(--theme-glow)] animate-pulse">
            <Gauge className="w-6 h-6" />
          </div>
        </div>

        {/* Title & Rotating Joke */}
        <div className="space-y-3">
          <span className="font-mono text-[10px] text-[var(--theme-accent)] uppercase tracking-widest bg-[var(--theme-accent)]/10 px-3 py-1 rounded-full border border-[var(--theme-accent)]/30 inline-block">
            SYSTEM DIAGNOSTICS ACTIVE
          </span>
          <h2 className="text-2xl font-display font-extrabold text-white uppercase tracking-tight">
            Revving Turbos...
          </h2>
          <p className="text-xs text-gray-400 font-mono min-h-[36px] flex items-center justify-center transition-opacity duration-500">
            {LOADING_QUips[quipIndex]}
          </p>
        </div>

        {/* Progress Bar Simulation */}
        <div className="space-y-2">
          <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden border border-white/10">
            <div className="bg-[var(--theme-accent)] h-full w-full animate-indeterminate rounded-full shadow-md shadow-[var(--theme-glow)]" />
          </div>
          <div className="flex justify-between font-mono text-[10px] text-gray-500 uppercase">
            <span>BOOST: 22 PSI</span>
            <span>RPM: 8,500</span>
          </div>
        </div>

      </div>
    </div>
  );
}