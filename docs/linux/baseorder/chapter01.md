# 基础命令

## 终端面板信息

* root指用户
* localhost指主机地址
* ~ 指用户目录
* `#`代表超级管理员 `$`代表普通用户
``` shell
[root@localhost ~]#
```

## 目录切换

命令: `cd`

~ `/`   根目录
~ `../` 上级目录
~ `./`  当前目录 

## 查看目录信息

命令: `ls`

> 能列出当前目录下一般文件信息

``` shell
[root@localhost ~]$ ls 
```

> 列出所有文件和文件夹 包含隐藏文件信息

``` shell
[root@localhost ~]$ ls -a
```

> 以列表形式文件和文件夹的详细信息

``` shell
[root@localhost ~]$ ls -l
```

> 列出所有文件的详细信息

``` shell
[root@localhost ~]$ ls -al
```
> 列出指定目录下的文件信息

``` shell
[root@localhost ~]# ls /root
```
> 注意:`[root@localhost ~]`$是系统自带

## 查看环境变量

命令:`echo`
> echo是linux常用输出命令,可以指定在控制输出任意字符也可以输出系统自带环境变量

``` shell
# [root@localhost ~]#
echo $HOME; # 输出超级管理目录
# /root
# [root@localhost ~]$
echo $HOME; # 输出一般用户目录
# /home/username #一般用户目录都在home目录下存放
```

## 退出登录两种方式

``` shell
logout
```

``` shell
exit
```

## 立刻关机

``` shell
shutdown now
```


## 查看系统信息

命令:`unamae`

``` shell
uname
# 查看全部信息
uname -a
```


## 查看内存
命令:`free`

``` shell
free
# 以合适大小查看
free -h
```
## 查看修改主机名

命令:`hostname`
``` shell
hostname # 查看
hostname yourComputer # 临时修改 重新登录生效,重启失效
```
命令:`hostnamectl`
``` shell
hostnamectl #查看
hostnamectl set-hostname ysy # 主机名改为ysy 重新登录永久生效
```

