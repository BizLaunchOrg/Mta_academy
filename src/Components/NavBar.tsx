

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./ui/Button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Enrollment", to: "/enrollment" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileNav = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
        <div
          className={`max-w-6xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between rounded-full backdrop-blur-xl border transition-all duration-300 ${
            isScrolled
              ? "bg-[#6200EE]/90 border-violet-300/30 shadow-[0_12px_38px_rgba(62,7,155,0.45)]"
              : "bg-white/75 border-white/50 shadow-[0_10px_32px_rgba(15,23,42,0.12)]"
          }`}
        >

          {/* LOGO */}
          <Link
            to="/"
            className={`text-2xl font-black tracking-tighter transition-colors ${
              isScrolled ? "text-white" : "text-[#3B1F6B]"
            }`}
          >
            MTA Academy
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10 relative pb-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `font-bold transition-colors ${
                    isScrolled
                      ? isActive
                        ? "text-white"
                        : "text-violet-100 hover:text-white"
                      : isActive
                      ? "text-[#6200EE]"
                      : "text-slate-700 hover:text-[#6200EE]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link to="/enrollment" className="hidden md:inline-flex">
              <Button>Get Started</Button>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[2px] transition-all duration-300 origin-center ${
                  isScrolled ? "bg-white" : "bg-[#3B1F6B]"
                } ${
                  menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
                }`}
              />
              <span
                className={`block h-[2px] transition-all duration-300 ${
                  isScrolled ? "bg-white" : "bg-[#3B1F6B]"
                } ${
                  menuOpen ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block h-[2px] transition-all duration-300 origin-center ${
                  isScrolled ? "bg-white" : "bg-[#3B1F6B]"
                } ${
                  menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
                }`}
              />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`max-w-6xl mx-auto md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-80 mt-3" : "max-h-0"
          }`}
        >
          <div
            className={`flex flex-col px-5 py-4 gap-4 rounded-2xl border backdrop-blur-xl ${
              isScrolled
                ? "bg-[#4f00c2]/95 border-violet-300/30"
                : "bg-white/90 border-white/50"
            }`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={handleMobileNav}
                className={({ isActive }) =>
                  `font-bold text-sm transition-colors py-1 ${
                    isScrolled
                      ? isActive
                        ? "text-white"
                        : "text-violet-100 hover:text-white"
                      : isActive
                      ? "text-[#6200EE]"
                      : "text-slate-700 hover:text-[#6200EE]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer OUTSIDE nav — so it doesn't double the nav height */}
      {/* <div className="h-[73px]" /> */}
    </>
  );
};

export default Navbar;