// src/components/Navbar.jsx
const Navbar = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="text-lg font-semibold tracking-tight">
          CabinetCraft Kitchens
        </span>
        <div className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
