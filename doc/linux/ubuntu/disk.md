# 磁盘挂载
```shell
ll /dev/disk/by-path/
```
>lrwxrwxrwx 1 root root  9 4月  13 18:32 pci-0000:00:05.0 -> ../../vda
>lrwxrwxrwx 1 root root 10 4月  13 18:32 pci-0000:00:05.0-part1 -> ../../vda1
>lrwxrwxrwx 1 root root  9 4月  13 18:32 pci-0000:00:06.0 -> ../../vdb
>lrwxrwxrwx 1 root root  9 4月  13 18:32 virtio-pci-0000:00:05.0 -> ../../vda
>lrwxrwxrwx 1 root root 10 4月  13 18:32 virtio-pci-0000:00:05.0-part1 -> ../../vda1
>lrwxrwxrwx 1 root root  9 4月  13 18:32 virtio-pci-0000:00:06.0 -> ../../vdb

```shell
fdisk /dev/vdb
```
> 欢迎使用 fdisk (util-linux 2.23.2)。
> 更改将停留在内存中，直到您决定将更改写入磁盘。
> 使用写入命令前请三思。
>
> Device does not contain a recognized partition table
> 使用磁盘标识符 0xec7feac9 创建新的 DOS 磁盘标签。
> 
> 命令(输入 m 获取帮助)：<font color="red">n</font>
> Partition type:
>    p   primary (0 primary, 0 extended, 4 free)
>    e   extended
> Select (default p): <font color="red">p</font>
> 分区号 (1-4，默认 1)：<font color="red">1</font>
> 起始 扇区 (2048-104857599，默认为 2048)：<font color="red">回车</font>
> 将使用默认值 2048
> Last 扇区, +扇区 or +size{K,M,G} (2048-104857599，默认为 104857599)：<font color="red">回车</font>
> 将使用默认值 104857599
> 分区 1 已设置为 Linux 类型，大小设为 50 GiB
> 
> 命令(输入 m 获取帮助)：<font color="red">w</font>
> The partition table has been altered!
> 
> Calling ioctl() to re-read partition table.
> 正在同步磁盘。

```shell
ll /dev/disk/by-path/
```
> lrwxrwxrwx 1 root root  9 4月  13 18:32 pci-0000:00:05.0 -> ../../vda
> lrwxrwxrwx 1 root root 10 4月  13 18:32 pci-0000:00:05.0-part1 -> ../../vda1
> lrwxrwxrwx 1 root root  9 4月  13 18:46 pci-0000:00:06.0 -> ../../vdb
> lrwxrwxrwx 1 root root 10 4月  13 18:46 pci-0000:00:06.0-part1 -> ../../vdb1
> lrwxrwxrwx 1 root root  9 4月  13 18:32 virtio-pci-0000:00:05.0 -> ../../vda
> lrwxrwxrwx 1 root root 10 4月  13 18:32 virtio-pci-0000:00:05.0-part1 -> ../../vda1
> lrwxrwxrwx 1 root root  9 4月  13 18:46 virtio-pci-0000:00:06.0 -> ../../vdb
> lrwxrwxrwx 1 root root 10 4月  13 18:46 virtio-pci-0000:00:06.0-part1 -> ../../vdb1

```shell
mkfs.ext4 /dev/vdb1
```
> mke2fs 1.42.9 (28-Dec-2013)
> 文件系统标签=
> OS type: Linux
> 块大小=4096 (log=2)
> 分块大小=4096 (log=2)
> Stride=0 blocks, Stripe width=0 blocks
> 3276800 inodes, 13106944 blocks
> 655347 blocks (5.00%) reserved for the super user
> 第一个数据块=0
> Maximum filesystem blocks=2162163712
> 400 block groups
> 32768 blocks per group, 32768 fragments per group
> 8192 inodes per group
> Superblock backups stored on blocks: 
> 	32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208, 
> 	4096000, 7962624, 11239424
> 
> Allocating group tables: 完成                            
> 正在写入inode表: 完成                            
> Creating journal (32768 blocks): 完成
> Writing superblocks and filesystem accounting information: 完成 

```shell
# 配合宝塔面板
mount /dev/vdb1 /www
# 最后一步是写入硬盘启动信息，下次重启后自动挂载数据盘
echo "/dev/vdb1 /www ext4 defaults 0 0">>/etc/fstab

#  查看挂载结果
df -h
#  查看挂载结果
cat /etc/fstab
```
``` shell
#
# /etc/fstab
# Created by anaconda on Thu Nov 29 03:34:10 2018
#
# Accessible filesystems, by reference, are maintained under '/dev/disk'
# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info
#
UUID=b98386f1-e6a8-44e3-9ce1-a50e59d9a170 /                       ext4    defaults        1 1
/www/swap    swap    swap    defaults    0 0
dev/vdb1 /www ext4 defaults 0 0
```
<DotLine/>