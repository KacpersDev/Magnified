import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      metropolis: ["Metropolis", "sans-serif"],
      metropolis_600: ["Metropolis_500", "sans-serif"],
      metropolis_700: ["Metropolis_700", "sans-serif"],
      metropolis_900: ["Metropolis_900", "sans-serif"],
    }
  },
  plugins: [],
};
export default config;
