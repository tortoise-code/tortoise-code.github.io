# 安装maven

> maven是一个java的包管理工具

## 检查maven安装情况
安装过不用再安装了

打开命令终端`win`+`R`
输入以下命令

![2024-11-19-21-36-33-20241119213633](http://media.codecore.cn/markdown/2024-11-19-21-36-33-20241119213633.png)


``` shell
mvn -v
```
![2024-11-19-21-37-51-20241119213750](http://media.codecore.cn/markdown/2024-11-19-21-37-51-20241119213750.png)

## 直接下载

 [点我下载Maven](http://media.codecore.cn/uploads/2023/05/23/N4zwocWX_apache-maven-3.6.3-bin.zip)

## 官网下载maven

[官网](https://maven.apache.org/)
> https://maven.apache.org/


[历史版本](https://dlcdn.apache.org/maven/)

> https://dlcdn.apache.org/maven/

1. 历史版本

![m1.jpg](http://media.codecore.cn/markdown/m1.jpg)

2. 寻找下载

打开`maven-3` 选择 `3.6.3`

![md2.jpg](http://media.codecore.cn/markdown/md2.jpg)


打开`binaries`目录

![m105515.jpg](http://media.codecore.cn/markdown/m105515.jpg)

选择`apache-maven-3.6.3-bin.zip`
![m2023-04-26-105611.jpg](http://media.codecore.cn/markdown/m2023-04-26-105611.jpg)

也可以[maven3.6.3](https://dlcdn.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.zip)

## 配置maven

### 设置maven目录
解压后文件

![2023-04-26-110215.jpg](http://media.codecore.cn/markdown/2023-04-26-110215.jpg)

可以任意存放文件夾位置

我放在来了`C盘` `用户` `文档`中了

![/2023-04-26-110407.jpg](http://media.codecore.cn/markdown/2023-04-26-110407.jpg)

### 修改maven配置
[点我复制配置文件](#最终配置示例代码)

打开`C:\Users\YSY\Documents\apache-maven-3.6.3\conf`

找到 `settings.xml` `文本编辑器`打开编辑

![2023-04-26-110740.jpg](http://media.codecore.cn/markdown/2023-04-26-110740.jpg)

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

### 最终配置示例代码

`C:\Users\YSY\Documents\apache-maven-3.6.3\conf\settings.xml`

``` xml
<?xml version="1.0" encoding="UTF-8"?>

<!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

<!--
 | This is the configuration file for Maven. It can be specified at two levels:
 |
 |  1. User Level. This settings.xml file provides configuration for a single user,
 |                 and is normally provided in ${user.home}/.m2/settings.xml.
 |
 |                 NOTE: This location can be overridden with the CLI option:
 |
 |                 -s /path/to/user/settings.xml
 |
 |  2. Global Level. This settings.xml file provides configuration for all Maven
 |                 users on a machine (assuming they're all using the same Maven
 |                 installation). It's normally provided in
 |                 ${maven.conf}/settings.xml.
 |
 |                 NOTE: This location can be overridden with the CLI option:
 |
 |                 -gs /path/to/global/settings.xml
 |
 | The sections in this sample file are intended to give you a running start at
 | getting the most out of your Maven installation. Where appropriate, the default
 | values (values used when the setting is not specified) are provided.
 |
 |-->
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
  <!-- localRepository
   | The path to the local repository maven will use to store artifacts.
   |
   | Default: ${user.home}/.m2/repository
  <localRepository>/path/to/local/repo</localRepository>
  -->
  <pluginGroups>

  </pluginGroups>


  <proxies>

  </proxies>

  <servers>

  </servers>

  <mirrors>
    <mirror>
        <id>nexus-aliyun</id>
        <mirrorOf>central</mirrorOf>
        <name>Nexus aliyun</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
  </mirrors>

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
</settings>

```

### 配置环境变量

右键`此电脑` `属性`  `高级系统设置`  `高级` `环境变量`

直接点击`系统变量`中`Path`把maven中`bin`文件夹地址添加进去

![2023-04-26112348.jpg](http://media.codecore.cn/markdown/2023-04-26112348.jpg)

添加用户系统变量`MAVEN_HOME`

![2023-04-26112540.jpg](http://media.codecore.cn/markdown/2023-04-26112540.jpg)

### 测试maven

``` bash
mvn -v
```

## IJ IDEA设置maven路径

![2023-04-26132805.jpg](http://media.codecore.cn/markdown/2023-04-26132805.jpg)

仓库位置可以自定义

其他配置按照`maven`安装方式配置

![2023-04-26132956.jpg](http://media.codecore.cn/markdown/2023-04-26132956.jpg)

::: warning 注意
每个项目都需要idea里从新设置maven加速
:::
