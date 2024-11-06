(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{451:function(a,t,s){"use strict";s.r(t);var e=s(25),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"打包生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包生成"}},[a._v("#")]),a._v(" 打包生成")]),a._v(" "),t("h2",{attrs:{id:"安装java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装java"}},[a._v("#")]),a._v(" 安装Java")]),a._v(" "),t("p",[a._v("添加java环境变量")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("keytool "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-genkey")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-keystore")]),a._v(" ./key.jks "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-keyalg")]),a._v(" RSA "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-keysize")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2048")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-validity")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-alias")]),a._v(" key\n")])])]),t("h2",{attrs:{id:"项目根目录下创建-android-key-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目根目录下创建-android-key-properties"}},[a._v("#")]),a._v(" 项目根目录下创建'"),t("app",{attrs:{dir:""}},[a._v("/android/key.properties'")])],1),a._v(" "),t("p",[a._v("即 根目录 android文件夹 新建 "),t("code",[a._v("key.properties")]),a._v(" 文件")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("storePassword"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("password from previous step"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\nkeyPassword"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("password from previous step"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\nkeyAlias"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("key\nstoreFile"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("location of the key store file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Users")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("user name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jks"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// storePassword=fanxin")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// keyPassword=fanxin")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// keyAlias=key")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// storeFile=/Users/Yin/Documents/key.jks")]),a._v("\n")])])]),t("h2",{attrs:{id:"在gradle中配置签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在gradle中配置签名"}},[a._v("#")]),a._v(" 在gradle中配置签名")]),a._v(" "),t("p",[a._v("通过编辑"),t("app",{attrs:{dir:""}},[a._v("/android/app/build.gradle文件为您的应用配置签名")])],1),a._v(" "),t("h2",{attrs:{id:"开启混淆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启混淆"}},[a._v("#")]),a._v(" 开启混淆")]),a._v(" "),t("p",[a._v("默认情况下 flutter 不会开启 Android 的混淆。")]),a._v(" "),t("p",[a._v("如果使用了第三方 Java 或 Android 库，也许你想减小 apk 文件的大小或者防止代码被逆向破解。")]),a._v(" "),t("p",[a._v("配置混淆\n创建 /android/app/proguard-rules.pro 文件，并添加以下规则：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("#"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Flutter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Wrapper")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("keep "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("flutter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("*"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("keep "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("flutter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("*"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("keep "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("flutter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("util"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("*"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("keep "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("flutter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("view"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("*"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("keep "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("flutter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("*"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("keep "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("flutter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("*"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h1",{attrs:{id:"打包处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包处理"}},[a._v("#")]),a._v(" 打包处理")]),a._v(" "),t("h2",{attrs:{id:"开启混淆-压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启混淆-压缩"}},[a._v("#")]),a._v(" 开启混淆/压缩")]),a._v(" "),t("blockquote",[t("p",[a._v("打开 /android/app/build.gradle 文件，定位到 buildTypes 块。\n在 release  配置中将 minifyEnabled  和 useProguard  设为 true，再将混淆文件指向上一步创建的文件。")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("android "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    buildTypes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        release "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n            signingConfig signingConfigs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("release\n\n            minifyEnabled "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n            useProguard "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n\n            proguardFiles "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getDefaultProguardFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("'proguard"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("android"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("txt"),t("span",{pre:!0,attrs:{class:"token char"}},[a._v("'), '")]),a._v("proguard"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("rules"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("pro'\n\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h2",{attrs:{id:"构建一个发布版-release-apk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建一个发布版-release-apk"}},[a._v("#")]),a._v(" 构建一个发布版（release）APK")]),a._v(" "),t("p",[a._v("flutter build apk")])])}),[],!1,null,null,null);t.default=r.exports}}]);