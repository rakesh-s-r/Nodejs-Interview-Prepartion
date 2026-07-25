// Three types for variable declaration var, let and const

// 1. Scope
function test() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10
}
test();

function test() {
    if (true) {
        let x = 10;
    }
    console.log(x); // Throws x is not defined
}
test();


// 2. Hoisted
console.log(x); // undefined
var x = 5;

console.log(x); // ReferenceError
let x = 5;



// 3. Re-declaration
var name = "John";
var name = "David";

console.log(name); // David

let name = "John";
let name = "David"; // SyntaxError



// 4. Global Object
var x = 10;
console.log(window.x);// check in browser

var y = 10;
console.log(window.y);