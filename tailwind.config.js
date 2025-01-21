import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.tsx',
    './src/components/*.tsx',
    './src/pages/*.tsx',
    './src/templates/*.tsx',
    './src/themes/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#398C36',
        secundary: '#F9901B',
        tertiary: '#408AB5',
      },
      fonts: {
        montsserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#398C36',
          'primary-content': '#f2f2f2',
          secondary: '#F9901B',
          accent: '#408AB5',
          neutral: '#398C36',
          'neutral-content': '#fff',
          'base-100': '#fcfcfc',
          'base-200': '#70AF6E',
          'base-300': '#398C36',

          '.btn': {
            'font-size': '1rem',
          },
        },
      },
    ],
  },
};
