// call, apply & bind methods are pre-defined functions in js

// Normal object and function
const person = {
    name: "John",
    getName: function () {
        console.log("My name is ", this.name);
    }
}

person.getName()


// WORKING EXAMPLES
const bank = {
    name: "SBI",
    getEmployeesCount: function (count, place) {
        console.log("Number of employees of bank", this.name, "is", count, "at", place);
    }
}

// call
const hdfc = { name: "HDFC" };
bank.getEmployeesCount.call(hdfc, 40, "Bangalore");

// apply
bank.getEmployeesCount.apply(hdfc, ["190", "Bangalore"]);

// bind
const hdfcBank = bank.getEmployeesCount.bind(hdfc);
hdfcBank();