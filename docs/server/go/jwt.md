# JWT令牌生成

## 安装

``` go
go get "github.com/dgrijalva/jwt-go"
```

## token生成代码

``` go 
// /controller/base.go
package controllers

import (
	"github.com/astaxie/beego"
	"github.com/dgrijalva/jwt-go"
)

const (
	SecretKey = "apiGolangSecretKeyTest"
)

// Base控制器
type BaseController struct {
	beego.Controller
}

// Token构成
type Token struct {
	UserID   int
	UserAuth int
	jwt.StandardClaims
}

// @Title GetToken
// @Success 200 {string} GetToken success
// @Param	id		path 	string	true		"The key for staticblock"
// @Failure 403 :id is empty
// @router /gettoken/:id [get]
func (u *BaseController) GetToken() {
	// 创建token
	// 设置token参数
	tk := &Token{UserID: 3, UserAuth: 22}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, tk)

	tokenString, _ := token.SignedString([]byte(SecretKey))
	u.Data["json"] = tokenString
	u.ServeJSON()
}

// @Title CheckToken
// @router /checktoken/:token [get]
func (u *BaseController) CheckToken() {
	tk := &Token{}
	tokenString := u.GetString(":token")

	token, err := jwt.ParseWithClaims(tokenString, tk, func(token *jwt.Token) (i interface{}, err error) {
		return []byte(SecretKey), nil
	})
	if err != nil {
		u.Data["json"] = "is err"
	}

	if !token.Valid {
		u.Data["json"] = "tokne err"
	} else {
		u.Data["json"] = tk
	}
	u.ServeJSON()
}

```