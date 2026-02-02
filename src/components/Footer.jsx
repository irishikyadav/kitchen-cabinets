// src/components/Footer.jsx
const Footer = () => (
  <footer className="bg-gradient-to-br from-white/60 via-rose-50/40 to-pink-50/40 backdrop-blur-xl border-t-2 border-rose-100/60 shadow-2xl">
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Top section */}
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Logo & description */}
        <div className="text-center md:text-left">
          <div className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-4">
            CabinetCraft
          </div>
          <p className="text-slate-600 text-lg leading-relaxed max-w-md">
            Crafting beautiful, functional kitchens for Wellington homes. 
            From design to installation, all under one roof.
          </p>
        </div>

        {/* Quick links */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-slate-800 mb-4">Quick links</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <a href="#home" className="text-slate-600 hover:text-rose-500 hover:underline transition-colors duration-200 block p-2 rounded-xl hover:bg-rose-50/50">Home</a>
            <a href="#services" className="text-slate-600 hover:text-rose-500 hover:underline transition-colors duration-200 block p-2 rounded-xl hover:bg-rose-50/50">Services</a>
            <a href="#projects" className="text-slate-600 hover:text-rose-500 hover:underline transition-colors duration-200 block p-2 rounded-xl hover:bg-rose-50/50">Projects</a>
            <a href="#gallery" className="text-slate-600 hover:text-rose-500 hover:underline transition-colors duration-200 block p-2 rounded-xl hover:bg-rose-50/50">Gallery</a>
            <a href="#contact" className="text-slate-600 hover:text-rose-500 hover:underline transition-colors duration-200 block p-2 rounded-xl hover:bg-rose-50/50">Contact</a>
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-slate-800 mb-4">Get in touch</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-rose-100/50 hover:bg-white/90 transition-all duration-200">
              <span className="text-rose-500 text-xl">📞</span>
              <div>
                <p className="font-semibold text-slate-700">Phone</p>
                <a href="tel:+64211234567" className="text-rose-600 hover:text-rose-700 font-semibold">021 123 4567</a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-rose-100/50 hover:bg-white/90 transition-all duration-200">
              <span className="text-indigo-500 text-xl">✉️</span>
              <div>
                <p className="font-semibold text-slate-700">Email</p>
                <a href="mailto:hello@cabinetcraft.nz" className="text-indigo-600 hover:text-indigo-700 font-semibold">hello@cabinetcraft.nz</a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-rose-100/50 hover:bg-white/90 transition-all duration-200">
              <span className="text-emerald-500 text-xl">📍</span>
              <div>
                <p className="font-semibold text-slate-700">Location</p>
                <p className="text-slate-600">Auckland, NZ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-12 border-t-2 border-rose-100/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center text-sm text-slate-500">
          <p>© 2026 CabinetCraft Kitchens. Crafted with care in New Zealand.</p>
          <div className="flex gap-6 text-xs">
            <a href="#privacy" className="hover:text-rose-500 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-rose-500 transition-colors">Terms</a>
            <a href="#cookies" className="hover:text-rose-500 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
