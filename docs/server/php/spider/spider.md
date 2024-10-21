## 反扒取

### Robots.txt只能禁止抓取，无法禁止收录

###  通过Nginx判断user_agent禁止百度等搜索引擎访问，实现禁止收录

>既然不能直接禁止抓取，那就干脆禁止百度蜘蛛等搜索引擎访问，
>思路是：
>           判断user_agent，如果是百度蜘蛛、谷歌机器人等搜索引擎的user_agent， 就返回403或者404，这样百度等搜索引擎就会认为这个网站无法打开或者不存在，自然也就不会收录了。

Nginx的配置代码如下

``` nginx
if ($http_user_agent ~* "qihoobot|Baiduspider|Googlebot|Googlebot-Mobile|Googlebot-Image|Mediapartners-Google|Adsbot-Google|Feedfetcher-Google|Yahoo! Slurp|Yahoo! Slurp China|YoudaoBot|Sosospider|Sogou spider|Sogou web spider|MSNBot|ia_archiver|Tomato Bot")
        {
                return 403;
        }
```