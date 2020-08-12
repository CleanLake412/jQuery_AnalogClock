
$.fn.setclock = function(setting) {
	this.html('<div class="h-hand"></div><div class="m-hand"></div>');
	this.addClass("clock");
	var x = 0;
	var y = 0;

	var width = 500;
	var height = 500;
	
	var skew = 0;
	var scalex = 1;
	var scaley = 1;

	//size of image, need to change if image changed
	var hour_img_width = 35;
	var hour_img_height = 110;
	var min_img_width = 14;
	var min_img_height = 180;

	if (setting != undefined)
	{
		if (setting.x != undefined)
		{
			x = setting.x;
		}
		if (setting.y != undefined)
		{
			y = setting.y;
		}
		if (setting.size != undefined)
		{
			width = setting.size;
			height = setting.size;
		}
		if (setting.skew != undefined)
		{
			skew = setting.skew;
		}
		if (setting.scale != undefined && setting.scale.length > 1)
		{
			scalex = setting.scale[0];
			scaley = setting.scale[1];
		}
	}
	
	var clock = function(clock) {
		var clock_width = width;
		var clock_height = height;

		var hourwidth = hour_img_width * (clock_width / 500);
		var hourheight = hour_img_height * (clock_width / 500);
		var minwidth = min_img_width * (clock_width / 500);
		var minheight = min_img_height * (clock_width / 500);

		var hourleft = width/2 - hourwidth / 2;
		var hourtop = height/2 - hourheight + 5;

		var minleft = width/2 - minwidth / 2;
		var mintop = height/2 - minheight + 5;

		clock.css("left",(x-clock_width/2) + "px");
		clock.css("top", (y-clock_height/2) + "px");
		clock.css("width", clock_width + "px");
		clock.css("height", clock_height + "px");

		clock.find('.h-hand').css("left", hourleft + "px");
		clock.find('.h-hand').css("top", hourtop + "px");
		clock.find('.m-hand').css("left", minleft + "px");
		clock.find('.m-hand').css("top", mintop + "px");

		clock.find('.h-hand').css("width", hourwidth + "px");
		clock.find('.h-hand').css("height", hourheight + "px");

		clock.find('.m-hand').css("width", minwidth + "px");
		clock.find('.m-hand').css("height", minheight + "px");

		var date= new Date();
		var time=[date.getHours(), date.getMinutes(), date.getSeconds()];
		var clockDivs=[clock.find('.h-hand'), clock.find('.m-hand')];

		var hour=time[1]/2+time[0]*30;

		clockDivs[0].css("transform", "rotate("+hour +"deg)");
		clockDivs[1].css("transform", "rotate("+ time[2]*6 +"deg)");


		var transform = "";
		if (scalex != undefined && scaley != undefined)
		{
			transform += "scale(" + scalex + ", " + scaley + ")";
			clock.css("transform", transform);
		}
		if (skew != undefined)
		{
			transform += "skew(" + skew + "deg)";
			clock.css("transform", transform);
		}
	}
	
	clock(this);
	setInterval(clock, 1000, this);
};

