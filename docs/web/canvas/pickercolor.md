# 色板实现

``` html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Canvas</title>
	</head>
	<body>
		<input type="range" oninput="changeColor(value)" data-value="0" id="range" step="5" min="0" max="255" value="0" />
		<canvas id="canvas" width="510" height="510"></canvas>
	</body>
	<script>
		/** @type {HTMLCanvasElement} */
		function drowRect(z = 0) {
			var canvas = document.getElementById("canvas");
			if (canvas.getContext) {
				var ctx = canvas.getContext("2d");
				for (let i = 0; i < 52; i++) {
					let x = 255 - i * 5;
					for (let j = 0; j < 52; j++) {
						let y = 255 - j * 5;
						ctx.fillStyle = "rgb(" + x + "," + y + "," + z + ")";
						ctx.fillRect(i * 10, j * 10, 10, 10);
					}
				}
			}
		}
		drowRect();
		function changeColor(value) {
			drowRect(value);
		}
	</script>
</html>

```

<DotLine/>