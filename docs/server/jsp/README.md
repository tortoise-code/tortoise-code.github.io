# JSP

## 主要任务

1. 配置JDK
2. 安装配置Tomcat




## 安装配置环境变量

### 1. 配置JDK环境

> java的jdk官网地址:http://www.oracle.com 
[点击访问](http://www.oracle.com/)

> 比较新的jdk版本免费的 但是jdk1.8下载需要注册账号

我们需要的是`jdk1.8`版本


双击软件包下一步就ok了

安装完毕后打开终端

``` cmd
java -version
```

<pre style="color:green;">
C:\Users\YSY>java -version
java version "1.8.0_162"
Java(TM) SE Runtime Environment (build 1.8.0_162-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.162-b12, mixed mode)
</pre>

> 安装完毕`java`后`javac`工具还无法使用 需要配置环境变量

1. 找到`环境变量`配置

![/je.jpg](http://media.codecore.cn/markdown/je.jpg)

![/je1.jpg](http://media.codecore.cn/markdown/je1.jpg)

![/je2.jpg](http://media.codecore.cn/markdown/je2.jpg)

2. 配置`环境变量`

![/je3.jpg](http://media.codecore.cn/markdown/je3.jpg)

`java`默认安装位置

`C:\Program Files\Java\jdk1.8.0_162\bin`

![/je4.jpg](http://media.codecore.cn/markdown/je4.jpg)

> 配置环境变量时尽量复制粘贴途径,不要手写

`cmd`执行`javac -version`查看`环境变量`是否配置成功

<pre style="color:green;">
C:\Users\YSY>javac -version
javac 1.8.0_162
</pre>

<video controls src="http://media.codecore.cn/markdown/videos/1_jdk.mp4"></video>

### 2.下载安装Tomcat

[Tomcat官网](http://tomcat.apache.org/)

[Tomcat 9下载](http://dlcdn.apache.org/tomcat/tomcat-9/v9.0.94/bin/apache-tomcat-9.0.94-windows-x64.zip)

> Java1.8默认支持的Tomcat最高是9 尽量不要使用10以上版本


<video controls src="http://media.codecore.cn/markdown/videos/2_tomcat.mp4"></video>

### 3.安装IDEA

<video controls src="http://media.codecore.cn/markdown/videos/3_idea_install_config.mp4"></video>



### 域名

创建`java项目`时,本人添加的是虚假域名`warehouse.cn`,如果真实上线的话可以写自己的真实域名

### 配置windows虚拟域名

`DNS`文件配置位置

`C:\Windows\System32\drivers\etc\hosts`

![/host2023-05-23171219.jpg](http://media.codecore.cn/markdown/host2023-05-23171219.jpg)


![/host22023-05-23171330.jpg](http://media.codecore.cn/markdown/host22023-05-23171330.jpg)

![/login2023-05-23171443.jpg](http://media.codecore.cn/markdown/login2023-05-23171443.jpg)
