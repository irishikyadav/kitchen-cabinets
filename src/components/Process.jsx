// src/components/Process.jsx
const steps = [
  {
    title: "1. Site visit & measure",
    text: "We visit your space, measure accurately, and discuss how you cook, store, and move.",
  },
  {
    title: "2. Design & materials",
    text: "We suggest cabinet layout, finishes, and hardware that match your budget and style.",
  },
  {
    title: "3. Fabrication",
    text: "Cabinets are cut, assembled, and finished in our workshop for a precise on‑site fit.",
  },
  {
    title: "4. Installation & handover",
    text: "We install, align, and finish your cabinets, then walk you through care and maintenance.",
  },
];

const Process = () => (
  <section>
    <h2 className="text-3xl font-semibold mb-4">How we work</h2>
    <p className="text-slate-300 mb-8 max-w-2xl">
      A clear, step‑by‑step process so you know exactly what happens from
      first visit to final handover.
    </p>
    <div className="grid md:grid-cols-4 gap-4">
      {steps.map((step) => (
        <div
          key={step.title}
          className="border border-slate-800 rounded-xl p-4 bg-slate-900/40"
        >
          <h3 className="text-sm font-semibold mb-2">{step.title}</h3>
          <p className="text-xs text-slate-300">{step.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Process;
