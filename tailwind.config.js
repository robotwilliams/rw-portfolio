/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'terminal': ['var(--font-ibm-plex-mono)', 'monospace'],
        'pixel': ['var(--font-press-start-2p)', 'monospace'],
        'mono': ['var(--font-source-code-pro)', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'desktop-bg': 'var(--desktop-bg)',
        'taskbar-bg': 'var(--taskbar-bg)',
        'window-bg': 'var(--window-bg)',
        'window-border': 'var(--window-border)',
        'button-bg': 'var(--button-bg)',
        'button-border': 'var(--button-border)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        magenta: 'var(--magenta)',
        teal: 'var(--teal)',
        'dark-gray': 'var(--dark-gray)',
        'medium-gray': 'var(--medium-gray)',
        'light-gray': 'var(--light-gray)',
        'border-gray': 'var(--border-gray)',
        highlight: 'var(--highlight)',
      },
    },
  },
  plugins: [],
}
