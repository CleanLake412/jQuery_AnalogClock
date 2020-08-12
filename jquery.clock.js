
$.fn.setclock = function(setting) {
	this.html('<div class="h-hand"></div><div class="m-hand"></div>');//<div class="s-hand"></div>
	this.addClass("clock");
	var x = setting.x;
	var y = setting.y;

	var width = setting.width;
	var height = setting.width;

	//size of image, need to change if image changed
	var hour_img_width = 20;
	var hour_img_height = 100;
	var min_img_width = 20;
	var min_img_height = 180;
	var sec_img_width = 30;
	var sec_img_height = 180;
	
	var skew = setting.skew;
	var transform = setting.transform;
	
	var clock = function(clock) {
		var clock_width = width;
		var clock_height = height;

		var hourwidth = hour_img_width/* * (clock_width / 500)*/;
		var hourheight = hour_img_height * (clock_width / 500);
		var minwidth = min_img_width/* * (clock_width / 500)*/;
		var minheight = min_img_height * (clock_width / 500);
		var secwidth = sec_img_width/* * (clock_width / 500)*/;
		var secheight = sec_img_height * (clock_width / 500);

		var hourleft = width/2 - hourwidth / 2;
		var hourtop = height/2 - hourheight + 5;

		var minleft = width/2 - minwidth / 2;
		var mintop = height/2 - minheight + 10;

		var secleft = width/2 - secwidth / 2;
		var sectop = height/2 - secheight + 10;

		clock.css("left",(x-clock_width/2) + "px");
		clock.css("top", (y-clock_height/2) + "px");
		clock.css("width", clock_width + "px");
		clock.css("height", clock_height + "px");

		clock.find('.h-hand').css("left", hourleft + "px");
		clock.find('.h-hand')[0].style.top = hourtop + "px";
		clock.find('.m-hand')[0].style.left = minleft + "px";
		clock.find('.m-hand')[0].style.top = mintop + "px";
	//	clock.find('.s-hand')[0].style.left = secleft + "px";
	//	clock.find('.s-hand')[0].style.top = sectop + "px";

		clock.find('.h-hand')[0].style.width = hourwidth + "px";
		clock.find('.h-hand')[0].style.height = hourheight + "px";

		clock.find('.m-hand')[0].style.width = minwidth + "px";
		clock.find('.m-hand')[0].style.height = minheight + "px";

	//	clock.find('.s-hand')[0].style.width = secwidth + "px";
	//	clock.find('.s-hand')[0].style.height = secheight + "px";

		var date= new Date();
		var time=[date.getHours(), date.getMinutes(), date.getSeconds()];
		var clockDivs=[clock.find('.h-hand'), clock.find('.m-hand')];//, clock.find('.s-hand')

		var hour=time[1]/2+time[0]*30;

		clockDivs[0].css("transform", "rotate("+hour +"deg)");
		clockDivs[1].css("transform", "rotate("+ time[1]*6 +"deg)");
	//	clockDivs[2].css("transform", "rotate("+ time[2]*6 +"deg)");


		if (transform != undefined)
		{
			clock.css("transform", transform);
		}
	}
	
	clock(this);
	setInterval(clock, 1000, this);
};

