import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, Truck, ShieldCheck, TrendingUp, ArrowRight, CheckCircle, Ship, MapPin
} from 'lucide-react';
import Magnetic from '../components/Magnetic';

// Live SVG Route Map component to replace stock graphics
function RouteMap() {
  return (
    <div className="w-full bg-[#fafbfc] border border-brand-border/60 rounded-lg p-4 h-[180px] flex items-center justify-center relative overflow-hidden">
      <svg viewBox="0 0 320 160" className="w-full h-full text-brand-blue/10">
        {/* Ajman HQ Anchor */}
        <circle cx="160" cy="80" r="6" className="fill-brand-blue animate-pulse" />
        <circle cx="160" cy="80" r="3" className="fill-brand-cyan" />
        
        {/* Destination Nodes */}
        {/* Americas Node */}
        <circle cx="40" cy="60" r="4" className="fill-brand-textMuted" />
        <text x="35" y="48" className="text-[8px] font-bold fill-brand-textHeading">US-NYC</text>
        
        {/* Europe Node */}
        <circle cx="100" cy="40" r="4" className="fill-brand-textMuted" />
        <text x="95" y="28" className="text-[8px] font-bold fill-brand-textHeading">EU-RTM</text>
        
        {/* Asia Node */}
        <circle cx="260" cy="110" r="4" className="fill-brand-textMuted" />
        <text x="255" y="125" className="text-[8px] font-bold fill-brand-textHeading">AS-SIN</text>

        {/* Bezier route connectors with animated dashes */}
        <path d="M 160 80 Q 100 70 40 60" fill="none" stroke="url(#route-grad)" strokeWidth="2" className="animate-dash-line" />
        <path d="M 160 80 Q 130 50 100 40" fill="none" stroke="url(#route-grad)" strokeWidth="2" className="animate-dash-line" />
        <path d="M 160 80 Q 210 100 260 110" fill="none" stroke="url(#route-grad)" strokeWidth="2" className="animate-dash-line" />

        {/* Gradients */}
        <defs>
          <linearGradient id="route-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0082CA" />
            <stop offset="100%" stopColor="#00A8CC" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute bottom-2 left-3 flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-brand-textHeading">
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
        <span>Live Route Monitor</span>
      </div>
    </div>
  );
}

