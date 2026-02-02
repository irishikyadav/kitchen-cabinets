// src/components/Gallery.jsx
const gallery = [
  "/images/pexels-anabella-castro-3934663-6264414.jpg",
  "/images/pexels-houzlook-3926542.jpg",
  "/images/pexels-curtis-adams-1694007-10827406.jpg",
  "/images/pexels-artbovich-6969864.jpg",
  "/images/pexels-artbovich-6903246.jpg",
  "/images/pexels-artbovich-6283972.jpg",
];

const Gallery = () => (
  <section className="space-y-8">
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-bold text-slate-800">Cabinet details gallery</h2>
        <p className="text-slate-600 text-lg max-w-2xl mt-2 leading-relaxed">
          Joinery, hardware, and finish details captured up close so you can
          see how everything comes together.
        </p>
      </div>
    </div>

    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {gallery.map((src, idx) => (
        <div
          key={src}
          className={`group relative overflow-hidden rounded-3xl border-4 border-white/50 shadow-2xl hover:shadow-3xl hover:border-rose-200/70 transition-all duration-500 cursor-pointer bg-gradient-to-br from-white/90 to-rose-50/70 backdrop-blur-sm ${
            idx === 0 ? "md:row-span-2" : "h-48 md:h-56"
          }`}
        >
          <img
            src={src}
            alt="Cabinet detail"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 via-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-rose-200/50 text-xs font-semibold text-rose-600">
              View details
            </div>
          </div>
          
          {/* Decorative corner accent */}
          <div className="absolute top-3 right-3 w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-400/30 to-pink-400/20 border-2 border-white/50 group-hover:scale-110 transition-all duration-300" />
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
