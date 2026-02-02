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
    <h2 className="text-3xl font-bold mb-4 text-slate-800">How we work</h2>
    <p className="text-slate-600 mb-12 max-w-2xl text-lg leading-relaxed">
      A clear, step‑by‑step process so you know exactly what happens from
      first visit to final handover.
    </p>
    <div className="grid md:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-rose-100/50 shadow-lg hover:shadow-xl hover:bg-white/90 hover:-translate-y-2 transition-all duration-300 p-6 cursor-pointer text-center"
        >
          {/* Step number circle */}
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-rose-100 to-pink-100 border-4 border-rose-200/60 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
            <span className="text-2xl font-bold text-rose-500 drop-shadow-sm">{index + 1}</span>
          </div>
          
          <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-rose-600 transition-colors duration-300">
            {step.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Process;
