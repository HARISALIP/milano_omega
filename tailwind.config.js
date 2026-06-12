/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A2540',
          blue: '#0082CA',
          cyan: '#00A8CC',
          alt: '#F8FAFC',
          textHeading: '#0F172A',
          textBody: '#475569',
          textMuted: '#64748B',
          border: '#E2E8F0',
        }
      },
      boxShadow: {
        'ambient': '0 10px 30px rgba(15, 23, 42, 0.04)',
        'ambient-hover': '0 20px 40px rgba(0, 130, 202, 0.08)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
