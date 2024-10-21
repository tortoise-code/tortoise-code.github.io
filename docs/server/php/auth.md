# 三方授权 OAuth2

## 理解图示

<br/>

![OAuth2 解释图](/images/php/oauth.jpg)

<br/>

## 安装Auth2

::: tip 
通过 `composer` 安装
:::

``` php
composer require bshaffer/oauth2-server-php
```

## 初始配置
::: warning
公共权限验证
:::

``` php
<?php

namespace app\lib\controller;

use OAuth2\Storage\Pdo;

class OAuth2
{

    /**
     * @param null $action
     * @return \OAuth2\Server
     */
    public function grantTypeOauth2($action = null)
    {
        # 获取数据库配置信息
        $config = config('database.');
        // dsn 写法 ====> mysql:host=127.0.0.1;dbname=test_rongfudao
        $storage = new Pdo($config['dsn'],
            [
                'username' => $config['username'],
                'password' => $config['password']
            ]
         );

        $server = new \OAuth2\Server($storage, array('enforce_state' => false));
        // Add the "Client Credentials" grant type (it is the simplest of the grant types)
        $server->addGrantType(new \OAuth2\GrantType\ClientCredentials($storage));
        // Add the "Authorization Code" grant type (this is where the oauth magic happens)
        $server->addGrantType(new \OAuth2\GrantType\AuthorizationCode($storage));
        // Add the "User Credentials" grant type (this is where the oauth magic happens)
        $server->addGrantType(new \OAuth2\GrantType\UserCredentials($storage));
        return $server;
    }

    /**
     * @校验token值
     * @param unknown $server
     */
    public function checkApiAuthroize($server)
    {
        if (!$server->verifyResourceRequest(\OAuth2\Request::createFromGlobals())) {
            $server->getResponse()->send();
            exit;
        }
    }
}

```
## 创建权限表

::: danger
基于上部初始化信息正确
:::

``` php
public function grantTypeOauth2($action = null)
{
    # 获取数据库配置信息
    $config = config('database.');
    // dsn 写法 ====> mysql:host=127.0.0.1;dbname=test_rongfudao
    $storage = new Pdo($config['dsn'],
        [
            'username' => $config['username'],
            'password' => $config['password']
        ]
        );
    // 能够获取创建权限表的sql语句
    $sql = $storage->getBuildSql();
    dump($sql);
}
```
::: tip
数据库内容
:::

``` sql
/*
 Navicat Premium Data Transfer

 Source Server         : 测试
 Source Server Type    : MySQL
 Source Server Version : 50645
 Source Host           : 
 Source Schema         : 

 Target Server Type    : MySQL
 Target Server Version : 50645
 File Encoding         : 65001

 Date: 16/09/2019 22:23:01
*/
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for oauth_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens`  (
  `access_token` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `client_id` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `expires` timestamp(0) NOT NULL,
  `scope` varchar(4000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`access_token`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of oauth_access_tokens
-- ----------------------------
INSERT INTO `oauth_access_tokens` VALUES ('16eaa676091661aa4331726b9af0d53db3f4c1eb', 'admin', NULL, '2019-09-16 22:51:39', NULL);

-- ----------------------------
-- Table structure for oauth_authorization_codes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_authorization_codes`;
CREATE TABLE `oauth_authorization_codes`  (
  `authorization_code` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `client_id` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `redirect_uri` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `expires` timestamp(0) NOT NULL,
  `scope` varchar(4000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id_token` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`authorization_code`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for oauth_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients`  (
  `client_id` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `client_secret` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `redirect_uri` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `grant_types` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `scope` varchar(4000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_id` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`client_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of oauth_clients
-- ----------------------------
INSERT INTO `oauth_clients` VALUES ('admin', '123456', 'http://', 'client_credentials', NULL, NULL);

-- ----------------------------
-- Table structure for oauth_jti
-- ----------------------------
DROP TABLE IF EXISTS `oauth_jti`;
CREATE TABLE `oauth_jti`  (
  `issuer` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `subject` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `audiance` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `expires` timestamp(0) NOT NULL,
  `jti` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for oauth_jwt
-- ----------------------------
DROP TABLE IF EXISTS `oauth_jwt`;
CREATE TABLE `oauth_jwt`  (
  `client_id` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `subject` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `public_key` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for oauth_public_keys
-- ----------------------------
DROP TABLE IF EXISTS `oauth_public_keys`;
CREATE TABLE `oauth_public_keys`  (
  `client_id` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `public_key` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `private_key` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `encryption_algorithm` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'RS256'
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for oauth_refresh_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens`  (
  `refresh_token` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `client_id` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `expires` timestamp(0) NOT NULL,
  `scope` varchar(4000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`refresh_token`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for oauth_scopes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_scopes`;
CREATE TABLE `oauth_scopes`  (
  `scope` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_default` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`scope`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for oauth_users
-- ----------------------------
DROP TABLE IF EXISTS `oauth_users`;
CREATE TABLE `oauth_users`  (
  `username` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `PASSWORD` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `first_name` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `last_name` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email_verified` tinyint(1) NULL DEFAULT NULL,
  `scope` varchar(4000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
```

## 获取token
::: tip
获取token 最好使用`POST`请求
`网址/access_token?client_id=admin&client_secret=123456&grant_type=client_credentials`
:::

``` json
// 正确返回结果
{
    "access_token": "16eaa676091661aa4331726b9af0d53db3f4c1eb",
    "expires_in": 3600,
    "token_type": "Bearer",
    "scope": null
}

// 错误返回结果
{
"error": "invalid_request",
"error_description": "The request method must be POST when requesting an access token",
"error_uri": "http://tools.ietf.org/html/rfc6749#section-3.2"
}
```
``` php
<?php

namespace app\admin\controller;

use app\lib\controller\OAuth2;

class Index extends OAuth2
{
    protected $_server;

    /**
     * @授权配置
     */
    public function __construct()
    {
        return $this->_server = $this->grantTypeOauth2();
    }

    /**
     * @get access_token
     */
    public function access_token()
    {
        $this->_token();
    }

    private function _token()
    {
        // Handle a request for an OAuth2.0 Access Token and send the response to the client
        $this->_server
        ->handleTokenRequest(\OAuth2\Request::createFromGlobals())
        ->send('json', 'oauth2_');
    }
}

```

## 完整运行逻辑

::: tip
带加
:::


<DotLine/>
