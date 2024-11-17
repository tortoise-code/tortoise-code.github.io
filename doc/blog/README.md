# 搭建自己的博客网站

## 下载安装`node`

[点击打开node网站](https://nodejs.org/en/)

> https://nodejs.org/en/

[点击下载](https://nodejs.org/dist/v18.14.2/node-v18.14.2-x64.msi)

* 安装略
* 一直`next`就齐活了

## 采用前端`vuepress`制作博客网站

* 打开vuepress中文网

[点击打开](https://www.vuepress.cn/)

> https://www.vuepress.cn/

教程位置

> https://www.vuepress.cn/guide/getting-started.html

## 搭建环境


### npm配置淘宝镜像源

> npm下载可能失败 大概率网慢

``` shell
npm config set registry https://registry.npm.taobao.org/
```

### 搭建博客

第一步:创建一个WebBlog目录(名字可以自己起)

第二步:用命令进行配置

``` shell
cd WebBlog # 终端进入你创建目录
# 可以利用vscode内置终端操作
npm init -y # 初始化你的目录 不加-y需要自己配置
# 执行完毕项目目录多出一个package.json文件
npm install -D vuepress # 安装vuepress 

```

第三步:`WebBlog`目录下创建`doc`目录

> doc是系统名称 你所有的`Markdown`文档都是在这里放的

## 启动本地网站和打包应用

> 打开项目目录下的 `package.json`文件

原本样子

``` json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
 },
```

改动后的样子

``` json
 "scripts": {
    "docs:dev": "vuepress dev doc",
    "docs:build": "vuepress build doc"
  }
```

> 注意:小技巧 `VS Code`目录上方 `资源管理器`右边三个点 勾选npm

由于版本更新node18版会导致错误 18.0以上需要更改配置为

``` json
"scripts": {
    "docs:dev": "set NODE_OPTIONS=--openssl-legacy-provider  && vuepress dev doc",
    "docs:build": "vuepress build doc"
  }
```

> 点击`vscode`左下角启动`docs:dev`本地调试查看自己的博客

### 打包网站

打包生成网站也需要修改一下命令配置

``` json
"scripts": {
    "docs:dev": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress dev doc",
    "docs:build": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress build doc"
  }
```
> 考虑到上传`GitHub`需要设置一下生成静态网站的目录

* 在`doc`目录下创建`.vuepress`目录
* 在`.vuepress`目录下创建`config.js`目录下

![20241116163651-2024-11-16-16-36-54](http://media.codecore.cn/markdown/20241116163651-2024-11-16-16-36-54.png)

必须有`dest`指明打包网站生成位置,`docs`指定生成项目目录`docs`目录下(主要为了适配`github`的page设置)

* `title`是网站标题
* `themeConfig`是主题配置
* `nav`是顶部菜单选项
* `sidebar`是左侧菜单

``` js
// config.js
module.exports = {
  title: "博客-白龟科技",
  dest: "docs",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'SSM讲解', link: '/server/ssm/' },
      { text: '技术支持', link: 'https://www.vuepress.cn/' },
    ],
    sidebar: {
      '/blog/': [
        '',
        'installblog',
      ],
      '/': [
        '',
        'guide',
        'about'
      ]
    }
  }
}
```
::: warning 说明
需要上传图片等静态资源,将资源放在`.vuepress`目录下`public`目录
:::


> 点击`vscode`左下角启动`docs:build`打包构建web网站

成功时能够看到项目目录多出一个`docs/.vuepress/dist`目录 `dist`中有html页面样式等

## 对首页进行优化

> `docs/README.md`文件

``` yaml
---
home: true
heroImage: /hero.png
actionText: 起步 →
actionLink: /guide/
features:
- title: 简明优先
  details: 对以 markdown 为中心的项目结构，做最简化的配置，帮助你专注于创作。
- title: Vue 驱动
  details: 享用 Vue + webpack 开发环境，在 markdown 中使用 Vue 组件，并通过 Vue 开发自定义主题。
- title: 性能高效
  details: VuePress 将每个页面生成为预渲染的静态 HTML，每个页面加载之后，然后作为单页面应用程序(SPA)运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```