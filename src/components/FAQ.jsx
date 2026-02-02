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
  <section className="space-y-8">
    <h2 className="text-3xl font-bold text-slate-800 mb-4">Questions we're often asked</h2>
    <p className="text-slate-600 text-lg max-w-2xl mb-12 leading-relaxed">
      Everything you need to know before starting your cabinet project with us.
    </p>
    <div className="grid md:grid-cols-2 gap-6">
      {faqs.map((item, index) => (
        <div
          key={item.q}
          className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-rose-100/50 shadow-lg hover:shadow-2xl hover:bg-white/95 hover:-translate-y-2 transition-all duration-400 p-8 cursor-pointer"
        >
          {/* FAQ number */}
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-rose-100/50">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-rose-100 to-pink-100 border-2 border-rose-200/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-rose-500 font-bold text-sm">{index + 1}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-rose-600 transition-colors duration-300 flex-1">
              {item.q}
            </h3>
          </div>
          
          <p className="text-slate-600 leading-relaxed text-base">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ;
