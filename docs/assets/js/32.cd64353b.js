(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{315:function(s,e,t){"use strict";t.r(e);var a=t(14),r=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"远程链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程链接"}},[s._v("#")]),s._v(" 远程链接")]),s._v(" "),e("h2",{attrs:{id:"centos远程链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos远程链接"}},[s._v("#")]),s._v(" centos远程链接")]),s._v(" "),e("p",[s._v("一般centos内部自带ssh服务,可以直接使用")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否自带ssh服务")]),s._v("\nsystemctl status sshd\n")])])]),e("pre",{staticStyle:{backgroud:"rgba(0,0,0,0.5)",color:"green"}},[s._v("● sshd.service - OpenSSH server daemon\n   Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; vendor preset: enabled)\n   Active: active (running) since 一 2023-04-24 10:03:40 CST; 2min 15s ago\n     Docs: man:sshd(8)\n           man:sshd_config(5)\n Main PID: 1046 (sshd)\n   CGroup: /system.slice/sshd.service\n           └─1046 /usr/sbin/sshd -D\n")]),s._v(" "),e("p",[s._v("有该提示表示centos有内置ssh远程服务")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前电脑虚拟ip地址")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr \n")])])]),e("pre",{staticStyle:{backgroud:"rgba(0,0,0,0.5)",color:"green"}},[s._v("1: lo: "),e("LOOPBACK",{attrs:{",UP,LOWER_UP":""}},[s._v(" mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope host\n       valid_lft forever preferred_lft forever\n2: ens33: "),e("BROADCAST",{attrs:{",MULTICAST,UP,LOWER_UP":""}},[s._v(" mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether 00:0c:29:6d:47:68 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.200.104/24 brd 192.168.200.255 scope global noprefixroute dynamic ens33\n       valid_lft 1390sec preferred_lft 1390sec\n    inet6 fe80::a5db:5df2:650f:ba01/64 scope link noprefixroute\n       valid_lft forever preferred_lft forever\n")])],1)],1),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("查看ip地址")]),s._v(" "),e("p",[s._v("上方显示网络结果中 "),e("code",[s._v("127.0.0.1")]),s._v("和 "),e("code",[s._v("192.168.200.255")]),s._v("都不是主机"),e("code",[s._v("ip")]),s._v("地址"),e("br"),s._v("\n真实ip地址为"),e("code",[s._v("192.168.200.104")])])]),s._v(" "),e("h2",{attrs:{id:"远程连接工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程连接工具"}},[s._v("#")]),s._v(" 远程连接工具")]),s._v(" "),e("h3",{attrs:{id:"_1-gitbash工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-gitbash工具"}},[s._v("#")]),s._v(" 1. gitbash工具")]),s._v(" "),e("p",[s._v("在下载有"),e("code",[s._v("git")]),s._v("软件的情况下"),e("code",[s._v("gitbash")]),s._v("内置了远程链接工具")]),s._v(" "),e("p",[s._v("打开"),e("code",[s._v("gitbash")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程链接用名为root的主机为192.168.200.104服务器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@192.168.200.104\n")])])]),e("p",[s._v("提示输入密码")]),s._v(" "),e("blockquote",[e("p",[s._v("root@192.168.200.104's password:")])]),s._v(" "),e("p",[s._v("输入密码"),e("code",[s._v("123456")])]),s._v(" "),e("pre",{staticStyle:{backgroud:"rgba(0,0,0,0.5)",color:"green"}},[s._v("Last login: Mon Apr 24 10:03:54 2023 from 192.168.200.1\n[root@ysy ~]#\n")]),s._v(" "),e("p",[e("code",[s._v("[root@ysy ~]#")]),s._v("代表进入到了远程服务器终端界面")])])}),[],!1,null,null,null);e.default=r.exports}}]);