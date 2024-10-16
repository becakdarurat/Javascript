// Operator In
const person = {
    firstName : "Sofyan",
    lastName : "Tanjung",
    country : undefined,
};

const result = "firstName" in person;
console.log(result);

if ( "country" in person ) { 
    console.log(`Hello ${person.country}`);
 } else { 
    console.log(`Hello`);
};

const aray = ["satu", "dua"];
const nilaiArray = 0 in aray;
console.log(nilaiArray);
