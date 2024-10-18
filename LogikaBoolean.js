// Operator Logika non Boolean FALSEY
console.log(`Hello` || '');
console.log("" || []);
console.log(`0` || `NOL`);
console.log(`0` || "NOL");
console.log(null || `NULL`);
console.log(undefined || `UNDEFINED`);

// Operator Logika non Boolean THRUTY
console.log(`Hello` && '');
console.log("" && []);
console.log(`0` && `NOL`);
console.log(`0` && "NOL");
console.log(null && `NULL`);
console.log(undefined && `UNDEFINED`);

// Contoh penggunaannya
const person = {
    firstName : "",
    lastName : "Sibolga",
};
const nama = person.firstName || person.lastName;
console.log(nama);





