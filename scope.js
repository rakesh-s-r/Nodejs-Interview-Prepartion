var a = 10;

function madeChanges() {
    var a = 20;
    for (var a = 30; a <= 31; a++) {
        console.log("inside loop", a); // block scope only support let and const
        var b = 40;
    }
    console.log("inside fn", a);
    console.log("inside fn b", b);
}
madeChanges()
console.log(a);
// based on above observation var are global and functional scope not block scope
