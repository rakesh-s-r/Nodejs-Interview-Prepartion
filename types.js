// Primitive data types:
const a = 9007199254740993n;
const b = "Coding";
const c = false;
let d;
const e = null;
const f = 1;
const g = BigInt(10);

console.log(a, "->", typeof a);
console.log(b, "->", typeof b);
console.log(c, "->", typeof c);
console.log(d, "->", typeof d);
console.log(e, "->", typeof e);
console.log(f, "->", typeof f);
console.log(g, "->", typeof g);

const salary = Symbol("salary"); // Introduced in ES6 version

const employee = {
    name: "John",
    age: 30,
    [salary]: 80000,
};
console.log(employee[salary]);


// Non-primitive data types
console.log(employee);
