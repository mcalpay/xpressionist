// Expressions
Face.prototype.blink = function () {
    return [
        {obj:this, fun:function (t) {
            return (function () {
                t.eyes.close()
            })
        }(this), dur:0.1},
        {obj:this, fun:function (t) {
            return (function () {
                t.eyes.open()
            })
        }(this), dur:0.9}
    ];
}

Face.prototype.smile = function () {
    return [
        {obj:this, fun:function (t) {
            return (function () {
                t.ebrs.up();
                t.mout.down();
            })
        }(this), dur:1.0}
    ];
}

Face.prototype.sad = function () {
    return [
        {obj:this, fun:function (t) {
            return (function () {
                t.ebrs.normal();
                t.mout.up();
            })
        }(this), dur:1.0}
    ];
}

Face.prototype.angry = function () {
    return [
        {obj:this, fun:function (t) {
            return (function () {
                t.ebrs.rightDown();
                t.mout.openUp();
            })
        }(this), dur:1.0}
    ];
}

Face.prototype.talk = function () {
    return [
        {obj:this, fun:function (t) {
            return (function () {
                t.mout.normal()
            })
        }(this), dur:0.5},
        {obj:this, fun:function (t) {
            return (function () {
                t.mout.open()
            })
        }(this), dur:0.5}
    ];
}

Face.prototype.tango = function () {
    return [
        {obj:this, fun:function (t) {
            return (function () {
                t.mout.down();
                t.ebrs.left.up();
                t.ebrs.right.normal();
            })
        }(this), dur:0.5},
        {obj:this, fun:function (t) {
            return (function () {
                t.mout.down();
                t.ebrs.right.up();
                t.ebrs.left.normal();
            })
        }(this), dur:0.5}
    ];
}

Face.prototype.grin = function () {
    return [
        {obj:this, fun:function (t) {
            return (function () {
                t.ebrs.up();
                t.mout.openDown();
            })
        }(this), dur:1.0}
    ];
}

Face.prototype.closeOneEye = function (e) {
    if (e == 0) {
        return [
            {obj:this, fun:function (t) {
                return (function () {
                    t.eyes.left.close();
                    t.eyes.right.open();
                })
            }(this), dur:1.0}
        ];
    } else {
        return [
            {obj:this, fun:function (t) {
                return (function () {
                    t.eyes.right.close();
                    t.eyes.left.open();
                })
            }(this), dur:1.0}
        ];
    }
}

Face.prototype.blinkOneEye = function (e) {
    if (e == 0) {
        return [
            {obj:this, fun:function (t) {
                return (function () {
                    t.eyes.left.close();
                    t.eyes.right.open();
                })
            }(this), dur:0.5},
            {obj:this, fun:function (t) {
                return (function () {
                    t.eyes.left.open();
                    t.eyes.right.open();
                })
            }(this), dur:0.5}
        ];
    } else {
        return [
            {obj:this, fun:function (t) {
                return (function () {
                    t.eyes.right.close();
                    t.eyes.left.open();
                })
            }(this), dur:0.8},
            {obj:this, fun:function (t) {
                return (function () {
                    t.eyes.right.open();
                    t.eyes.left.open();
                })
            }(this), dur:0.2}
        ];
    }
}