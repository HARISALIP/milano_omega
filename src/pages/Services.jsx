import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Ship, Truck, Box, Briefcase, FileText, Headphones, 
  Check, ArrowRight, GraduationCap, Cpu, ShieldAlert, Award
} from 'lucide-react';
import Magnetic from '../components/Magnetic';

export default function Services() {
  const serviceList = [
    {
      icon: <Ship className="w-6 h-6 text-brand-blue" />,
      title: "Import & Export",
      desc: "Comprehensive import and export solutions connecting you to global markets. We handle documentation, customs clearance, and regulatory compliance.",
      bullets: ["Customs clearance", "Documentation", "Regulatory compliance", "Market access"]
    },
    {
      icon: <Truck className="w-6 h-6 text-brand-blue" />,
      title: "Logistics & Distribution",
      desc: "Efficient logistics network ensuring timely delivery of goods. From warehousing to last-mile delivery, we manage the entire supply chain.",
      bullets: ["Warehousing", "Distribution", "Supply chain management", "Last-mile delivery"]
    },
    {
      icon: <Box className="w-6 h-6 text-brand-blue" />,
      title: "Wholesale Trading",
      desc: "Direct access to quality products at competitive wholesale prices. We source from verified suppliers and ensure product quality.",
      bullets: ["Product sourcing", "Quality assurance", "Bulk ordering", "Competitive pricing"]
    },
    {
      icon: <Briefcase className="w-6 h-6 text-brand-blue" />,
      title: "Market Consulting",
      desc: "Strategic consulting services to help you navigate global markets. Our experts provide market insights and business recommendations.",
      bullets: ["Market analysis", "Business strategy", "Risk assessment", "Growth planning"]
    },
    {
      icon: <FileText className="w-6 h-6 text-brand-blue" />,
      title: "Documentation Services",
      desc: "Complete documentation and compliance support for international trade. We ensure all paperwork meets regulatory requirements.",
      bullets: ["Invoice preparation", "Certificate of origin", "Compliance documentation", "Legal support"]
    },
    {
      icon: <Headphones className="w-6 h-6 text-brand-blue" />,
      title: "24/7 Support",
      desc: "Round-the-clock customer support to address your trading needs. Our team is always ready to assist you.",
      bullets: ["Phone support", "Email support", "Live chat", "Dedicated account manager"]
    }
  ];

  const highlights = [
    { label: "Expertise", desc: "Over 20 years of industry experience and market knowledge.", icon: <GraduationCap className="w-5 h-5" /> },
    { label: "Reliability", desc: "Consistent delivery and transparent communication with all partners.", icon: <Award className="w-5 h-5" /> },
    { label: "Technology", desc: "Modern systems and digital tools for efficient operations.", icon: <Cpu className="w-5 h-5" /> },
    { label: "Global Network", desc: "Connections across multiple countries and trading hubs.", icon: <Ship className="w-5 h-5" /> },
    { label: "Compliance", desc: "Strict adherence to international trade regulations and standards.", icon: <ShieldAlert className="w-5 h-5" /> },
    { label: "Support", desc: "24/7 customer support and dedicated account management.", icon: <Headphones className="w-5 h-5" /> }
  ];

  const steps = [
    { num: "1", title: "Consultation", desc: "Understand your needs" },
    { num: "2", title: "Planning", desc: "Develop strategy" },
    { num: "3", title: "Execution", desc: "Implement solution" },
    { num: "4", title: "Support", desc: "Ongoing assistance" }
  ];

  return (
    <div>
      
      {/* Intro Header */}
      <section className="bg-gradient-to-b from-brand-blue/5 to-white pt-16 pb-10 text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-brand-navy mb-4 tracking-tight"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-brand-textBody leading-relaxed max-w-xl mx-auto"
          >
            Comprehensive trading solutions designed to meet your business needs and drive growth in global markets.
          </motion.p>
        </div>
      </section>

      {/* Services Grid List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-brand-border/60 rounded-xl p-6 shadow-ambient hover:shadow-ambient-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-blue/5 flex items-center justify-center mb-5 shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-textHeading mb-2">
                  {service.title}
                </h3>
                <p className="text-brand-textBody text-xs sm:text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <ul className="flex flex-col gap-2 mb-6 mt-auto">
                  {service.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-center gap-2 text-brand-textHeading font-medium text-xs">
                      <Check className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-blue hover:text-brand-cyan group transition-colors"
                >
                  Learn More 
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Services attributes */}
      <section className="py-16 bg-brand-alt border-y border-brand-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/5 mb-3">
              Key Attributes
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
              Why Choose Milano General Trading LLC?
            </h2>
            <p className="text-brand-textBody leading-relaxed text-sm">
              We combine expertise, hands-on trading knowledge, and a wide product network to deliver reliable general trading services across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, idx) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 bg-white rounded-xl shadow-sm border border-brand-border/60 hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm sm:text-base mb-2">
                  <div className="p-1.5 bg-brand-blue/5 rounded shrink-0">
                    {highlight.icon}
                  </div>
                  <span className="text-brand-textHeading">{highlight.label}</span>
                </div>
                <p className="text-brand-textBody text-xs leading-relaxed">
                  {highlight.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Workflow Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/5 mb-3">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
              Our Process
            </h2>
            <p className="text-brand-textBody leading-relaxed text-sm">
              A streamlined approach to ensure smooth and efficient trading operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="text-center px-2 relative z-10"
              >
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-brand-blue to-brand-cyan text-white rounded-full flex items-center justify-center font-bold text-base mx-auto mb-4 shadow-lg shadow-brand-blue/20">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-brand-textHeading mb-1">{step.title}</h4>
                <p className="text-brand-textMuted text-xs">{step.desc}</p>
                
                {/* Dotted lines connector */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-[25px] left-[calc(50%+25px)] w-[calc(100%-50px)] h-0.5 border-t-2 border-dotted border-brand-border z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Get Started Banner */}
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
            <h2 className="text-2xl font-bold mb-3 text-white">Ready to Get Started?</h2>
            <p className="text-white/80 leading-relaxed mb-6 text-xs sm:text-sm">
              Contact us today to discuss how our services can support your trading business.
            </p>
            <Magnetic>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-white text-brand-navy font-semibold text-sm rounded-full shadow-md hover:bg-brand-ice hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 mx-auto w-fit"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
