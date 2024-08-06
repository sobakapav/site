import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xl: ['25px', '35px'],
        '2xl': ['30px', {
          lineHeight: '40px',
        }],
        '3xl': ['37.5px', {
          lineHeight: '50px',
        }],
        '4xl': ['37.5px', {
          lineHeight: '50px',
        }],
      },
      gridTemplateColumns: {
        'header': '250px 1fr 40px',
        'footer': '80px 1fr 1fr 1fr',
      },
      gridTemplateRows: {
        'footer': 'auto auto',
        'footer-sm': 'auto auto auto auto',
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
