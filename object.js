// Different types of creating an object

// 1.Object literal (most common)
const person1 = {
    name: "Alice",
    age: 25
};


// 2.1 new Object() constructor
const person = new Object();
person.name = "Alice";
person.age = 25;

// 2.2 using Object.create()
const prototype = {
    greet() {
        console.log("Hello");
    }
};

const person = Object.create(prototype);
person.name = "Alice";


// 3.1 Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person("Alice", 25);

// 3.2 ES6 Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person("Alice", 25);


// 4. Factory function
function createPerson(name, age) {
    return {
        name,
        age
    };
}

const person = createPerson("Alice", 25);

// 5. Object spread syntax
const base = { name: "Alice" };
const person = { ...base, age: 25 };

// 6. From JSON
const person = JSON.parse('{"name":"Alice","age":25}');

// 7. Creating from entries
const person = Object.fromEntries([
    ["name", "Alice"],
    ["age", 25]
]);

