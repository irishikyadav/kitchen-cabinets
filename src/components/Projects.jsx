// src/components/Projects.jsx
const projects = [
  {
    name: "Warm oak family kitchen",
    details: "L‑shaped layout with tall pantry, island drawers, and hidden recycling.",
    image: "/images/pexels-curtis-adams-1694007-18038117.jpg",
  },
  {
    name: "Compact city galley",
    details: "Handleless cabinets, full‑height storage, integrated pull‑out pantry.",
    image: "/images/cat-han-VgyN_CWXQVM-unsplash.jpg",
  },
  {
    name: "Open‑plan entertainer",
    details: "Large island, bar cabinets, appliance garage, and display shelving.",
    image: "/images/pexels-curtis-adams-1694007-5008388.jpg",
  },
  {
    name: "Matte graphite upgrade",
    details: "Refaced existing cabinets with new doors, drawers, and hardware.",
    image: "/images/pexels-artbovich-6198663.jpg",
  },
  {
    name: "Light & bright shaker",
    details: "Classic shaker profiles with modern storage internals and lighting.",
    image: "/images/pexels-l-ng-studio-3030613-16648045.jpg",
  },
  {
    name: "Utility & laundry wall",
    details: "Tall storage, broom cupboard, and integrated laundry cabinetry.",
    image: "/images/pexels-curtis-adams-1694007-4030050.jpg",
  },
];

const Projects = () => (
  <section className="space-y-6">
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-semibold">Recent cabinet projects</h2>
        <p className="text-slate-300 text-sm max-w-2xl mt-2">
          A mix of full new kitchen builds, refacing projects, and custom
          storage installations.
        </p>
      </div>
      <a
        href="#contact"
        className="hidden md:inline-flex text-xs rounded-full border border-slate-700 px-4 py-2 text-slate-200"
      >
        Start a project like these
      </a>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.name}
          className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-[0_18px_60px_rgba(15,23,42,0.8)]"
        >
          <div className="relative h-40 overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-80" />
          </div>
          <div className="p-4 space-y-1">
            <h3 className="text-sm font-semibold">{project.name}</h3>
            <p className="text-[11px] text-slate-300">{project.details}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
