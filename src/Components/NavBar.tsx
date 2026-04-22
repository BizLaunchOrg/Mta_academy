

import React, { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Bootcamps", href: "#bootcamps" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("#hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);

  // Scrollspy
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Indicator movement
  useEffect(() => {
    requestAnimationFrame(() => {
      const index = navItems.findIndex((i) => i.href === active);
      const el = linkRefs.current[index];
      const container = containerRef.current;
      const indicator = indicatorRef.current;

      if (!el || !container || !indicator) return;

      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      const left = elRect.left - containerRect.left;
      const width = elRect.width;

      indicator.style.transform = `translateX(${left}px)`;
      indicator.style.width = `${width}px`;
    });
  }, [active]);

  const handleMobileNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

          {/* LOGO */}
          <div className="text-2xl font-black tracking-tighter">
            MTA Academy
          </div>

          {/* DESKTOP LINKS */}
          <div
            ref={containerRef}
            className="hidden md:flex items-center gap-10 relative pb-1"
          >
            {navItems.map((item, i) => (
              <a
                key={item.href}
                ref={(el) => (linkRefs.current[i] = el)}
                href={item.href}
                className={`font-bold transition-colors ${
                  active === item.href
                    ? "text-[#6200EE]"
                    : "text-slate-600 hover:text-[#6200EE]"
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* INDICATOR */}
            <span
              ref={indicatorRef}
              className="absolute -bottom-1 left-0 h-[2px] bg-[#6200EE] transition-all duration-300 ease-out"
              style={{ width: 0, transform: "translateX(0px)" }}
            />
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Button >Get Started</Button>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[2px] bg-slate-700 transition-all duration-300 origin-center ${
                  menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
                }`}
              />
              <span
                className={`block h-[2px] bg-slate-700 transition-all duration-300 ${
                  menuOpen ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block h-[2px] bg-slate-700 transition-all duration-300 origin-center ${
                  menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
                }`}
              />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-80 border-t border-slate-100" : "max-h-0"
          }`}
        >
          <div className="flex flex-col px-6 py-4 gap-4 bg-white/95">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleMobileNav(item.href)}
                className={`font-bold text-sm transition-colors py-1 ${
                  active === item.href
                    ? "text-[#6200EE]"
                    : "text-slate-600 hover:text-[#6200EE]"
                }`}
              >
                {item.label}
              </a>
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