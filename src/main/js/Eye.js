
function Eye(xy) {
	this.xy = xy;
	this.lookFront();
}

Eye.prototype.paint = function(ctx) {
	ctx.fillStyle = this.xy.c;				
	ctx.fillRect(this.xy.x, this.xy.y, this.xy.w, this.xy.h);	
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.fillRect(this.look.x, this.look.y, this.look.w, this.look.h);	
	return this;
}

Eye.prototype.lookFront = function() {
	this.look = {
		x: this.xy.x + this.xy.w*0.3, y: this.xy.y + this.xy.h*0.3, w: this.xy.w*0.4, h: this.xy.h*0.4,
		c: "rgb(255,255,255)"
	}
	return this;
}

Eye.prototype.lookLeft = function() {
	this.look.x = this.xy.x + this.xy.w*0.1;
	return this;
}

Eye.prototype.lookRight = function() {
	this.look.x = this.xy.x + this.xy.w*0.5;
	return this;
}

Eye.prototype.lookTop = function() {
	this.look.y = this.xy.y + this.xy.h*0.1;
	return this;
}

Eye.prototype.lookDown = function() {
	this.look.y = this.xy.y + this.xy.h*0.5;
	return this;
}

Eye.prototype.close = function() {
	this.look.w = 0;
	this.look.h = 0;
	return this;
}

Eye.prototype.open = function() {
	this.look.w = this.xy.w*0.4;
	this.look.h = this.xy.h*0.4;
	return this;
}
