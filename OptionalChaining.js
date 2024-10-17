// Optional Chaining
// const country = person.address.country;

// programnya berhenti di country karena terjadi error
// console.log(country);

// Kode : Pengecekan menggunakan if 
let person = {};

let say;
if ( person.address !== undefined && person.address !== null ) { 
    say = person.address.country;
}

console.info(say);

// Kode : Menggunakan Optional Chaining
let people = {
    address: {
        country: "Indonesia",
    }
};
const another = people?.address?.country;
console.log(another);



