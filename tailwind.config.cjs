import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';
import daisyui from "daisyui";

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
        xl: ['20px', '28px'],
        '2xl': ['24px', {
          lineHeight: '32px',
        }],
        '3xl': ['30px', {
          lineHeight: '36px',
        }],
        '4xl': ['36px', {
          lineHeight: '40px',
        }],
      },
      gridTemplateColumns: {
        'header': '420px 1fr 40px',
        'footer': '70px 1fr 1fr 1fr',
        'features': '1fr 1fr 1fr',
      },
      gridTemplateRows: {
        'footer': 'auto auto',
        'footer-sm': 'auto auto auto auto',
        'features': '1fr 1fr 1fr 1fr',
      },
      screens: {
        'safari' : {
          'raw' : '(min-resolution:.001dpcm)'
        }
      }
    },
  },
  plugins: [typographyPlugin, daisyui],
  darkMode: 'class',
  daisyui: {
    prefix: 'daisy-',
  },
};
