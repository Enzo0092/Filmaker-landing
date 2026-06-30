import { motion } from "motion/react";
import { Film, Instagram, Mail, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-2 rounded-lg">
                <Film className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl text-white">Filmmaker</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Transforming ideas into cinematic stories through professional filmmaking and video editing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4 text-lg">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-900 hover:bg-amber-500 p-3 rounded-lg transition-all duration-300 group"
              >
                <MessageSquare className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" />
              </a>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-900 hover:bg-amber-500 p-3 rounded-lg transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" />
              </a>
              <a
                href="mailto:contact@filmmaker.com"
                className="bg-neutral-900 hover:bg-amber-500 p-3 rounded-lg transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 text-center">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Professional Filmmaker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
