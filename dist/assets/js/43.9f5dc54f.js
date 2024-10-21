(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{326:function(e,t,r){"use strict";r.r(t);var n=r(14),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"部署物流管理系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署物流管理系统"}},[e._v("#")]),e._v(" 部署物流管理系统")]),e._v(" "),t("h2",{attrs:{id:"系统安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统安装包"}},[e._v("#")]),e._v(" 系统安装包")]),e._v(" "),t("p",[e._v("点击下载 "),t("a",{attrs:{href:"https://media.codecore.cn/uploads/2023/05/20/31ksUzwj_jdk-8u162-windows-x64.exe",target:"_blank",rel:"noopener noreferrer"}},[e._v("JDK 1.8"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("点击下载 "),t("a",{attrs:{href:"https://media.codecore.cn/uploads/2023/04/24/IeqDpCFX_%E7%89%A9%E6%B5%81%E7%AE%A1%E7%90%86.rar?attname=%E7%89%A9%E6%B5%81%E7%AE%A1%E7%90%86.rar",target:"_blank",rel:"noopener noreferrer"}},[e._v("物流管理系统"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("点击下载 "),t("a",{attrs:{href:"https://media.codecore.cn/uploads/2023/04/24/nVtmYWbc_ideaIU-2021.3.3.exe?attname=ideaIU-2021.3.3.exe",target:"_blank",rel:"noopener noreferrer"}},[e._v("IntelliJ idea开发工具"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("点击下载 "),t("a",{attrs:{href:"https://media.codecore.cn/uploads/2023/04/24/rp0pKSvq_IDEAWindows%E7%89%88%E4%B8%80%E9%94%AE%E6%B0%B8%E4%B9%85%E6%BF%80%E6%B4%BB.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("IntelliJ idea破解激活"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("点击下载 "),t("a",{attrs:{href:"https://media.codecore.cn/uploads/2023/05/23/N4zwocWX_apache-maven-3.6.3-bin.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"当前项目架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当前项目架构"}},[e._v("#")]),e._v(" 当前项目架构")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://media.codecore.cn/markdown/20230526132956.jpg",alt:"/20230526132956.jpg"}})]),e._v(" "),t("pre",{attrs:{hidden:""}},[e._v(" mermaid\ngraph LR\nA(Windows系统)--\x3e |虚拟机VM| B{Ubuntu/Centos}\n\nB--\x3eC1[宝塔面板]\nC1--\x3eC3[PHP]\nC1--\x3eC4[MySQ]\nC1--\x3eC5[Nginx]\nC1--\x3eC6[Tomcat]\nB--\x3eD\nD[物流管理系统]--\x3e | 链接 | C4\nD--\x3e | 需要JDK1.8 | C6\nD--\x3e | jar包 | E(使用宝塔创建java项目)\nU[用户]--\x3e | 域名/ip经过访问项目 | D\n")]),e._v(" "),t("pre",{attrs:{hidden:""}},[e._v("graph LR\nA(Windows系统)--\x3e |虚拟机VM| B[Ubuntu]\n\nB--\x3eC1[宝塔面板]\nB--\x3eC3[PHP-BT]\nB--\x3eC4[MySQ-BT]\nB--\x3eC5[Nginx-BT]\nC2--\x3eD1[Tomcat]\nC2--\x3eD2[MySQL8.0]\nB--\x3eC2[Docker]\nA1[物流管理系统]--\x3e |ubutu->docker->mysql | D\n")]),e._v(" "),t("h2",{attrs:{id:"项目部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目部署"}},[e._v("#")]),e._v(" 项目部署")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/linux/project/mysql.html"}},[e._v("1.部署数据库")])],1),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/linux/project/jdk.html"}},[e._v("2.配置JDK环境")])],1),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/linux/project/intelliJ.html"}},[e._v("3.安装IJ编辑器")])],1),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/linux/project/maven.html"}},[e._v("4.安装Maven")])],1),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/linux/project/package.html"}},[e._v("5.使用Maven打包")])],1),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/linux/project/install.html"}},[e._v("6.部署实施")])],1)])}),[],!1,null,null,null);t.default=a.exports}}]);