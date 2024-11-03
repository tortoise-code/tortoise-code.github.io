(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{320:function(t,a,v){"use strict";v.r(a);var _=v(14),o=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"部署实施"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署实施"}},[t._v("#")]),t._v(" 部署实施")]),t._v(" "),a("h2",{attrs:{id:"服务器环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器环境搭建"}},[t._v("#")]),t._v(" 服务器环境搭建")]),t._v(" "),a("p",[t._v("宝塔面板"),a("code",[t._v("网站")]),t._v("选中"),a("code",[t._v("java项目")])]),t._v(" "),a("p",[t._v("会提示安装"),a("code",[t._v("JDK或tomcat")])]),t._v(" "),a("p",[t._v("由于"),a("code",[t._v("linux")]),t._v("系统无法直接使用"),a("code",[t._v("exe")]),t._v(",所以"),a("code",[t._v("linux")]),t._v("版的"),a("code",[t._v("jdk")]),t._v("可以通过先安装"),a("code",[t._v("tomcat")]),t._v(",使用"),a("code",[t._v("tomcat")]),t._v("内置的"),a("code",[t._v("java jdk")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://media.codecore.cn/markdown/bt2023-05-23163722.jpg",alt:"/bt2023-05-23163722.jpg"}})]),t._v(" "),a("ol",[a("li",[t._v("选择安装"),a("code",[t._v("tomcat")])]),t._v(" "),a("li",[t._v("安装"),a("code",[t._v("tomcat8")])]),t._v(" "),a("li",[t._v("等待安装完成")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://media.codecore.cn/markdown/bt2023-05-23163853.jpg",alt:"/bt2023-05-23163853.jpg"}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[a("code",[t._v("tomcat8")]),t._v("安装完毕后\n"),a("img",{attrs:{src:"http://media.codecore.cn/markdown/btt2023-05-23164326.jpg",alt:"/btt2023-05-23164326.jpg"}})])]),t._v(" "),a("li",[a("p",[t._v("刷新页面,点击"),a("code",[t._v("JDK管理")]),t._v(" "),a("img",{attrs:{src:"http://media.codecore.cn/markdown/btjdk2023-05-23164406.jpg",alt:"/btjdk2023-05-23164406.jpg"}})])])]),t._v(" "),a("blockquote",[a("p",[t._v("一般安装完毕"),a("code",[t._v("tomcat8")]),t._v("默认会生成jdk的配置,如上图")])]),t._v(" "),a("blockquote",[a("p",[t._v("如果默认生成的"),a("code",[t._v("jdk地址")]),t._v("不是"),a("code",[t._v("java")]),t._v("后缀,如:"),a("code",[t._v("/usr/local/btjdk/jdk8/bin/java")]),t._v("\n点击"),a("code",[t._v("添加jdk")]),t._v("在该地址目录找到"),a("code",[t._v("java")]),t._v(",选中它,完成添加")])]),t._v(" "),a("h2",{attrs:{id:"宝塔上传jar包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宝塔上传jar包"}},[t._v("#")]),t._v(" 宝塔上传"),a("code",[t._v("jar")]),t._v("包")]),t._v(" "),a("p",[t._v("上传位置任意,一般会放到"),a("code",[t._v("/www/wwwroot")]),t._v("或者用户目录下")]),t._v(" "),a("p",[t._v("上传可以在宝塔"),a("code",[t._v("文件")]),t._v("模块上操作")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://media.codecore.cn/markdown/up2023-05-23164928.jpg",alt:"/up2023-05-23164928.jpg"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://media.codecore.cn/markdown/up12023-05-23165239.jpg",alt:"/up12023-05-23165239.jpg"}})]),t._v(" "),a("h2",{attrs:{id:"配置启动项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置启动项目"}},[t._v("#")]),t._v(" 配置启动项目")]),t._v(" "),a("p",[a("code",[t._v("网站")]),t._v("--\x3e"),a("code",[t._v("java项目")]),t._v("--\x3e"),a("code",[t._v("添加java项目")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://media.codecore.cn/markdown/start2023-05-23165454.jpg",alt:"/start2023-05-23165454.jpg"}})]),t._v(" "),a("h2",{attrs:{id:"放开服务端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#放开服务端口"}},[t._v("#")]),t._v(" 放开服务端口")]),t._v(" "),a("p",[t._v("如果宝塔没有将"),a("code",[t._v("8089")]),t._v("端口放开")]),t._v(" "),a("p",[t._v("自行安全将"),a("code",[t._v("8089")]),t._v("放开")]),t._v(" "),a("h2",{attrs:{id:"域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[t._v("#")]),t._v(" 域名")]),t._v(" "),a("p",[t._v("创建"),a("code",[t._v("java项目")]),t._v("时,本人添加的是虚假域名"),a("code",[t._v("warehouse.cn")]),t._v(",如果真实上线的话可以写自己的真实域名")]),t._v(" "),a("h3",{attrs:{id:"配置windows虚拟域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置windows虚拟域名"}},[t._v("#")]),t._v(" 配置windows虚拟域名")]),t._v(" "),a("p",[a("code",[t._v("DNS")]),t._v("文件配置位置")]),t._v(" "),a("p",[a("code",[t._v("C:\\Windows\\System32\\drivers\\etc\\hosts")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://media.codecore.cn/markdown/host2023-05-23171219.jpg",alt:"/host2023-05-23171219.jpg"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://media.codecore.cn/markdown/host22023-05-23171330.jpg",alt:"/host22023-05-23171330.jpg"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://media.codecore.cn/markdown/login2023-05-23171443.jpg",alt:"/login2023-05-23171443.jpg"}})])])}),[],!1,null,null,null);a.default=o.exports}}]);