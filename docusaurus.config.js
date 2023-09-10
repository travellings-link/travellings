// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Travelling',
  tagline: 'Dinosaurs are cool',
  favicon: 'https://www.travellings.cn/assets/img/mini-logo.svg',

  // Set the production url of your site here
  url: 'https://www.travellings.cn/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/travellings-link/travellings/blob/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/travellings-link/travellings/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "post",
        path: "custom/post",
        routeBasePath: "post",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl:
          'https://github.com/travellings-link/travellings/blob/master',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '首页',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          { to: '/blog', label: '博客', position: 'left' },
          { to: '/post', label: '公告', position: 'left' },
          {
            href: 'https://afdian.net/a/travellings',
            label: '赞助',
            position: 'left',
          },
          {
            href: 'https://afdian.net/a/travellings',
            logo: {
              alt: 'My Site Logo',
              src: 'https://www.travellings.cn/assets/logo.gif',
            },
            position: 'left',

          },
          {
            href: 'https://www.travellings.cn/go.html',
            className: 'go',
            position: 'right',
          },
          {
            to: '/docs/join',
            label: '加入开往',
            position: 'right',
            className: 'join',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `<img src="https://www.xiaozonglin.cn/usr/themes/bearsimple/assets/image/police.png">
        <a class="ba" href="https://beian.miit.gov.cn/">闽 ICP 备 2023011626 号 - 1</a> | <a class="ba" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35059102000048">闽公网安备 35059102000048 号</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'support_us',
        content:
          '🚀 如果你觉得还不错, 就给一个 ⭐️ Start 吧 ~ <a target="_blank" rel="noopener noreferrer" href="https://github.com/travellings-link/travellings">Click here</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
    }),
};

module.exports = config;
