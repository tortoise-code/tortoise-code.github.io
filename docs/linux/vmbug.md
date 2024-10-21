# 虚拟机VWare一些常见错误

## 网络配置错误

进行网络链接时或者远程链接时会发现链接超时

经过定位问题发现在`宿主`机中缺失两个虚拟网络

如图:

![/networker.png](https://media.codecore.cn/markdown/networker.png)

解决办法:

1. 打开虚拟`编辑`,点击`虚拟网络编辑器`

![/1.png](https://media.codecore.cn/markdown/1.png)

2. 点击`更改设置`

![/2.png](https://media.codecore.cn/markdown/2.png)

3. 点击`还原默认设置`

![/3.PNG](https://media.codecore.cn/markdown/3.PNG)

### 无法解决尝试重装vmware
