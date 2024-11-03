(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{314:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ubuntu安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu安装docker"}},[s._v("#")]),s._v(" ubuntu安装docker")]),s._v(" "),t("h2",{attrs:{id:"第一种安装方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一种安装方式"}},[s._v("#")]),s._v(" 第一种安装方式")]),s._v(" "),t("blockquote",[t("p",[s._v("菜鸟教程安装")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fsSL")]),s._v(" https://test.docker.com "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" test-docker.sh\n "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" test-docker.sh\n")])])]),t("h2",{attrs:{id:"第二种安装方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二种安装方式"}},[s._v("#")]),s._v(" 第二种安装方式")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新下载镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker.io "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装docker")]),s._v("\n")])])]),t("h2",{attrs:{id:"配置镜像源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置镜像源"}},[s._v("#")]),s._v(" 配置镜像源")]),s._v(" "),t("p",[s._v("下载镜像容器过慢 切换镜像源地址")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/docker/daemon.json \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#超级管理员编辑daemon.json配置文件 ")]),s._v("\n")])])]),t("p",[s._v("daemon.json 内容")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://pgjhp4wg.mirror.aliyuncs.com"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("或者试试配置这个(二选一)")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://m2lv5yea.mirror.aliyuncs.com"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("重启")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl daemon-reload  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载")]),s._v("\nsystemctl restart docker.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启docker服务")]),s._v("\n")])])]),t("h2",{attrs:{id:"可能会遇到-containered-依赖错误信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可能会遇到-containered-依赖错误信息"}},[s._v("#")]),s._v(" 可能会遇到 containered 依赖错误信息")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" containered "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装前置依赖")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker.io "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装docker")]),s._v("\n")])])]),t("h2",{attrs:{id:"镜像源daemon错误信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像源daemon错误信息"}},[s._v("#")]),s._v(" 镜像源daemon错误信息")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl daemon-reload  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载")]),s._v("\nsystemctl restart docker.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启docker服务")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);