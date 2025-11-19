export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 ring-1 ring-white/10">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-rose-600/20 blur-xl" />
          <div className="relative p-10 md:p-14">
            <h3 className="text-3xl md:text-4xl font-black text-white">
              Starte heute mit Cheaterstats
            </h3>
            <p className="text-white/70 mt-3 max-w-2xl">
              Sichere deine Matches, gib ehrlichen Spielern eine Stimme und erhalte klare Evidenz bei Verdachtsfällen.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-medium shadow-[0_10px_30px_rgba(244,63,94,0.4)] hover:brightness-110 transition">
                Kostenlos starten
              </button>
              <button className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/15 transition font-medium ring-1 ring-white/20">
                Preise ansehen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
