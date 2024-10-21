# 炫酷的点线背景特效
## 源码

::: tip 源码
直接引用文件就OK了
:::

``` js
var Dots = function(speed, alpha) {
	this.canvas; // canvas节点
	this.ctx; // canvas绘图上下文
	this.x; // 横向坐标
	this.y; // 纵向坐标
	this.r; // dot半径
	this.speed = speed && speed > 0 ? speed : 2;
	this.sx; // 单位时间水平移动距离
	this.sy; // 单位时间纵向移动距离
	this.a = alpha && alpha > 0 && alpha <= 1 ? alpha : 0.8;
	this.isMouseDot = 0;
}
// 为Dots添加原型链
Dots.prototype = {
	init: function(canvas, x, y, isMouseDot) {
		this.canvas = canvas;
		// 初始值
		this.x = x || Math.random() * this.canvas.width;
		this.y = y || Math.random() * this.canvas.height;
		this.r = Math.random() * 2;
		if (isMouseDot) this.isMouseDot = 1;
		// 设置移动速度
		this.sx = isMouseDot ? 0 : Math.random() * this.speed * 2 - this.speed;
		this.sy = isMouseDot ? 0 : Math.random() * this.speed * 2 - this.speed;
		// 
		this.ctx = canvas.getContext("2d");
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI); //画圆点
		this.ctx.fillStyle = "rgba(175,238,238," + this.a + ")";
		this.ctx.fill(); //填充颜色
		this.ctx.closePath(); //关闭绘制路径
	},
	update: function() {
		if (this.isMouseDot) return;
		this.x = this.x + this.sx;
		this.y = this.y + this.sy;
		// 宽度比较小 或者 超出 重新生成一个canvas 
		if (this.x < 0 || this.x > this.canvas.width) {
			this.init(this.canvas);
		}
		if (this.y < 0 || this.y > this.canvas.height) {
			this.init(this.canvas);
		}
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.r + 0.5, 0, 2 * Math.PI);
		this.ctx.fillStyle = "rgba(175,238,238," + this.a + ")";
		this.ctx.fill();
		this.ctx.closePath()
	},
	mouseDot: function(x, y) {
		this.x = x * 2;
		this.y = y * 2;
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
		this.ctx.fillStyle = "rgba(175,238,238," + this.a + ")";
		this.ctx.fill();
		this.ctx.closePath();
	}
}

function start() {
	var canvas = document.createElement("canvas");
	canvas.style.position = "fixed";
	canvas.style.left = "0";
	canvas.style.top = "0";
	canvas.style.zIndex = "-1";
	canvas.style.display = "block";

	canvas.width = document.documentElement.clientWidth - 20;
	canvas.height = document.documentElement.clientHeight - 20;
	var body = document.getElementsByTagName("body")[0];

	body.appendChild(canvas);
	// canvas
	var dotArr = [],
		dotsNum = 100,
		MaxDotsNum = 200,
		dotDistance = 50,
		overNum = 0;
	for (let i = 0; i < dotsNum; i++) {
		var dot = new Dots(2, 0.9);
		if (i < dotsNum - 1) {
			dot.init(canvas);
		} else {
			dot.init(canvas, 0, 0, 1);
		}
		dotArr.push(dot);
	}
	// 鼠标事件
	var clickWithNew = 5;
	document.addEventListener("click", createDot);

	function createDot(e) {
		var tx = e.pageX;
		var ty = e.pageY;
		if ((tx > 0 && tx < canvas.width) && (ty > 0 && ty < canvas.height)) {
			for (let i = 0; i < clickWithNew; i++) {
				var dot = new Dots(1.5, 0.8);
				dotArr.push(dot);
				dotsNum++;
				dot.init(canvas, tx, ty);
			}
		}
	}

	canvas.addEventListener("mouseenter", mouseEnterDot)
	canvas.addEventListener("mousemove", mouseMoveDot);
	canvas.addEventListener("mouseleave", mouseLeaveDot);

	var dot1 = new Dots(1.5, 0.8)

	function mouseEnterDot(e) {
		var tx = e.pageX;
		var ty = e.pageY;
		dot1.init(canvas, tx, ty, 1);
	}

	function mouseMoveDot(e) {
		var tx = e.pageX;
		var ty = e.pageY;
		if ((tx > 0 && tx < canvas.width) && (ty > 0 && tx < canvas.height)) {
			dot1.mouseDot(tx, ty);
		}
	}

	function mouseLeaveDot(e) {
		dot1.init(canvas);
	}

	requestAnimationFrame(animateUpdate);

	function animateUpdate() {
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// 清除超出的点
		if (dotsNum > MaxDotsNum) {
			overNum = dotsNum - MaxDotsNum;
		}
		for (let i = overNum; i < dotsNum; i++) {
			if (dotArr[i]) dotArr[i].update();
		}
		// 绘制连线
		for (let i = overNum; i < dotsNum; i++) {
			for (let j = i + 1; j < dotsNum; j++) {
				var tx = dotArr[i].x - dotArr[j].x;
				var ty = dotArr[i].y - dotArr[j].y;
				s = Math.sqrt(Math.pow(tx, 2) + Math.pow(ty, 2));
				if (s < dotDistance) {
					ctx.beginPath();
					ctx.moveTo(dotArr[i].x, dotArr[i].y);
					ctx.lineTo(dotArr[j].x, dotArr[j].y);
					ctx.strokeStyle = "rgba(175,238,238," + (dotDistance - s) / dotDistance + ")";
					ctx.strokeWidth = 1;
					ctx.stroke();
					ctx.closePath();
				}
			}
		}
		requestAnimationFrame(animateUpdate);
	}
}
start();

```
## 与Vuepress
::: warging 与Vuepress
需要做成组件单独引用
:::

* 在本博客搭建时遇到的问题 在全局文件main.js文件中引用该文件会报错
* 将该组件封装为一个组件然后使用页面调用

> `docs/.vuepress/components/DotLine.vue
``` js
<template>
  <div></div>
</template>
<script>
export default {
  name: "DotLine",
  mounted: function() {
    // 引入位置dotline.js文件内是上部分js代码
    document && require("../js/dotline");
  }
};
</script>
```
使用页面需要使用组件 `<DotLine/>`

## vuepress样式修改篇
为了背景能够开到 需要将网站背景图片换成透明色;侧边连透明背景去掉了透明效果影响看字

> docs/.vuepress/styles/index.styl
``` styl
body
    background-color: transparent;

.navbar
    // background-color: rgba(255, 255,255, .8);
.sidebar
    // background-color: rgba(255, 255,255, .8);
```
<DotLine/>
