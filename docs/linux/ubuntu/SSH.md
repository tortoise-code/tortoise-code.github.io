# Ubuntu ssh远程连接

### ssh-server 服务端 用来被远程连接
### ssh-client  客户端 用来远程链接服务器 ubuntu默认自带
``` shell
ssh username@192.168.1.103 # 链接
exit                       # 断开链接
``` 
# UBUNTU client 与 server 传输文件

>- 从远处复制文件到本地目录
``` shell
scp pi@192.168.1.178:/home/pi/tt.txt ~/test 
``` 

>- 从远处复制目录到本地
``` shell
scp pi@192.168.1.178:/home/pi/mongodb ~/test
``` 

>- 上传本地文件到远程机器指定目录
``` shell
scp ~/test/a.out pi@192.168.1.178:/home/pi
```

