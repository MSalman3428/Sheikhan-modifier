"use client";

import { useState } from "react";
import TiltCard from "@/components/TiltCard";
import { Shield, Check, ChevronRight, Wrench, Cpu, Award } from "lucide-react";

export default function CommissionPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <video
          src="/assets/videos/garage-smoke.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090b] via-transparent to-[#08090b]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-mono text-xs text-[var(--theme-accent)] uppercase tracking-widest bg-[var(--theme-accent)]/10 px-4 py-1.5 rounded-full border border-[var(--theme-accent)]/30 inline-block shadow-sm shadow-[var(--theme-glow)]">
            Consultation Desk &amp; Commission Gateway
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white uppercase tracking-tight">
            Commission Inquiry
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
            Collaborate directly with our master fabricators and engineers to bring your bespoke restomod or rally-spec vision to life with uncompromising detail.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl space-y-3 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[var(--theme-accent)]/20 border border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)] font-mono text-xs font-bold">
              01
            </div>
            <h3 className="font-display font-bold text-white text-lg">Initial Briefing</h3>
            <p className="text-xs text-gray-400 font-mono leading-relaxed">
              Submit your platform preference, target horsepower output, and aesthetic finish through our secure client gateway.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-3 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[var(--theme-accent)]/20 border border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)] font-mono text-xs font-bold">
              02
            </div>
            <h3 className="font-display font-bold text-white text-lg">Engineering Review</h3>
            <p className="text-xs text-gray-400 font-mono leading-relaxed">
              Our chief powertrain specialist evaluates structural weight distribution, chassis reinforcement, and custom dyno parameters.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-3 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[var(--theme-accent)]/20 border border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)] font-mono text-xs font-bold">
              03
            </div>
            <h3 className="font-display font-bold text-white text-lg">Fabrication &amp; Delivery</h3>
            <p className="text-xs text-gray-400 font-mono leading-relaxed">
              Hand assembly, multi-stage tactical paint application, and rigorous road testing prior to enclosed white-glove transport.
            </p>
          </div>
        </div>

        {/* Form or Success State */}
        {submitted ? (
          <div className="text-center glass-panel p-12 rounded-3xl space-y-6 border border-[var(--theme-accent)]/40 shadow-2xl">
            <div className="w-16 h-16 bg-[var(--theme-accent)] text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[var(--theme-glow)]">
              <Check className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white uppercase">Inquiry Successfully Dispatched</h2>
            <p className="text-sm text-gray-400 font-sans max-w-md mx-auto">
              Our chief engineer will review your project requirements and reach out via secure communication channels within 24 hours.
            </p>
          </div>
        ) : (
          <TiltCard>
            <form onSubmit={handleSubmit} className="glass-panel p-8 sm:p-12 rounded-3xl space-y-6 border border-[var(--theme-accent)]/30 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-gray-400">Client Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Sheikh"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#08090b]/80 border border-white/10 text-sm text-white font-sans focus:outline-none focus:border-[var(--theme-accent)]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-gray-400">Secure Comms Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alexander@sheikhan.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#08090b]/80 border border-white/10 text-sm text-white font-sans focus:outline-none focus:border-[var(--theme-accent)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-gray-400">Desired Base Platform</label>
                  <select className="w-full px-4 py-3.5 rounded-xl bg-[#08090b]/90 border border-white/10 text-sm text-white font-sans focus:outline-none focus:border-[var(--theme-accent)]">
                    <option className="bg-[#08090b]">1971 Dodge Charger Tactical Restomod</option>
                    <option className="bg-[#08090b]">Ford Mustang Boss 429 V8 Stroker</option>
                    <option className="bg-[#08090b]">Toyota Celica Rally Desert Spec</option>
                    <option className="bg-[#08090b]">Toyota Supra 2JZ Flagship Twin-Turbo</option>
                    <option className="bg-[#08090b]">Toyota Corolla GT Heritage Restomod</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-gray-400">Target Horsepower Specification</label>
                  <select className="w-full px-4 py-3.5 rounded-xl bg-[#08090b]/90 border border-white/10 text-sm text-white font-sans focus:outline-none focus:border-[var(--theme-accent)]">
                    <option className="bg-[#08090b]">650 HP - Street Performance Tuned</option>
                    <option className="bg-[#08090b]">850 HP - High Compression V8 Block</option>
                    <option className="bg-[#08090b]">950+ HP - Track &amp; Dyno Certified Spec</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase text-gray-400">Project Vision &amp; Custom Requirements</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe interior trim finishes, specialized carbon composite body components, or specific suspension damping requirements..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#08090b]/80 border border-white/10 text-sm text-white font-sans focus:outline-none focus:border-[var(--theme-accent)]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[var(--theme-accent)] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-[var(--theme-glow)] hover:scale-[1.01] transition-all"
              >
                Dispatch Commission Request <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </TiltCard>
        )}

      </div>
    </div>
  );
}