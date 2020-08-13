function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    var cycles = num - num % 1000;
    trampoline(operation, cycles);

    return repeat(operation, num - cycles)
}

function trampoline(fn, cycles) {
    // You probably want to implement a trampoline
    for(var i = 0;i < cycles; i++){
        fn();
    }
}

module.exports = function (operation, num) {
    // You probably want to call your trampoline here!
    return repeat(operation, num)
}