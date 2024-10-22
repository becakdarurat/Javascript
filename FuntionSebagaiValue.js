// Function sebagai value 
function sayHello(name) {
    console.log(`Hello ${name}`);
}

let say = sayHello;
sayHello(`Sofyan`);
say(`Budi`);

// Function di parameter
function giveMeName(callback) {
    callback(`Pian`); // sayHello(`Pian`);
}
giveMeName(sayHello);
giveMeName(say);