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
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100/50 shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
          CabinetCraft
        </span>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-rose-500 transition-colors duration-200 border-b-2 border-transparent hover:border-rose-300 pb-1"
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