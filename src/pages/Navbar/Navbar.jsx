import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaEnvelope, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";

const Navbar = ({ onContactClick, onProjectsClick, onEducation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const runHomeAction = (action) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      action?.();
      return;
    }
    navigate("/");
    window.setTimeout(() => action?.(), 100);
  };

  const navItems = [
    { label: "Skills", action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) },
    { label: "Education", action: onEducation },
    { label: "Projects", action: onProjectsClick },
    { label: "Contact", action: onContactClick },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800/90 bg-[#070b13]/95 text-white shadow-xl shadow-black/20 backdrop-blur-xl">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" onClick={() => setIsOpen(false)} className="min-w-0 text-base font-bold tracking-wide sm:text-xl">
          <span className="text-cyan-400">&lt;I/&gt;</span>{" "}
          <span className="hidden text-white min-[390px]:inline">INAL MENDONCA</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <Link to="/" className="font-medium text-cyan-400">Home</Link>
          <Link to="/certificates" className="text-slate-300 transition hover:text-cyan-400">Certifications</Link>
          {navItems.map((item) => (
            <button key={item.label} type="button" onClick={() => runHomeAction(item.action)} className="text-slate-300 transition hover:text-cyan-400">
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <a href="https://github.com/INAL357" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="nav-social"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/inal-mendonca-a9b9a235a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="nav-social"><FaLinkedin /></a>
          <a href="mailto:inalmendonca2@gmail.com" aria-label="Email" className="nav-social"><FaEnvelope /></a>
        </div>

        <button type="button" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-xl text-slate-200 lg:hidden" aria-label="Toggle navigation" aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 bg-[#090e18] px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            <Link to="/" onClick={() => setIsOpen(false)} className="mobile-nav-link">Home</Link>
            <Link to="/certificates" onClick={() => setIsOpen(false)} className="mobile-nav-link">Certifications</Link>
            {navItems.map((item) => (
              <button key={item.label} type="button" onClick={() => runHomeAction(item.action)} className="mobile-nav-link text-left">{item.label}</button>
            ))}
            <div className="mt-3 flex gap-2 border-t border-slate-800 pt-4 sm:hidden">
              <a href="https://github.com/INAL357" target="_blank" rel="noopener noreferrer" className="mobile-social"><FaGithub /> GitHub</a>
              <a href="mailto:inalmendonca2@gmail.com" className="mobile-social"><FaEnvelope /> Mail</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
