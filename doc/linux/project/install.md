# 部署实施

## 服务器环境搭建

宝塔面板`网站`选中`java项目`

会提示安装`JDK或tomcat`

由于`linux`系统无法直接使用`exe`,所以`linux`版的`jdk`可以通过先安装`tomcat`,使用`tomcat`内置的`java jdk`

![/bt2023-05-23163722.jpg](http://media.codecore.cn/markdown/bt2023-05-23163722.jpg)

1. 选择安装`tomcat`
2. 安装`tomcat8`
3. 等待安装完成

![/bt2023-05-23163853.jpg](http://media.codecore.cn/markdown/bt2023-05-23163853.jpg)

4. `tomcat8`安装完毕后
![/btt2023-05-23164326.jpg](http://media.codecore.cn/markdown/btt2023-05-23164326.jpg)

5. 刷新页面,点击`JDK管理`
![/btjdk2023-05-23164406.jpg](http://media.codecore.cn/markdown/btjdk2023-05-23164406.jpg)

> 一般安装完毕`tomcat8`默认会生成jdk的配置,如上图

> 如果默认生成的`jdk地址`不是`java`后缀,如:`/usr/local/btjdk/jdk8/bin/java`
> 点击`添加jdk`在该地址目录找到`java`,选中它,完成添加

## 宝塔上传`jar`包

上传位置任意,一般会放到`/www/wwwroot`或者用户目录下

上传可以在宝塔`文件`模块上操作

![/up2023-05-23164928.jpg](http://media.codecore.cn/markdown/up2023-05-23164928.jpg)


![/up12023-05-23165239.jpg](http://media.codecore.cn/markdown/up12023-05-23165239.jpg)


## 配置启动项目

`网站`-->`java项目`-->`添加java项目`

![/start2023-05-23165454.jpg](http://media.codecore.cn/markdown/start2023-05-23165454.jpg)


## 放开服务端口

如果宝塔没有将`8089`端口放开

自行安全将`8089`放开


## 域名

创建`java项目`时,本人添加的是虚假域名`warehouse.cn`,如果真实上线的话可以写自己的真实域名

### 配置windows虚拟域名

`DNS`文件配置位置

`C:\Windows\System32\drivers\etc\hosts`

![/host2023-05-23171219.jpg](http://media.codecore.cn/markdown/host2023-05-23171219.jpg)


![/host22023-05-23171330.jpg](http://media.codecore.cn/markdown/host22023-05-23171330.jpg)

![/login2023-05-23171443.jpg](http://media.codecore.cn/markdown/login2023-05-23171443.jpg)
