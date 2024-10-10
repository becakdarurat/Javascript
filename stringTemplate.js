// String Template
const template = `Name : `;
console.log(template);

// Kode : mengambil variable
const nama = "Sofyan Tanjung";
const templata = `Name : ${nama}`;
console.log(templata);

// Kode : mengambil variable lengkap
const namaLengkap = "Eko Kurniawan Khannedy";
const namaPertama = "Eko";
const namaTengah = "Kurniawan";
const namaAkhir = "Khannedy";
const lengkap = `Nama Lengkap ${namaPertama} ${namaTengah} ${namaAkhir}`;
console.log(lengkap);

// Kode : Expression di String Template
const country = "Indonesia";
const value = 80;

const hasil =  `Negara : ${country}. Lulus : ${80 > 75}`;
console.log(hasil);

// Multiline String
let multiLineString = `
    Nama saya adalah Sofyan Tanjung
    Hello World
    haha haha
    Test ah
`;
console.log(multiLineString);


