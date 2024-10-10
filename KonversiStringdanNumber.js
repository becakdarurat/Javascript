// Konversi String dan Number

// Problem if you not Konversi tipe data
const value1 = "1";
const value2 = 1;
const sum = value1 + value2;
console.log(sum);

// Konveri string to bilangan bulat 
const nilaiBulat = parseInt("1");
console.log(nilaiBulat);

// Konveri string to bilangan bulat Int
const nilaiFloat = parseFloat("1.1");
console.log(nilaiFloat);

// Konveri string to bilangan Number
const nilaiNumber = Number("2.2");
console.log(nilaiNumber);

// Konversi of Number to String
const a = 1;
const b = 2;
const total = a.toString() + b.toString();
console.log(total);

// Kode : NaN
console.log(`${parseInt("Salah")}`);
console.log(`${parseFloat("1.1Text")}`);

// Number() tidak mentolerir kesalahan pada data
console.log(`${Number("1.1ups")}`);
console.log(`${Number("1x")}`);
console.log(`${Number("Bukan Number")}`);



