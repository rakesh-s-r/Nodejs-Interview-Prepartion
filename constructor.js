// Constructor function is used to create an object in JS
function Person(name, age) {
    this.name = name;
    this.age = age;
}

person = new Person("John", 28);
console.log(person);


class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

emp = new Employee("Michel", 30);
console.log(emp);