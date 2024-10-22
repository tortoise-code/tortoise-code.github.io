# 部署MySQL数据库

## 使用宝塔创建(推荐)

> 没有数据库的可以使用`宝塔`创建一个

1. 创建数据库

![/btmysql.jpg](http://media.codecore.cn/markdown/btmysql.jpg)

2. 点击导入

![/upsql.jpg](http://media.codecore.cn/markdown/upsql.jpg)

3. 导入

![/enter.jpg](http://media.codecore.cn/markdown/enter.jpg)


## 使用navicat创建

1. 将解压`物流管理系统`获取`warehouse.sql`文件

2. 使用`navicat`链接数据库创建`warehouse`数据库

> 数据库创建设置如图

![/j1.png](http://media.codecore.cn/markdown/j1.png)


3. 选择`表`,然后`新建查询`

![/j2.png](http://media.codecore.cn/markdown/j2.png)

4. 粘贴`warehouse.sql`文件到查询界面

![/j3.PNG](http://media.codecore.cn/markdown/j3.PNG)

5. 因为数据库不同,请把关键字`ROW_FORMAT=Compact`去掉

![/j4.jpg](http://media.codecore.cn/markdown/j4.jpg)