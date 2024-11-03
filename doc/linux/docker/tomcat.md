# docker安装Tomcat

``` shell
docker pull tomcat #等待下载安装
```

## 启动tomcat

|参数 | 功能 |
|:--:|:--:|
|--name|容器名称|
| -p | 端口映射关系 <br/>将系统端口的8080端口<br/>映射到tomcat的8080端口 |
| -d | 容器后台执行 |
| -v | 映射系统目录到docker对应目录 |


``` shell
# 无文件映射
docker run --name tomcat -p 8080:8080  -d tomcat
```
``` shell
# 文件夹映射到容器
docker run --name tomcat -p 8080:8080 -v $PWD/test:/usr/local/tomcat/webapps/test -d tomcat
```
> tomcat最新tomcat启动后会找不到对应资源 无法显示

 ## 进入到tomcat容器查看文件关系

|参数 | 功能 |
|:--:|:--:|
|-it|命令交互式访问容器|
|exce|退出时容器继续运行|
|tomcat|容器名字--name <br> 可以使用容器`id`代替|
|/bin/bash|容器内置终端|
``` shell
# exec退出不停止docker的进入方式
docker run -it exce tomcat /bin/bash
```

## 显示tomcat示例

``` shell
# 无文件映射
docker run --name tomcat -p 8080:8080  -d tomcat
# 进入容器
docker exce -it  tomcat /bin/bash
# 进入后默认位置是 /usr/local/tomcat
# 删除默认你应用目录
rm -rf webapps
# 将示例目录命名成应用目录
mv webapps.dist ./webapps
```
