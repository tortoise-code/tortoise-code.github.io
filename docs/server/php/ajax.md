# AJAX问题

## 一般app调用跨域问题

``` php
# 控制器头加头文件
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET,POST');

```

<DotLine/>