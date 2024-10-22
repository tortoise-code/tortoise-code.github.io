# 部署物流管理系统

## 系统安装包

点击下载 [JDK 1.8](http://media.codecore.cn/uploads/2023/05/20/31ksUzwj_jdk-8u162-windows-x64.exe)

点击下载 [物流管理系统](http://media.codecore.cn/uploads/2023/04/24/IeqDpCFX_%E7%89%A9%E6%B5%81%E7%AE%A1%E7%90%86.rar?attname=%E7%89%A9%E6%B5%81%E7%AE%A1%E7%90%86.rar)

点击下载 [IntelliJ idea开发工具](http://media.codecore.cn/uploads/2023/04/24/nVtmYWbc_ideaIU-2021.3.3.exe?attname=ideaIU-2021.3.3.exe)

点击下载 [IntelliJ idea破解激活](http://media.codecore.cn/uploads/2023/04/24/rp0pKSvq_IDEAWindows%E7%89%88%E4%B8%80%E9%94%AE%E6%B0%B8%E4%B9%85%E6%BF%80%E6%B4%BB.zip)

点击下载 [Maven](http://media.codecore.cn/uploads/2023/05/23/N4zwocWX_apache-maven-3.6.3-bin.zip)

## 当前项目架构

![/20230526132956.jpg](http://media.codecore.cn/markdown/20230526132956.jpg)

<pre hidden> mermaid
graph LR
A(Windows系统)--> |虚拟机VM| B{Ubuntu/Centos}

B-->C1[宝塔面板]
C1-->C3[PHP]
C1-->C4[MySQ]
C1-->C5[Nginx]
C1-->C6[Tomcat]
B-->D
D[物流管理系统]--> | 链接 | C4
D--> | 需要JDK1.8 | C6
D--> | jar包 | E(使用宝塔创建java项目)
U[用户]--> | 域名/ip经过访问项目 | D
</pre>

<pre hidden>
graph LR
A(Windows系统)--> |虚拟机VM| B[Ubuntu]

B-->C1[宝塔面板]
B-->C3[PHP-BT]
B-->C4[MySQ-BT]
B-->C5[Nginx-BT]
C2-->D1[Tomcat]
C2-->D2[MySQL8.0]
B-->C2[Docker]
A1[物流管理系统]--> |ubutu->docker->mysql | D
</pre>
<!-- ![/project-settig.jpg](http://media.codecore.cn/markdown/project-settig.jpg) -->
## 项目部署

[1.部署数据库](./mysql.md)

[2.配置JDK环境](./jdk.md)

[3.安装IJ编辑器](./intelliJ.md)

[4.安装Maven](./maven.md)

[5.使用Maven打包](./package.md)

[6.部署实施](./install.md)