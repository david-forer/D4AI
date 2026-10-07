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
      // Old Tailwind colour names now point at the brand palette from
      // src/styles/tokens.css, so every page that still uses blue, gray, green
      // or orange classes lands on the navy, paper and orange scheme. Pages
      // can be rewritten with the tokens directly later and nothing breaks.
      colors: {
        blue: { 50: '#f8f4ea', 100: '#f3eee4', 200: '#e9e2d2', 300: '#c9d6f5', 400: '#ff7a1f', 500: '#b34700', 600: '#b34700', 700: '#8f3900', 800: '#11234d', 900: '#0a1630', 950: '#0a1630' },
        indigo: { 50: '#eef1fa', 100: '#e3e9f7', 200: '#cfdaf1', 300: '#c9d6f5', 400: '#5f78b3', 500: '#2f55a4', 600: '#2f55a4', 700: '#11234d', 800: '#11234d', 900: '#0a1630', 950: '#0a1630' },
        purple: { 50: '#f7eefa', 100: '#efe3f3', 200: '#e2cfea', 300: '#cdb0da', 400: '#9a6bae', 500: '#7a4a8c', 600: '#7a4a8c', 700: '#5f3770', 800: '#4a2a58', 900: '#33173f' },
        gray: { 50: '#faf7f0', 100: '#f3eee4', 200: '#e9e2d2', 300: '#cfc6b2', 400: '#8b8f9c', 500: '#5b6377', 600: '#4a5266', 700: '#323a4e', 800: '#1a2238', 900: '#0f1729' },
        slate: { 50: '#faf7f0', 100: '#f3eee4', 200: '#e9e2d2', 300: '#cfc6b2', 400: '#8b8f9c', 500: '#5b6377', 600: '#4a5266', 700: '#323a4e', 800: '#1a2238', 900: '#0f1729' },
        green: { 50: '#eef5ef', 100: '#e1ece3', 200: '#cde0d1', 300: '#a8c9b0', 400: '#6a9a79', 500: '#3d6b4c', 600: '#3d6b4c', 700: '#2f5539', 800: '#254430', 900: '#1a3022' },
        teal: { 50: '#ebf5f6', 100: '#dbecee', 200: '#c3dde1', 300: '#97c3ca', 400: '#4f93a0', 500: '#1e6b75', 600: '#1e6b75', 700: '#17555d', 800: '#134249', 900: '#0d2f34' },
        orange: { 50: '#fbf1e7', 100: '#f7e4d4', 200: '#f0cfb4', 300: '#ffb07a', 400: '#ff7a1f', 500: '#b34700', 600: '#b34700', 700: '#8f3900', 800: '#732e00', 900: '#592400' },
      },
      // One typeface for the whole site: Bricolage Grotesque, self-hosted and
      // imported in Layout.astro. Preflight applies `sans` to <html>, so every
      // element inherits it. `mono` points at the same family on purpose, so
      // numbers keep the one face and use tabular-nums for alignment. Code
      // blocks set their own stack in Layout.astro and BlogLayout.astro.
      fontFamily: {
        sans: [
          '"Bricolage Grotesque Variable"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
        mono: [
          '"Bricolage Grotesque Variable"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [], // ❌ no typography plugin
}
