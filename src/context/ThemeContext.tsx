"use client";

import React, { createContext, useContext, useState } from "react";

export const FLEET_VEHICLES = [
  {
    name: "Tactical Army Olive Charger",
    category: "Charger",
    tagline: "MILITARY SPEC RESTOMOD",
    hp: "850 HP",
    engine: "Supercharged V8 HEMI",
    torque: "920 Nm",
    "0_60": "3.1s",
    accentColor: "#4b5320",
    glowRgba: "75, 83, 32",
    asset: "/assets/cars/Dodge Charger-army-olive-green-jukebox.png",
  },
  {
    name: "Army Navy Blue & Black Charger",
    category: "Charger",
    tagline: "STEALTH TACTICAL BUILD",
    hp: "900 HP",
    engine: "Twin-Turbocharged V8",
    torque: "980 Nm",
    "0_60": "2.9s",
    accentColor: "#1a2744",
    glowRgba: "26, 39, 68",
    asset: "/assets/cars/Dodge Charger-army-navy-blue&black-jukebox.png",
  },
  {
    name: "Desert Sand Beige Charger",
    category: "Charger",
    tagline: "DUST-PROOF EXPEDITION SPEC",
    hp: "830 HP",
    engine: "Supercharged HEMI",
    torque: "890 Nm",
    "0_60": "3.3s",
    accentColor: "#c4a265",
    glowRgba: "196, 162, 101",
    asset: "/assets/cars/Dodge Charger-Desert-sand-Beige-jukebox.png",
  },
  {
    name: "Charger Restomod Blue",
    category: "Charger",
    tagline: "OCEANIC TRACK SPEC",
    hp: "860 HP",
    engine: "Twin-Cam V8 Stroker",
    torque: "910 Nm",
    "0_60": "3.2s",
    accentColor: "#1d4ed8",
    glowRgba: "29, 78, 216",
    asset: "/assets/cars/charger-restomod-blue-jukebox.png",
  },
  {
    name: "Charger Restomod Green",
    category: "Charger",
    tagline: "RACING HERITAGE",
    hp: "840 HP",
    engine: "Naturally Aspirated V8",
    torque: "890 Nm",
    "0_60": "3.3s",
    accentColor: "#166534",
    glowRgba: "22, 101, 52",
    asset: "/assets/cars/charger-restomod-green-jukebox.png",
  },
  {
    name: "Charger Restomod Silver",
    category: "Charger",
    tagline: "TITANIUM TITAN",
    hp: "910 HP",
    engine: "Supercharged Powerhouse",
    torque: "990 Nm",
    "0_60": "2.9s",
    accentColor: "#9ca3af",
    glowRgba: "156, 163, 175",
    asset: "/assets/cars/charger-restomod-silver-jukebox.png",
  },
];

interface ThemeContextType {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  currentCar: typeof FLEET_VEHICLES[0];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentCar = FLEET_VEHICLES[selectedIndex];

  return (
    <ThemeContext.Provider value={{ selectedIndex, setSelectedIndex, currentCar }}>
      <div
        style={
          {
            "--theme-accent": currentCar.accentColor,
            "--theme-glow": `rgba(${currentCar.glowRgba}, 0.35)`,
            "--theme-glow-strong": `rgba(${currentCar.glowRgba}, 0.65)`,
          } as React.CSSProperties
        }
        className="min-h-screen flex flex-col transition-colors duration-700 bg-[#08090b]"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}