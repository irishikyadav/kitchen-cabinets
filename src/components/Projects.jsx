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
        <h2 className="text-3xl font-bold text-slate-800">Recent cabinet projects</h2>
        <p className="text-slate-600 text-lg max-w-2xl mt-2 leading-relaxed">
          A mix of full new kitchen builds, refacing projects, and custom
          storage installations.
        </p>
      </div>
      <a
        href="#contact"
        className="hidden md:inline-flex px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-400/90 to-pink-400/90 text-white font-semibold shadow-lg hover:shadow-xl hover:from-rose-500 hover:to-pink-500 transition-all duration-300"
      >
        Start a project like these
      </a>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {projects.map((project, index) => (
        <article
          key={project.name}
          className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-rose-100/50 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:bg-white/95 transition-all duration-500 overflow-hidden cursor-pointer"
        >
          {/* Image with overlay */}
          <div className="relative h-56 overflow-hidden rounded-t-3xl">
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-500/10 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </div>
          
          {/* Content */}
          <div className="p-6 space-y-2">
            <div className="flex items-center gap-2 text-xs text-rose-500 font-semibold uppercase tracking-wide">
              <span className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-[10px] font-bold">
                {index + 1}
              </span>
              Project
            </div>
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-rose-600 transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">{project.details}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
