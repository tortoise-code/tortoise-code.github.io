# ubuntu安装docker

## 第一种安装方式
> 菜鸟教程安装

``` shell
 curl -fsSL https://test.docker.com -o test-docker.sh
 sudo sh test-docker.sh
```

## 第二种安装方式

``` shell
sudo apt-get install update # 更新下载镜像
sudo apt-get install docker.io # 安装docker
```

## 配置镜像源

下载镜像容器过慢 切换镜像源地址
``` shell
sudo vim /etc/docker/daemon.json 
#超级管理员编辑daemon.json配置文件 
```
daemon.json 内容

``` json
{
    "registry-mirrors" : [
      "https://pgjhp4wg.mirror.aliyuncs.com"
  ]
}
```
或者试试配置这个(二选一)
``` json
{ 
  "registry-mirrors": [
    "https://m2lv5yea.mirror.aliyuncs.com"
  ]
}
```
重启

``` shell
systemctl daemon-reload  # 重新加载
systemctl restart docker.service # 重启docker服务
```

## 可能会遇到 containered 依赖错误信息

``` shell
sudo apt-get install containered # 安装前置依赖
sudo apt-get install docker.io # 安装docker
```

## 镜像源daemon错误信息

``` shell
systemctl daemon-reload  # 重新加载
systemctl restart docker.service # 重启docker服务
```