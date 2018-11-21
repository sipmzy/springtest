

function sprit(left, top, width, height, imgsrc, step) {
	this.down = false;
	this.left = left;
	this.top = top;
	this.timermove = null;
	this.IsRunning = false;
	this.TargetX = -1;
	this.TargetY = -1;
	this.step = step;

	this.sp = document.createElement('div');
	this.sp.style.position = "absolute";
	this.sp.style.left = left + "px";
	this.sp.style.top = top + "px";
	this.sp.style.width = width + "px";
	this.sp.style.height = height + "px";
	this.sp.className = "sprit";

	var bigImg = document.createElement("img");
	bigImg.src = imgsrc;
	bigImg.width = width;
	bigImg.height = height;
	this.sp.appendChild(bigImg);
	document.body.appendChild(this.sp);

	var _this = this;
	 

	this.processevent = function (event) {
		if (this.timermove == null) {
			this.timermove = setInterval(this.move, 500);
		}
		this.IsRunning = true;
		this.TargetX = event.clientX;
		this.TargetY = event.clientY;

	},
	this.move = function () {
		xdirect = 1;
		ydirect = 1;

		sx = parseInt(_this.sp.style.left);
		sy = parseInt(_this.sp.style.top);
		deltx = _this.TargetX - sx;
		delty = _this.TargetY - sy;
		if (deltx < 0) {
			xdirect = -1;
		}
		if (delty < 0) {
			ydirect = -1;
		}
		deltaDist = Math.sqrt(deltx * deltx + delty * delty);
		newx = parseInt(sx + deltx * 50 / deltaDist);
		newy = parseInt(sy + delty * 50 / deltaDist);
		if (newx * xdirect > _this.TargetX * xdirect) {
			newx = _this.TargetX
			_this.IsRunning = false;
			clearInterval(_this.timermove);
			_this.timermove = null;
		}
		if (newy * ydirect > _this.TargetY * ydirect) {
			newy = _this.TargetY
			_this.IsRunning = false;
			clearInterval(_this.timermove);
			_this.timermove = null;
		}
		_this.moveTo(newx, newy)
	}

}

sprit.prototype = {
	constructor: sprit,

	getLeft: function () {
		return parseInt(this.sp.style.left);
	},
	getTop: function () {
		return parseInt(this.sp.style.top);
	},
	moveTo: function (newLeft, newTop) {
		this.sp.style.left = newLeft + "px";
		this.sp.style.top = newTop + "px";
	}


}