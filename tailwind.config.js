/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,vue}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    import('flowbite/plugin'),
  ],
};
