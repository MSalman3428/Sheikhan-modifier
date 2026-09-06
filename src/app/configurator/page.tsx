"use client";

import { useState } from "react";
import TiltCard from "@/components/TiltCard";
import Image from "next/image";
import Link from "next/link";
import { Cpu, Zap, Shield, ChevronRight, Check, Sliders, Wrench, Sparkles, Gauge } from "lucide-react";

const CONFIG_OPTIONS = {
  models: [
    { 
      name: "Charger Tactical Restomod", 
      tagline: "MILITARY SPEC LEGEND",
      asset: "/assets/cars/charger-rally-jukebox.png", 
      baseHp: 850, 
      torque: "920 Nm", 
      "0_60": "3.1s",
      weight: "1,720 kg",
      finishes: [
        { name: "Tactical Olive", asset: "/assets/cars/Dodge Charger-army-olive-green-jukebox.png" },
        { name: "Matte Black", asset: "/assets/cars/Dodge Charger-matte-black-jukebox.png" },
        { name: "Desert Sand", asset: "/assets/cars/Dodge Charger-Desert-sand-Beige-jukebox.png" }
      ]
    },
    { 
      name: "Mustang Boss 429", 
      tagline: "TRACK HERITAGE ICON",
      asset: "/assets/cars/mustang-boss429-green-jukebox.png", 
      baseHp: 875, 
      torque: "950 Nm", 
      "0_60": "3.0s",
      weight: "1,580 kg",
      finishes: [
        { name: "Racing Green", asset: "/assets/cars/mustang-boss429-green-jukebox.png" },
        { name: "Electric Orange", asset: "/assets/cars/mustang-boss429-orange-jukebox.png" }
      ]
    },
    { 
      name: "Toyota Supra Flagship", 
      tagline: "TWIN-TURBO TITAN",
      asset: "/assets/cars/toyota-supra.png", 
      baseHp: 950, 
      torque: "1050 Nm", 
      "0_60": "2.7s",
      weight: "1,510 kg",
      finishes: [
        { name: "Signature Gloss", asset: "/assets/cars/toyota-supra.png" }
      ]
    },
  ],
  engines: [
    { name: "Supercharged V8 HEMI", hpAdd: 0, desc: "Standard high-boost mechanical supercharger setup with instant throttle response." },
    { name: "Twin-Turbocharged V8", hpAdd: 120, desc: "Dual ball-bearing turbochargers with custom air-to-water intercoolers." },
    { name: "Forged Racing Block 2JZ / V8", hpAdd: 180, desc: "Billet steel internals built specifically to withstand extreme track pressures." },
  ],
  interiors: [
    { name: "Tactical Black Leather & Alcantara", price: "Standard Included", asset: "/assets/specs/mustang-interior.jpeg" },
    { name: "Carbon Composite Racing Bucket Suite", price: "+$4,500", asset: "/assets/specs/mustang-interior.jpeg" },
    { name: "Vintage Saddle Tan Leather Heritage", price: "+$6,000", asset: "/assets/specs/mustang-interior.jpeg" },
  ]
};

