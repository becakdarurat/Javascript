// Recursive function dengan for / perulangan
function factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;    
    }
    console.log(result);
    return result;
}

factorial(5);

// Recursive function dengan function
function factorialRecursive(value) {
    if ( value === 1 ) { 
        return 1;
     } else { 
        return value * factorialRecursive(value - 1);
    };
}
console.log(factorialRecursive(5));


