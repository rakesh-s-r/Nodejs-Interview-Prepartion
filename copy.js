// A copy of an object or array can be either shallow or deep, depending on whether nested objects are also copied.

// Shallow copy: Copies only the first level. Nested objects/arrays are still shared.
// Deep copy: Recursively copies all nested objects/arrays, creating completely independent data.

// SHALLOW COPY
const original = {
    name: "John",
    address: {
        city: "New York"
    }
};

const copy = { ...original };
copy.name = "Alice";
copy.address.city = "Chicago";
console.log(original);


// Ways to create a shallow copy
// 1. Spread operator {...} or [...]
// 2. Object.assign({}, obj);
// 3. Array.slice();



// Deep Copy
const original1 = {
    name: "John",
    address: {
        city: "New York"
    }
};

const copy1 = structuredClone(original1);
copy1.address.city = "Chicago";
console.log(original1.address.city); // "New York"


// Ways to create a deep copy
// 1. structuredClone()
// 2. JSON.parse(JSON.stringify())