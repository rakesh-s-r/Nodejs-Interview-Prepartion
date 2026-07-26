JavaScript design patterns are reusable solutions to common software design problems. They provide proven ways to structure code so it is more maintainable, scalable, and easier to understand.

# Creational design pattern: how objects are created

1. Singleton Pattern
   Ensures that only one instance of an object exists throughout the application.

```
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    this.connection = "Connected";
    Database.instance = this;
  }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true
```

2. Factory Pattern
   Creates objects without exposing the object creation logic.

```
   function UserFactory(type) {
    if (type === "admin") {
        return {
            role: "Admin",
            permissions: ["read", "write"]
        };
    }

    if (type === "guest") {
        return {
            role: "Guest",
            permissions: ["read"]
        };
    }
}

const user = UserFactory("admin");
console.log(user);
```

3. Constructor/function constructor Pattern
   Uses constructor functions or classes to create objects.

```
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person = new Person("John");
```
