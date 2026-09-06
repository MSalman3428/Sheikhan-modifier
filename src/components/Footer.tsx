import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--theme-accent)]/20 bg-[#08090b] pt-16 pb-12 px-6 sm:px-12 relative z-10 transition-colors duration-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--theme-accent)]/20 border border-[var(--theme-accent)]/50 flex items-center justify-center text-[var(--theme-accent)]">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-mono font-black text-base tracking-widest text-white uppercase">
              SHEIKHAN<span className="text-[var(--theme-accent)]">.</span>MOD
            </span>
          </div>
          <p className="text-xs text-gray-400 font-sans leading-relaxed">
            Hand-fabricated restomods engineered with aerospace-grade tolerances and iconic vintage styling.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--theme-accent)] mb-4">Navigation</h4>
          <ul className="space-y-2 text-xs font-mono text-gray-400">
            <li><Link href="/showroom" className="hover:text-white transition-colors">Showroom Fleet</Link></li>
            <li><Link href="/configurator" className="hover:text-white transition-colors">3D Configurator</Link></li>
            <li><Link href="/engineering" className="hover:text-white transition-colors">Engineering Specs</Link></li>
            <li><Link href="/commission" className="hover:text-white transition-colors">Commission Build</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--theme-accent)] mb-4">Workshops</h4>
          <ul className="space-y-2 text-xs font-mono text-gray-400">
            <li>Abu Dhabi Advanced Fabrication</li>
            <li>Tokyo Classic Restomod Lab</li>
            <li>Detroit Muscle Integration</li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--theme-accent)] mb-4">Secure Telemetry</h4>
          <p className="text-xs text-gray-400 font-mono mb-3">Encrypted vehicle diagnostics and live telemetry feed active.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            SYSTEM_ONLINE // 99.98%
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500">
        <p>&copy; {new Date().getFullYear()} Sheikhan Motorwerks. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 text-[var(--theme-accent)]">SECURE_BUILD_HASH: #9842-SHK-REV4</p>
      </div>
    </footer>
  );
}