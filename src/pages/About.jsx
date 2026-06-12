import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, ShieldCheck } from 'lucide-react';
import Magnetic from '../components/Magnetic';

export default function About() {
  const values = [
    {
      icon: <Award className="w-7 h-7 text-brand-blue group-hover:text-white" />,
      title: "Excellence",
      desc: "Committed to delivering the highest quality services and solutions."
    },
    {
      icon: <Users className="w-7 h-7 text-brand-blue group-hover:text-white" />,
      title: "Partnership",
      desc: "Building long-term relationships based on trust and mutual success."
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-brand-blue group-hover:text-white" />,
      title: "Innovation",
      desc: "Leveraging technology and expertise to stay ahead in global markets."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-brand-blue group-hover:text-white" />,
      title: "Integrity",
      desc: "Operating with transparency and ethical standards in all dealings."
    }
  ];

  const milestones = [
    { year: "2004", text: "Founded Milano General Trading" },
    { year: "2010", text: "Expanded to international markets" },
    { year: "2015", text: "Established logistics hub in Ajman" },
    { year: "2020", text: "Launched digital trading platform" },
    { year: "2024", text: "Serving 500+ clients globally" }
  ];

  return (
    <div>
      
      {/* Intro Header */}
      <section className="bg-gradient-to-b from-brand-blue/5 to-white pt-16 pb-10 text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <span className="text-[0.65rem] font-mono tracking-widest text-brand-textMuted uppercase block mb-2">
            REGISTRY CODE: MIL-2004 // 25.4052° N
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-brand-navy mb-4 tracking-tight"
          >
            About Milano General Trading
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-brand-textBody leading-relaxed max-w-xl mx-auto"
          >
            A trusted name in global trading, connecting businesses and markets with innovative solutions and unwavering commitment to excellence.
          </motion.p>
        </div>
      </section>

      {/* Our Story & Quick Info Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Story text */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/5 mb-3">
                  Corporate History
                </span>
                <h2 className="text-2xl font-bold text-brand-navy">Our Story</h2>
              </div>
              <p className="lead font-medium text-brand-textHeading text-sm sm:text-base mb-4 leading-relaxed">
                Founded in 2004, Milano General Trading emerged from a vision to revolutionize global commerce. What started as a small trading operation has grown into a comprehensive trading solutions provider serving clients across multiple continents.
              </p>
              <p className="text-brand-textBody text-xs sm:text-sm leading-relaxed mb-4">
                Based in Ajman, UAE, we have built a reputation for reliability, expertise, and innovative approaches to trading challenges. Our team combines traditional trading wisdom with modern technology to deliver exceptional results.
              </p>
              <p className="text-brand-textBody text-xs sm:text-sm leading-relaxed mb-0">
                Today, Milano is recognized as a leader in import/export, distribution, and logistics services, trusted by hundreds of businesses worldwide.
              </p>
            </motion.div>

            {/* Quick checklist card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="bg-brand-alt border border-brand-border/60 rounded-xl p-6 shadow-ambient">
                <h4 className="text-base font-bold text-center text-brand-navy mb-4">Company Profile Details</h4>
                <ul className="flex flex-col gap-3">
                  {[
                    { label: "VAT Registration", val: "104320716000003" },
                    { label: "Corporate Location", val: "Ajman, United Arab Emirates" },
                    { label: "Office P.O. Box", val: "P.O. Box 20405" },
                    { label: "Contact Number", val: "+971 6 2538 9886" },
                    { label: "Direct E-mail", val: "info@milanotrade.com" }
                  ].map((row, idx) => (
                    <li key={idx} className="flex flex-col pb-2.5 border-b border-black/5 last:border-b-0 last:pb-0">
                      <span className="text-[0.65rem] uppercase tracking-wide text-brand-textMuted font-semibold">
                        {row.label}
                      </span>
                      <span className="text-brand-textHeading font-medium text-xs sm:text-sm mt-0.5">
                        {row.val}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-brand-alt border-y border-brand-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/5 mb-3">
              Our Foundations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
              Our Core Values
            </h2>
            <p className="text-brand-textBody leading-relaxed text-sm">
              These principles guide every decision and interaction at Milano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-white border border-brand-border/60 rounded-xl p-6 shadow-ambient hover:shadow-ambient-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-blue to-brand-cyan scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                <div className="w-11 h-11 rounded-lg bg-brand-blue/5 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-cyan transition-colors duration-300">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-brand-textHeading mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-brand-textBody text-xs leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Journey Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/5 mb-3">
              Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
              Our Journey
            </h2>
            <p className="text-brand-textBody leading-relaxed text-sm">
              Key milestones in Milano growth and evolution.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto py-4">
            {/* Middle vertical line */}
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-border -translate-x-1/2 z-0" />
            
            <div className="flex flex-col gap-8">
              {milestones.map((milestone, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`timeline-item flex flex-col md:flex-row relative w-full ${
                      isLeft ? 'timeline-item-left md:justify-end' : 'timeline-item-right md:justify-start'
                    }`}
                  >
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                      <div className="bg-brand-alt border border-brand-border/60 rounded-xl p-5 shadow-ambient hover:shadow-md hover:border-brand-blue/20 hover:-translate-y-0.5 transition-all duration-300">
                        <div className="text-lg font-bold text-brand-blue mb-0.5">
                          {milestone.year}
                        </div>
                        <p className="text-brand-textHeading font-medium text-xs sm:text-sm mb-0">
                          {milestone.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Let's Work Together */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-brand-navy to-[#123e6b] text-white rounded-2xl px-8 py-10 text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-[-50%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-cyan/10 blur-[80px] pointer-events-none" />
          
          <div className="max-w-xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold mb-3 text-white">Let's Work Together</h2>
            <p className="text-white/80 leading-relaxed mb-6 text-xs sm:text-sm">
              Whether you looking to expand your trading operations or need reliable logistics support, Milano is here to help.
            </p>
            <Magnetic>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-white text-brand-navy font-semibold text-sm rounded-full shadow-md hover:bg-brand-ice hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Start a Conversation
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
