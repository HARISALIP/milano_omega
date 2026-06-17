import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

// WhatsApp SVG icon
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

// ─── Data ────────────────────────────────────────────────────────────────────

const leader = {
  id: 1,
  name: 'Babu Milano',
  title: 'Founder & Managing Director',
  departments: ['Gas Items', 'Household Items Sales'],
  phone: '050 757 4271',
  telLink: 'tel:+971507574271',
  whatsapp: 'https://wa.me/971507574271',
  photo: '/images/Babu Milano.jpg',
};

const staff = [
  {
    id: 2,
    name: 'Shafeeq',
    title: 'Accountant',
    department: 'Accounts',
    phone: '+971 52 143 7774',
    telLink: 'tel:+971521437774',
    whatsapp: 'https://wa.me/971521437774',
    photo: '/images/Shafeeq.jpg',
  },
  {
    id: 3,
    name: 'Faisal P',
    department: 'Wholesale',
    phone: '+971 55 204 0816',
    telLink: 'tel:+971552040816',
    whatsapp: 'https://wa.me/971552040816',
    photo: '/images/Faisal P.jpg',
  },
  {
    id: 4,
    name: 'Faisal V',
    department: 'Vegetables',
    phone: '+971 55 435 3277',
    telLink: 'tel:+971554353277',
    whatsapp: 'https://wa.me/971554353277',
    photo: '/images/Faisal V.jpg',
  },
  {
    id: 5,
    name: 'Muthalib',
    department: 'Vegetables',
    phone: '+971 50 205 9405',
    telLink: 'tel:+971502059405',
    whatsapp: 'https://wa.me/971502059405',
    photo: '/images/Muthalib.jpg',
  },
  {
    id: 6,
    name: 'Jashid',
    department: 'Vegetables',
    phone: '+971 55 538 9886',
    telLink: 'tel:+971555389886',
    whatsapp: 'https://wa.me/971555389886',
    photo: '/images/Jashid.jpg',
  },
  {
    id: 7,
    name: 'Faisal Ahmed',
    department: 'Disposable Items',
    phone: '+971 55 606 8049',
    telLink: 'tel:+971556068049',
    whatsapp: 'https://wa.me/971556068049',
    photo: '/images/Faisal Ahmed.jpg',
  },
  {
    id: 8,
    name: 'Ibrahim',
    department: 'Disposable Items',
    phone: '+971 58 193 5339',
    telLink: 'tel:+971581935339',
    whatsapp: 'https://wa.me/971581935339',
    photo: '/images/Ibrahim.jpg',
  },
  {
    id: 9,
    name: 'Muhsin',
    department: 'Disposable Items',
    phone: '+971 52 535 0247',
    telLink: 'tel:+971525350247',
    whatsapp: 'https://wa.me/971525350247',
    photo: '/images/Muhsin.jpg',
  },
  {
    id: 10,
    name: 'Tajudheen',
    department: 'Pickles',
    phone: '+971 55 857 2879',
    telLink: 'tel:+971558572879',
    whatsapp: 'https://wa.me/971558572879',
    photo: '/images/Tajudheen.jpg',
  },
  {
    id: 11,
    name: 'Nisarudheen',
    department: 'Charcoal',
    phone: '+971 55 517 1107',
    telLink: 'tel:+971555171107',
    whatsapp: 'https://wa.me/971555171107',
    photo: '/images/Nisarudheen.jpg',
  },
  {
    id: 12,
    name: 'Viswan P',
    department: 'Dates',
    phone: '+971 50 173 8519',
    telLink: 'tel:+971501738519',
    whatsapp: 'https://wa.me/971501738519',
    photo: '/images/Viswan P.jpg',
  },
];

// ─── Fallback Avatar ──────────────────────────────────────────────────────────

function AvatarFallback({ name, large = false }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
  return (
    <div
      className="w-full h-full flex items-center justify-center bg-brand-alt"
      aria-hidden="true"
    >
      <span
        className={`font-bold text-brand-blue/30 select-none ${large ? 'text-6xl' : 'text-4xl'}`}
      >
        {initials}
      </span>
    </div>
  );
}

// ─── Leadership Featured Card ─────────────────────────────────────────────────

