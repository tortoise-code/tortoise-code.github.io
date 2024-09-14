(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{309:function(t,a,s){"use strict";s.r(a);var v=s(14),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"搭建博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建博客"}},[t._v("#")]),t._v(" 搭建博客")]),t._v(" "),a("h2",{attrs:{id:"github版公网博客搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github版公网博客搭建"}},[t._v("#")]),t._v(" github版公网博客搭建")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/signup?user_email=&source=form-home-signup",target:"_blank",rel:"noopener noreferrer"}},[t._v("注册github账号"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("https://github.com/signup?user_email=&source=form-home-signup")])]),t._v(" "),a("p",[t._v("邮箱尽量使用自己QQ邮箱")]),t._v(" "),a("p",[a("font",{attrs:{color:"red"}},[t._v("注意：如果有gitee账号最好码云绑定一下自己的QQ邮箱")])],1),t._v(" "),a("ul",[a("li",[t._v("用户名使用英文和数字可以使用"),a("code",[t._v("-")])])]),t._v(" "),a("blockquote",[a("p",[t._v("记录好自己注册的用户名和密码")])]),t._v(" "),a("h3",{attrs:{id:"创建git仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建git仓库"}},[t._v("#")]),t._v(" 创建git仓库")]),t._v(" "),a("ul",[a("li",[t._v("要求:")]),t._v(" "),a("li",[a("ul",[a("li",[t._v("仓库名是你 "),a("code",[t._v("账户名.github.io")])])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("例如github账户名 "),a("code",[t._v("fanxin")]),t._v(" 仓库名为 "),a("code",[t._v("fanxin.github.io")])])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("创建仓库时勾选 "),a("code",[t._v("README")]),t._v("文件(使用中文翻译时 勾选 "),a("code",[t._v("自述文件")]),t._v(" )")])])])]),t._v(" "),a("h3",{attrs:{id:"下载前置工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载前置工作"}},[t._v("#")]),t._v(" 下载前置工作")]),t._v(" "),a("blockquote",[a("p",[t._v("当你通过HTTPS访问Git远程仓库，如果服务器的SSL证书未经过第三方机构签署，那么Git就会报错")])]),t._v(" "),a("p",[t._v("一般下载可以先执行以下命令解决报错问题")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" http.sslVerify "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n")])])]),a("h3",{attrs:{id:"使用git-gui-或者-git-bash下载项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用git-gui-或者-git-bash下载项目"}},[t._v("#")]),t._v(" 使用"),a("code",[t._v("git GUI")]),t._v(" 或者 "),a("code",[t._v("git BASH")]),t._v("下载项目")]),t._v(" "),a("h4",{attrs:{id:"gui下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gui下载安装"}},[t._v("#")]),t._v(" GUI下载安装")]),t._v(" "),a("ul",[a("li",[t._v("使用克隆已有项目")]),t._v(" "),a("li",[t._v("填写"),a("code",[t._v("github")]),t._v("远程仓库网址")]),t._v(" "),a("li",[t._v("选择克隆到本地的文件夹位置")]),t._v(" "),a("li",[t._v("在本地文件夹下添加克隆的文件名字")])]),t._v(" "),a("p",[t._v("例如下载到桌面")]),t._v(" "),a("blockquote",[a("p",[t._v("C:/Users/YSY/Desktop"),a("code",[t._v("/Blog")]),t._v(" "),a("code",[t._v("Blog")]),t._v("是桌面不存在的文件夹 用来存放git仓库")])]),t._v(" "),a("h4",{attrs:{id:"命令下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令下载安装"}},[t._v("#")]),t._v(" 命令下载安装")]),t._v(" "),a("ul",[a("li",[t._v("打开"),a("code",[t._v("git Bash")]),t._v(" 或者 "),a("code",[t._v("cmd")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#你github的https地址")]),t._v("\n")])])]),a("ul",[a("li",[t._v("项目克隆成功后使用"),a("code",[t._v("vscode")]),t._v("打开该文件夹")]),t._v(" "),a("li",[t._v("点击"),a("code",[t._v("vscode")]),t._v("左侧边栏"),a("code",[t._v("git图标")])]),t._v(" "),a("li",[t._v("填写提交备注并点击"),a("code",[t._v("提交")])]),t._v(" "),a("li",[t._v("点击"),a("code",[t._v("同步")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);