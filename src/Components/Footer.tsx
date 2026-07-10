import React from "react";
import { whatsappLink } from "../utils/whatsapp";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="text-2xl font-bold tracking-tight mb-4 text-gray-900">
              MTA Academy<span className="text-[#6200EE]">.</span>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Cultivating the academic luminary. We transform raw potential into
              clarity, confidence, and commanding presence.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#6200EE] flex items-center justify-center text-white text-sm font-bold">
                f
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                in
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                ig
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company Info</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#hero" className="hover:text-[#6200EE] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#6200EE] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#6200EE] transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-[#6200EE] transition-colors">
                  Our Coaches
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink("contact")}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#6200EE] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Top Categories</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#categories" className="hover:text-[#6200EE] transition-colors">
                  Public Speaking
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#6200EE] transition-colors">
                  Communication Strategy
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#6200EE] transition-colors">
                  Diction
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Get in Touch</h4>
            <p className="text-sm text-gray-600 mb-4">
              Ready to transform your communication? Reach out and start your
              journey today.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-[#6200EE]">📍</span>
                Lagos, Nigeria
              </div>
              <a
                href={whatsappLink("contact")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#6200EE] transition-colors"
              >
                <span className="text-[#6200EE]">📞</span>
                +234 916 080 7076
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MTA Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
