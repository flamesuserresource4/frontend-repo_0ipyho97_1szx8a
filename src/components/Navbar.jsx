import { Menu, X, BarChart3, ShieldCheck, Zap, LogIn } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center">
      <li className="text-white/80 hover:text-white transition">Funktionen</li>
      <li className="text-white/80 hover:text-white transition">Preise</li>
      <li className="text-white/80 hover:text-white transition">Sicherheit</li>
      <li className="text-white/80 hover:text-white transition">Kontakt</li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 grid place-items-center ring-1 ring-white/20 shadow-[0_8px_30px_rgba(244,63,94,0.35)]">
            <span className="text-white font-black">CS</span>
          </div>
          <div>
            <div className="text-white font-semibold leading-none">Cheaterstats</div>
            <div className="text-xs text-white/60 leading-none mt-1 flex items-center gap-1">
              <ShieldCheck size={14} className="text-rose-400" /> Anti-Cheat Analytics
            </div>
          </div>
        </div>

        <nav className="hidden lg:block">
          <NavLinks />
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
            <LogIn size={18} /> Anmelden
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-[0_10px_30px_rgba(244,63,94,0.4)] hover:brightness-110 transition">
            <Zap size={18} /> Jetzt starten
          </button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-4 pb-4">
          <NavLinks />
          <div className="mt-4 flex gap-3">
            <button className="flex-1 px-4 py-2 rounded-xl bg-white/10 text-white">Anmelden</button>
            <button className="flex-1 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white">Jetzt starten</button>
          </div>
        </div>
      )}
    </header>
  );
}
