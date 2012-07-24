//MPlayer
function MPlayer() {
	this.list = [];
}	

MPlayer.prototype.start = function(fps, ctx) {
	this.beat = 0;
	setInterval(
		function(t){
			return (function(){t.play(ctx)})
		}(this), 1000/fps);
}

MPlayer.prototype.addPlay = function(pl) {
	this.list.push(pl);
	return this;
}

MPlayer.prototype.play = function(ctx) {
	this.beat++
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.fillRect(0, 0, 400, 300);
	for(var i = 0; i < this.list.length; i++) {
		var alist = this.list[i];
		alist.play(ctx);
	}
}
