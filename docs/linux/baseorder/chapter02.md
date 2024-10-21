# 文件命令

## 创建文件夹

命令:`mkdir`

``` shell
# 当前目录下创建一个docs目录
mkdir docs
# 也可以递归创建文件夹
mkdir -p docs/.vuepress/public
```

::: tip 查看目录小技巧
上述例子如果出现 多个嵌套目录 `docs/.vuepress` `docs/guide` <br>
再加上文件后很难通过`ls`去查看<br>
可以通过下载命令工具`tree`用来直观查看<br>
``` shell
# 有网情况下
# centos
yum install tree
# ubuntu
sudo apt-get install tree
# 使用命令查看文件
tree docs
```
:::

## 删除文件夹

命令:`rm`

删除命令一般配合参数`-rf`一块使用,`-r`递归删除,`-f`强制删除

<font color="#f65500">注意:`rm -rf 要删除的目录` 删除后无法找回,请慎重使用</font>

> 删除命令rmdir只能删除文件夹 限制过多一般不使用

``` shell
rm -rf docs
```

## 拷贝命令

命令: `cp`

``` shell
# 准备拷贝的文件 默认在用户目录

# 创建操作文件夹
mkdir learning_cp
# 进入文件夹
cd learning_cp
# 创建三个日志文件
touch a.log b.log c.log
# 为了确定复制效果 编译一下a.log
vi a.log
# 进入vi编辑器后 需要命令才能操作
```

使用`vi`编辑文本

``` shell
# 编辑器中输入i 左下角有 -- insert -- 提示 进入编辑模式
# 随意输入文本 例如
learnig cp by fanxin
```
退出编辑模式：

1. `按下`ESC`按键
2. 输入`:wq` (保存并退出的意思)

将`a.log`文件复制到用户目录下

``` shell
# 进入目录
cd learning_cp
# 将命令拷贝到用户目录
cp a.log ~/a.log
# 进入用户目录
cd ~
# 查看拷贝结果
ls
```

<pre>a.log  anaconda-ks.cfg  learging_cp</pre>

## 移动和重名名

命令:`mv`

mv是一个复合命令,可以移动文件和重命名(重命名本质是将文件移动并更改名字)

``` shell
# 将用户目录下a.log 移动到 leargning_cp目录下并改名d.log
mv a.log learning_cp/d.log
```