import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle, Lightbulb, PhoneCall } from 'lucide-react';
import Magnetic from '../components/Magnetic';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const contactInfo = [
    {
      title: "Address",
      desc: "Ajman, United Arab Emirates",
      sub: "P.O. Box: 20405",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      title: "Phone",
      desc: "+971 6 2538 9886",
      sub: "+971 55 5389 886",
      icon: <Phone className="w-5 h-5" />,
      tel: "+971625389886"
    },
    {
      title: "Email",
      desc: "info@milanotrade.com",
      sub: "sales@milanotrade.com",
      icon: <Mail className="w-5 h-5" />,
      mail: "info@milanotrade.com"
    },
    {
      title: "Business Hours",
      desc: "Monday - Friday: 9:00 AM - 6:00 PM",
      sub: "Saturday: 10:00 AM - 2:00 PM",
      icon: <Clock className="w-5 h-5" />
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Trigger form validity check
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(false);
    setShowModal(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative">
      
      {/* Intro Header */}
      <section className="bg-gradient-to-b from-brand-blue/5 to-white pt-16 pb-10 text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-brand-navy mb-4 tracking-tight"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-brand-textBody leading-relaxed max-w-xl mx-auto"
          >
            Have questions about our services? We are here to help. Contact us today and let's discuss how we can support your trading business.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-12 bg-brand-alt border-y border-brand-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-brand-border/60 rounded-xl p-5 text-center shadow-ambient hover:shadow-ambient-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  {card.icon}
                </div>
                <h4 className="text-sm font-bold text-brand-textHeading mb-2">{card.title}</h4>
                {card.tel ? (
                  <a href={`tel:${card.tel}`} className="text-xs sm:text-sm font-medium text-brand-textHeading hover:text-brand-blue block">
                    {card.desc}
                  </a>
                ) : card.mail ? (
                  <a href={`mailto:${card.mail}`} className="text-xs sm:text-sm font-medium text-brand-textHeading hover:text-brand-blue block">
                    {card.desc}
                  </a>
                ) : (
                  <p className="text-xs sm:text-sm font-medium text-brand-textHeading mb-0.5">{card.desc}</p>
                )}
                <p className="text-brand-textMuted text-xs mt-0.5">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interactive Form Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Form side */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="bg-white border border-brand-border/60 rounded-xl p-6 sm:p-8 shadow-ambient">
                <h3 className="text-xl font-bold text-brand-navy mb-5">Send us a Message</h3>
                <form onSubmit={handleSubmit} noValidate className={validated ? 'was-validated' : ''}>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col">
                      <label className="text-[0.7rem] font-semibold text-brand-textHeading mb-1.5">Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        placeholder="Your name"
                        className="p-2.5 bg-brand-alt border border-brand-border rounded-lg text-xs sm:text-sm text-brand-textHeading focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[0.7rem] font-semibold text-brand-textHeading mb-1.5">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        placeholder="your@email.com"
                        className="p-2.5 bg-brand-alt border border-brand-border rounded-lg text-xs sm:text-sm text-brand-textHeading focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col">
                      <label className="text-[0.7rem] font-semibold text-brand-textHeading mb-1.5">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 XX XXX XXXX"
                        className="p-2.5 bg-brand-alt border border-brand-border rounded-lg text-xs sm:text-sm text-brand-textHeading focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[0.7rem] font-semibold text-brand-textHeading mb-1.5">Company</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="p-2.5 bg-brand-alt border border-brand-border rounded-lg text-xs sm:text-sm text-brand-textHeading focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-4">
                    <label className="text-[0.7rem] font-semibold text-brand-textHeading mb-1.5">Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="p-2.5 bg-brand-alt border border-brand-border rounded-lg text-xs sm:text-sm text-brand-textHeading focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all duration-300"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Import/Export">Import / Export Solutions</option>
                      <option value="Logistics & Distribution">Logistics & Distribution</option>
                      <option value="Wholesale Trading">Wholesale Trading</option>
                      <option value="Consulting">Market Consulting</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="flex flex-col mb-5">
                    <label className="text-[0.7rem] font-semibold text-brand-textHeading mb-1.5">Message *</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      rows="4"
                      placeholder="Tell us about your trading needs..."
                      className="p-2.5 bg-brand-alt border border-brand-border rounded-lg text-xs sm:text-sm text-brand-textHeading focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-medium text-xs sm:text-sm rounded-full shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/30 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Content Sidebar side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <div className="lg:pl-6">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Why Contact Us?</h3>
                <ul className="flex flex-col gap-4 mb-6">
                  {[
                    { title: "Expert guidance on trading opportunities", desc: "Benefit from our extensive global network and domain experts." },
                    { title: "Customized solutions for your business", desc: "Tailored logistics and trade support designed to fit your operations." },
                    { title: "Competitive pricing and flexible terms", desc: "Cost-efficient product sourcing and delivery strategies." },
                    { title: "Fast response and professional support", desc: "Round-the-clock attention to your orders and paperwork details." },
                    { title: "Proven track record of success", desc: "Delivering trading services across the UAE since 2004." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-brand-textHeading text-xs sm:text-sm leading-snug">{item.title}</h5>
                        <p className="text-brand-textMuted text-[0.7rem] sm:text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Direct quick call info card */}
                <div className="bg-brand-alt border border-brand-border/60 rounded-xl p-5 shadow-sm">
                  <h4 className="text-brand-navy font-bold text-sm mb-1.5 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    Quick Response
                  </h4>
                  <p className="text-brand-textBody text-xs mb-3">
                    We typically respond to inquiries within 24 hours during business days. For urgent matters, please call us directly.
                  </p>
                  <a 
                    href="tel:+971625389886" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-cyan transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 shrink-0" /> Call Now: +971 6 2538 9886
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* AnimatePresence for success modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-brand-navy/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white border-0 shadow-2xl rounded-2xl max-w-sm w-full p-6 text-center"
            >
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-brand-navy mb-2">Message Sent Successfully!</h4>
              <p className="text-brand-textMuted text-xs mb-5 leading-relaxed">
                Thank you for contacting Milano General Trading LLC. Our team will review your inquiry and respond within 24 hours.
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className="px-5 py-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-medium text-xs rounded-full shadow-lg shadow-brand-blue/20"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
