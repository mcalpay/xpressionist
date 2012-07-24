//APlay
function APlay(ray, cycleTime, loop) {
	this.ray = ray;
	this.cycleTime = cycleTime;
	for(var i = 0; i < this.ray.length; i ++) {
		this.ray[i].frametime = Math.ceil(this.ray[i].dur * cycleTime);
		this.ray[i].playtime = this.ray[i].frametime;
	}
	
	this.frameno = 0;
	this.loop = loop;
}

APlay.prototype.play = function(ctx) {
	var complete = false;
	this.frameno++;
	for(var i = 0; i < this.ray.length; i ++) {
		if(this.ray[i].playtime > 0) {
			this.ray[i].playtime--;
			this.ray[i].fun();
			this.ray[i].obj.paint(ctx);
			complete = true;
			break;
		}
	}
	
	if(!complete && this.loop) {
		for(var i = 0; i < this.ray.length; i ++) {
			this.ray[i].playtime = this.ray[i].frametime;
		}
		this.play(ctx);
	}
	return this;
}
	