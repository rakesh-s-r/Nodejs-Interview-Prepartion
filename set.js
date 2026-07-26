// SET
set = new Set([1]);
set.add(2);
set.add(3);
let a = { a: 1 };
set.add(a)
a = null;

for (const s of set) {
    console.log(s);
}
set.forEach(value => console.log(value));

set.delete(a)

// WeakSet only support object and not for, forEach support
// The main purpose of WeakSet is memory management.
let user1 = { name: "Alice" };
const ws1 = new WeakSet();
ws1.add(user1);
user1 = null;
console.log(ws1.has(user1)); // true
// ws.add("1"); // TypeError
