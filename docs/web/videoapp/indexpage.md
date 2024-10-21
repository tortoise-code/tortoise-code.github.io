# 首页接口

## 轮播图接口

::: tip 
http://shop.codecore.cn/v3/getSwipers
::: 
``` json
[
    {
        "id": 4,
        "url": "http://medi.leftgodheart.top/c39a3dc60dc795b1fb4f7ed543ee7657.jpg",
        "name": "唯美",
        "sort": 1
    },
    {
        "id": 5,
        "url": "http://medi.leftgodheart.top/dfba1e6d2031b27d9a23078c1237db4c.jpeg",
        "name": "玫瑰",
        "sort": 2
    }
]
```
返回结果是一个数组,数组内每一个元素都是一个对象

|参数|值|功能|
|:-:|:-:|:-:|
|id| 4|唯一识别码|
|url| "http://medi.leftgodheart.top/c39a3dc60dc795b1fb4f7ed543ee7657.jpg"|图片网络地址|
|name| "唯美"|图片名称|
|sort| 1|图片展示顺序|