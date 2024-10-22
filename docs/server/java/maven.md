# 安装maven

## 检查maven安装情况

安装过不用再安装了

``` shell
mvn -v
```

<pre style="backgroud:rgba(0,0,0,0.5);color:green;">C:\Users\YSY>mvn -v
Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f)
Maven home: C:\Users\YSY\Documents\apache-maven-3.6.3\bin\..
Java version: 20, vendor: Oracle Corporation, runtime: C:\Program Files\Java\jdk-20
Default locale: zh_CN, platform encoding: UTF-8
OS name: "windows 10", version: "10.0", arch: "amd64", family: "windows"
</pre>

## 下载maven

[官网](https://maven.apache.org/)
> https://maven.apache.org/


[历史版本](https://dlcdn.apache.org/maven/)

> https://dlcdn.apache.org/maven/

1. 历史版本

![/m1.jpg](http://media.codecore.cn/markdown/m1.jpg)

2. 寻找下载

打开`maven-3` 选择 `3.6.3`

![/md2.jpg](http://media.codecore.cn/markdown/md2.jpg)


打开`binaries`目录

![/m105515.jpg](http://media.codecore.cn/markdown/m105515.jpg)

选择`apache-maven-3.6.3-bin.zip`
![/m2023-04-26-105611.jpg](http://media.codecore.cn/markdown/m2023-04-26-105611.jpg)

也可以[maven3.6.3](https://dlcdn.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.zip)

## 配置maven

### 设置maven目录
解压后文件

![/2023-04-26-110215.jpg](http://media.codecore.cn/markdown/2023-04-26-110215.jpg)

可以任意存放文件夾位置

我放在来了`C盘` `用户` `文档`中了

![/2023-04-26-110407.jpg](http://media.codecore.cn/markdown/2023-04-26-110407.jpg)

### 修改maven配置

打开`C:\Users\YSY\Documents\apache-maven-3.6.3\conf`

找到 `settings.xml` `文本编辑器`打开编辑

![/2023-04-26-110740.jpg](http://media.codecore.cn/markdown/2023-04-26-110740.jpg)

找到`<mirrors>标签`设置阿里仓库

``` xml
  <mirrors
    <mirror>
        <id>nexus-aliyun</id>
        <mirrorOf>central</mirrorOf>
        <name>Nexus aliyun</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
  </mirrors>
```
指定`JDK`版本
``` xml
<profiles>
    <profile>
      <id>jdk-1.8</id>
      <activation>
        <jdk>1.8</jdk>
      </activation>
      <repositories>
     <repository>
         <id>nexus</id>
         <name>local private nexus</name>
         <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
         <releases>
             <enabled>true</enabled>
         </releases>
         <snapshots>
             <enabled>false</enabled>
         </snapshots>
     </repository>
    </repositories>
    <pluginRepositories>
        <pluginRepository>
            <id>nexus</id>
            <name>local private nexus</name>
            <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </pluginRepository>
    </pluginRepositories>
    </profile>
</profiles>
```

### 配置环境变量

右键`此电脑` `属性`  `高级系统设置`  `高级` `环境变量`

直接点击`系统变量`中`Path`把maven中`bin`文件夹地址添加进去

![/2023-04-26112348.jpg](http://media.codecore.cn/markdown/2023-04-26112348.jpg)

添加用户系统变量`MAVEN_HOME`

![/2023-04-26112540.jpg](http://media.codecore.cn/markdown/2023-04-26112540.jpg)

### 测试maven

``` cmd
mvn -v
```

## IJ IDEA设置maven路径

![/2023-04-26132805.jpg](http://media.codecore.cn/markdown/2023-04-26132805.jpg)

仓库位置可以自定义

其他配置按照`maven`安装方式配置

![/2023-04-26132956.jpg](http://media.codecore.cn/markdown/2023-04-26132956.jpg)
