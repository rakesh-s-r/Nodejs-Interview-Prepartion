// function Person(name) {
//     this.name = name;
// }

// we can convert function to class
class Person {
    constructor(name) {
        this.name = name;
    }
}



// Add a method to the prototype
Person.prototype.greet = function () {
    console.log("Hello, I'm " + this.name);
};

const p1 = new Person("Alice");
const p2 = new Person("Bob");

p1.greet(); // Hello, I'm Alice
p2.greet(); // Hello, I'm Bob