# 生成jar包
> 注意:该项目请保证使用的是 jdk1.8

## 前置条件

首先保证`Maven`配置正确

编辑器`IntellJ`中`Maven`地址配置正确

## 说明

> `java`项目有很多,该项目是`spring boot`项目

`spring boot`最主要的两个配置文件是

`项目/pom.xml`项目的前置依赖包配置
`项目/src/main/resources/application.yml`项目参数文件

## 加载包

1. 点击编辑器右侧`Maven`展开`Maven`菜单栏

2. 点击`重新加载`图片加载包文件

![/mvn0.jpg](https://media.codecore.cn/markdown/mvn0.jpg)

3. 加载成功的标志是打开`pom.xml`


如果`pom.xml`其他地方正常最后部分`spring-boot-maven-plugin`有警告请做以下更改

`spring-boot-maven-plugin`更改前
``` xml
  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>
```

`spring-boot-maven-plugin`更改后
``` xml
  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
        <version>2.2.1.RELEASE</version>
      </plugin>
    </plugins>
  </build>
```

## 修改数据库链接信息

打开`application.yml`

### 修改数据库链接

1. 修改连接信息

![/whconf0.jpg](https://media.codecore.cn/markdown/whconf0.jpg)

2. 开放宝塔数据库

> 宝塔数据库默认只有服务器上软件访问,我们在`宿主`电脑上无法直接访问

![/openmysql.jpg](https://media.codecore.cn/markdown/openmysql.jpg)

> 项目正式上线后考虑到数据库安全可以关闭该端口

### 修改启动端口

> 测试阶段一般不做更改

![/whconf1.jpg](https://media.codecore.cn/markdown/whconf1.jpg)

### 启动

右上角点击绿色三角启动

![/whrun.jpg](https://media.codecore.cn/markdown/whrun.jpg)

::: tip 管理员账号

网址: http://127.0.0.1:8089
账号: luoyi
密码: 123456
:::

## Maven打包

打包之前请将数据库连接地址改成`127.0.0.1`,后期项目部署时一般本地访问

![/build.jpg](https://media.codecore.cn/markdown/build.jpg)

1. 点击打开`IDE`右侧`Maven`管理
2. 展开点击选中`package`
3. 点击`Maven`上绿色运行三角

打包后生成一个`jar`包,位置`target/warehouseSys-0.0.1-SNAPSHOT.jar`

### 测试软件包是否正常

1. `dos`打开`jar`包所在目录

![/jarcmd.jpg](https://media.codecore.cn/markdown/jarcmd.jpg)

2. 执行命令

``` shell
java -jar warehouseSys-0.0.1-SNAPSHOT.jar
```

3. 启动后仍可以通过域名访问站点及正常(如果改过数据库连接无法访问)

> 可能出现无法启动情况

<pre style="color:green;">
Description:

Web server failed to start. Port 8089 was already in use.
</pre>

该错误是端口被占用了 关掉占用端口的软件就ok了