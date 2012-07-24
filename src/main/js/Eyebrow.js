//Eyebrow
function Eyebrow(xy) {
	this.xy = xy;
	this.normal();
}

Eyebrow.prototype.paint = function(ctx) {
	var xy = this.xy;
	var curve = this.curve;
	ctx.beginPath();
    ctx.moveTo(curve.x1, curve.y1);
    ctx.quadraticCurveTo(curve.x2, curve.y2, curve.x3, curve.y3);
    ctx.lineWidth = xy.h*0.4;
    ctx.strokeStyle = xy.c;
    ctx.stroke();
	return this;
}

Eyebrow.prototype.normal = function() {
	var xy = this.xy;
	this.curve = {x1: xy.x, y1: xy.y + xy.h, x2: xy.x + xy.w*0.5, y2: xy.y + xy.h * 0.9,
					x3: xy.x  + xy.w, y3: xy.y + xy.h
				}
	return this;
}

Eyebrow.prototype.up = function() {
	var xy = this.xy;
	this.curve = {x1: xy.x, y1: xy.y + xy.h, x2: xy.x + xy.w*0.5, y2: xy.y,
					x3: xy.x  + xy.w, y3: xy.y + xy.h
				}
	return this;
}
Eyebrow.prototype.rightDown = function() {
	var xy = this.xy;
	this.curve = {x1: xy.x, y1: xy.y, x2: xy.x + xy.w*0.5, y2: xy.y + xy.h * 0.5,
				x3: xy.x  + xy.w, y3: xy.y + xy.h
	}
	return this;
}

Eyebrow.prototype.leftDown = function() {
	var xy = this.xy;
	this.curve = {x1: xy.x, y1: xy.y + xy.h, x2: xy.x + xy.w*0.5, y2: xy.y + xy.h * 0.5,
				x3: xy.x  + xy.w, y3: xy.y
			}
	return this;
}