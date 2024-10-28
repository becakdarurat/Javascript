// Arrow Function in parameter
function giveMeName(callback) {
    callback(`Sofyan`);
}

giveMeName(name => console.info(`Hello ${name}`));