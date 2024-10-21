# 安装

依照文档安装时遇到的问题

``` php
composer global require "laravel/installer"

laravel new blog

```
报错加载错误错误代码

``` php
# 待补
```

解决方案 `composer install` 不成功，原因可能是版本不同导致的

最终解决方式(laravel的 vender目录大约下载了30M的文件,略大)

``` php
# 该方式忽略版本限制
composer install --ignore-platform-reqs
```


以下解决方式无效
``` php
 composer dump-autoload
```
## 开启debug模式 报错

::: danger No application encryption key has been specified.
.env.example 文件改名 .env
:::

执行以下命令 获取密钥

``` php
# 密钥自动保存到 .env 文件中
php artisan key:generate 
```
现在一般不用复制

>复制.env文件中 `APP_KEY=base64:uwsrw5K5o4V/6vOjsClOZJyDQEYY4uovF8Q3+xLfhME=`的密钥 <br/>
>到`config/app.php` 中的key里面

::: tip laravel安装完成
事真多
:::