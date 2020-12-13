const { description } = require('../../package')

module.exports = {
  title: 'Patrick Roy',
  description: description,

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: 'https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/global/patrick-1.jpg',
    nav: [
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'References',
        link: '/references/'
      },
      {
        text: 'Documents',
        link: '/documents/'
      },
    ],
    sidebar: {
      '/about/': [
        {
          title: 'about',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
