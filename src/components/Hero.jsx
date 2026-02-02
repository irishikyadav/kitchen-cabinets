// src/components/Hero.jsx
const Hero = () => (
  <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
    <div className="space-y-6">
      <p className="inline-flex items-center gap-2 rounded-full border border-rose-300/50 bg-rose-50/80 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-rose-600 font-semibold">
        Kitchen Cabinet Construction
        <span className="h-[1px] w-6 bg-rose-300" />
        Design · Build · Install
      </p>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Custom kitchen cabinets,{" "}
        <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">engineered for everyday use.</span>
      </h1>
      <p className="text-slate-600 text-sm md:text-base max-w-xl leading-relaxed">
        We design, construct, and install modular kitchens and storage that
        feel tailored to your home — from first sketch to final hinge
        adjustment, everything is handled in‑house.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#contact"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white text-sm font-semibold shadow-lg hover:shadow-lg hover:shadow-rose-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Request a free site visit
        </a>
        <a
          href="#gallery"
          className="px-6 py-3 rounded-full border-2 border-slate-200/70 text-sm text-slate-700 font-semibold bg-white/80 backdrop-blur-sm hover:bg-rose-50 hover:border-rose-300 transition-all duration-300 shadow-sm"
        >
          Browse cabinet gallery
        </a>
      </div>
      <div className="flex flex-wrap gap-6 text-[11px] text-slate-500">
        <span>Full cabinet construction · Installation · Wardrobes</span>
        <span className="hidden md:inline">Average project: 3–6 weeks from measure to install</span>
      </div>
    </div>

    <div className="relative">
      <div className="absolute -top-6 -left-4 h-32 w-32 rounded-full bg-gradient-to-tr from-rose-400/30 to-pink-400/20 blur-3xl" />
      <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-gradient-to-tr from-pink-400/20 to-indigo-400/10 blur-3xl" />

      <div className="relative rounded-3xl overflow-hidden border border-slate-200/60 bg-white/70 backdrop-blur-xl shadow-2xl">
        <img
          src="/images/pexels-curtis-adams-1694007-6835078.jpg"
          alt="Custom kitchen cabinet installation"
          className="h-64 w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 via-white/20 to-transparent p-4 backdrop-blur-sm">
          <p className="font-semibold text-white drop-shadow-sm">Full-height pantry & island storage</p>
          <p className="text-white/90 text-xs drop-shadow-sm">
            Floor‑to‑ceiling cabinets, integrated lighting, soft‑close hardware.
          </p>
        </div>
      </div>

      <div className="hidden md:block absolute -right-10 top-10 w-40 rounded-2xl overflow-hidden border border-slate-200/70 bg-white/90 backdrop-blur-md shadow-lg">
        <img
          src="/images/pexels-curtis-adams-1694007-6835079.jpg"
          alt="Cabinet joinery detail"
          className="h-28 w-full object-cover"
        />
        <div className="px-3 py-2 text-[10px] text-slate-700 font-medium">
          Precise joinery · Clean lines · Durable finishes
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
