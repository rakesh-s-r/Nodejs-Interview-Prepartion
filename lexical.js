// A function can access variables from the place where it was created.

// Example 1: Basic lexical scope
function outer() {
    let name = "John";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();


// Example 2: Function location matters
let name = "Global";

function outer() {
    let name = "Outer";

    function inner() {
        console.log(name);
    }

    return inner;
}

const myFunction = outer();
myFunction();


// Example 3: Lexical scope vs dynamic scope
let value = "global";

function printValue() {
    console.log(value);
}

function test() {
    let value = "local";
    printValue();
}

test();



// Scope chain: When JavaScript looks for a variable, it searches in this order:
// Current function scope
//         ↓
// Outer function scope
//         ↓
// Global scope
//         ↓
// Not found → ReferenceError

const a = 10;

function first() {
    const b = 20;

    function second() {
        const c = 30;

        console.log(a, b, c);
    }

    second();
}

first();
