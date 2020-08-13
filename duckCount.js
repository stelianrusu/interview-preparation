function duckCount() {
    // SOLUTION GOES HERE
    var args = Array.prototype.slice.call(arguments);
    return args.filter(function (d){
        return Object.prototype.hasOwnProperty.call(d, 'quack');
    }).length;
  }

  module.exports = duckCount