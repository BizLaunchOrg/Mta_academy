import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="w-full  border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row justify-between items-center gap-10">

        {/* BRAND */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-black tracking-tight">
            MTA Academy
          </div>

    <p className="text-gray-400 text-sm text-center md:text-left animate-pulse">
  © {new Date().getFullYear()} MTA Academy. Cultivating the Academic Luminary.
</p>
        </div>

        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {["Privacy", "Terms", "Faculty", "Alumni"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4">
          
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-300 hover:text-indigo-400 hover:border-indigo-400 transition-all">
            <IoShareSocialOutline className="text-lg" />
          </button>

          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-300 hover:text-indigo-400 hover:border-indigo-400 transition-all">
            <MdAlternateEmail className="text-lg" />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;