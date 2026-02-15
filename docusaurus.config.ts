import { themes as prismThemes, PrismTheme } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Minilux light theme
const miniluxLight: PrismTheme = {
  plain: {
    color: "#464654",
    backgroundColor: "#f7f6f3",
  },
  styles: [
    { types: ["comment"], style: { color: "#8c8c9e", fontStyle: "italic" } },
    { types: ["string"], style: { color: "#4f9850" } },
    { types: ["keyword"], style: { color: "#c14c7c", fontWeight: "bold" } },
    { types: ["function", "builtin"], style: { color: "#3d73cb" } },
    { types: ["variable"], style: { color: "#b66e2c" } },
    { types: ["number"], style: { color: "#8152b6" } },
    { types: ["operator"], style: { color: "#b06d81" } },
    { types: ["punctuation"], style: { color: "#9a9aa8" } },
  ],
};

// Custom Minilux dark theme (soft pastels on deep charcoal)
const miniluxDark: PrismTheme = {
  plain: {
    color: "#d5d3d0",
    backgroundColor: "#1e1e28",
  },
  styles: [
    { types: ["comment"], style: { color: "#7a7a96", fontStyle: "italic" } },
    { types: ["string"], style: { color: "#aadd8d" } },
    { types: ["keyword"], style: { color: "#e592b3", fontWeight: "bold" } },
    { types: ["function", "builtin"], style: { color: "#85aef0" } },
    { types: ["variable"], style: { color: "#e8b886" } },
    { types: ["number"], style: { color: "#c6a6ee" } },
    { types: ["operator"], style: { color: "#e1a7b8" } },
    { types: ["punctuation"], style: { color: "#8b8b9f" } },
  ],
};

const config: Config = {
  title: 'Minilux',
  tagline: 'A tiny programming language designed for simplicity',
  favicon: 'img/minilux-icon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://minilux.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'minilux-org', // Usually your GitHub org/user name.
  projectName: 'minilux-org.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/minilux-org/minilux-org.github.io/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/minilux-icon.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Minilux',
      logo: {
        alt: 'Minilux Logo',
        src: 'img/minilux-icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/minilux-org/minilux',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Language Reference',
              to: '/docs/language/variables',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Support',
              href: 'https://github.com/minilux-org/minilux/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/minilux-org/minilux',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alexia Michelle.`,
    },
    prism: {
      theme: miniluxLight,
      darkTheme: miniluxDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
