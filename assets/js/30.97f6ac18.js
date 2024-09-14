(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{313:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"文件命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件命令"}},[s._v("#")]),s._v(" 文件命令")]),s._v(" "),a("h2",{attrs:{id:"创建文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建文件夹"}},[s._v("#")]),s._v(" 创建文件夹")]),s._v(" "),a("p",[s._v("命令:"),a("code",[s._v("mkdir")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前目录下创建一个docs目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以递归创建文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" docs/.vuepress/public\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("查看目录小技巧")]),s._v(" "),a("p",[s._v("上述例子如果出现 多个嵌套目录 "),a("code",[s._v("docs/.vuepress")]),s._v(" "),a("code",[s._v("docs/guide")]),s._v(" "),a("br"),s._v("\n再加上文件后很难通过"),a("code",[s._v("ls")]),s._v("去查看"),a("br"),s._v("\n可以通过下载命令工具"),a("code",[s._v("tree")]),s._v("用来直观查看"),a("br")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有网情况下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# centos")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tree\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tree\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用命令查看文件")]),s._v("\ntree docs\n")])])])]),s._v(" "),a("h2",{attrs:{id:"删除文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除文件夹"}},[s._v("#")]),s._v(" 删除文件夹")]),s._v(" "),a("p",[s._v("命令:"),a("code",[s._v("rm")])]),s._v(" "),a("p",[s._v("删除命令一般配合参数"),a("code",[s._v("-rf")]),s._v("一块使用,"),a("code",[s._v("-r")]),s._v("递归删除,"),a("code",[s._v("-f")]),s._v("强制删除")]),s._v(" "),a("p",[a("font",{attrs:{color:"#f65500"}},[s._v("注意:"),a("code",[s._v("rm -rf 要删除的目录")]),s._v(" 删除后无法找回,请慎重使用")])],1),s._v(" "),a("blockquote",[a("p",[s._v("删除命令rmdir只能删除文件夹 限制过多一般不使用")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" docs\n")])])]),a("h2",{attrs:{id:"拷贝命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拷贝命令"}},[s._v("#")]),s._v(" 拷贝命令")]),s._v(" "),a("p",[s._v("命令: "),a("code",[s._v("cp")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 准备拷贝的文件 默认在用户目录")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建操作文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" learning_cp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" learning_cp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建三个日志文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" a.log b.log c.log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为了确定复制效果 编译一下a.log")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" a.log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入vi编辑器后 需要命令才能操作")]),s._v("\n")])])]),a("p",[s._v("使用"),a("code",[s._v("vi")]),s._v("编辑文本")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑器中输入i 左下角有 -- insert -- 提示 进入编辑模式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随意输入文本 例如")]),s._v("\nlearnig "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" by fanxin\n")])])]),a("p",[s._v("退出编辑模式：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("按下")]),s._v("ESC`按键")]),s._v(" "),a("li",[s._v("输入"),a("code",[s._v(":wq")]),s._v(" (保存并退出的意思)")])]),s._v(" "),a("p",[s._v("将"),a("code",[s._v("a.log")]),s._v("文件复制到用户目录下")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" learning_cp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将命令拷贝到用户目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" a.log ~/a.log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入用户目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看拷贝结果")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),a("pre",[s._v("a.log  anaconda-ks.cfg  learging_cp")]),s._v(" "),a("h2",{attrs:{id:"移动和重名名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动和重名名"}},[s._v("#")]),s._v(" 移动和重名名")]),s._v(" "),a("p",[s._v("命令:"),a("code",[s._v("mv")])]),s._v(" "),a("p",[s._v("mv是一个复合命令,可以移动文件和重命名(重命名本质是将文件移动并更改名字)")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将用户目录下a.log 移动到 leargning_cp目录下并改名d.log")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" a.log learning_cp/d.log\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);