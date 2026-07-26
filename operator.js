// Spread operator
const a = {
    name: "John",
    age: 20
}

const b = { ...a };
console.log(b);


// Rest Operator
function add(...n) {
    let sum = 0;
    n.forEach(i => sum += i);
    return sum;
}
console.log(add(1, 2, 3))