// Function Generator
function* createNames() {
    yield "Sofyan";
    yield "Tanjung";
    yield "Sibolga";
}

const names = createNames();
for (const element of names) {
    console.log(element);
}

// Function Generator Kompleks
function* buatGanjil(value) {
    for (let i = 0; i <= value; i++) {
        if ( i % 2 === 1 ) console.log(`Yield ${i}`); yield i;
    }       
}
const angkaGanjil = buatGanjil(100);

console.log(angkaGanjil.next().value);
console.log(angkaGanjil.next().value);
console.log(angkaGanjil.next().value);
console.log(angkaGanjil.next().value);


// for (const angka of angkaGanjil) {
//     console.log(angka);
    
// }
