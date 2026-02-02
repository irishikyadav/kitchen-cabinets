// src/components/Services.jsx
const Services = () => {
  const services = [
    {
      title: "Custom kitchen cabinets",
      description:
        "Made-to-measure base, wall, and tall units built for your layout and appliances.",
    },
    {
      title: "Wardrobes & storage",
      description:
        "Built-in wardrobes, linen storage, and utility cabinetry with smart internals.",
    },
    {
      title: "On-site installation",
      description:
        "Precise fitting, alignment, and finishing by our in‑house installation team.",
    },
    {
      title: "Refacing & upgrades",
      description:
        "New doors, drawer fronts, and hardware for solid existing cabinets.",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4 text-slate-800">Services</h2>
      <p className="text-slate-600 mb-12 max-w-2xl text-lg leading-relaxed">
        From bare walls to finished kitchens, we handle every step of your
        cabinet construction project.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-rose-100/50 shadow-lg hover:shadow-xl hover:bg-white/90 hover:-translate-y-2 transition-all duration-300 p-8 cursor-pointer"
          >
            {/* Number badge */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-rose-100 to-pink-100 border-2 border-rose-200/50 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-rose-500 font-bold text-lg">{index + 1}</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-rose-600 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
