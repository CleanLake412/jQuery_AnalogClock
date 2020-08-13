# jQuery_AnalogClock
jQuery plugin : Display analog clock anywhere

# How to use
##CSS file##
```
<link type="text/css" rel="stylesheet" href="analogclock.css">
```

##jQuery library and this plugin##
```
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>  

<script src="jquery.analogclock.js"></script>
```

##Create container##
```
<div id="clock"></div>
```

##Javascript code##
```
<script type="text/javascript">
$(“#clock”).analogclock({
	x:300,
	y:355,
	size:600,
	skew:-30,
	scale:[1, -0.7] 
});
</script>
```

##Options##
- *x* : 時計の中心（回転軸）位置（x）
- *y* : 時計の中心（回転軸）位置（y）
- *size* : 時計の大きさ　　　（既定：500）
- *rotate* : 回転（0 ~ 360）　（既定：0）
- *skew* : 傾き（0 ~ 360）  　（既定：0）
- *scale* : [scaleX, scaleY] 拡大比率
*scaleX*  X軸の拡大比率　（既定：1）
*scaleY*  Y軸の拡大比率　（既定：1）  
- *hourHandCenter* : 回転軸までの比率（時針）  
（既定：95.89）%
- *minuteHandCenter* : 回転軸までの比率（分針）  
（既定：96.72）%
  
[How to set hourHandCenter option](docs/center_position.png)

# Reference
[FabienFellay / YA-SVG-JS-C](https://github.com/FabienFellay/YA-SVG-JS-C/blob/master/standalone/YA_SVG_JS_C_SD_Standalone.svg)