// Simple dynamic growth chart component
function GrowthChart() {
  return (
    <div className="w-full bg-[#fafbfc] border border-brand-border/60 rounded-lg p-4 h-[120px] flex items-end relative overflow-hidden">
      <svg viewBox="0 0 200 80" className="w-full h-full text-brand-blue/10">
        <path 
          d="M 10 70 L 40 60 L 80 65 L 120 40 L 160 45 L 190 20" 
          fill="none" 
          stroke="url(#route-grad)" 
          strokeWidth="2.5" 
          strokeLinecap="round"
        />
        {/* Dots on nodes */}
        <circle cx="190" cy="20" r="3.5" className="fill-brand-cyan" />
        <circle cx="120" cy="40" r="3.5" className="fill-brand-blue" />
      </svg>
      <div className="absolute top-2 right-3 text-[0.65rem] font-semibold text-brand-cyan">
        +34.2% YoY
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      
      {/* Hero Section - Offset Grid Layout with Matrix Grid Background */}
      <section className="relative min-h-[75vh] py-16 flex items-center bg-grid-matrix border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative">
          
          {/* Subtle plus marks for architectural detail */}
          <div className="absolute top-0 left-0 text-brand-textMuted/40 font-mono text-[10px] pointer-events-none select-none">+ 25.4052° N</div>
          <div className="absolute bottom-0 right-0 text-brand-textMuted/40 font-mono text-[10px] pointer-events-none select-none">+ 55.5136° E</div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-6 z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/5 border border-brand-blue/20 rounded-full text-xs font-semibold text-brand-blue mb-4 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                <span>Trade Operations Active</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.15] text-brand-navy mb-5 tracking-tight">
                Global Trading <br />
                <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-sm sm:text-base text-brand-textBody mb-6 max-w-lg leading-relaxed">
                Your trusted partner in UAE-based general trading — import &amp; export, wholesale &amp; retail supply, vegetables, gas items, household &amp; disposable goods, charcoal, pickles and more.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Magnetic>
                  <Link 
                    to="/contact" 
                    className="px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-medium text-sm rounded-full shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/35 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link 
                    to="/services" 
                    className="px-6 py-2.5 bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-medium text-sm rounded-full transition-all duration-300 flex items-center hover:-translate-y-0.5"
                  >
                    Explore Services
                  </Link>
                </Magnetic>
              </div>
            </motion.div>

            {/* Right Side Offset Image (Robust Unsplash Source) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-6 flex justify-center relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-brand-border/60 w-full max-w-md lg:max-w-none">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80" 
                  alt="Milano General Trading LLC - cargo and supply operations" 
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/10] transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose Milano General Trading LLC Section - Bento Grid Layout */}
      <section className="py-16 bg-brand-alt border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/5 mb-3">
              Value Proposition
            </span>
            <h2 className="text-3xl font-bold text-brand-navy mb-3">
              Why Choose Milano General Trading LLC?
            </h2>
            <p className="text-brand-textBody leading-relaxed text-sm">
              We combine decades of trading expertise with cutting-edge technology to deliver exceptional results for our partners.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-stretch">
            
            {/* Cell 1: Overview Block (Span 3) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3 bg-white border border-brand-border/60 rounded-xl p-8 shadow-ambient flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[0.65rem] font-mono tracking-widest text-brand-textMuted uppercase">HQ Registration</span>
                  <span className="inline-flex items-center gap-1 text-[0.65rem] px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded border border-emerald-100 font-bold uppercase">
                    Active
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-textHeading mb-2">Milano General Trading LLC</h3>
                <p className="text-brand-textBody text-sm leading-relaxed mb-6">
                  Providing full-spectrum trading operations — import/export, wholesale supply, retail market sales, vegetables, gas items, household &amp; disposable items, charcoal, and food products like pickles — out of our Ajman headquarters. Trusted by clients across the UAE and beyond.
                </p>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-brand-textMuted font-mono">
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                <span>Ajman Freezone, UAE</span>
              </div>
            </motion.div>

            {/* Cell 2: Global Reach map (Span 3) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3 bg-white border border-brand-border/60 rounded-xl p-8 shadow-ambient flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-brand-textHeading mb-2 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-brand-blue" />
                  Global Reach
                </h3>
                <p className="text-brand-textBody text-xs leading-relaxed mb-4">
                  Delivering trade linkages between UAE hubs and international freight systems.
                </p>
              </div>
              <RouteMap />
            </motion.div>

            {/* Cell 3: Fast Delivery (Span 2) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white border border-brand-border/60 rounded-xl p-6 shadow-ambient flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-brand-textHeading mb-1.5 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-brand-blue" />
                  Fast Delivery
                </h3>
                <p className="text-brand-textBody text-xs leading-relaxed mb-4">
                  Optimized schedules and container handling minimize delays.
                </p>
              </div>
              <div className="text-center py-4 bg-brand-alt border border-brand-border/60 rounded-lg">
                <div className="text-3xl font-extrabold text-brand-blue">99.8%</div>
                <div className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-textMuted mt-1">On-Time Logistics</div>
              </div>
            </motion.div>

            {/* Cell 4: Secure Trading (Span 2) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white border border-brand-border/60 rounded-xl p-6 shadow-ambient flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-brand-textHeading mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" />
                  Secure Trading
                </h3>
                <p className="text-brand-textBody text-xs leading-relaxed mb-4">
                  Full security validation, customs clearing compliance, and legal support.
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                {["VAT Regd", "WCO Compliant", "Dubai Custom ID"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-semibold text-brand-textHeading">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Cell 5: Growth Focused (Span 2) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white border border-brand-border/60 rounded-xl p-6 shadow-ambient flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-brand-textHeading mb-1.5 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-blue" />
                  Growth Focused
                </h3>
                <p className="text-brand-textBody text-xs leading-relaxed mb-4">
                  Enhancing operational capabilities and commercial volume.
                </p>
              </div>
              <GrowthChart />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Services Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Image Side (Robust Unsplash Source) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[16/10] sm:aspect-[4/3] group border border-brand-border/40">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
                  alt="Milano General Trading LLC - warehouse and supply operations"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6 lg:pl-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/5 mb-3">
                Services Overview
              </span>
              <h2 className="text-3xl font-bold text-brand-navy mb-4 leading-tight">
                Our Services
              </h2>
              <p className="text-brand-textBody leading-relaxed text-sm sm:text-base mb-6">
                From import and export to logistics and consulting, we provide comprehensive trading solutions tailored to your business needs.
              </p>
              <Magnetic>
                <Link 
                  to="/services" 
                  className="px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-medium text-sm rounded-full shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/35 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
                >
                  View All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Metrics Banner Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-brand-navy to-[#123e6b] text-white rounded-2xl px-8 py-10 md:p-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-[-50%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-cyan/10 blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 text-center lg:text-left">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold mb-2 text-white">Ready to Grow?</h2>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Let's discuss how Milano General Trading LLC can support your business — import, export, wholesale, retail and more.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="text-3xl font-bold text-brand-cyan mb-1">20+ Years</div>
              <div className="text-[0.65rem] uppercase tracking-wider text-white/60">of trading excellence</div>
            </div>

            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <Magnetic>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-white text-brand-navy font-semibold text-sm rounded-full shadow-md hover:bg-brand-ice hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Contact Us Today
                </Link>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
