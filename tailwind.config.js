module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#DEA01E',
        secondary: '#336699',
      }),
      textColor: {
        primary: '#DEA01E',
        secondary: '#052F5F',
      },
    },
  },
  plugins: [],
};
