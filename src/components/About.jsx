// src/components/About.jsx
const About = () => (
  <section className="space-y-12">
    <div className="text-center max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-rose-600 bg-clip-text text-transparent">
        About CabinetCraft
      </h2>
      <p className="text-slate-600 text-xl leading-relaxed max-w-3xl mx-auto">
        Crafting beautiful, functional kitchens for modern homes in New Zealand
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Text content */}
      <div className="space-y-8 pr-8 md:pr-12">
        <div className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-rose-100/50 shadow-xl p-8 hover:shadow-2xl hover:bg-white/95 hover:-translate-y-2 transition-all duration-500">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            Our craft
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            We're a dedicated cabinet construction team who build functional, durable kitchens designed around 
            <span className="font-semibold text-rose-600">how you actually live</span> — not just how the space looks.
          </p>
        </div>
        
        <div className="flex gap-6 pt-4">
          <div className="text-center">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-rose-100 to-pink-100 border-4 border-white/50 mx-auto flex items-center justify-center mb-2 shadow-lg">
              <span className="text-rose-500 font-bold text-xl">🏠</span>
            </div>
            <p className="text-sm font-semibold text-slate-700">Wellington-based</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-indigo-100 to-purple-100 border-4 border-white/50 mx-auto flex items-center justify-center mb-2 shadow-lg">
              <span className="text-indigo-500 font-bold text-xl">⚒️</span>
            </div>
            <p className="text-sm font-semibold text-slate-700">In-house workshop</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-emerald-100 to-teal-100 border-4 border-white/50 mx-auto flex items-center justify-center mb-2 shadow-lg">
              <span className="text-emerald-500 font-bold text-xl">⭐</span>
            </div>
            <p className="text-sm font-semibold text-slate-700">10+ years experience</p>
          </div>
        </div>
      </div>

      {/* Right: Visual element */}
      <div className="relative">
        <div className="absolute -top-8 -right-8 w-64 h-64 rounded-3xl bg-gradient-to-br from-rose-100/40 via-pink-100/30 to-indigo-100/20 blur-3xl -z-10" />
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-rose-100/60 p-8 shadow-2xl">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 rounded-2xl bg-gradient-to-br from-slate-100 to-rose-50 border border-rose-200/50" />
            <div className="h-32 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/50" />
            <div className="h-24 col-span-2 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50" />
          </div>
          <p className="text-center text-xs text-slate-500 mt-4 font-medium">
            Precision craftsmanship • Local materials • Lifetime durability
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
