// src/components/Footer.jsx
const Footer = () => (
  <footer className="border-t border-slate-800">
    <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
      <span>© {new Date().getFullYear()} CabinetCraft Kitchens. All rights reserved.</span>
      <span>Cabinet construction · Installation · Wardrobes</span>
    </div>
  </footer>
);

export default Footer;
