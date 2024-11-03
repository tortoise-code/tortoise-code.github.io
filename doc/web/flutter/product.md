# 打包生成

## 安装Java
添加java环境变量
``` bash
keytool -genkey -v -keystore ./key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
```
## 项目根目录下创建'<app dir>/android/key.properties'
即 根目录 android文件夹 新建 `key.properties` 文件
``` java
storePassword=<password from previous step>
keyPassword=<password from previous step>
keyAlias=key
storeFile=<location of the key store file, e.g. /Users/<user name>/key.jks>

// storePassword=fanxin
// keyPassword=fanxin
// keyAlias=key
// storeFile=/Users/Yin/Documents/key.jks
```

## 在gradle中配置签名

通过编辑<app dir>/android/app/build.gradle文件为您的应用配置签名


## 开启混淆

默认情况下 flutter 不会开启 Android 的混淆。

如果使用了第三方 Java 或 Android 库，也许你想减小 apk 文件的大小或者防止代码被逆向破解。

配置混淆
创建 /android/app/proguard-rules.pro 文件，并添加以下规则：

``` java
#Flutter Wrapper
-keep class io.flutter.app.** { *; }
-keep class io.flutter.plugin.**  { *; }
-keep class io.flutter.util.**  { *; }
-keep class io.flutter.view.**  { *; }
-keep class io.flutter.**  { *; }
-keep class io.flutter.plugins.**  { *; }
```
# 打包处理

## 开启混淆/压缩

>打开 /android/app/build.gradle 文件，定位到 buildTypes 块。
>在 release  配置中将 minifyEnabled  和 useProguard  设为 true，再将混淆文件指向上一步创建的文件。

``` java
android {
    buildTypes {
        release {

            signingConfig signingConfigs.release

            minifyEnabled true
            useProguard true

            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'

        }
    }
}
```

## 构建一个发布版（release）APK
flutter build apk
