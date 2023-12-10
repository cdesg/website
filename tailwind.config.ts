import type { Config } from 'tailwindcss';

export default <Partial<Config>> {
  content: [
    'docs/content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#fef2f3',
          100: '#fee2e5',
          200: '#fecacf',
          300: '#fba6ae',
          400: '#f7727e',
          500: '#ee4555',
          600: '#db2738',
          700: '#be1e2d',
          800: '#981c28',
          900: '#7e1e27',
          950: '#450a10',
        },
      },
    },
  },
};
