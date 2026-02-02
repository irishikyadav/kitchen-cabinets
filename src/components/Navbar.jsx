// src/components/Navbar.jsx
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#projects", label: "Projects" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-rose-100/50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
          CabinetCraft
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-slate-700 hover:text-rose-500 hover:border-b-2 hover:border-rose-400 py-1 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-rose-50 transition-colors"
        >
          <div className={`flex flex-col gap-1.5 w-6 ${mobileOpen ? 'space-y-0' : ''}`}>
            <span className={`h-0.5 w-full bg-slate-800 rounded transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`h-0.5 w-full bg-slate-800 rounded transition-opacity duration-200 ${mobileOpen ? 'opacity-0 -translate-x-1' : ''}`}></span>
            <span className={`h-0.5 w-4/5 bg-slate-800 rounded transition-transform duration-200 origin-left ${mobileOpen ? '-rotate-45 -translate-y-1.5 w-full' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-rose-100/50 px-4 py-6 shadow-lg">
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl font-semibold text-slate-800 hover:text-rose-500 hover:bg-rose-50 px-4 py-3 rounded-xl transition-all duration-200 text-center"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
