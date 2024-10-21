# 配置JDK环境

> java的jdk官网地址:https://www.oracle.com 
[点击访问](https://www.oracle.com/)

> 比较新的jdk版本免费的 但是jdk1.8下载需要注册账号

我们需要的是`jdk1.8`版本


## 安装配置环境变量

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

![/je.jpg](https://media.codecore.cn/markdown/je.jpg)

![/je1.jpg](https://media.codecore.cn/markdown/je1.jpg)

![/je2.jpg](https://media.codecore.cn/markdown/je2.jpg)

2. 配置`环境变量`

![/je3.jpg](https://media.codecore.cn/markdown/je3.jpg)

`java`默认安装位置

`C:\Program Files\Java\jdk1.8.0_162\bin`

![/je4.jpg](https://media.codecore.cn/markdown/je4.jpg)

> 配置环境变量时尽量复制粘贴途径,不要手写

`cmd`执行`javac -version`查看`环境变量`是否配置成功

<pre style="color:green;">
C:\Users\YSY>javac -version
javac 1.8.0_162
</pre>