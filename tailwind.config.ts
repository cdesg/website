import type { Config } from 'tailwindcss';

export default <Partial<Config>> {
  content: [
    'docs/content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'brand-accent': '#be1e2d',
      },
    },
  },
};
