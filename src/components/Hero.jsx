import { Play, Shield, TrendingUp, BarChart3 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-rose-600 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-red-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm ring-1 ring-white/15 mb-6">
            <Shield size={16} className="text-rose-400" /> Live-Detection für Games
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Cheaterstats
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600"> Anticheat Dashboard</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl">
            Analysiere Auffälligkeiten in Echtzeit, erkenne verdächtige Muster und halte deine Community sauber. 
            Schnelle Reports, präzise Insights und ein modernes UI – alles an einem Ort.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-medium shadow-[0_10px_30px_rgba(244,63,94,0.4)] hover:brightness-110 transition">
              Kostenlos testen
            </button>
            <button className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/15 transition font-medium ring-1 ring-white/20">
              <div className="inline-flex items-center gap-2"><Play size={18}/> Demo ansehen</div>
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 rounded-xl p-4 ring-1 ring-white/10">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-white/60 text-sm">Uptime</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 ring-1 ring-white/10">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-white/60 text-sm">Monitoring</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 ring-1 ring-white/10">
              <div className="text-2xl font-bold text-white">GDPR</div>
              <div className="text-white/60 text-sm">konform</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-red-500/20 to-rose-600/20 rounded-2xl blur-xl" />
          <div className="relative bg-slate-900/60 rounded-2xl ring-1 ring-white/10 p-4">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop" alt="dashboard" className="rounded-xl object-cover" />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
              <div className="bg-slate-900/80 backdrop-blur rounded-xl p-3 ring-1 ring-white/10 text-white">
                <div className="text-xs text-white/60">Verdacht</div>
                <div className="font-semibold">Aim Assist</div>
              </div>
              <div className="bg-slate-900/80 backdrop-blur rounded-xl p-3 ring-1 ring-white/10 text-white">
                <div className="text-xs text-white/60">Spieler</div>
                <div className="font-semibold">+342</div>
              </div>
              <div className="bg-slate-900/80 backdrop-blur rounded-xl p-3 ring-1 ring-white/10 text-white">
                <div className="text-xs text-white/60">Reports</div>
                <div className="font-semibold">1.3k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
