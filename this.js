// Kata kunci This
const person = {
    name : `Sofyan Tanjung`,
    sayHello : function (value) {
        console.log(`Hello ${value} My name is ${this.name}`)
    },
}
person.sayHello(`Eko`);
