// src/components/Materials.jsx
const finishes = [
  {
    title: "Cabinet carcasses",
    items: "Moisture‑resistant board, robust edging, durable fixings.",
  },
  {
    title: "Fronts & panels",
    items: "Painted board, timber veneers, thermofoil, and laminates.",
  },
  {
    title: "Hardware",
    items: "Soft‑close hinges, full‑extension runners, integrated handles.",
  },
  {
    title: "Extras",
    items: "LED strip lighting, pull‑out pantries, corner solutions.",
  },
];

const Materials = () => (
  <section className="space-y-6">
    <h2 className="text-3xl font-semibold">Materials & hardware</h2>
    <p className="text-slate-300 text-sm max-w-2xl">
      We specify materials and fittings that balance durability, budget, and
      the way your kitchen is actually used day‑to‑day.
    </p>
    <div className="grid md:grid-cols-4 gap-4">
      {finishes.map((f) => (
        <div
          key={f.title}
          className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-4"
        >
          <h3 className="text-sm font-semibold mb-2">{f.title}</h3>
          <p className="text-[11px] text-slate-300 leading-relaxed">{f.items}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Materials;
