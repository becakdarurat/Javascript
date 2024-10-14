// Deklarasi Object kosong
let Person = {};

// Menambah Object
Person["nama"] = "Sofyan Tanjung";
Person["Alamat"] = "Sibolga";
Person["country"] = "Indonesia";
Person["Usia"] = 23;

// Menghapus Object
delete Person["country"];
console.table(Person);

// Membuat Object dengan property
const a = {
    firstName : "Sofyan",
    lastName : "Tanjung",
    fullName : "Sofyan Tanjung"
};

console.table(a);

const b = {
    "ejaan huruf" : "Belajar lagi"
}
console.table(`Abjad Huruf ${b["ejaan huruf"]}`);
console.table(b);

// Mengaksess Property Object
const car = {
    warna : "Kuning",
    merk : "Mercedez",
    turbo : "aktif",
};

console.info(`warna ${car.warna}`);
console.info(`warna ${car.merk}`);
console.info(`warna ${car.turbo}`);

