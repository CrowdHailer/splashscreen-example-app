exports.inner = function (container, ratio) {
    if (ratio.width < ratio.height) {
        var diff = ratio.height - ratio.width;
        return {minimal: {x: diff/2, y: 0}, maximal: {x: 100 - diff/2, y: 100}};
    }
    var diff = ratio.width - ratio.height;
    return {minimal: {x: 0, y: diff/2}, maximal: {x: 100, y: 100 - diff/2}};
};