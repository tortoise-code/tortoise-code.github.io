# 第三方插件
[[toc]]

```php

#  验证码 需要 助手包
composer require topthink/think-helper

# 低版本 等着就好了 网速慢 
 composer require topthink/think-captcha=2.*

#  Excel 控制 有新版本扩展 没学习
composer require phpoffice/phpexcel

# 七牛云
composer require qiniu/php-sdk

 ```

## 阿里云短信

::: danger 问题集合
使用阿里提供的PHP SDK遇到的问题
由tp5可以使用 阿里提供的composer安装包 

``` php
# 安装无反应
composer require alibabacloud/client
# 解决方案,多试几次 不知道那次好了
```
:::

``` php
# 短信发送问题
public function sendSms($phone, $code)
    {
        $accessKeyId = "<accessKeyId>";
        $accessKeySecret = "<accessKeySecret>";
        AlibabaCloud::accessKeyClient($accessKeyId, $accessKeySecret)
            ->regionId('cn-hangzhou')// replace regionId as you need
            ->asDefaultClient();
        $TemplateParam = json_encode(['code' => $code], JSON_UNESCAPED_UNICODE);
        try {
            $result = AlibabaCloud::rpc()
                ->product('Dysmsapi')
                // ->scheme('https') // https | http
                ->version('2017-05-25')
                ->action('SendSms')
                ->method('POST')
                ->host('dysmsapi.aliyuncs.com')
                ->options([
                    'query' => [
                        'RegionId' => "cn-hangzhou",
                        'PhoneNumbers' => $phone,
                        'SignName' => "知工具",
                        'TemplateCode' => "SMS_172881596",
                        'TemplateParam' => $TemplateParam,
                    ],
                ])
                ->request();
            return $result->toArray();
        } catch (ClientException $e) {
            return $e->getErrorMessage();
        } catch (ServerException $e) {
            return $e->getErrorMessage();
        }
    }
```
个人账号时间隔时间长时,才能正常发送一次
``` json

// 正常json返回
{
"Message": "OK",
"RequestId": "6CF423B3-7BC9-4C65-AF90-078853EACA9B",
"BizId": "341609166655719150^0",
"Code": "OK"
}

// 错误json返回

// 工单反馈 境外ip给限制了 我有点不相信

```


<DotLine/>