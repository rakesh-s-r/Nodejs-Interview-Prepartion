// Automatic convert value from one data type to another
// majorly 4 types

// 1.String coercion
let a = "Hello";
let b = 34;
console.log(a + b);

// 2, Boolean coercion
let x = 10;
let y = undefined;

if (x) {
    console.log("x is number but it converted to truthy value")
}

if (!y) {
    console.log("all values are truthy except, '', 0, 0n, nul, undefined, NaN")
}

// 3. Logical operator
let i = 10;
let j = "Hello"
let z = undefined;

if (x && j && z) {
    console.log("code runs x, y, z")
}

if (x || j || z) {
    console.log("code runs")
}

// 4, Equality coercion
console.log(i == j);