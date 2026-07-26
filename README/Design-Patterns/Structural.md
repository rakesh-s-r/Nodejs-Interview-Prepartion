# Structural Patterns – How objects are organized and combined.

1. Module Pattern
   Encapsulates private variables and exposes only required methods.

```
const Counter = (() => {
  let count = 0;

  return {
    increment() {
      count++;
    },

    getCount() {
      return count;
    }
  };
})();

Counter.increment();

console.log(Counter.getCount()); // 1
```

2. Decorator Pattern
   Adds new functionality to an object without modifying its original structure.

```
function Coffee() {
  return {
    cost: 5
  };
}

function addMilk(coffee) {
  coffee.cost += 2;
  return coffee;
}

let coffee = Coffee();
coffee = addMilk(coffee);
console.log(coffee.cost); // 7

```

3. Adapter Pattern
   Allows incompatible interfaces to work together.

```
class OldPayment {
  pay(amount) {
    console.log(`Paid ${amount}`);
  }
}

class PaymentAdapter {
  constructor(payment) {
    this.payment = payment;
  }

  makePayment(amount) {
    this.payment.pay(amount);
  }
}

const adapter = new PaymentAdapter(new OldPayment());
adapter.makePayment(100);
```
