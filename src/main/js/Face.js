// Face
function Face(xy) {
    this.ebrs = new Eyebrows(new Eyebrow({x:xy.x, y:xy.y, w:xy.w / 3, h:xy.w / 5, c:"rgb(0,0,0)"}));
    this.eyes = new Eyes(new Eye({x:xy.x, y:xy.y + xy.h / 5, w:xy.w / 3, h:xy.h / 4.5, c:"rgb(0,0,0)"}));
    this.mout = new Mouth({x:xy.x, y:xy.y + xy.h * 0.45, w:xy.w, h:xy.h * 0.45, c:"rgb(0,0,0)"});
}

Face.prototype.paint = function (ctx) {
    this.ebrs.paint(ctx);
    this.eyes.paint(ctx);
    this.mout.paint(ctx);
    return this;
}

Face.prototype.normal = function () {
    this.ebrs.normal();
    this.eyes.lookFront();
    this.mout.normal();
    return this;
}