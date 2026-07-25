// JS is always a pass by value
// for primitive is pass by value for non-primitive pass by reference

// Variable examples
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20


let person1 = {
    name: "Alice"
};
let person2 = person1;
person2.name = "Bob";
console.log(person1.name); // Bob
console.log(person2.name); // Bob

/**
 *  person1 ---\
                \
                ---> { name: "Alice" }
                /
    person2 ---/
 */





// Function examples
function change(obj) {
    obj.name = "Charlie";
}
let user = { name: "Alice" };
change(user);
console.log(user); // Charlie

// in this case is different Reassigning obj only changes the local variable. It doesn't affect user.
function change(obj) {
    obj = { name: "David" };
}
let user1 = { name: "Alice" };
change(user1);
console.log(user1.name); // Alice