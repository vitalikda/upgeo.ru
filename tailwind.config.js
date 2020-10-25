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
  theme: {},
  variants: {},
  plugins: [],
};