function LeadershipCard({ person }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-ambient"
    >
      <div className="flex flex-col md:flex-row">
        {/* Photo */}
        <div className="md:w-64 lg:w-72 shrink-0 bg-brand-alt">
          <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-full overflow-hidden">
            {person.photo ? (
              <img
                src={person.photo}
                alt={person.name}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <AvatarFallback name={person.name} large />
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center p-8 md:p-10">
          {/* Section marker */}
          <p className="text-[0.65rem] font-mono tracking-widest text-brand-textMuted uppercase mb-4">
            Leadership
          </p>

          {/* Name */}
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-1">
            {person.name}
          </h2>

          {/* Title */}
          <p className="text-sm font-medium text-brand-blue mb-5">
            {person.title}
          </p>

          {/* Departments */}
          <div className="flex flex-wrap gap-2 mb-8">
            {person.departments.map((d) => (
              <span
                key={d}
                className="text-xs text-brand-textMuted border border-brand-border rounded px-3 py-1"
              >
                {d}
              </span>
            ))}
          </div>

          {/* Phone */}
          <a
            href={person.telLink}
            className="flex items-center gap-2 text-sm text-brand-textBody hover:text-brand-blue transition-colors duration-200 mb-5"
          >
            <Phone className="w-4 h-4 text-brand-blue shrink-0" />
            {person.phone}
          </a>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={person.telLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-lg hover:bg-brand-navy transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              aria-label={`Call ${person.name}`}
            >
              <Phone className="w-4 h-4 shrink-0" />
              Call Now
            </a>
            <a
              href={person.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:bg-[#1ebe5d] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
              aria-label={`WhatsApp ${person.name}`}
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Staff Card ───────────────────────────────────────────────────────────────

function StaffCard({ employee, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group bg-white border border-brand-border rounded-xl overflow-hidden shadow-ambient hover:shadow-ambient-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Photo — consistent portrait crop */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-brand-alt shrink-0">
        {employee.photo ? (
          <img
            src={employee.photo}
            alt={`${employee.name} – ${employee.department}`}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <AvatarFallback name={employee.name} />
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4">
        {/* Name */}
        <h3 className="text-sm font-bold text-brand-textHeading leading-snug group-hover:text-brand-blue transition-colors duration-200">
          {employee.name}
        </h3>

        {/* Title if present (e.g. Accountant) */}
        {employee.title && (
          <p className="text-[0.7rem] font-medium text-brand-blue mt-0.5">
            {employee.title}
          </p>
        )}

        {/* Department — plain text, no pill */}
        <p className="text-[0.72rem] text-brand-textMuted mt-1 mb-4">
          {employee.department}
        </p>

        {/* Spacer pushes buttons to bottom */}
        <div className="flex-1" />

        {/* Phone link */}
        <a
          href={employee.telLink}
          className="flex items-center gap-1.5 text-[0.72rem] text-brand-textBody hover:text-brand-blue transition-colors duration-200 mb-3"
        >
          <Phone className="w-3 h-3 text-brand-blue shrink-0" />
          {employee.phone}
        </a>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href={employee.telLink}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-brand-blue text-white text-[0.7rem] font-semibold rounded-lg hover:bg-brand-navy transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-1"
            aria-label={`Call ${employee.name}`}
          >
            <Phone className="w-3 h-3 shrink-0" />
            Call
          </a>
          <a
            href={employee.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-[#25D366] text-white text-[0.7rem] font-semibold rounded-lg hover:bg-[#1ebe5d] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-1"
            aria-label={`WhatsApp ${employee.name}`}
          >
            <WhatsAppIcon className="w-3 h-3 shrink-0" />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionHeading({ label, title, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="mb-8"
    >
      <p className="text-[0.65rem] font-mono tracking-widest text-brand-textMuted uppercase mb-2">
        {label}
      </p>
      <h2 className="text-xl sm:text-2xl font-bold text-brand-navy">
        {title}
      </h2>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Employees() {
  return (
    <div>

      {/* ── Page Header ───────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-brand-blue/5 to-white pt-16 pb-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-[5%] w-[320px] h-[320px] rounded-full bg-brand-cyan/5 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-[5%] w-[260px] h-[260px] rounded-full bg-brand-blue/5 blur-[70px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 md:px-8 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[0.65rem] font-mono tracking-widest text-brand-textMuted uppercase block mb-3"
          >
            OUR TEAM
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4 tracking-tight"
          >
            Meet the People Behind Milano General Trading LLC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-sm sm:text-base text-brand-textBody leading-relaxed max-w-xl mx-auto"
          >
            Our dedicated team drives operations across wholesale, vegetables,
            pickles, disposables, charcoal, dates, gas items, household sales,
            and accounts — serving customers with expertise and care every day.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────────── */}
      <section className="py-14 bg-brand-alt border-t border-brand-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* ── Leadership ── */}
          <SectionHeading label="Company Leadership" title="Leadership" />
          <div className="mb-16">
            <LeadershipCard person={leader} />
          </div>

          {/* ── Divider ── */}
          <div className="border-t border-brand-border mb-14" />

          {/* ── Department Contacts ── */}
          <SectionHeading
            label="Team Directory"
            title="Department Contacts"
            delay={0.05}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {staff.map((employee, idx) => (
              <StaffCard key={employee.id} employee={employee} index={idx} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
