function Eyes(left) {
	this.left = left;
	this.right = new Eye({x:left.xy.x + left.xy.w*2, y:left.xy.y, w:left.xy.w, h:left.xy.h, c:left.xy.c});
	new Eyebrow({x:10, y:1, w:10, h:6, c:"rgb(0,0,0)"})
}

Eyes.prototype.paint = function(ctx) {
	this.left.paint(ctx);
	this.right.paint(ctx)
	return this;
}

Eyes.prototype.lookFront = function() {
	this.left.lookFront();
	this.right.lookFront();
	return this;
}

Eyes.prototype.lookLeft = function() {
	this.left.lookLeft();
	this.right.lookLeft();
	return this;
}

Eyes.prototype.lookRight = function() {
	this.left.lookRight();
	this.right.lookRight();
	return this;
}

Eyes.prototype.lookTop = function() {
	this.left.lookTop();
	this.right.lookTop();
	return this;
}

Eyes.prototype.lookDown = function() {
	this.left.lookDown();
	this.right.lookDown();
	return this;
}

Eyes.prototype.close = function() {
	this.left.close();
	this.right.close();
	return this;
}

Eyes.prototype.open = function() {
	this.left.open();
	this.right.open();
	return this;
}