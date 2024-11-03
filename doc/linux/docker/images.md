## 镜像image

使docker下载的东西是镜像(可以理解为系统软件包)

下载镜像
> docker pull ubuntu

查看当前已经下载的镜像

``` shell
docker images
```
## 容器container

通过docker启动的镜像叫做容器(可以理解为安装到电脑上的系统)

docker可以用一个镜像启动很多容器

``` shell 
# 启动容器
docker run ubuntun
```

``` shell
# 查看docker创建的所有容器 含未启动
docker ps -a
# 查看容器 已启动
docker ps
```
## 容器使用

``` shell
# 进入指定容器内部
docker exec -it 容器名|容器ID /bin/bash
# 退出容器
exit
# 停止容器
docker stop 容器名|容器ID
# 启动指定容器
docker restart 容器名|容器ID
```