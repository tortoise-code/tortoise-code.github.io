# 跨模块使用模板文件
``` php
#  $this->fetch('模块名@控制器(view)/页面')
return $this->fetch('pay@msg/pay_success');
```