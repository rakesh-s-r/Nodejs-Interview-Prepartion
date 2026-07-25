// Currying

// Basic example
function add(a) {
    return function (b) {
        console.log(a + b);
    }
}

add(1)(2)


// Advanced example: currying with infinite chaining.
function multiply(a) {
    return function (b) {
        if (!b) {
            return a;
        }
        return multiply(a * b);
    }
}

console.log(multiply(1)(3)(2)())
