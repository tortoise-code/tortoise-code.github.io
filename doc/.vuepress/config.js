module.exports = {
  title: "博客-凡心",
  dest:"docs",
  head:[
    // ['script', { type:"module",src: 'https://cdn.jsdelivr.net/npm/mermaid@10.0.2/dist/svgDraw-c034b55e.min.js' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '搭建博客', link: '/blog/' },
      { text: '技术支持', link: 'https://www.vuepress.cn/' },
    ],
    sidebar: {
      '/blog/': [
        '',
        'installblog',
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
        //  {
        //   title: '命令',
        //   children: [
        //     'baseorder/chapter01',
        //     'baseorder/chapter02',
        //     'baseorder/chapter03'
        //   ]
        // },
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
      '/server/': [
        {
          title: "后端服务",
          children: [
            {
              title: 'Java',
              children: [
                'java/maven'
              ]
            },
            {
              title: 'JSP动态网站',
              children: [
                'jsp/'
              ]
            }
          ]
        }
      ],
      '/': [
        '',
        'guide',
        'about'
      ]
    }
  }
}