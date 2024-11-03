# 七牛云 JS-SDK

## 使用引入七牛云 静态文件 方式

> 使用官方提供的下载地址下载了一个压缩包,但是压缩包内确实dist文件夹及核心js文件
> 在README 中看到一项说明 下载git项目 内部运行命令才能够产生核心文件

``` js
// 进入到你git克隆下来的项目 或者 你下载的压缩包解压后的文件 
// 可以看出这是一个基于node 的 webpack项目
// 认命吧 项目核心文件 必须安装有node 和 npm
// 在项目根文件夹下执行以下命令
npm install;//等待完成
npm run build;// 生产核心文件dist及内部js

```
> 此时根部录下多出一个dist夹 内部可以看到 
`qiniu.min.js`
`qiniu.min.js.map`
<DotLine>