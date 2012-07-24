
function Mouth(xy) {
	this.xy = xy;
	this.normal();
}

Mouth.prototype.normal = function() {
	var xy = this.xy;
	this.c1 = {	x1: xy.x, y1: xy.y + xy.h*0.5, 
				x2: xy.x + xy.w*0.5, y2: xy.y + xy.h * 0.6,
				x3: xy.x  + xy.w, y3: xy.y + xy.h*0.5, 
				x4: xy.x + xy.w*0.5, y4: xy.y + xy.h * 0.6 }
	return this;
}

Mouth.prototype.openDown = function() {
	var xy = this.xy;
	this.c1 = {	x1: xy.x, y1: xy.y + xy.h*0.5, 
				x2: xy.x + xy.w*0.5, y2: xy.y + xy.h * 1.0,
				x3: xy.x  + xy.w, y3: xy.y + xy.h*0.5, 
				x4: xy.x + xy.w*0.5, y4: xy.y + xy.h * 0.5 }
	return this;
}

Mouth.prototype.down = function() {
	var xy = this.xy;
	this.c1 = {	x1: xy.x, y1: xy.y + xy.h*0.5, 
				x2: xy.x + xy.w*0.5, y2: xy.y + xy.h * 1.0,
				x3: xy.x  + xy.w, y3: xy.y + xy.h*0.5, 
				x4: xy.x + xy.w*0.5, y4: xy.y + xy.h * 1.0 }
	return this;
}

Mouth.prototype.openUp = function() {
	var xy = this.xy;
	this.c1 = {	x1: xy.x, y1: xy.y + xy.h*0.5, 
				x2: xy.x + xy.w*0.5, y2: xy.y + xy.h * 1.0,
				x3: xy.x  + xy.w, y3: xy.y + xy.h*0.5, 
				x4: xy.x + xy.w*0.5, y4: xy.y + xy.h * 0.5 }
	return this;
}

Mouth.prototype.up = function() {
	var xy = this.xy;
	this.c1 = {	x1: xy.x, y1: xy.y + xy.h*0.5, 
				x2: xy.x + xy.w*0.5, y2: xy.y,
				x3: xy.x  + xy.w, y3: xy.y + xy.h*0.5, 
				x4: xy.x + xy.w*0.5, y4: xy.y }
	return this;
}

Mouth.prototype.openUp = function() {
	var xy = this.xy;
	this.c1 = {	x1: xy.x, y1: xy.y + xy.h*0.5, 
				x2: xy.x + xy.w*0.5, y2: xy.y + xy.h*0.5,
				x3: xy.x  + xy.w, y3: xy.y + xy.h*0.5, 
				x4: xy.x + xy.w*0.5, y4: xy.y }
	return this;
}

Mouth.prototype.open = function() {
	var xy = this.xy;
	this.c1 = {	x1: xy.x, y1: xy.y + xy.h*0.5, 
				x2: xy.x + xy.w*0.5, y2: xy.y + xy.h * 1.0,
				x3: xy.x  + xy.w, y3: xy.y + xy.h*0.5, 
				x4: xy.x + xy.w*0.5, y4: xy.y }
	return this;
}

Mouth.prototype.paint = function(ctx) {
	var xy = this.xy;
	var c1 = this.c1;
	ctx.beginPath();
    ctx.moveTo(c1.x1, c1.y1);
    ctx.quadraticCurveTo(c1.x2, c1.y2, c1.x3, c1.y3);
	ctx.quadraticCurveTo(c1.x4, c1.y4, c1.x1, c1.y1);
    ctx.lineWidth = xy.h*0.1;
    ctx.strokeStyle = xy.c;
    ctx.stroke();
	return this;
}