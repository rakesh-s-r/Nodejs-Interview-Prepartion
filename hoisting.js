"use strict";

hoistedVar = 2;
console.log(hoistedVar); // Hoisted applicable to only var for let & const it through reference error
var hoistedVar; // by default declaration moves to top

// hoistedVar2 = 10;
// console.log(hoistedVar2); // Throws error
// let hoistedVar2;

// Hoisting takes place in the local scope as well
(() => {
    x = 33;
    console.log(x);
    var x;
})();

variable = 3;
console.log(variable); // Throws variable not defined


