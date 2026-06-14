import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`glass-nav sticky top-0 left-0 right-0 w-full transition-all duration-300 z-50 ${
        scrolled 
          ? 'py-3 bg-white/95 shadow-sm border-b border-brand-border/40' 
          : 'py-5 bg-white/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <div className="w-[38px] h-[38px] bg-gradient-to-br from-brand-blue to-brand-cyan text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md shadow-brand-blue/20">
            M
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-brand-navy font-bold text-xl tracking-tight">MILANO</span>
            <span className="text-[0.62rem] tracking-[0.12em] uppercase text-brand-blue font-semibold mt-0.5">
              General Trading LLC
            </span>
          </div>
        </Link>

        {/* Navigation Items (Desktop) */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {['Home', 'About', 'Services', 'Employees', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) => 
                  `font-medium text-sm transition-all duration-300 relative py-1 ${
                    isActive 
                      ? 'text-brand-blue after:scale-x-100' 
                      : 'text-brand-textHeading hover:text-brand-blue after:scale-x-0'
                  } after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[80%] after:h-[2px] after:bg-brand-blue after:transition-all after:duration-300 after:origin-center`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          <Magnetic>
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-medium text-sm rounded-full shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/30 transition-all duration-300 hover:-translate-y-[1px]"
            >
              Get Started
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Menu Hamburguer Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-brand-textHeading focus:outline-none p-2"
          aria-label="Toggle Navigation"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-brand-textHeading rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
            <span className={`w-full h-0.5 bg-brand-textHeading rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-brand-textHeading rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      <div 
        className={`lg:hidden fixed top-[69px] left-0 w-full bg-white border-b border-brand-border/60 shadow-lg transition-all duration-300 ease-out overflow-hidden z-40 ${
          isOpen ? 'max-h-[300px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center gap-5 px-6">
          {['Home', 'About', 'Services', 'Employees', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={closeMenu}
              className={({ isActive }) => 
                `font-medium text-base transition-all duration-300 py-1 ${
                  isActive ? 'text-brand-blue' : 'text-brand-textHeading hover:text-brand-blue'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className="w-full text-center px-6 py-2.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-medium rounded-full shadow-md mt-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
