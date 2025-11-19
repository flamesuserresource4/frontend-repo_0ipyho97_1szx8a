import { ShieldCheck, Radar, BarChart3, BellRing, Users2, Cpu } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Detection Engine",
      desc: "Hybrid-Analyse aus Heuristik, Telemetrie und Community-Signalen.",
    },
    { icon: Radar, title: "Live Monitoring", desc: "Realtime-Streams mit Alerts bei Anomalien." },
    { icon: BarChart3, title: "Insights", desc: "KPI-Dashboards für Spieler, Matches und Trends." },
    { icon: BellRing, title: "Benachrichtigungen", desc: "Discord, Mail & Webhooks – in Sekunden konfiguriert." },
    { icon: Users2, title: "Teamwork", desc: "Rollen, Freigaben und Audit-Logs für Moderationsteams." },
    { icon: Cpu, title: "API-first", desc: "REST & Webhooks – integriere Cheaterstats in deine Tools." },
  ];

  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white">Alles, was du brauchst</h2>
        <p className="text-center text-white/70 mt-3 max-w-2xl mx-auto">
          Von der Erkennung bis zur Sperre – Cheaterstats liefert dir den gesamten Prozess in einer Plattform.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((Item, idx) => (
            <div key={idx} className="group bg-white/5 hover:bg-white/10 transition rounded-2xl p-6 ring-1 ring-white/10">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-white grid place-items-center shadow-[0_10px_30px_rgba(244,63,94,0.4)]">
                <Item.icon />
              </div>
              <div className="mt-4 text-white font-semibold text-lg">{Item.title}</div>
              <div className="mt-1 text-white/70">{Item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
