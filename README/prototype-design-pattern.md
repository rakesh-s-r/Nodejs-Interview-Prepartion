# Prototype Design Pattern

The Prototype Design Pattern is a creational design pattern that creates new objects by copying (cloning) an existing object instead of creating a new one from scratch.

This pattern is useful when creating an object is expensive, complex, or time-consuming.

```
const car1 = {
  brand: "Tesla",
  color: "Red",
  engine: "Electric"
};

const car2 = {
  brand: "Tesla",
  color: "Red",
  engine: "Electric"
};

const car3 = {
  brand: "Tesla",
  color: "Red",
  engine: "Electric"
};
```

```
const carPrototype = {
  brand: "Tesla",
  color: "Red",
  engine: "Electric"
};

const car1 = { ...carPrototype };
const car2 = { ...carPrototype };
const car3 = { ...carPrototype };
```
