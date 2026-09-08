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
    extend: {
      // Single site-wide type stack. Nothing else in the codebase should
      // declare a font-family. Preflight applies this to <html>, so every
      // element inherits it and `font-sans` is a no-op reinforcement.
      fontFamily: {
        sans: [
          '"Inter Variable"',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
      },
    },
  },
  plugins: [], // ❌ no typography plugin
}
