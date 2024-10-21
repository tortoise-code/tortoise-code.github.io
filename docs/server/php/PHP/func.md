## 各种原生函数注意事项

```php
# 合并数组 函数
$a1=array("red","green");
$a2=array("blue","yellow");
print_r(array_merge($a1,$a2));

# Array ( [0] => red [1] => green [2] => blue [3] => yellow )
# 当某个 查询出的 数组结果 为空时 数组合并出错 合并结果为空
```
