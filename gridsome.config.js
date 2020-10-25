// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'UPGEO',
  siteDescription:
    'Широкий спектр топографо-геодезических услуг и инженерных изысканий в сфере строительства и проектирования',
  siteUrl: 'http://upgeo.ru',
  icon: './src/assets/favicon.png',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'ProjectPage',
        baseDir: './content',
        path: 'projects/**/*.md',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'ServicePage',
        baseDir: './content',
        path: 'services/**/*.md',
      },
    },
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

  transformers: {
    remark: {
      plugins: [
        [
          '@noxify/gridsome-remark-classes',
          {
            'heading[depth=2]':
              'mt-8 mb-2 text-3xl font-semibold leading-normal',
            'heading[depth=3]':
              'mt-8 mb-2 text-1xl font-semibold leading-normal',
            paragraph:
              'mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700',
            strong: 'font-semibold',
            link: 'text-orange-600 underline hover:opacity-75',
            list:
              'mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700 list-disc list-inside',
          },
        ],
      ],
    },
  },
};
