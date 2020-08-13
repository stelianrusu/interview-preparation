function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    if(arr.length == 0)
        return initial;
    var head = arr[0];
    var tail = arr.slice(1);
    return reduce(tail, fn, fn(initial, head, 0, arr));

  }

  module.exports = reduce