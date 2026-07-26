function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const genN = numbers();

console.log(genN.next()); // { value: 1, done: false }
console.log(genN.next()); // { value: 2, done: false }
console.log(genN.next()); // { value: 3, done: false }
console.log(genN.next()); // { value: undefined, done: true }


function* greet() {
    console.log("Start");
    yield "Hello";

    console.log("Middle");
    yield "World";

    console.log("End");
}

const gen = greet();

console.log(gen.next());
// Start
// { value: "Hello", done: false }

console.log(gen.next());
// Middle
// { value: "World", done: false }

console.log(gen.next());
// End
// { value: undefined, done: true }
