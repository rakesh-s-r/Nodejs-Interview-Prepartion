// Both structured cloning and JSON serialization create copies of data, but they support different data types and have different purposes.


// structured cloning supports circular references, date, set map, regex etc
// JSON serialization don't keep values of map, set, fn
const obj = {
    num: 10,
    date: new Date(),
    map: new Map(),
    set: new Set([1]),
};

const cpy = JSON.parse(JSON.stringify(obj));
console.log(cpy);

const copy = structuredClone(obj);
console.log(copy);