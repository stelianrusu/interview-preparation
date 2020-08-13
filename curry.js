function curryN(fn, n) {
    // SOLUTION GOES HERE
    var N = n || fn.length;
    return createCurry(fn, 0);

    function createCurry(fn, curried) {
        return function (param) {
            if (curried < N - 1) {
                return createCurry(fn.bind(this, param), curried + 1);
            }
            else {
                return fn.call(this, param);
            }
        }
    }
}

module.exports = curryN