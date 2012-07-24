//Eyebrows
function Eyebrows(left) {
	this.left = left;
	this.right = new Eyebrow({x:left.xy.x + left.xy.w*2, y:left.xy.y, w:left.xy.w, h:left.xy.h, c:left.xy.c});
	this.normal();
}

Eyebrows.prototype.paint = function(ctx) {
	this.left.paint(ctx);
	this.right.paint(ctx);
	return this;
}

Eyebrows.prototype.normal = function() {
	this.left.normal();
	this.right.normal();
	return this;
}

Eyebrows.prototype.up = function() {
	this.left.up();
	this.right.up();
	return this;
}

Eyebrows.prototype.leftUp = function() {
	this.left.up();
	return this;
}

Eyebrows.prototype.rightUp = function() {
	this.right.up();
	return this;
}

Eyebrows.prototype.rightDown = function() {
	this.left.rightDown();
	this.right.leftDown();
	return this;
}

Eyebrows.prototype.leftDown = function() {
	this.left.leftDown();
	this.right.rightDown();
	return this;
}