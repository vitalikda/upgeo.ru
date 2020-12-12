// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const meta = {
  url: 'https://upgeo.ru',
  name: 'UPGEO',
  description:
    'Широкий спектр топографо-геодезических услуг и инженерных изысканий в сфере строительства и проектирования',
  icon: './src/assets/favicon.png',
  lang: 'ru',
  keywords: [
    'геодезическое сопровождение',
    'топографо-геодезические услуги',
    'строительство',
    'проектирование',
    'инженерные изыскания',
  ],
};

const marked = require('marked');

module.exports = {
  siteName: meta.name,
  siteDescription: meta.description,
  siteUrl: meta.url,
  icon: meta.icon,
  metaInfo: {
    htmlAttrs: {
      lang: meta.lang,
      amp: true,
    },
    meta: [
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content: meta.keywords,
      },
    ],
  },

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
      use: 'gridsome-plugin-pwa',
      options: {
        // Service Worker Options
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
        disableTemplatedUrls: false, // Optional

        // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
        manifestPath: 'manifest.json',
        title: meta.name,
        startUrl: '/index.html',
        display: 'standalone',
        statusBarStyle: 'default',
        themeColor: '#DD6B20',
        backgroundColor: '#ffffff',
        icon: meta.icon,
        shortName: meta.name, // Optional
        description: meta.description, // Optional
        categories: meta.keywords, // Optional
        lang: meta.lang, // Optional
        dir: 'auto', // Optional
        maskableIcon: true, // Optional
        screenshots: [
          // Optional
          {
            src: 'upgeo-logo-horizontal.png',
            sizes: '220x80',
            type: 'image/png',
          },
        ],
        gcmSenderId: undefined, // Optional

        // Standard Meta Tags
        svgFavicon: 'favicon.ico', // Optional. Requires favicon.ico fallback

        // Microsoft Windows Meta Tags
        msTileColor: '#DD6B20', // Optional

        // Apple MacOS Meta Tags
        appleMaskIcon: 'favicon.ico', // Optional
        appleMaskIconColor: '#DD6B20', // Optional
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: ['/404', '/success'],
          },
        ],
      },
    },
    {
      use: '@microflash/gridsome-plugin-feed',
      options: {
        contentTypes: ['ProjectPage', 'ServicePage'],
        feedOptions: {
          title: meta.name,
          description: meta.description,
          link: meta.url,
          favicon: meta.url + '/favicon.ico',
        },
        nodeToFeedItem: (node) => ({
          language: meta.lang,
          title: node.title,
          description: node.description,
          date: new Date(node.date),
          link: meta.url + node.path,
          image: meta.url + '/upgeo-logo-horizontal.png',
          content: marked(node.content),
        }),
      },
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
