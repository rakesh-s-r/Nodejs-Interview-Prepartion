# Behavioral Design Patterns - How objects communicate and share responsibilities.

1. Observer Pattern
   One object notifies multiple objects when something changes.

```
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log("Received:", data);
  }
}

const subject = new Subject();
subject.subscribe(new Observer());
subject.notify("New message");

```

2. Strategy Pattern
   Allows selecting different algorithms at runtime.

```
const paymentMethods = {
  card(amount) {
    console.log(`Paid ${amount} using card`);
  },

  paypal(amount) {
    console.log(`Paid ${amount} using PayPal`);
  }
};

function checkout(method, amount) {
  paymentMethods[method](amount);
}

checkout("card", 100);
```

3. Command Pattern
   Encapsulates a request as an object.

```
class SaveCommand {
  execute() {
    console.log("Saving file");
  }
}

const command = new SaveCommand();

command.execute();

```

10. Iterator Pattern
    Provides a way to access elements sequentially.

```
const numbers = [10, 20, 30];
const iterator = numbers[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());

```
