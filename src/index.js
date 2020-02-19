
exports.min = function min (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
  return array.sort((a,b) => (a-b)).splice(0, 1);
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    return array.sort((a,b) => (a-b)).splice(-1, 1);
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
  return array.reduce((a, b) => a+b) / array.length;
}
