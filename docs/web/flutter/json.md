# JSON 
> var data = json.decode(response.data.toString()) 报错

* 请求json返回结果不规范导致的 其中有api请求 Reful API 规范
* php 等编辑器包含 BOM 头
* php 返回结果遵守规范导致的返回结果是 对象,数组 多变 解析错误
* php  返回 header() 没有说明是 json类型
* 真实原因 php返回了 json 数据 无需再执行解析方法 直接使用就ok了

> 注意: 安卓开发需要后台遵守 Reful API接口规范 来确保软件稳定运行 