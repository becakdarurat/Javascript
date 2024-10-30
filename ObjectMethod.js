// Method atau function di dalam Object
function sayHello(name) {
    console.log(`Hello ${name}`);
}
const person = {
    name : `Sofyan Tanjung`,
    sayHello : sayHello,
}

person.sayHello(`Sofyan`);

// Menambah method / function ke object
person.fungsi = e => console.log(`ini adalah ${e}`);
person.fungsi(`fungsi`);
console.log(typeof(person));

