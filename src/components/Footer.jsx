import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#051422] text-white/70 pt-12 md:pt-20 pb-8 text-[0.88rem] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          
          {/* Logo & Intro Column — full-width on mobile */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-[38px] h-[38px] bg-gradient-to-br from-brand-blue to-brand-cyan text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md">
                M
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-xl tracking-tight">MILANO</span>
                <span className="text-[0.62rem] tracking-[0.12em] uppercase text-brand-cyan font-semibold mt-0.5">
                  General Trading LLC
                </span>
              </div>
            </Link>
            <p className="mt-2 text-white/60 leading-relaxed">
              Import, export, wholesale &amp; retail supply of vegetables, gas items, household &amp; disposable goods, charcoal, pickles and more — based in Ajman, UAE.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h5 className="text-white font-semibold text-base mb-6">Quick Links</h5>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="hover:text-brand-cyan hover:pl-1 transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-cyan hover:pl-1 transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-cyan hover:pl-1 transition-all duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/employees" className="hover:text-brand-cyan hover:pl-1 transition-all duration-300">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-cyan hover:pl-1 transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h5 className="text-white font-semibold text-base mb-6">Services</h5>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/services" className="hover:text-brand-cyan hover:pl-1 transition-all duration-300">
                  Import/Export
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-cyan hover:pl-1 transition-all duration-300">
                  Distribution
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-cyan hover:pl-1 transition-all duration-300">
                  Logistics
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-cyan hover:pl-1 transition-all duration-300">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column — full-width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <h5 className="text-white font-semibold text-base mb-6">Contact</h5>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="leading-relaxed">Ajman, UAE, P.O. Box: 20405</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-cyan shrink-0" />
                <a href="tel:+971625389886" className="hover:text-brand-cyan transition-colors">
                  +971 6 2538 9886
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-cyan shrink-0" />
                <a href="mailto:info@milanotrade.com" className="hover:text-brand-cyan transition-colors">
                  info@milanotrade.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {currentYear} Milano General Trading L.L.C. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
