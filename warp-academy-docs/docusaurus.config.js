// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Warp Academy',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.warp.cc',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/smartweave.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars/docsSidebar.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
          editUrl: ({ docPath }) => {
            return ` https://github.com/warp-contracts/academy/blob/main/warp-academy-docs/docs/${docPath}`;
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Will be passed to @docusaurus/plugin-google-analytics.
        googleAnalytics: {
          trackingID: 'UA-216524725-1',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      }),
    ],
  ],
  plugins: [
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'features',
    //     path: 'features',
    //     routeBasePath: 'features',
    //     editUrl: ({ docPath }) => {
    //       return `https://github.com/warp-contracts/academy/tree/main/warp-academy-docs/features/${docPath}`;
    //     },
    //     sidebarPath: require.resolve('./sidebars/featuresSidebar.js'),
    //   },
    // ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'tutorials',
        routeBasePath: 'tutorials',
        editUrl: ({ docPath }) => {
          return `https://github.com/warp-contracts/academy/tree/main/warp-academy-docs/tutorials/${docPath}`;
        },
        sidebarPath: require.resolve('./sidebars/tutorialSidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'standards',
        path: 'standards',
        routeBasePath: 'standards',
        editUrl: ({ docPath }) => {
          return `https://github.com/warp-contracts/academy/tree/main/warp-academy-docs/standards/${docPath}`;
        },
        sidebarPath: require.resolve('./sidebars/standardsSidebar.js'),
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Warp Academy',
        logo: {
          alt: 'My Site Logo',
          src: 'img/smartweave.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'docs-intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'tutorials/elementary/blockchain',
            position: 'left',
            label: 'Tutorials',
          },
          // {
          //   label: 'Features',
          //   position: 'left',
          //   to: 'features/features-intro',
          // },
          {
            to: 'standards/standards-intro',
            position: 'left',
            label: 'Standards'
          },
          {
            href: 'https://github.com/warp-contracts/warp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/docs-intro',
              },
            ],
          },
          {
            title: 'Tutorials',
            items: [
              {
                label: 'Tutorials',
                to: '/tutorials/elementary/blockchain',
              },
            ],
          },
          // {
          //   title: 'Features',
          //   items: [
          //     {
          //       label: 'Features',
          //       to: '/features/features-intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/McehtcpmST',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/redstone_defi',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/warp-contracts/warp',
              },
              {
                label: 'Website',
                href: 'https://warp.cc',
              },
            ],
          },
        ],
        logo: {
          alt: 'Warp logo',
          src: 'img/smartweave.svg',
          href: 'https://warp.cc',
          width: 50,
          height: 20,
        },
        copyright: `Copyright © ${new Date().getFullYear()} RedStone`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust', 'toml'],
      },
      algolia: {
        appId: 'MCHYFKZV38',

        apiKey: '83b1fd61be3073cd6100d6f2239fe47c',

        indexName: 'redstone-academy',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
