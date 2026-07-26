// Closure is ability of function remember variables and fn 
// that are declared outer scope
function closure() {
    let person = { name: "John" };
    return function () {
        console.log("person name is ", person.name);
    }
}

const person = closure();
person();