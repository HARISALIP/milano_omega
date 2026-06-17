import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Crown } from 'lucide-react';

// WhatsApp SVG icon (inline, matching brand style)
function WhatsAppIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

// Employee data array — ordered by hierarchy
const employees = [
  {
    id: 1,
    name: 'Babu Milano',
    position: 'Owner / Managing Director',
    department: 'Gas Items & Household Items Sales',
    phone: '050 757 4271',
    telLink: 'tel:+971507574271',
    whatsapp: 'https://wa.me/971507574271',
    photo: '/images/Babu Milano.jpg',
    isOwner: true,
  },
  {
    id: 2,
    name: 'Shafeeq',
    position: 'Accountant',
    department: 'Accountant',
    phone: '+971 52 143 7774',
    telLink: 'tel:+971521437774',
    whatsapp: 'https://wa.me/971521437774',
    photo: '/images/Shafeeq.jpg',
  },
  {
    id: 3,
    name: 'Faisal P',
    department: 'Wholesale Department',
    phone: '+971 55 204 0816',
    telLink: 'tel:+971552040816',
    whatsapp: 'https://wa.me/971552040816',
    photo: '/images/Faisal P.jpg',
  },
  {
    id: 4,
    name: 'Faisal V',
    department: 'Vegetable Department',
    phone: '+971 55 435 3277',
    telLink: 'tel:+971554353277',
    whatsapp: 'https://wa.me/971554353277',
    photo: '/images/Faisal V.jpg',
  },
  {
    id: 5,
    name: 'Muthalib',
    department: 'Vegetable Department',
    phone: '+971 50 205 9405',
    telLink: 'tel:+971502059405',
    whatsapp: 'https://wa.me/971502059405',
    photo: '/images/Muthalib.jpg',
  },
  {
    id: 6,
    name: 'Jashid',
    department: 'Vegetable Department',
    phone: '+971 55 538 9886',
    telLink: 'tel:+971555389886',
    whatsapp: 'https://wa.me/971555389886',
    photo: '/images/Jashid.jpg',
  },
  {
    id: 7,
    name: 'Faisal Ahmed',
    department: 'Disposable Items Department',
    phone: '+971 55 606 8049',
    telLink: 'tel:+971556068049',
    whatsapp: 'https://wa.me/971556068049',
    photo: '/images/Faisal Ahmed.jpg',
  },
  {
    id: 8,
    name: 'Ibrahim',
    department: 'Disposable Items Department',
    phone: '+971 58 193 5339',
    telLink: 'tel:+971581935339',
    whatsapp: 'https://wa.me/971581935339',
    photo: '/images/Ibrahim.jpg',
  },
  {
    id: 9,
    name: 'Muhsin',
    department: 'Disposable Items Department',
    phone: '+971 52 535 0247',
    telLink: 'tel:+971525350247',
    whatsapp: 'https://wa.me/971525350247',
    photo: '/images/Muhsin.jpg',
  },
  {
    id: 10,
    name: 'Tajudheen',
    department: 'Pickle Department',
    phone: '+971 55 857 2879',
    telLink: 'tel:+971558572879',
    whatsapp: 'https://wa.me/971558572879',
    photo: '/images/Tajudheen.jpg',
  },
  {
    id: 11,
    name: 'Nisarudheen',
    department: 'Charcoal Department',
    phone: '+971 55 517 1107',
    telLink: 'tel:+971555171107',
    whatsapp: 'https://wa.me/971555171107',
    photo: '/images/Nisarudheen.jpg',
  },
  {
    id: 12,
    name: 'Viswan P',
    department: 'Dates Department',
    phone: '+971 50 173 8519',
    telLink: 'tel:+971501738519',
    whatsapp: 'https://wa.me/971501738519',
    photo: '/images/Viswan P.jpg',
  },
];

