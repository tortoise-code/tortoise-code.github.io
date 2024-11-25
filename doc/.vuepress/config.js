// config.js
module.exports = {
  title: "博客-白龟科技",
  dest: "docs",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '搭建博客', link: '/blog/' },
      { text: 'SSM讲解', link: '/server/ssm/' },
      { text: '技术支持', link: 'https://www.vuepress.cn/' },
    ],
    sidebar: {
      '/blog/': [
        '',
        'installblog',
      ],
      '/server/ssm/': [
        '',
        'c1',
        'c2',
        'c3',
        'c4',
        'c5',
        'c6',
        'c7',
        'c12',
        'c13',
        'c14',
        'c15',
        'c18',
        'c19'
      ],
      '/linux/': [
        {
          title: 'Linux学习',
          collapsable: true,
          children: [
            '',
            "connect",
            "vmbug",
          ]
        },
        {
          title: "Docker学习",
          children: [
            'docker/',
            'docker/images',
            'docker/tomcat',
            'docker/mysql'
          ],
        }, {
          title: "项目部署",
          children: [
            'project/warehouse',
            'project/mysql',
            'project/jdk',
            'project/intelliJ',
            'project/maven',
            'project/package',
            'project/install',
          ],
        }],
      '/': [
        '',
        'guide',
        'about'
      ]
    }
  }
}