# 远程链接

## centos远程链接

一般centos内部自带ssh服务,可以直接使用

``` shell
# 查看是否自带ssh服务
systemctl status sshd
```

<pre style="backgroud:rgba(0,0,0,0.5);color:green;">
● sshd.service - OpenSSH server daemon
   Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; vendor preset: enabled)
   Active: active (running) since 一 2023-04-24 10:03:40 CST; 2min 15s ago
     Docs: man:sshd(8)
           man:sshd_config(5)
 Main PID: 1046 (sshd)
   CGroup: /system.slice/sshd.service
           └─1046 /usr/sbin/sshd -D
</pre>

有该提示表示centos有内置ssh远程服务
``` shell
# 查看当前电脑虚拟ip地址
ip addr 
```

<pre style="backgroud:rgba(0,0,0,0.5);color:green;">
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:6d:47:68 brd ff:ff:ff:ff:ff:ff
    inet 192.168.200.104/24 brd 192.168.200.255 scope global noprefixroute dynamic ens33
       valid_lft 1390sec preferred_lft 1390sec
    inet6 fe80::a5db:5df2:650f:ba01/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
</pre>

::: tip 查看ip地址
上方显示网络结果中 `127.0.0.1`和 `192.168.200.255`都不是主机`ip`地址<br>
真实ip地址为`192.168.200.104`
:::

## 远程连接工具

### 1. gitbash工具

在下载有`git`软件的情况下`gitbash`内置了远程链接工具

打开`gitbash`

``` shell
# 远程链接用名为root的主机为192.168.200.104服务器
ssh root@192.168.200.104
```


提示输入密码

> root@192.168.200.104's password:

输入密码`123456`

<pre style="backgroud:rgba(0,0,0,0.5);color:green;">Last login: Mon Apr 24 10:03:54 2023 from 192.168.200.1
[root@ysy ~]#
</pre>

`[root@ysy ~]#`代表进入到了远程服务器终端界面