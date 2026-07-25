// High order function

function doSomething(fn) {
    fn();
}

doSomething(function () { console.log("printing logs") })


function add() {
    return function add(a, b) {
        return a + b;
    }
}

const fn = add();
console.log(fn(1, 2))