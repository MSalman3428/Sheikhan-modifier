"use client";

import Link from "next/link";
import { Flame, AlertTriangle, ChevronRight, RotateCcw } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#08090b] px-6 py-16">
      {/* Background Video Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <video
          src="/assets/videos/exhaust-backfire.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090b] via-transparent to-[#08090b]" />
      </div>

      <div className="relative z-10 max-w-xl w-full glass-panel p-8 sm:p-12 rounded-3xl text-center space-y-8 border border-[var(--theme-accent)]/30 shadow-2xl">
        
        {/* Warning Badge */}
        <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500 mx-auto shadow-lg shadow-amber-500/20 animate-bounce">
          <AlertTriangle className="w-8 h-8" />
        </div>

        {/* Error Code & Punchline */}
        <div className="space-y-3">
          <span className="font-mono text-xs text-amber-500 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/30 inline-block">
            ERROR 404: TRACTION LOST
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight">
            You Took a Wrong Turn Off the Track
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed max-w-md mx-auto">
            Looks like you drove right off the dyno map. The page you are looking for either blew a head gasket or was sent back to the fabrication shop.
          </p>
        </div>

        {/* Telemetry Box */}
        <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10 font-mono text-xs text-gray-300 text-left">
          <div><span className="text-gray-500 block text-[10px]">DIAGNOSIS:</span> Missing File</div>
          <div><span className="text-gray-500 block text-[10px]">RECOMMENDATION:</span> Turn Around</div>
          <div><span className="text-gray-500 block text-[10px]">DRIVER STATUS:</span> Confused</div>
          <div><span className="text-gray-500 block text-[10px]">HORSEPOWER:</span> 0 (Stalled)</div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-mono uppercase tracking-widest bg-[var(--theme-accent)] text-white font-extrabold shadow-xl shadow-[var(--theme-glow)] hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" /> Return to Garage
          </Link>
          <Link
            href="/showroom"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-mono uppercase tracking-widest bg-white/5 text-gray-300 hover:text-white border border-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
          >
            Explore Showroom <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}