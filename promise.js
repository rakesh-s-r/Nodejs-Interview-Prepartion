const division = (up, down) => {
    try {
        if (down == 0) {
            throw new Error("Exception");
        }
        return up / down;
    } catch (e) {
        console.log("Error ", e);
        return 0;
    }
}

console.log(division(1, 2));
console.log(division(2, 0));