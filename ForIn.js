// For in untuk mengiterasi data yang ada di array dan object
const person = {
    firstName: "Eko",
    middleName: "Kurniawan",
    lastName: "Khannedy"
};

for (const property in person) {
    console.log(`Property ${property} : ${person[property]}`);
}

const country = ["Indonesia", "Belanda", "Malaysia", "Jepang"];
for (const negara in country) {
    console.log(`Index Array : ${negara}`);
}