module.exports = function (r, theta) {
    return {
        x: r * Math.cos(theta),
        y: r * Math.sin(theta)
    }
};
