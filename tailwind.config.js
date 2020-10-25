module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
    options: {
      whitelist: ['list-disc', 'list-inside'],
    },
  },
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      screen: '100vh',
    },
  },
  variants: {},
  plugins: [],
};
