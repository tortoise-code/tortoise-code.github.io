# 路由疑问

## 注解路由
::: tip
commentsRouter_controllers
::: 

bee创建的api类型的项目后 会在 `/routers` 文件夹下生成两个文件

`commentsRouter_controllers.go`
`router.go`

> beego.NSInclude(&controllers.ObjectController{},),
> 表示使用注解路由 无需手动创建路由 在功能函数按照规范写好注释 自动生成相应的路由

``` go
// router.go
package routers

import (
	"apiproject/controllers"

	"github.com/astaxie/beego"
)

func init() {
	ns := beego.NewNamespace("/v1",
		beego.NSNamespace("/object",
			beego.NSInclude(
				&controllers.ObjectController{},
			),
		),
		beego.NSNamespace("/user",
			beego.NSInclude(
				&controllers.UserController{},
			),
		),
		beego.NSNamespace("/base",
			beego.NSInclude(
				&controllers.BaseController{},
			),
		),
	)
	beego.AddNamespace(ns)
}

```
例如
> 这事user控制器下的登出方法
> @router /logout [get] 表示会生成名为 /logout 的路由指向本方法
``` go
// @Title logout
// @Description Logs out current logged in user session
// @Success 200 {string} logout success
// @router /logout [get]
func (u *UserController) Logout() {
}
```
路由目录下的 commentsRouter_controllers.go文件
> 本文件有beego框架自动生成 修改无效 会被重新生成的文件覆盖掉
