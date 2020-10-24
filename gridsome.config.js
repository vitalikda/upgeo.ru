// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'UPGEO',
  siteDescription: 'Геодезическое сопровождение',
  siteUrl: 'http://upgeo.ru',
  icon: './src/assets/favicon.png',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/plugin-sitemap',
    },
    {
      use: 'gridsome-plugin-robots-txt',
    },
  ],
};
