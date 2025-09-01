/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  safelist: [
    "btn-primary",
    "btn-secondary",
    "btn-outline-secondary",
    "btn-accent",
    "btn-ghost"
  ],
  theme: {
    extend: {},
  },
  plugins: [], // ❌ no typography plugin
}
