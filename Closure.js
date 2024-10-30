// Closure
function createAdder(value) {
    const owner = `Sofyan Tanjung`;
    function add(param) {
        console.log(owner);
        return value + param;
    }
    return add;
}

const addTwo = createAdder(4);
console.log(addTwo(10));
console.log(addTwo(20));
