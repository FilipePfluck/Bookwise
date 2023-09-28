import {
  defineConfig,
  defineGlobalStyles,
  defineTextStyles,
} from '@pandacss/dev'

const textStyles = defineTextStyles({
  headingLg: {
    value: {
      fontWeight: 'bold',
      fontSize: '24px',
      lineHeight: '140%',
    },
  },
  headingMd: {
    value: {
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '140%',
    },
  },
  headingSm: {
    value: {
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '140%',
    },
  },
  headingXs: {
    value: {
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '140%',
    },
  },
  textLg: {
    value: {
      fontWeight: 'regular',
      fontSize: '20px',
      lineHeight: '160%',
    },
  },
  textMd: {
    value: {
      fontWeight: 'regular',
      fontSize: '16px',
      lineHeight: '160%',
    },
  },
  textSm: {
    value: {
      fontWeight: 'regular',
      fontSize: '14px',
      lineHeight: '160%',
    },
  },
  buttonLg: {
    value: {
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '160%',
    },
  },
  buttonMd: {
    value: {
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '160%',
    },
  },
  buttonSm: {
    value: {
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '160%',
    },
  },
})

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          green: {
            100: { value: '#50B2C0' },
            200: { value: '#255D6A' },
            300: { value: '#0A313C' },
          },
          purple: {
            100: { value: '#8381D9' },
            200: { value: '#2A2879' },
          },
          gray: {
            100: { value: '#F8F9FC' },
            200: { value: '#E6E8F2' },
            300: { value: '#D1D6E4' },
            400: { value: '#8D95AF' },
            500: { value: '#303F73' },
            600: { value: '#252D4A' },
            700: { value: '#181C2A' },
            800: { value: '#0E1116' },
          },
        },
      },
      textStyles,
    },
  },

  globalCss: defineGlobalStyles({
    '::-webkit-scrollbar': {
      width: '16px',
    },

    '::-webkit-scrollbar-track': {
      bg: 'gray.800',
    },

    '::-webkit-scrollbar-thumb': {
      bg: 'gray.700',
      transition: '0.2s',
      rounded: 'full',
    },
  }),

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
})
