# 文件管理


## grep命令

| 参数 | 功能 |
|:--:|:--:|
| -v   | 显示不包含匹配文本的所有行，相当于反向选择 |
| -c | 对匹配的行进行计数 |
| -l | 只显示包含匹配模式的文件名 |
| -a | 对所有文件与目录进行统计 |

``` shell
# 列出文件中root所在行
grep  root  /etc/passwd 
# 带行号的列出多个多个文件中带root的行
grep  -n   root  /etc/passwd /etc/shadow
```

## whereis命令

whereis命令用于查找命令的可执行文件所在的位置，命令语法格式如下

::: tip 语法格式
`whereis`  [选项] 文件名称
:::

whereis命令常用选项如下表所示


命令示例

``` shell
# 列出 grep命令所在目录
whereis grep
```

## which命令

> which命令会在环境变量$PATH设置的目录里查找符合条件的文件，一般用于查找可执行文件的绝对路径


``` shell 
# 查找grep命令信息
which grep
# alias grep='grep --color=auto' 
#       /usr/bin/grep 
```

## find命令

::: tip find介绍
find命令用于按照指定条件查找文件，命令格式如下:

find  [查找路径] [选项] 匹配条件 
:::

| 选项 | 说明 |
|:--:|:--:|
|-name | 匹配名称  |
| -user  |  匹配所有者 |
|  -group |  匹配所属组 |
|  -mtime –n/+n | 匹配修改内容的时间（-n指n天以内，+n指n天以前）  |
| -atime –n/+n  |  匹配访问文件的时间（-n指n天以内，+n指n天以前） |
|  -ctime –n/+n |  匹配修改文件属性的时间（-n指n天以内，+n指n天以前） |
|  --type b/d/c/p/l/f | 匹配文件类型（后面的字母依次表示块设备、目录、字符设备、管道、链接文件、普通文件）
  |
|  -size | 匹配文件的大小（+50KB为查找超过50KB的文件，-50KB为查找小于50KB的文件）  |


