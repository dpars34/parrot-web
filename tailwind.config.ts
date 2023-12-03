import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#EABD48',
      secondary: '#FF3838',
      primaryText: '#202020',
      secondaryText: '#838383',
      'white': '#ffffff',
      'gray-bg': '#F6F6F6',
      'bg': '#FAFAFA',
    },
    fontFamily: {
      'line': ['LINE Seed JP', 'system-ui'], 
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
