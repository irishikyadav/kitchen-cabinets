// src/components/Hero.jsx
const Hero = () => (
  <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
    <div className="space-y-6">
      <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-amber-200">
        Kitchen Cabinet Construction
        <span className="h-[1px] w-6 bg-amber-400/60" />
        Design · Build · Install
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
        Custom kitchen cabinets,{" "}
        <span className="text-amber-400">engineered for everyday use.</span>
      </h1>
      <p className="text-slate-300 text-sm md:text-base max-w-xl">
        We design, construct, and install modular kitchens and storage that
        feel tailored to your home — from first sketch to final hinge
        adjustment, everything is handled in‑house.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#contact"
          className="px-6 py-3 rounded-full bg-amber-400 text-slate-950 text-sm font-semibold shadow-[0_0_40px_rgba(250,204,21,0.35)]"
        >
          Request a free site visit
        </a>
        <a
          href="#gallery"
          className="px-6 py-3 rounded-full border border-slate-700 text-sm text-slate-100"
        >
          Browse cabinet gallery
        </a>
      </div>
      <div className="flex flex-wrap gap-6 text-[11px] text-slate-400">
        <span>Full cabinet construction · Installation · Wardrobes</span>
        <span className="hidden md:inline">Average project: 3–6 weeks from measure to install</span>
      </div>
    </div>

    <div className="relative">
      <div className="absolute -top-6 -left-4 h-32 w-32 rounded-full bg-gradient-to-tr from-amber-400/40 to-cyan-400/10 blur-3xl" />
      <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-gradient-to-tr from-cyan-400/20 to-amber-400/0 blur-3xl" />

      <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 bg-slate-900/60 shadow-2xl">
        <img
          src="/images/pexels-curtis-adams-1694007-6835078.jpg"
          alt="Custom kitchen cabinet installation"
          className="h-64 w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-xs">
          <p className="font-semibold">Full-height pantry & island storage</p>
          <p className="text-slate-400">
            Floor‑to‑ceiling cabinets, integrated lighting, soft‑close hardware.
          </p>
        </div>
      </div>

      <div className="hidden md:block absolute -right-10 top-10 w-40 rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-xl">
        <img
          src="/images/pexels-curtis-adams-1694007-6835079.jpg"
          alt="Cabinet joinery detail"
          className="h-28 w-full object-cover"
        />
        <div className="px-3 py-2 text-[10px] text-slate-300">
          Precise joinery · Clean lines · Durable finishes
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
