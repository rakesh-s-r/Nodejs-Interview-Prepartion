
var obj1 = {
    valueOfThis: function () {
        console.log(this);
    }
}

var obj2 = {
    valueOfThis: () => {
        console.log(this);
    }
}

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object