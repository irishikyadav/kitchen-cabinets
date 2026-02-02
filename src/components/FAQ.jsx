// src/components/FAQ.jsx
const faqs = [
  {
    q: "How long does a typical kitchen cabinet project take?",
    a: "Most projects take 3–6 weeks from final design sign‑off to installation, depending on scope and materials.",
  },
  {
    q: "Can you work with existing cabinets?",
    a: "Yes. We can keep solid carcasses and upgrade doors, drawer fronts, and hardware where it makes sense.",
  },
  {
    q: "Do you handle both design and installation?",
    a: "We look after everything from measuring and layout to fabrication and on‑site installation.",
  },
  {
    q: "Do you offer wardrobes and other cabinetry?",
    a: "We also build wardrobes, laundry cabinetry, utility storage, and custom built‑ins.",
  },
];

const FAQ = () => (
  <section className="space-y-6">
    <h2 className="text-3xl font-semibold">Questions we’re often asked</h2>
    <div className="grid md:grid-cols-2 gap-4">
      {faqs.map((item) => (
        <div
          key={item.q}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
        >
          <h3 className="text-sm font-semibold mb-1">{item.q}</h3>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            {item.a}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ;
