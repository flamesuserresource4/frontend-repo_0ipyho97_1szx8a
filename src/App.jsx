import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      {/* Glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-[72rem] h-[28rem] bg-rose-600/20 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 -right-20 w-[40rem] h-[40rem] bg-red-500/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <CTA />

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 grid place-items-center ring-1 ring-white/20">
                <span className="text-white text-sm font-black">CS</span>
              </div>
              <span className="text-white/70 text-sm">© {new Date().getFullYear()} Cheaterstats. Alle Rechte vorbehalten.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a className="hover:text-white transition" href="#">Impressum</a>
              <a className="hover:text-white transition" href="#">Datenschutz</a>
              <a className="hover:text-white transition" href="#">Kontakt</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
