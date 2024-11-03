# 七牛云上传
[[toc]]

## 安装PHPSDK
```php

# 七牛云
composer require qiniu/php-sdk

 ```

 ## php本地上传到七牛云

> 在这里用到了跨域授权 
> Base用来作为api调用的基类允许跨域调用
> 在项目根目录下需要新增一个七牛云的配置文件
> 如果多用户的话七牛云配置可以创建一个表存放到表中

``` php
<?php
//path /config/qiniu.php
// 七牛云配置
return [
    "qiniubackup" => [
        'secretKey' => '', //七牛服务器
        'accessKey' => '-LXnSfM7K2Q2lqsh2', //七牛用户
        'domain' => 'http://media.codecore.cn/', //七牛域名
        'bucket' => '',
        'timeout' => 300 //超时时间
    ]
];
```

 ``` php

<?php

namespace app\api\controller;

use think\Controller;

// 引入鉴权类
use Qiniu\Auth;
// 引入上传类
use Qiniu\Storage\UploadManager;

header('Access-Control-Allow-Origin:*');

class Base extends Controller
{
    //上传到本地
    public function upload()
    {
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('file');
        // 移动到框架应用根目录 /public/uploads/ 目录下
        $info = $file->move('./uploads');
        $reubfo = [];
        if ($info) {
            $reubfo['code'] = 1;
            $reubfo['savename'] = "/uploads/" . $info->getSaveName();
        } else {
            // 上传失败获取错误信息
            $reubfo['code'] = 0;
            $reubfo['err'] = $file->getError();
        }

        return json($reubfo);
    }

    // 上传到七牛云服务器
    public function qiniu_upload()
    {

        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('file');

        // 移动到框架应用根目录 /public/uploads/ 目录下
        $info = $file->move('./uploads');
        $reubfo = [];
        if ($info) {
            $config = config("qiniu.qiniubackup");

            $accessKey = $config['accessKey'];
            $secretKey = $config['secretKey'];
            $auth = new Auth($accessKey, $secretKey);
            $bucket = $config['bucket'];// 要上传的空间
            $token = $auth->uploadToken($bucket);// 生成上传 Token


            // 要上传文件的本地路径
            $filePath = "./uploads/" . $info->getSaveName();
            // 上传到七牛后保存的文件名
            $key = $info->getFilename();

            $uploadManager = new UploadManager();

            // 调用 UploadManager 的 putFile 方法进行文件的上传。
            list($ret, $err) = $uploadManager->putFile($token, $key, $filePath);

            if ($err !== null) {
                // 上传失败获取错误信息
                $reubfo['code'] = 0;
                $reubfo['err'] = $err;
            } else {
                // 上传失败获取错误信息
                $reubfo['code'] = 1;
                $reubfo['err'] = '没有错误信息';
                $reubfo['savename'] = $config['domain'].$ret['key'];
                if(file_exists($filePath)){
                    $reubfo['del'] = '删除本地图片';
                    unlink($filePath);
                }
            }

        } else {
            // 上传失败获取错误信息
            $reubfo['code'] = 0;
            $reubfo['err'] = $file->getError();
        }
        return json($reubfo);
    }
}
 ```

 ## 使用token上传文件

> 使用七牛云SDK制作一个通用产生token文件
 ``` php
<?php

namespace app\common\controller;

// 引入鉴权类
use Qiniu\Auth;
// 引入上传类
use Qiniu\Storage\UploadManager;

class QiniuUpload
{
    public static function mediaFile()
    {
        $config = config("qiniu.qiniubackup");

        $accessKey = $config['accessKey'];
        $secretKey = $config['secretKey'];
        //构建鉴权对象
        $auth = new Auth($accessKey, $secretKey);//七牛云的accesskey 和 secretkey

        $token = $auth->uploadToken($config['bucket']);//这里存的是你七牛云对象存储名，我的空间名为yun，这里就是字符串'yun',只是写在配置文件里

        return $token;
    }
}
 ```


> 上传接口中调用类方法

``` php
public function uploadToQiniu()
{
    $config = config('domain.qiniubackup');//获取绑定的七牛云域名
    // 返回格式依照前端要求返回
    return json([
        'uptoken' => QiniuUpload::mediaFile(),
        'domain' => $config['domain']
    ]);
}
```

## token上传文件前端说明

这里是耗时最久的地方 解决着也是最简单的地方

* 进入七牛云官网提供的sdk git网址下载整个项目
* 进入下载好的目录执行npm install
* npm run build

