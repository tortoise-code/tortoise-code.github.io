# 部署SVN

## 配置CentosSVN

``` shell
#查看svn版本
svn --version
# centos 
yum install subversion
#  主目录创建svn仓库
mkdir svn
#  进入目录 创建 文件夹 log  project  conf
cd svn
mkdir log project
# 进入真实的svn仓库
cd project
# 创建项目仓库 (宝塔面板风格)
svnadmin create www.yourdomain.com
# 将 仓库配置文件夹移动到svn下成为全局配置
mv ~/svn/project/www.yourdomain.com/conf/  ~/svn/
```
>.
>├── conf                 # 移动来的
>│   ├── authz
>│   ├── passwd
>│   └── svnserve.conf
>├── log
>└── project
>    └── www.yourdomain.com
>        ├── conf -> ../../conf/  # ln -s ../../conf/  建立的虚拟链接
>        ├── db
>        ├── format
>        ├── hooks
>        ├── locks
>        └── README.txt

## Centos
```shell
mkdir svn
yum install subversion
cd svn
mkdir project
mkdir log
cd project
svnadmin create tp5
 cd tp5
mv conf/ ../../
ln -s ../../conf
cd ../../conf
vi svnserve.conf
vi passwd
vi authz 

```

## Ubuntu

```shell
apt-get install subversion
mkdir svn
cd svn
mkdir project
mkdir log
cd project
svnadmin create tp5
mv conf/ ../../
```




#### Start.sh
```
svnserve -d -r project/ --listen-port 6666  --log-file=log/svn-server.log
```

#### Show.sh
```
ps -ef|grep svnserve
```
#### Stop.sh
```
killall svnserve
```

#### HOOKS
``` shell
#!/bin/sh
export LANG=en_US.utf8
WEB_PATH=/www/wwwroot/www.domain.com
svn update $WEB_PATH --username 'sally' --password 'sallyssecret' --no-auth-cache
```