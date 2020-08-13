/**
 * Analog Clock
 * 2020/08/12 Created by CleanLake
 * 
 * @version 1.0
 */
$.fn.analogclock = async function(_options) {
	this.html('<div class="analogclock-h-hand"></div><div class="analogclock-m-hand"></div>');//
	this.addClass("analogclock-clock");

	let option = {
		x: 0,
		y: 0,
		size: 500,
		skew: 0,
        rotate: 0,
		scale: [1,1],
		hourHandCenter: 95.89,
		minuteHandCenter: 96.72
	};
	
	if (_options != undefined) {
		jQuery.each(_options, function(i, val) {
			option[i] = val;
		});
        option.hourHandCenter = parseFloat(option.hourHandCenter);
        option.minuteHandCenter = parseFloat(option.minuteHandCenter);
	}
	
	let hourHandImgWidth = 0, hourHandImgHeight = 0, minuteHandImgWidth = 0, minuteHandImgHeight = 0;

	// Determine size of clock hand images
	const img1 = new Image();
	img1.onload = function() {
		hourHandImgWidth = this.width;
		hourHandImgHeight = this.height;
	};
	img1.src = 'img/hour.svg';

	const img2 = new Image();
	img2.onload = function() {
		minuteHandImgWidth = this.width;
		minuteHandImgHeight = this.height;
	};
	img2.src = 'img/min.svg';

	console.log("waiting while images loaded");
	while (hourHandImgWidth === 0 || hourHandImgHeight === 0 || minuteHandImgWidth === 0 || minuteHandImgHeight === 0) {
		await new Promise(resolve => setTimeout(resolve, 10));
	}
	console.log("succeeded to determine size of images");
	console.log("Hour hand: " + hourHandImgWidth + " x  " + hourHandImgHeight);
	console.log("Minute hand: " + minuteHandImgWidth + " x  " + minuteHandImgHeight);

	// Render clock background and clock hands
	let init = function(clock) {
		let clockWidth = option.size;
		let clockHeight = option.size;

		// Clock position
		clock.css("left",(option.x-clockWidth/2) + "px");
		clock.css("top", (option.y-clockHeight/2) + "px");
		clock.css("width", clockWidth + "px");
		clock.css("height", clockHeight + "px");

		// Position of clock hands
		let hourHandHeight = clockHeight * 30 / 100;
		let hourHandWidth = hourHandImgWidth * (hourHandHeight / hourHandImgHeight);
		let minuteHandHeight = clockHeight * 35 / 100;
		let minuteHandWidth = minuteHandImgWidth * (minuteHandHeight / minuteHandImgHeight);

		let hourHandLeft = (clockWidth - hourHandWidth) / 2;
		let hourHandTop = clockHeight/2 - hourHandHeight + ((100 - parseFloat(option.hourHandCenter)) * hourHandHeight / hourHandImgHeight);

		let minuteHandLeft = clockWidth/2 - minuteHandWidth / 2;
		let minuteHandTop = clockHeight/2 - minuteHandHeight + ((100 - parseFloat(option.minuteHandCenter)) * minuteHandHeight / minuteHandImgHeight);

		clock.find('.analogclock-h-hand').css({
			"left": hourHandLeft + "px",
			"top": hourHandTop + "px",
			"width": hourHandWidth + "px",
			"height": hourHandHeight + "px",
			"transform-origin": "50% " + option.hourHandCenter + "%"
		});

		clock.find('.analogclock-m-hand').css({
			"left": minuteHandLeft + "px",
			"top": minuteHandTop + "px",
			"width": minuteHandWidth + "px",
			"height": minuteHandHeight + "px",
			"transform-origin": "50% " + option.minuteHandCenter + "%"
		});

		// Rotate and skew clock
		let transform = "";
		transform += "scale(" + option.scale[0] + ", " + option.scale[1] + ")";
		transform += " skew(" + option.skew + "deg)";
        transform += " rotate(" + option.rotate + "deg)";
		clock.css("transform", transform);
	};

	// Rotate hands according to current time
	let clock = function(clock) {
		let date= new Date();
		let time=[date.getHours(), date.getMinutes(), date.getSeconds()];
		let clockDivs=[clock.find('.analogclock-h-hand'), clock.find('.analogclock-m-hand')];

		let hour=time[0]*30 + time[1]/2;

		clockDivs[0].css("transform", "rotate("+hour +"deg)");
		clockDivs[1].css("transform", "rotate("+ (time[1]*6 + time[2]/10) +"deg)");
	};
	
	init(this);
	clock(this);
	setInterval(clock, 1000, this);
};

