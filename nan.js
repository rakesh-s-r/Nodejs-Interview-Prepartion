// NaN is a not a number, it false for all legal number 
console.log(isNaN("Hello"))  // Returns true
console.log(isNaN(345))   // Returns false
console.log(isNaN('1'))  // Returns false, since '1' console.log(is converted to Number type which results in 0 ( a number)) 
console.log(isNaN(true)) // Returns false, since true converted to Number type results in 1 ( a number)
console.log(isNaN(false)) // Returns false
console.log(isNaN(undefined)) // Returns true
