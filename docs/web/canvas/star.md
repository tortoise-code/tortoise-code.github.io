# 绘制动态五角星

## 使用JavaScript Math方法画出五角星及方法封装

> 将一下代码放入到 当前目录 js 文件夹下 canvasstar.js 中
``` js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//  star(画布,中心x坐标,中心y坐标,半径,旋转角度,颜色,是否填充) 
function star(ctx, arcX = 20, arcY = 20, starRaduis = 20, tra = 0, color = 'black', fill = true) {
	// 圆心坐标
	// 坐标A
	var dotAx = arcX + starRaduis * Math.sin(tra * Math.PI / 180);
	var dotAy = arcY - starRaduis * Math.cos(tra * Math.PI / 180);

	var dotBx = arcX + starRaduis * Math.sin((tra + 72) * Math.PI / 180);
	var dotBy = arcY - starRaduis * Math.cos((tra + 72) * Math.PI / 180);

	var dotCx = arcX + starRaduis * Math.sin((tra + 144) * Math.PI / 180);
	var dotCy = arcY - starRaduis * Math.cos((tra + 144) * Math.PI / 180);

	var dotDx = arcX + starRaduis * Math.sin((tra + 216) * Math.PI / 180);
	var dotDy = arcY - starRaduis * Math.cos((tra + 216) * Math.PI / 180);

	var dotEx = arcX + starRaduis * Math.sin((tra + 288) * Math.PI / 180);
	var dotEy = arcY - starRaduis * Math.cos((tra + 288) * Math.PI / 180);

	ctx.beginPath();
	ctx.moveTo(dotAx, dotAy);
	ctx.lineTo(dotCx, dotCy);
	ctx.lineTo(dotEx, dotEy);
	ctx.lineTo(dotBx, dotBy);
	ctx.lineTo(dotDx, dotDy);
	ctx.lineTo(dotAx, dotAy);
	if (fill) {
		ctx.fillStyle = color;
		ctx.fill();
	} else {
		ctx.strokeStyle = color;
		ctx.stroke();
	}
	ctx.closePath();
}
```

## 调用封装及实时刷新

存在以下问题 使用setInterVal定时器会导致cpu占用过高
使用requestAnimationFrame()递归调用会导致刷新频率过高


> js/canvasstar.js 是上一步 方法放入的js文件
``` js
// <script src="js/canvasstar.js"></script>
// <script type="text/javascript">
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    var area = width * height;
    var starNumber = area / (50 * 50);

    requestAnimationFrame(xingixng);
    function xingixng() {
        ctx.clearRect(0,0,width,height)
        for (let i = 0; i < starNumber; i++) {
            var x = Math.random() * width;
            var y = Math.random() * height;
            var a = Math.ceil(Math.random() * 255) - 1;
            var b = Math.ceil(Math.random() * 255) - 1;
            var c = Math.ceil(Math.random() * 255) - 1;
            var color = "rgb(" + a + "," + b + "," + c + ")";
            star(ctx, x, y, 10, 0, color);
        }
        requestAnimationFrame(xingixng);
    }
// </script>
```

## 使星星图案对象化

> 核心目的 使星星能够在画布上自用移动 自由旋转
> 利用原型链完成
