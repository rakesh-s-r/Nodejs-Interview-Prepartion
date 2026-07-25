// Immediately Invoked Function (IIFE or IIFY)
(function () {
    console.log("Hello")
})();

((a) => {
    console.log("Good Morning", a);
})(1);