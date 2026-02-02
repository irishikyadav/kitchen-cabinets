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
      <h2 className="text-3xl font-semibold mb-4">Services</h2>
      <p className="text-slate-300 mb-8 max-w-2xl">
        From bare walls to finished kitchens, we handle every step of your
        cabinet construction project.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-slate-800 rounded-xl p-5 bg-slate-900/40"
          >
            <h3 className="font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-slate-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
