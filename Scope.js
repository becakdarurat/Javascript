// Global Scope
let counter = 0;

function hitMe() {
    // Local scope function hitMe
    counter++; // we can access
}

hitMe();
hitMe();
console.log(counter);

// Nested function scope
function firstName() {
    let firstVariable = `First`;
    
    function second() {
        console.log(firstVariable); // can access local sope first function
    }
    
    second();
}

firstName();
