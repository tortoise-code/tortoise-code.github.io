### unbuntu 短路径显示

> ubuntu的终端命令行默认是长路径，即把路径深度全部显示出来，操作起来不是很方便，下面介绍命令行显示短路径的操作：
``` shell

 vi ~/.bashrc
# 找到 PS1=   的行，将\w(小写)改成\W(大写)
if [ "$color_prompt" = yes ]; then

    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '

else

##    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '

      PS1='${debian_chroot:+($debian_chroot)}\u@\h:\W\$ '
fi

unset color_prompt force_color_prompt
```

``` shell

# If this is an xterm set the title to user@host:dir

case "$TERM" in

xterm*|rxvt*)

 ##   PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"

      PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \W\a\]$PS1"
     ;;

*)

    ;;

esac
```

> 保存 , 执行下面的命令或重启终端
source ~/.bashrc

@red
以上命令会报权限不足 添加sudo 会显示没有source 

>sudo su 进入管理模式

> nautilus


<DotLine/>