const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }

    // simple but recursion might be problematic for large n ...
    // good enough for this exercise I guess
    return n < 2 ? parseInt(n) : fibonacci(n-1) + fibonacci(n-2);
};

// Do not edit below this line
module.exports = fibonacci;
