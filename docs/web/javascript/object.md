# 对象

## 小技巧

> 通过以下技巧实现自定义变量名

``` js
    var key = "username";
    var val = "admin";
    var obj = {};
    // 声明一个变量 
    obj[key] = val;
    console.log(obj);
    // {username:"admin"}
```

> 依据原理 
``` js
    var obj = {
        username:"admin"
    };
    console.log(obj["username"]);
    // admin
```

<DotLine/>