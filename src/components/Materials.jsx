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
  <section className="space-y-8">
    <h2 className="text-3xl font-bold text-slate-800 mb-4">Materials & hardware</h2>
    <p className="text-slate-600 text-lg max-w-2xl mb-12 leading-relaxed">
      We specify materials and fittings that balance durability, budget, and
      the way your kitchen is actually used day‑to‑day.
    </p>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {finishes.map((f, index) => (
        <div
          key={f.title}
          className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-rose-100/50 shadow-lg hover:shadow-2xl hover:bg-white/95 hover:-translate-y-2 transition-all duration-400 p-8 text-center cursor-pointer"
        >
          {/* Icon circle */}
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-rose-100 via-pink-100 to-indigo-100 border-4 border-white/60 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 shadow-xl">
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              {['📦', '🎨', '⚙️', '✨'][index]}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-rose-600 transition-colors duration-300">
            {f.title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-base">{f.items}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Materials;
