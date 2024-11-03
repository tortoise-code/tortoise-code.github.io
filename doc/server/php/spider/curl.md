# 爬虫工具之curl
>解析页面肯定是写爬虫遇到的最常见的工作，但不要小看这个这个过程，有时它也会令你抓狂。这次写一下关于curl工具的使用，主要介绍一下平时很常用的几项。
>curl是利用URL语法在命令行方式下工作的开源文件传输工具，使用这个工具，就能在命令行发起请求，获得响应，而且其命令简单且强大，非常适合用作写爬虫时，解析页面前的模拟工作。

## 基础
```shell
# 发起HTTP请求，并把返回的网页内容显示在屏幕
curl "http://www.example.com"

# 发起HTTP请求，并把返回的网页内容输出到文件
curl "http://www.example.com" > test.html

# 或者用命令-o参数也可达到同样的效果
curl -o test.html "http://www.example.com"
```