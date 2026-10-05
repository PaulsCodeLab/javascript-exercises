const fibonacci = function(position) {
    const number = Number(position);
    if (number < 0) { return 'OOPS'; }

    let fib = [0, 1, 0];
    for (let i = 0; i < number; i++){
        fib[0] = fib[1];
        fib[1] = fib[2];
        fib[2] = fib[0] + fib[1];
    }
    return fib[2];
};

// Do not edit below this line
module.exports = fibonacci;
