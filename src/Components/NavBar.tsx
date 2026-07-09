import React, { useState } from "react";
import { whatsappLink } from "../utils/whatsapp";

const navItems = [
  { label: "Home", hash: "#hero" },
  { label: "About", hash: "#about" },
  { label: "Courses", hash: "#courses" },
  { label: "Coaches", hash: "#coaches" },
  { label: "Categories", hash: "#categories" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  const handleNavClick = (hash: string) => {
    setActiveHash(hash);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 hero-shell border-b border-violet-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#hero"
            onClick={() => handleNavClick("#hero")}
            className="flex-shrink-0 text-2xl font-bold tracking-tight text-gray-900"
          >
            MTA Academy<span className="text-[#6200EE]">.</span>
          </a>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={item.hash}
                onClick={() => handleNavClick(item.hash)}
                className={`transition-colors ${
                  activeHash === item.hash
                    ? "text-[#6200EE] font-semibold"
                    : "text-gray-600 hover:text-[#6200EE]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={whatsappLink("getStarted")}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] bg-gray-900 transition-all duration-300 origin-center ${
                menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
              }`}
            />
            <span
              className={`block h-[2px] bg-gray-900 transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-[2px] bg-gray-900 transition-all duration-300 origin-center ${
                menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-violet-100/50 hero-shell ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navItems.map((item) => (
            <a
              key={item.hash}
              href={item.hash}
              onClick={() => handleNavClick(item.hash)}
              className={`font-medium text-sm py-1 transition-colors ${
                activeHash === item.hash
                  ? "text-[#6200EE] font-semibold"
                  : "text-gray-600 hover:text-[#6200EE]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink("getStarted")}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium text-center hover:bg-gray-800 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
