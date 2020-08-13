module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    return arr.reduce(function acumulator(result, curr){
        result.push(fn(curr));
        return result;
    }, []);
  }
