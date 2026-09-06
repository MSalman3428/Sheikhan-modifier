"use client";

import { useState } from "react";
import TiltCard from "@/components/TiltCard";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Flame } from "lucide-react";
import { FLEET_VEHICLES, useTheme } from "@/context/ThemeContext";

const SHOWROOM_VEHICLES = [
  { name: "Tactical Army Olive Charger", category: "Charger", tagline: "MILITARY SPEC", hp: "850 HP", engine: "Supercharged V8 HEMI", torque: "920 Nm", "0_60": "3.1s", asset: "/assets/cars/Dodge Charger-army-olive-green-jukebox.png" },
  { name: "Army Navy Blue & Black Charger", category: "Charger", tagline: "STEALTH TACTICAL BUILD", hp: "900 HP", engine: "Twin-Turbocharged V8", torque: "980 Nm", "0_60": "2.9s", asset: "/assets/cars/Dodge Charger-army-navy-blue&black-jukebox.png" },
  { name: "Desert Sand Beige Charger", category: "Charger", tagline: "DUST-PROOF EXPEDITION SPEC", hp: "830 HP", engine: "Supercharged HEMI", torque: "890 Nm", "0_60": "3.3s", asset: "/assets/cars/Dodge Charger-Desert-sand-Beige-jukebox.png" },
  { name: "Charger Restomod Blue", category: "Charger", tagline: "OCEANIC TRACK SPEC", hp: "860 HP", engine: "Twin-Cam V8 Stroker", torque: "910 Nm", "0_60": "3.2s", asset: "/assets/cars/charger-restomod-blue-jukebox.png" },
  { name: "Charger Restomod Green", category: "Charger", tagline: "RACING HERITAGE", hp: "840 HP", engine: "Naturally Aspirated V8", torque: "890 Nm", "0_60": "3.3s", asset: "/assets/cars/charger-restomod-green-jukebox.png" },
  { name: "Charger Restomod Silver", category: "Charger", tagline: "TITANIUM TITAN", hp: "910 HP", engine: "Supercharged Powerhouse", torque: "990 Nm", "0_60": "2.9s", asset: "/assets/cars/charger-restomod-silver-jukebox.png" },
];

const CATEGORIES = ["All", "Charger"];

export default function ShowroomPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { currentCar } = useTheme();

  const filteredVehicles = activeCategory === "All"
    ? SHOWROOM_VEHICLES
    : SHOWROOM_VEHICLES.filter(v => v.category === activeCategory);

  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      {/* Global Page Accent Glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[var(--theme-accent)] opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[500px] h-[500px] rounded-full bg-[var(--theme-accent)] opacity-10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 space-y-16">
        
        {/* Header Section with Scoped Video Background Behind Title & 3D Car Only */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl overflow-hidden border border-white/5 bg-black/20">
          
          {/* Video Background Scoped Strictly to Header Area */}
          <div className="absolute inset-0 z-0 opacity-25 pointer-events-none overflow-hidden rounded-3xl">
            <video
              src="/assets/videos/garage-smoke.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-opacity duration-700 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090b] via-[#08090b]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#08090b]/50 via-transparent to-[#08090b]/50" />
          </div>

          {/* Left Column: Heading and Details */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left relative z-10">
            <span className="font-mono text-xs text-[var(--theme-accent)] uppercase tracking-widest bg[var(--theme-glow)] px-4 py-1.5 rounded-full border border-[var(--theme-accent)] inline-block shadow-sm shadow-[var(--theme-glow)]">
              Global Showroom Lineup
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[var(--theme-accent)] uppercase tracking-tight">
              Curated Restomod Fleet
            </h1>
            <p className="text-sm text-gray-400 font-sans max-w-xl mx-auto lg:mx-0">
              Explore our complete roster of hand-fabricated American muscle legends. Each build is uniquely serialized and dyno-tested.
            </p>
          </div>

          {/* Right Column: Significantly Enlarged Active Home Theme Car 3D Image */}
          <div className="lg:col-span-6 flex items-center justify-center relative z-10">
            <div className="relative w-full h-80 sm:h-96 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-[var(--theme-accent)]/20 blur-[90px] rounded-full opacity-60 pointer-events-none" />
              <div className="relative w-full h-full flex items-center justify-center p-2">
                <Image
                  src={currentCar.asset}
                  alt={currentCar.name}
                  width={2150}
                  height={2150}
                  priority
                  className="object-contain car-3d-shadow animate-float max-h-[380px] w-full relative z-10 scale-125 sm:scale-135 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[var(--theme-accent)] text-white font-bold shadow-lg shadow-[var(--theme-glow)] scale-105"
                  : "glass-panel text-gray-400 hover:text-white border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicle Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((car) => (
            <TiltCard key={car.name}>
              <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between h-full group hover:border-[var(--theme-accent)] transition-all duration-500">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase px-3 py-1 bg-[var(--theme-accent)]/15 text-[var(--theme-accent)] rounded-full border border-[var(--theme-accent)]/30">
                      {car.tagline}
                    </span>
                    <span className="font-mono text-xs font-bold text-white bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                      {car.hp}
                    </span>
                  </div>

                  <div className="relative w-full h-52 my-4 flex items-center justify-center bg-black/40 rounded-xl overflow-hidden p-3 border border-white/5">
                    <div className="absolute inset-0 bg-[var(--theme-accent)]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={car.asset}
                      alt={car.name}
                      width={400}
                      height={240}
                      className="object-contain max-h-44 car-3d-shadow group-hover:scale-110 transition-transform duration-500 relative z-10"
                    />
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mt-3 group-hover:text-[var(--theme-accent)] transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 font-mono">{car.engine}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 my-5 py-3 border-y border-white/10 text-xs font-mono text-gray-300">
                  <div>Torque: <span className="text-[var(--theme-accent)] font-bold">{car.torque}</span></div>
                  <div>0-60 MPH: <span className="text-[var(--theme-accent)] font-bold">{car["0_60"]}</span></div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-500 uppercase">SERIAL: SPEC-{car.hp}</span>
                  <Link
                    href="/configurator"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[var(--theme-accent)] group-hover:text-white font-bold transition-colors bg-[var(--theme-accent)]/10 px-3 py-1.5 rounded-lg border border-[var(--theme-accent)]/30 group-hover:bg-[var(--theme-accent)]"
                  >
                    Configure <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl text-center space-y-6 border border-[var(--theme-accent)]/30">
          <div className="w-12 h-12 rounded-xl bg-[var(--theme-accent)]/20 border border-[var(--theme-accent)]/40 flex items-center justify-center mx-auto text-[var(--theme-accent)]">
            <Flame className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white uppercase">Looking for a Unique Custom Spec?</h3>
          <p className="text-xs sm:text-sm text-gray-400 font-sans max-w-xl mx-auto">
            We accept limited custom commissions per quarter. Submit your design requirements and our fabrication lead will consult directly with you.
          </p>
          <div>
            <Link
              href="/commission"
              className="inline-block px-8 py-3.5 rounded-xl text-xs font-mono uppercase tracking-widest bg-[var(--theme-accent)] text-white font-extrabold hover:scale-105 transition-all shadow-xl shadow-[var(--theme-glow)]"
            >
              Initialize Commission Desk
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}