// The this keyword in JavaScript refers to the object that is currently executing
// the function. Its value is determined by how a function is called, 
// not where it is defined. In the global scope, 
// this refers to the global object (window in browsers, or globalThis in 
// modern JavaScript). Inside an object method, this refers to that object.
// In a regular function, this depends on the calling context and, in strict mode,
// is undefined if the function is called without an object. 
// Arrow functions do not have their own this; they inherit it from their 
// surrounding (lexical) scope.

// Arrow function support this where as normal doesn't
const person = {
    name: "John",
    greet: () => {
        console.log(this.name); // arrow function do not have their own this it will read from surrounding lexical
    },
};

person.greet();

const obj = {
    name: "vivek",
    getName: function () {
        console.log(this.name);
    }
}

obj.getName();
