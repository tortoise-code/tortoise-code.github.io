# 模型

## 链接数据库
在模型页面新建 一个 init.go

> 	orm.RegisterModel(new(User)) //注册模型

``` go
package models

import (
	"fmt"
	"github.com/astaxie/beego/orm"
	_"github.com/go-sql-driver/mysql"
)
func init(){
	orm.RegisterDataBase("default","mysql","用户名:密码@tcp(IP地址:端口)/数据库名?charset=utf8")
	orm.RegisterModel(new(User))
}
```

## 数据库表字段

* string size(255) 相当于varchar(255)
* 使用 column(nickName) 对应真实表字段名,可以同时解决字段名包含大写字母问题
* uint代表无符号int字段 但是去前端传递数据时不易转化 不建议使用 
* time.Time 代表使用 datetime 格式
``` go
type User struct {
	Id          int    `orm:pk;auto`
	NickName    string `orm:"size(255);column(nickName)"`
	AvatarUrl   string `orm:"size(255);column(avatarUrl)"`
	School_id   int
	User_id     int
	Create_time time.Time
	Is_pay      int
	Status      int
	Sex         int
	Money       float64 `orm:"digits(12);decimals(4)"`
	Score       int
	Password    string `orm:"size(128)"`
}
```

## 使用模型

> 控制器中直接使用models.方法名 就ok了

::: warging
注意 外部调用的方法名称需要首字母大写
:::