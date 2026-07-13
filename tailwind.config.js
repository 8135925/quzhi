/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Material You (MD3) 色板 - 使用 CSS 变量，随 .dark 类自动切换
        md: {
          // 背景与表面
          background: 'rgb(var(--md-bg) / <alpha-value>)',
          'on-background': 'rgb(var(--md-on-background) / <alpha-value>)',
          surface: 'rgb(var(--md-surface) / <alpha-value>)',
          'on-surface': 'rgb(var(--md-on-surface) / <alpha-value>)',
          'surface-variant': 'rgb(var(--md-surface-variant) / <alpha-value>)',
          'on-surface-variant': 'rgb(var(--md-on-surface-variant) / <alpha-value>)',
          'surface-container-lowest': 'rgb(var(--md-surface-container-lowest) / <alpha-value>)',
          'surface-container-low': 'rgb(var(--md-surface-container-low) / <alpha-value>)',
          'surface-container': 'rgb(var(--md-surface-container) / <alpha-value>)',
          'surface-container-high': 'rgb(var(--md-surface-container-high) / <alpha-value>)',
          'surface-container-highest': 'rgb(var(--md-surface-container-highest) / <alpha-value>)',
          // 主色
          primary: 'rgb(var(--md-primary) / <alpha-value>)',
          'on-primary': 'rgb(var(--md-on-primary) / <alpha-value>)',
          'primary-container': 'rgb(var(--md-primary-container) / <alpha-value>)',
          'on-primary-container': 'rgb(var(--md-on-primary-container) / <alpha-value>)',
          // 次色
          secondary: 'rgb(var(--md-secondary) / <alpha-value>)',
          'on-secondary': 'rgb(var(--md-on-secondary) / <alpha-value>)',
          'secondary-container': 'rgb(var(--md-secondary-container) / <alpha-value>)',
          'on-secondary-container': 'rgb(var(--md-on-secondary-container) / <alpha-value>)',
          // 三色
          tertiary: 'rgb(var(--md-tertiary) / <alpha-value>)',
          'on-tertiary': 'rgb(var(--md-on-tertiary) / <alpha-value>)',
          'tertiary-container': 'rgb(var(--md-tertiary-container) / <alpha-value>)',
          'on-tertiary-container': 'rgb(var(--md-on-tertiary-container) / <alpha-value>)',
          // 错误
          error: 'rgb(var(--md-error) / <alpha-value>)',
          'on-error': 'rgb(var(--md-on-error) / <alpha-value>)',
          'error-container': 'rgb(var(--md-error-container) / <alpha-value>)',
          'on-error-container': 'rgb(var(--md-on-error-container) / <alpha-value>)',
          // 轮廓
          outline: 'rgb(var(--md-outline) / <alpha-value>)',
          'outline-variant': 'rgb(var(--md-outline-variant) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '28px',
        '2xl': '32px',
        '3xl': '48px',
      },
      transitionTimingFunction: {
        'md': 'cubic-bezier(0.2, 0, 0, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.2, 0, 0, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
