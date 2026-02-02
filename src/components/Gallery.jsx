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
  <section className="space-y-6">
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-semibold">Cabinet details gallery</h2>
        <p className="text-slate-300 text-sm max-w-2xl mt-2">
          Joinery, hardware, and finish details captured up close so you can
          see how everything comes together.
        </p>
      </div>
    </div>

    <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
      {gallery.map((src, idx) => (
        <div
          key={src}
          className={`overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/60 ${
            idx === 0 ? "md:row-span-2" : ""
          }`}
        >
          <img
            src={src}
            alt="Cabinet detail"
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
