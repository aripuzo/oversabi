/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'adire-blue': '#1e3a5f',
        'kente-gold': '#d4af37',
        'ankara-red': '#c41e3a',
        'earth-brown': '#8b4513',
        'cream': '#fffdd0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'adire-pattern': "url('/patterns/adire.svg')",
        'kente-pattern': "url('/patterns/kente.svg')",
      },
    },
  },
  plugins: [],
}