// Fallback avatar component when photo not available
function AvatarFallback({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
  return (
    <div
      className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10"
      aria-hidden="true"
    >
      <span className="text-4xl font-bold text-brand-blue/40 select-none">
        {initials}
      </span>
    </div>
  );
}

// Individual employee card
function EmployeeCard({ employee, index }) {
  const isOwner = employee.isOwner === true;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={
        isOwner
          ? 'group relative rounded-2xl overflow-hidden shadow-lg flex flex-col border-2 border-brand-blue/30 bg-gradient-to-b from-brand-blue/5 to-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300'
          : 'group relative bg-white border border-brand-border/60 rounded-2xl overflow-hidden shadow-ambient hover:shadow-ambient-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col'
      }
    >
      {/* Top accent line */}
      <div
        className={
          isOwner
            ? 'absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan'
            : 'absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        }
      />

      {/* Owner badge */}
      {isOwner && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-brand-blue text-white text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
          <Crown className="w-2.5 h-2.5 shrink-0" />
          Owner
        </div>
      )}

      {/* Photo area — portrait ratio so full body is visible */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-brand-alt">
        {employee.photo ? (
          <img
            src={employee.photo}
            alt={`${employee.name} – ${employee.department}`}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <AvatarFallback name={employee.name} />
        )}
        {/* Subtle bottom fade for photo */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Name */}
        <h3 className="text-base font-bold text-brand-textHeading leading-snug group-hover:text-brand-blue transition-colors duration-300">
          {employee.name}
        </h3>

        {/* Position label (Owner / Accountant) */}
        {employee.position && (
          <p className="text-[0.7rem] font-semibold text-brand-blue mt-0.5 leading-tight">
            {employee.position}
          </p>
        )}

        {/* Department badge */}
        <div className="mt-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[0.65rem] font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/6 border border-brand-blue/10">
            {employee.department}
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Phone number display */}
        <a
          href={employee.telLink}
          className="flex items-center gap-2 text-xs font-medium text-brand-textBody hover:text-brand-blue transition-colors duration-200 mb-3 group/phone"
        >
          <Phone className="w-3.5 h-3.5 text-brand-blue shrink-0" />
          <span>{employee.phone}</span>
        </a>

        {/* Action buttons row — flex-wrap keeps both buttons on small screens */}
        <div className="flex flex-wrap gap-2">
          {/* Call button */}
          <a
            href={employee.telLink}
            className="flex-1 min-w-[90px] flex items-center justify-center gap-1.5 py-2.5 px-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-semibold rounded-full shadow-md shadow-brand-blue/15 hover:shadow-lg hover:shadow-brand-blue/25 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            aria-label={`Call ${employee.name}`}
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            Call
          </a>

          {/* WhatsApp button */}
          <a
            href={employee.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[90px] flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#25D366] text-white text-xs font-semibold rounded-full shadow-md shadow-emerald-500/15 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            aria-label={`WhatsApp ${employee.name}`}
          >
            <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Employees() {
  return (
    <div>

      {/* Hero / Page Header */}
      <section className="bg-gradient-to-b from-brand-blue/5 to-white pt-16 pb-12 text-center relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-[5%] w-[320px] h-[320px] rounded-full bg-brand-cyan/5 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-[5%] w-[260px] h-[260px] rounded-full bg-brand-blue/5 blur-[70px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 md:px-8 relative z-10">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[0.65rem] font-mono tracking-widest text-brand-textMuted uppercase block mb-3"
          >
            OUR TEAM
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4 tracking-tight"
          >
            Meet the People Behind Milano General Trading LLC
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-sm sm:text-base text-brand-textBody leading-relaxed max-w-xl mx-auto"
          >
            Our dedicated team of professionals drives Milano General Trading LLC's operations across wholesale, charcoal, vegetables, pickles, disposables, gas items, household sales, and accounts — serving customers with expertise and care every day.
          </motion.p>
        </div>
      </section>

      {/* Employee Grid */}
      <section className="py-14 bg-brand-alt border-t border-brand-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/5 mb-3">
              Employee Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Our Department Specialists
            </h2>
          </motion.div>

          {/* Responsive card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {employees.map((employee, idx) => (
              <EmployeeCard key={employee.id} employee={employee} index={idx} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
