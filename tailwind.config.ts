import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#f5f5f5',
        'grey': '#4E4A4A',
      },
       screens: {
        xs: "280px",
        sm: "320px",
        msm: "380px",
        phone: "450px",
        five: "500px",
        tab: "960px",
        ltab: "780px",
        xtab: "960px",
        desktop: "1280px",
      },  
      fontWeight: {
             'bold':'bold',
      },
      fontSize: {
        'font-size':'13px',
      },
    },
  },
  plugins: [],
};
export default config;
