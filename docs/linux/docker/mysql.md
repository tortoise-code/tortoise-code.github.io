# Docker安装mysql

## 下载mysql

``` shell
docker pull mysql 
```

> 下载过慢请看docker[配置镜像源](./README.md)

## 启动mysql

``` shell
docker run -itd --name java-mysql -p 3307:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
```

`--name java-myqsql` 给mysql容器起个名字方便后期启动删除

`-itd` 后台运行mysql

`-p 3307:3306` `宿主`中安装的有`mysql`,和容器`mysql`端口冲突
将宿主系统`3307`端口映射到容器`mysql`的`3306`端口上

可以使用 `docker ps `查看启动的容器信息

> `宿主` 安装docker容器的操作系统

``` shell
# 示例
docker ps
```
<pre style="backgroud:rgba(0,0,0,0.5);color:green;">CONTAINER ID   IMAGE     COMMAND                   CREATED          STATUS         PORTS                                                  NAMES
8f47fb9ab500   mysql     &quot;docker-entrypoint.s…&quot;   52 minutes ago   Up 3 seconds   33060/tcp, 0.0.0.0:3307-&gt;3306/tcp, :::3307-&gt;3306/tcp   java-mysql
</pre>

## 安装好后无法链接问题

1. `宿主`安装过`mysql`的情况可以在外部直接使用`mysql`链接容器数据库

``` shell
mysql -P3307 -uroot -p123456 # 链接失败
```

错误信息

<pre style="backgroud:rgba(0,0,0,0.5);color:green;">mysql: [Warning] Using a password on the command line interface can be insecure.
ERROR 1045 (28000): Access denied for user &apos;root&apos;@&apos;localhost&apos; (using password: YES)</pre>

> 错误信息提示密码错误

2. 进入到容器内部

``` shell
# java-mysql容器名 可以用容器ID号代替
docker exec -it java-mysql /bin/bash
# 此时mysql是容器mysql 容器mysql默认端口是3306 需要更改
mysql -P3306 -uroot -p123456
# 容器内部链接无问题 可以正常使用
```
<pre style="backgroud:rgba(0,0,0,0.5);color:green;">mysql: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.0.32 MySQL Community Server - GPL

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type &apos;help;&apos; or &apos;\h&apos; for help. Type &apos;\c&apos; to clear the current input statement.

mysql&gt; 
</pre>

3. 错误原因分析

    `a)` 端口映射出问题了(docker其他端口正常,排除)<br>
    `b)` 密码错误(排除)<br>
    `c)` 权限问题(大概率)<br>
    `d)` 连接方式有问题(最终确认)<br>

4. 修改root登录权限
在容器内部登录`mysql`

``` sql
-- 查看所有数据库 --
show databases;

-- 使用mysql数据 --
use mysql;
```

``` sql
-- 查看user表 user和host字段信息 -- 
select user,host from user;
```
<pre  style="backgroud:rgba(0,0,0,0.5);color:green;">+------------------+-----------+
| user             | host      |
+------------------+-----------+
| root             | %         |
| mysql.infoschema | localhost |
| mysql.session    | localhost |
| mysql.sys        | localhost |
| root             | localhost |
+------------------+-----------+
5 rows in set (0.00 sec)</pre>
``` sql
-- 修改root角色访问权限 -- 
update user set host='%' where user='root' and host='localhost'
-- 刷新权限信息 -- 
FLUSH PRIVILEGES;
```

报错 提示root有远程访问权限

<pre style="backgroud:rgba(0,0,0,0.5);color:green;">ERROR 1062 (23000): Duplicate entry &apos;%-root&apos; for key &apos;user.PRIMARY&apos;</pre>

解决
``` shell
# 在宿主机使用远程连接命令
mysql -h127.0.0.1 -P3306 -uroot -p123456
```

> mysql 默认访问域名localhost linux没有解析为127.0.0.1 所以无法访问
## 下载使用navicat

ubuntu中下载[Navicat MySQL](https://download.navicat.com.cn/download/navicat16-mysql-cs.AppImage)

访问: `https://www.navicat.com.cn` 去下载

默认下载位置用户目录下:`下载`或`Download`
> 如果是汉字目录 可以通过复制`下载`后用cd进入

``` shell
# 对下载的软件提升权限
sudo chmod +x navicat16-mysql-cs.AppImage
# 启动软件
./navicat16-mysql-cs.AppImage
```

配置链接信息

![/navicat.PNG](https://media.codecore.cn/markdown/navicat.PNG)

## 添加远程登录用户

进入mysql数据库

``` sql
-- 使用mysql数据库 -- 
use mysql;
-- 查看当前用户 --
select user,host from user;
-- 添加一个ysy用户 密码为123456 --
create user 'ysy'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
-- 给ysy用添加所有权限 --
grant all on *.* to 'ysy'@'%';
```