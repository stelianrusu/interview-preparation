function Spy(target, method) {
    // SOLUTION GOES HERE
    var res = { count: 0 };
    var originalFnc = target[method];
    target[method] = function () {
        res.count++;
        return originalFnc.apply(target, Array.prototype.slice.call(arguments))
    }
    return res;
}

var spy = Spy(console, 'log')

module.exports = Spy