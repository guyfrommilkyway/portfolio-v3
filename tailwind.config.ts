import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        CCA43B: '#CCA43B',
        '242F40': '#242F40',
        '363636': '#363636',
        E5E5E5: '#E5E5E5',
        FFFFFF: '#FFFFFF',
      },
      
    },
  },
  plugins: [],
};
export default config;