export default function ConfiguratorPage() {
  const [selectedModel, setSelectedModel] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState(0);
  const [selectedEngine, setSelectedEngine] = useState(0);
  const [selectedInterior, setSelectedInterior] = useState(0);

  const car = CONFIG_OPTIONS.models[selectedModel];
  const finish = car.finishes[selectedFinish] || car.finishes[0];
  const engine = CONFIG_OPTIONS.engines[selectedEngine];
  const interior = CONFIG_OPTIONS.interiors[selectedInterior];
  const totalHp = car.baseHp + engine.hpAdd;

  // Reset finish index when model changes
  const handleModelChange = (idx: number) => {
    setSelectedModel(idx);
    setSelectedFinish(0);
  };

  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      {/* Background Video Atmosphere */}
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

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 space-y-12">
        
        {/* Header Title Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-mono text-xs text-[var(--theme-accent)] uppercase tracking-widest bg-[var(--theme-accent)]/10 px-4 py-1.5 rounded-full border border-[var(--theme-accent)]/30 inline-block shadow-sm shadow-[var(--theme-glow)]">
            3D Interactive Studio &amp; Configurator
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white uppercase tracking-tight">
            Build Your Machine
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 font-sans">
            Customize platform architecture, body finishes, high-output powerplants, and bespoke cockpits in real-time. Review total performance telemetry instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3D Car Visual Stage & Expanded Telemetry */}
          <div className="lg:col-span-7 space-y-6">
            <TiltCard>
              <div className="glass-panel p-8 sm:p-10 rounded-3xl flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden border border-[var(--theme-accent)]/30">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--theme-accent)]/20 to-transparent blur-3xl pointer-events-none" />
                
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-gray-300 bg-black/50 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> LIVE TELEMETRY PREVIEW
                  </span>
                </div>

                <div className="absolute top-6 right-6">
                  <span className="font-mono text-[10px] text-[var(--theme-accent)] bg-[var(--theme-accent)]/15 px-3 py-1 rounded-full border border-[var(--theme-accent)]/30 uppercase">
                    {car.tagline}
                  </span>
                </div>

                <div className="relative w-full h-[340px] flex items-center justify-center my-6">
                  <Image
                    src={finish.asset}
                    alt={car.name}
                    width={800}
                    height={480}
                    priority
                    className="object-contain car-3d-shadow animate-float max-h-[380px] w-full relative z-10 transition-all duration-700"
                  />
                </div>

                {/* Expanded Telemetry Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-white/10 font-mono text-center">
                  <div className="bg-black/40 p-3.5 rounded-xl border border-white/5">
                    <span className="block text-[10px] text-gray-400 uppercase">Est. Output</span>
                    <span className="text-base font-bold text-[var(--theme-accent)]">{totalHp} HP</span>
                  </div>
                  <div className="bg-black/40 p-3.5 rounded-xl border border-white/5">
                    <span className="block text-[10px] text-gray-400 uppercase">Torque</span>
                    <span className="text-base font-bold text-white">{car.torque}</span>
                  </div>
                  <div className="bg-black/40 p-3.5 rounded-xl border border-white/5">
                    <span className="block text-[10px] text-gray-400 uppercase">0-60 MPH</span>
                    <span className="text-base font-bold text-white">{car["0_60"]}</span>
                  </div>
                  <div className="bg-black/40 p-3.5 rounded-xl border border-white/5">
                    <span className="block text-[10px] text-gray-400 uppercase">Dry Weight</span>
                    <span className="text-base font-bold text-white">{car.weight}</span>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Additional Spec Highlight Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center gap-6">
              <div className="relative w-28 h-20 rounded-xl overflow-hidden bg-black/50 border border-white/10 flex-shrink-0">
                <Image 
                  src={interior.asset} 
                  alt="Interior preview" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 font-mono">
                <span className="text-[10px] text-[var(--theme-accent)] uppercase tracking-wider">Selected Configuration Suite</span>
                <h4 className="text-white text-sm font-bold">{interior.name}</h4>
                <p className="text-xs text-gray-400 font-sans">Hand-stitched upholstery tailored precisely for endurance and ergonomic track support.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border border-white/10 shadow-2xl">
              
              {/* Step 1: Model Platform */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono text-[var(--theme-accent)] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[var(--theme-accent)]/20 flex items-center justify-center text-[10px] font-bold">1</span> 
                  Select Platform Base
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {CONFIG_OPTIONS.models.map((m, idx) => (
                    <button
                      key={m.name}
                      onClick={() => handleModelChange(idx)}
                      className={`p-3.5 rounded-xl text-left font-mono text-xs uppercase border transition-all duration-300 flex items-center justify-between ${
                        selectedModel === idx
                          ? "bg-[var(--theme-accent)] text-white font-bold border-[var(--theme-accent)] shadow-md shadow-[var(--theme-glow)]"
                          : "bg-[#08090b]/50 text-gray-400 border-white/10 hover:border-white/30"
                      }`}
                    >
                      <span>{m.name}</span>
                      <span className="text-[10px] opacity-80">{m.baseHp} HP</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Body Finish / Paint */}
              <div className="space-y-3 pt-3 border-t border-white/10">
                <h3 className="text-xs font-mono text-[var(--theme-accent)] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[var(--theme-accent)]/20 flex items-center justify-center text-[10px] font-bold">2</span> 
                  Exterior Finish &amp; Livery
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {car.finishes.map((f, idx) => (
                    <button
                      key={f.name}
                      onClick={() => setSelectedFinish(idx)}
                      className={`p-3 rounded-xl text-center font-mono text-xs uppercase border transition-all duration-300 ${
                        selectedFinish === idx
                          ? "bg-[var(--theme-accent)] text-white font-bold border-[var(--theme-accent)] shadow-md shadow-[var(--theme-glow)]"
                          : "bg-[#08090b]/50 text-gray-400 border-white/10 hover:border-white/30"
                      }`}
                    >
                      {f.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Engine & Induction */}
              <div className="space-y-3 pt-3 border-t border-white/10">
                <h3 className="text-xs font-mono text-[var(--theme-accent)] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[var(--theme-accent)]/20 flex items-center justify-center text-[10px] font-bold">3</span> 
                  Powerplant &amp; Induction
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {CONFIG_OPTIONS.engines.map((eng, idx) => (
                    <button
                      key={eng.name}
                      onClick={() => setSelectedEngine(idx)}
                      className={`p-3.5 rounded-xl text-left font-mono text-xs uppercase border transition-all duration-300 flex items-center justify-between ${
                        selectedEngine === idx
                          ? "bg-[var(--theme-accent)] text-white font-bold border-[var(--theme-accent)] shadow-md shadow-[var(--theme-glow)]"
                          : "bg-[#08090b]/50 text-gray-400 border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div>
                        <span className="block">{eng.name}</span>
                        <span className="block text-[9px] lowercase opacity-70 font-sans mt-0.5">{eng.desc}</span>
                      </div>
                      <span className="text-[10px] font-bold text-[var(--theme-accent)] bg-black/40 px-2 py-1 rounded flex-shrink-0 ml-2">
                        {eng.hpAdd > 0 ? `+${eng.hpAdd} HP` : "BASE"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Interior Suite */}
              <div className="space-y-3 pt-3 border-t border-white/10">
                <h3 className="text-xs font-mono text-[var(--theme-accent)] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[var(--theme-accent)]/20 flex items-center justify-center text-[10px] font-bold">4</span> 
                  Cockpit &amp; Interior Suite
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {CONFIG_OPTIONS.interiors.map((intOpt, idx) => (
                    <button
                      key={intOpt.name}
                      onClick={() => setSelectedInterior(idx)}
                      className={`p-3 rounded-xl text-left font-mono text-xs uppercase border transition-all duration-300 flex items-center justify-between ${
                        selectedInterior === idx
                          ? "bg-[var(--theme-accent)] text-white font-bold border-[var(--theme-accent)] shadow-md shadow-[var(--theme-glow)]"
                          : "bg-[#08090b]/50 text-gray-400 border-white/10 hover:border-white/30"
                      }`}
                    >
                      <span>{intOpt.name}</span>
                      <span className="text-[10px] opacity-80">{intOpt.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="/commission"
                  className="w-full block text-center py-4 rounded-xl text-xs font-mono uppercase tracking-widest bg-[var(--theme-accent)] text-white font-extrabold shadow-xl shadow-[var(--theme-glow)] hover:scale-[1.02] transition-transform"
                >
                  Submit Custom Commission ({totalHp} HP Spec)
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}