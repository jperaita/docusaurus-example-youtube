const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Ayuda DILVE (Versión DELL )' ,
  tagline: 'Los metadatos molan',
  //url: 'https://your-docusaurus-test-site.com',
  //baseUrl: '/',
  url: 'https://www.kinesinet.com',
  baseUrl: '/dlvhelp_git/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ayuda DILVE',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Estándares',
            items: [
              {
                label: 'ONIX',
                href: 'https://web.dilve.es/onix/onix-libros/',
              },
              {
                label: 'Thema',
                href: 'https://web.dilve.es/thema-2/thema/',
              },
              {
                label: 'Calidad de metadatos',
                href: 'https://web.dilve.es/calidad-de-metadatos-2/calidad-de-metadatos/',
              },
            ],
          },
          {
            title: 'Consulta',
            items: [
              {
                label: 'Códigos ONIX',
                href: 'https://ns.editeur.org/onix/es',
              },
              {
                label: 'Códigos Thema',
                href: 'https://ns.editeur.org/thema/es',
              },
              {
                label: 'EDItEUR',
                href: 'https://www.editeur.org/',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'DILVE',
                href: 'https://dilve.es',
              },
              {
                label: 'Agencia del ISBN',
                href: 'https://agenciaisbn.es/web/index.php',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
