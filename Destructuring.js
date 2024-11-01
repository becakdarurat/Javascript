// Destructuring
function array() {
    let names = [`Eko`, `Kurniawan`, `Khannedy`, `Budi`, `Joko`, `Sofyan Tanjung`];
    // let firstName = names[0];
    // let middleName = names[1];
    // let lastName = names[2];
    const [firstName, middleName, lastName, ...others] = names;

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
    console.log(others);
}
array();



function object(){
// Destructuring di Object
    const person = {
        firstNamee: `Sofyan`,
        lastNamee: `Tanjung`,
        address: {
            street: `Jalan Murai`,
            country: `Indonesia`,
            city: `Sibolga`,
        },
        hobby: `Gym,Lari,Badminton`,
        channelBelajar: `Programmer Zaman Now`,
    }

    // const namaPertama = person.firstName;
    // const namaKedua = person.lastName;
    const { firstNamee, lastNamee, ...lainnya } = person;
    console.log(firstNamee,lastNamee, lainnya);
}
object();

{
    // destructuring di function
    function displayPerson({firstName, middleName, lastName}){
        console.log(firstName);
        console.log(middleName);
        console.log(lastName);
    }

    const person = {
        firstName: `Sofyan`,
        middleName: `Pian`,
        lastName: `Tanjung`
    }
    displayPerson(person);

    // Destructuring parameter array
    function sum([first, second]) {
        return first + second;
    }
    console.info(sum([10,10]));
    console.info(sum([20,10]));
    
}

{
    // Kode Default value destructuring
    const names = [`Sofyan`, `Tanjung`];
    const [firstName, middleName, lastName = `Eko Kurniawan`] = names;

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

{
    // Menggunakan nama variable lain : destructuring
    const person = {
        firstName: `Sofyan`,
        middleName: `Pian`,
        lastName: `Tanjung`
    }
    const {
        firstName: namaDepan,
        middleName: namaTengah = `Sofyan Tanjung`,
        lastName: namaAkhir } = person;
        console.log(namaDepan);
        console.log(namaTengah);
        console.log(namaAkhir);
}