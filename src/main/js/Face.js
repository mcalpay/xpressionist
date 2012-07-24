
function Face(xy) {
	this.ebrs = new Eyebrows(new Eyebrow({x:xy.x, y:xy.y, w:xy.w/3, h:xy.w/9, c:"rgb(0,0,0)"}));
	this.eyes = new Eyes(new Eye({x:xy.x, y:xy.y + xy.h/5, w:xy.w/3 , h:xy.h/4.5, c:"rgb(0,0,0)"}));
	this.mout = new Mouth({x:xy.x, y: xy.y + xy.h *0.45, w: xy.w, h: xy.h * 0.45, c:"rgb(0,0,0)"});
}

Face.prototype.paint = function(ctx) {
	this.ebrs.paint(ctx);
	this.eyes.paint(ctx);
	this.mout.paint(ctx);
	return this;
}

Face.prototype.normal = function() {
	this.ebrs.normal();
	this.eyes.lookFront();
	this.mout.normal();
	return this;
}

Face.prototype.blink = function () {
	return [
		{obj : this, fun : function(t) {return (function(){t.eyes.close()})}(this), dur : 0.1},
		{obj : this, fun : function(t) {return (function(){t.eyes.open()})}(this), dur : 0.9}
	];
}

Face.prototype.smile = function () {
	return [
		{obj : this, fun : function(t) {return (function(){
			t.ebrs.up();
			t.mout.down();
		})}(this), dur : 1.0}
	];
}

Face.prototype.sad = function () {
	return [
		{obj : this, fun : function(t) {return (function(){
			t.ebrs.normal();
			t.mout.up();
		})}(this), dur : 1.0}
	];
}

Face.prototype.angry = function () {
	return [
		{obj : this, fun : function(t) {return (function(){
			t.ebrs.rightDown();
			t.mout.openUp();
		})}(this), dur : 1.0}
	];
}