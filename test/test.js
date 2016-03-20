var t = require('tap')
var p2c = require('../src/index')

var MAX_ERROR = 1e-15;

var test = function(r, degrees, x, y) {
    var radians = degrees * Math.PI / 180;
    var actual = p2c(r, radians);

    t.ok(Math.abs(actual.x - x) < MAX_ERROR, `x coord of polar (${r}, ${degrees}°) should be ${x}`)
    t.ok(Math.abs(actual.y - y) < MAX_ERROR, `y coord of polar (${r}, ${degrees}°) should be ${y}`)
}

var halfSqrt2 = Math.sqrt(2) / 2;

test(1, 45, halfSqrt2, halfSqrt2)
test(1, 90, 0, 1)
test(1, 135, -halfSqrt2, halfSqrt2)
test(1, 180, -1, 0)
test(1, 225, -halfSqrt2, -halfSqrt2)
test(1, 270, 0, -1)
test(1, 315, halfSqrt2, -halfSqrt2)
test(1, 360, 1, 0)

test(2, 45, halfSqrt2 * 2, halfSqrt2 * 2)
test(2, 90, 0 * 2, 1 * 2)
test(2, 135, -halfSqrt2 * 2, halfSqrt2 * 2)
test(2, 180, -1 * 2, 0 * 2)
test(2, 225, -halfSqrt2 * 2, -halfSqrt2 * 2)
test(2, 270, 0 * 2, -1 * 2)
test(2, 315, halfSqrt2 * 2, -halfSqrt2 * 2)
test(2, 360, 1 * 2, 0 * 2)
